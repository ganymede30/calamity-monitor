import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props
    };
  }

  async componentDidMount() {
    await fetch("https://coronavirus-tracker-api.herokuapp.com/v2/latest?source=jhu")
      .then(res => res.json())
      .then(chartData =>
        this.setState({
          labels: ["Confirmed Cases", "Deaths"],
          datasets: [
            {
              barThickness: 50,
              label: "Total World Population Infected",
              data: [chartData.latest.confirmed, chartData.latest.deaths],
              backgroundColor: ["rgb(14, 14, 240)", "rgb(240, 14, 14)"]
            }
          ]
        })
      );
  }

  render() {
    return (
      <Bar
        data={this.state}
        width={300}
        height={170}
        options={{
          responsive: false,
          legend: {
            display: false
          }
        }}
      />
    );
  }
}

export default Chart;
