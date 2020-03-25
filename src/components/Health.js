import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import NavBar from './Navbar';
import {loadCSS} from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import CheckIcon from '@material-ui/icons/Check';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > .fa': {
      margin: theme.spacing(2),
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
}));

export default function Health() {
  const classes = useStyles();

  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css')
    );
  }, []);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <NavBar />
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <a href="https://www.cdc.gov/" target="_blank">
          <List>
            <ListItem button>
              <div className={classes.root}>
                <ListItemIcon>
                  <Icon className="fas fa-ribbon" />
                </ListItemIcon>
                <ListItemText primary="CDC" />
              </div>
            </ListItem>
          </List>
        </a>
        <Divider />
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public"
          target="_blank"
        >
          <List>
            <ListItem button>
              <div className={classes.root}>
                <ListItemIcon>
                  <Icon className="fas fa-hand-paper" />
                </ListItemIcon>
                <ListItemText primary="Do The Five" />
              </div>
            </ListItem>
          </List>
        </a>
        <Divider />
        <a
          href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
          target="_blank"
        >
          <List>
            <ListItem button>
              <div className={classes.root}>
                <ListItemIcon>
                  <Icon className="fas fa-medkit" />
                </ListItemIcon>
                <ListItemText primary="WHO" />
              </div>
            </ListItem>
          </List>
        </a>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="subtitle1">Be Overprepared</Typography>
        <Typography paragraph>JIEJIFJIEFJIE</Typography>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </React.Fragment>
            }
          />
        </ListItem>{' '}
        <Typography variant="h4">What is the Coronavirus(Covid-19)?</Typography>
        <Typography variant="caption">
          COVID-19 is a respiratory disease caused by a new coronavirus
          (SARS-CoV-2) not previously seen in humans. An outbreak of COVID-19
          began in late 2019 in Wuhan, a city in China’s Hubei province. To
          date, cases of COVID-19 have spread around the world, making the
          condition one of the most rapidly emerging infectious diseases.
          COVID-19 can cause fever, cough, and shortness of breath. This virus
          is spread through human contact, much like the cold or flu. There is
          not yet a vaccine or medication approved to treat it. The virus has
          been identified in over 100,000 people across the globe. While most
          people recover from COVID-19, it can be life-threatening.
        </Typography>
        <Typography variant="h4">Symptoms to lookout for</Typography>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <CheckIcon />
          </ListItemIcon>
          <ListItemText
            primary="Fever, coughing, shortness of breath"
            secondary={
              <React.Fragment>
                {
                  ' — These symptoms may take up to 2-14 days to appear after exposure'
                }
              </React.Fragment>
            }
          />
        </ListItem>
      </main>
    </div>
  );
}

// export default Health;

//       <a
//         href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
//         target="_blank"
//       >
//         <h2>WHO</h2>
//       </a>
