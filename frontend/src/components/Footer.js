import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: 'white' }} align="center">
      {'Copyright © '}
      <Link color="inherit">CDC, IITJ</Link> {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const footers = [
  {
    title: 'Downloads',
    description: [
      ['JAF', '#'],
      ['IAF', '#'],
      ['Brochure', '#'],
    ],
  },
  {
    title: 'Quick Links',
    description: [
      ['Placement registration link', '#'],
      ['Placement Statistics', '#'],
      ['Meet our Team', '#'],
    ],
  },
  {
    title: 'External Links',
    description: [
      ['IIT Jodhpur', '#'],
      ['Student Gymkhana', '#'],
    ],
  },
];

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: '#212121',
    padding: theme.spacing(3, 0),
  },
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
}));

export default function Footer(props) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Container justify="space-evenly" maxWidth="lg">
        <Container
          justify="space-evenly"
          maxWidth="lg"
          component="footer"
          className={classes.footer}
        >
          <Grid container spacing={4}>
            <Grid item xs={6} sm={3}>
              <Typography variant="h6" align="center" gutterBottom>
                <ul align="left">
                  <li>
                    <Typography style={{ color: 'white' }} variant="h6">
                      <b>CDC IITJ</b>
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      Indian Institute of Technology Jodhpur
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      NH 65 Nagaur Road
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      Karwar 342037, Jodhpur District
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      <b>Phone:</b> +91 291 2801154
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      <b>Phone:</b> +91 291 2801153
                    </Typography>
                    <Typography variant="subtitle1" style={{ color: 'white' }}>
                      <b>Email:</b> placement@iitj.ac.in
                    </Typography>
                  </li>
                </ul>
              </Typography>
            </Grid>
            {footers.map((footer) => (
              <Grid item xs={6} sm={3} key={footer.title}>
                <Typography
                  style={{ color: 'white' }}
                  variant="h6"
                  gutterBottom
                >
                  <b>{footer.title}</b>
                </Typography>
                <ul>
                  {footer.description.map((item) => (
                    <li key={item}>
                      <Link
                        href={item[1]}
                        variant="subtitle1"
                        style={{ color: 'white' }}
                      >
                        {item[0]}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
          <Typography variant="h6" align="center" gutterBottom>
            <div>
              <Tooltip arrow title="facebook">
                <IconButton
                  href="https://www.facebook.com/SPC.IITJ/"
                  variant="outlined"
                  style={{ color: 'white' }}
                >
                  <FacebookIcon />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="Linkedin">
                <IconButton
                  href="#"
                  style={{ color: 'white' }}
                  variant="outlined"
                >
                  <LinkedInIcon style={{ color: 'white' }} />
                </IconButton>
              </Tooltip>
              <Tooltip arrow title="GitHub">
                <IconButton
                  href="https://github.com/devlup-labs/cdc-portal"
                  variant="outlined"
                  style={{ color: 'white' }}
                >
                  <GitHubIcon />
                </IconButton>
              </Tooltip>
            </div>
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            style={{ color: 'white' }}
            component="p"
          >
            Designed & Maintained by Career Development Cell, IIT Jodhpur
          </Typography>
          <Copyright />
        </Container>
      </Container>
    </footer>
  );
}
