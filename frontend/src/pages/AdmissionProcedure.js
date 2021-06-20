import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 'auto',
    maxWidth: 900,
    border: 'black',
  },
  tablewrapper: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'center',
  },
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 15,
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    textAlign: 'center',
    width: 'auto',
    fontsize: '1rem',
    color: '#000',
  },
  text: {
    fontsize: '1rem',
    color: '#000',
  },
}));

function createData(name, calories, points) {
  return { name, calories, points };
}

const rows = [
  createData(
    'B.Tech.,B.E. or B.Sc. (Engineering)',
    'At least 60% marks or At least 6.5/10 Cumulative Performance Index (CPI) or Cumulative Grade Point Average (CGPA)',
    'Valid GATE score'
  ),
  createData(
    'M.Sc. in Sciences',
    'At least 70% marks or At least 7/10 Cumulative Performance Index (CPI) or Cumulative Grade Point Average (CGPA)',
    'Valid GATE score'
  ),
  createData(
    'B.Tech. from any of the IITs',
    'CPI or CGPA 8/10 or above',
    'The requirement of valid GATE score is exempted'
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '30px' }} item xs={12}>
            <Paper className={classes.paper}>
              <Typography component="h5" variant="h5" style={{ fontSize: 30 }}>
                Admission Procedure
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                B.TECH
              </Typography>
              <Typography className={classes.text}>
                Admissions to B.Tech. Programs are made once a year (in July)
                through the all-India level Joint Entrance Examination (JEE)
                conducted by IITs. The procedures and other requirements for
                admission are specified in the JEE Information Brochure brought
                out every year.
                <Link href="http://iitj.ac.in/admission/btech.php?id=eligibility">
                  Read More
                </Link>
              </Typography>
              <br></br>
              <br></br>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                M.TECH
              </Typography>
              <Typography className={classes.text}>
                The eligibility criteria prescribed below are the absolute
                minimum. The Admissions Committee may prescribe requirements
                over and above these. <Link href="#">Read More</Link>
              </Typography>
              <TableContainer
                className={classes.tablewrapper}
                component={Paper}
                elevation={0}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>QUALIFYING DEDREE</TableCell>
                      <TableCell align="left">
                        MARKS OBTAINED IN QUALIFYING DEGREE
                      </TableCell>
                      <TableCell align="left">OTHER REQUIREMENTS</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="left">{row.calories}</TableCell>
                        <TableCell align="left">{row.points}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <br></br>
              <br></br>
              <Typography
                component="h4"
                style={{ fontSize: 20, fontWeight: 'bold' }}
              >
                M.Sc
              </Typography>
              <Typography className={classes.text}>
                Admissions to M.Sc Programs are made once a year (in July)
                through the all-India level Joint Admission Test for Masters
                (JAM) conducted by IITs. The eligibility criteria prescribed
                below are the absolute minimum. However, the procedures and
                other requirements for admission are specified in the JAM
                Information Brochure brought out every year.
                <Link href="#"> Read More</Link>
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
