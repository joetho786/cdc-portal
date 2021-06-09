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

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 'auto',
    maxWidth: 700,
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
    marginBottom: 10,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width: 'auto',
    color: theme.palette.text.secondary,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'left',
    width: 'auto',
    color: theme.palette.text.secondary,
  },
}));

function createData(name, calories, points) {
  return { name, calories, points };
}

const rows = [
  createData('A*', 'Exceptional', 10),
  createData('A', 'Outstanding', 10),
  createData('A-', 'Excellent', 9),
  createData('B', 'Very Good', 8),
  createData('B-', 'Good', 7),
  createData('C', 'Average', 6),
  createData('C-', 'Below Average', 5),
  createData('D', 'Marginal', 4),
  createData('E', 'Poor', 2),
  createData('F', 'Fail', 0),
  createData('I', 'Incomplete', '-'),
  createData('S', 'Satisfactory in Course', '-'),
  createData('X', 'Thesis Continuation', '-'),
  createData('U', 'Unsatisfactory', '-'),
  createData('W', 'Withdrawn', '-'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <Grid container spacing={3}>
          <Grid style={{ marginTop: '10px' }} item xs={12}>
            <Paper className={classes.paper}>
              <Typography component="h5" variant="h5" style={{ fontSize: 30 }}>
                Grade System
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Typography component="h5" variant="h5" style={{ fontSize: 16 }}>
                The evaluation system in the Institute is based on the
                Cumulative Grade Point Average (CGPA) calculated on a scale of
                10. The grading policy is followed with the following
                distribution of points:
              </Typography>
              <TableContainer
                className={classes.tablewrapper}
                component={Paper}
                elevation={0}
              >
                <Table className={classes.table} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>GRADES</TableCell>
                      <TableCell align="left">DENOTION</TableCell>
                      <TableCell align="left">POINTS</TableCell>
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
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
