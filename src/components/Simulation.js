import React, {useState, useEffect} from 'react';
import * as d3 from 'd3';
import hexoid from 'hexoid';

const RADIUS = 5;

const Human = ({x, y, infected, dead, recovered}) => {
  let borderColour = 'rgb(146, 120, 226)';
  let fillColour = 'white';

  if (dead) {
    return null;
  }
  if (infected !== null) {
    borderColour = 'rgb(246, 102, 64)';
    fillColour = 'rgb(246, 102, 64)';
  } else if (recovered) {
    borderColour = 'rgba(146, 119, 227, 0.5)';
    fillColour = 'rgba(146, 119, 227, 0.5)';
  }

  return (
    <circle
      cx={x}
      cy={y}
      r={RADIUS}
      style={{fill: fillColour, stroke: borderColour, strokeWidth: 2}}
    ></circle>
  );
};

const Slider = ({label, value, setter, unit = '%', editable}) => {
  return (
    <p>
      {label}:{' '}
      {editable ? (
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={ev => setter(ev.target.value)}
          step={1}
        />
      ) : null}
      {value}
      {unit}
    </p>
  );
};

const createRow = ({cx, cy, width}) => {
  // maximum number of circles that can possibly fit
  const N = Math.floor(width / 15);

  // point scale evenly distributes something into given range
  const xScale = d3
    .scalePoint()
    .domain(d3.range(0, N))
    .range([cx - width / 2, cx + width / 2]);

  const row = d3.range(0, N).map(i => ({
    x: xScale(i),
    y: cy,
    key: hexoid(25)(),
    infected: null,
  }));

  return row;
};

const createPopulation = ({cx, cy, width, height}) => {
  const Nrows = Math.ceil(height / 15);

  //controls how high and low the SVG displays
  const yScale = d3
    .scalePoint()
    .domain(d3.range(0, Nrows))
    .range([cy - height / 2, cy + height / 2]);

  // how many circles to put. three arguments here: start, mid, end
  const widthScale = d3
    .scaleLinear()
    .domain([0, Nrows / 2, Nrows])
    .range([15, width, 15]);

  const rows = d3
    .range(0, Nrows)
    .map(i => createRow({cx, cy: yScale(i), width: widthScale(i)}));

  return rows.reduce((population, row) => [...population, ...row]);
};

const collision = pop => {
  const infected = pop.filter(p => p.infected !== null);

  const collisions = infected.map(person => {
    const subdvidedSpace = d3
      .quadtree()
      .extent([
        [-1, -1],
        [RADIUS * 2, RADIUS * 2],
      ])
      .x(d => d.x)
      .y(d => d.y)
      .addAll(
        // everyone not infected
        pop.filter(p => !p.infected).filter(p => p.key !== person.key)
      );

    const candidate = subdvidedSpace.find(person.x, person.y, RADIUS * 2);

    return candidate ? candidate : null;
  });

  return collisions.filter(p => p !== null);
};

const infectPeople = (
  population,
  touched,
  iterationCount,
  virality,
  reinfectability
) => {
  const touchedKeys = touched.map(p => p.key);

  return population.map(p => {
    if (touchedKeys.includes(p.key)) {
      if (p.recovered) {
        // this person previously recovered
        if (d3.randomUniform(0, 100)() < virality * (reinfectability / 100)) {
          return {
            ...p,
            infected: iterationCount,
            recovered: false,
          };
        } else return p;
      } else if (d3.randomUniform(0, 100)() < virality) {
        return {
          ...p,
          infected: iterationCount,
          recovered: false,
        };
      } else return p;
    } else return p;
  });
};

const peopleRecoverOrDie = (
  population,
  iterationCount,
  mortality,
  lengthOfInfection
) => {
  return population.map(p => {
    if (p.infected) {
      if (d3.randomUniform(0, 1)() < mortality / lengthOfInfection) {
        return {
          ...p,
          dead: true,
          infected: null, // dead people cannot infect others
        };
      } else if (iterationCount - p.infected > lengthOfInfection) {
        return {
          ...p,
          infected: null,
          recovered: true,
        };
      } else return p;
    } else return p;
  });
};

const pplMove = (pop, socialDistancing) => {
  const percentFormat = 1 - socialDistancing / 100;

  const random = d3.randomUniform(-3 * percentFormat, 3 * percentFormat);

  return pop.map(p =>
    p.dead
      ? p
      : {
          ...p,
          x: p.x + random(),
          y: p.y + random(),
        }
  );
};

const usePopulation = ({
  width,
  height,
  mortality,
  virality,
  lengthOfInfection,
  socialDistancing,
  reinfectability,
}) => {
  const [population, setPopulation] = useState(
    createPopulation({
      cx: width / 2,
      cy: height / 2,
      width: width - 15,
      height: height - 15,
    })
  );

  const [simulating, startSimulating] = useState(false);
  const [iterationCount, setIterationCount] = useState(0);

  const startSimulation = () => {
    const newPop = [...population];
    const person = newPop[Math.floor(Math.random() * newPop.length)];

    person.infected = 0;

    setPopulation(newPop);
    setIterationCount(0);
    startSimulating(true);
  };

  const stopSimulation = () => {
    startSimulating(false);
  };

  const iteratePopulation = timeElapsed => {
    const iterationCount = Math.floor(timeElapsed / 60);
    setPopulation(population => {
      let newPop = [...population];

      newPop = pplMove(newPop, socialDistancing);
      newPop = infectPeople(
        newPop,
        collision(newPop),
        iterationCount,
        virality,
        reinfectability
      );
      newPop = peopleRecoverOrDie(
        newPop,
        iterationCount,
        mortality / 100,
        lengthOfInfection
      );

      return newPop;
    });
    setIterationCount(iterationCount);
  };

  useEffect(() => {
    if (simulating) {
      const t = d3.timer(iteratePopulation);
      return () => t.stop();
    }
  }, [simulating]);

  return {
    population,
    startSimulation,
    stopSimulation,
    simulating,
    iterationCount,
  };
};

export const Simulation = ({
  width,
  height,
  defaultMortality = 4,
  defaultVirality = 50,
  defaultLengthOfInfection = 40,
  defaultSocialDistancing = 0,
  defaultReinfectability = 30,
}) => {
  const [mortality, setMortality] = useState(defaultMortality);
  const [virality, setVirality] = useState(defaultVirality);
  const [lengthOfInfection, setLengthOfInfection] = useState(
    defaultLengthOfInfection
  );
  const [socialDistancing, setSocialDistancing] = useState(
    defaultSocialDistancing
  );
  const [reinfectability, setReinfectability] = useState(
    defaultReinfectability
  );

  const {
    population,
    startSimulation,
    stopSimulation,
    simulating,
    iterationCount,
  } = usePopulation({
    width,
    height,
    mortality,
    virality,
    socialDistancing,
    lengthOfInfection,
    reinfectability,
  });

  return (
    <>
      <svg
        style={{
          width,
          height,
        }}
      >
        {population.map(p => (
          <Human {...p} />
        ))}
      </svg>
      <div>
        {simulating ? (
          <button style={{alignItems: 'center'}} onClick={stopSimulation}>
            Stop
          </button>
        ) : (
          <button style={{alignItems: 'center'}} onClick={startSimulation}>
            Start simulation
          </button>
        )}
      </div>
      <p>
        Population: {population.filter(p => !p.dead).length}, Infected:{' '}
        {population.filter(p => p.infected !== null).length}, Dead:{' '}
        {population.filter(p => p.dead).length}, Recovered:{' '}
        {population.filter(p => p.recovered).length}
      </p>
      {simulating ? <p>Iterations: {iterationCount}</p> : null}

      <Slider
        label="Social distancing"
        value={socialDistancing}
        setter={setSocialDistancing}
        editable={!simulating}
      />
      <Slider
        label="Mortality"
        value={mortality}
        setter={setMortality}
        editable={!simulating}
      />
      <Slider
        label="Virality"
        value={virality}
        setter={setVirality}
        editable={!simulating}
      />
      <Slider
        label="Reinfectability"
        value={reinfectability}
        setter={setReinfectability}
        editable={!simulating}
      />
      <Slider
        label="Length of infection"
        value={lengthOfInfection}
        setter={setLengthOfInfection}
        unit="steps"
        editable={!simulating}
      />
    </>
  );
};
