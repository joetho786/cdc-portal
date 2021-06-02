import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import Footer from '../../src/components/Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: 10,
    [theme.breakpoints.down(460)]: {
      padding: 2,
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    color: theme.palette.text.secondary,
  },
}));

const PlacementStatistics = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [description, setDescription] = useState('');
  const [year, setYear] = useState('');
  const [overall, setOverall] = useState('');
  const [overallaveragesalary, setOverallAverageSalary] = useState('');
  const [program, setProgram] = useState('');
  const [val, setdata] = useState([]);
  const [percentage, setPercentage] = useState([]);
  // const [arr, setArr] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(
          'https://spreadsheets.google.com/feeds/list/1qs3XihGRTv7m2s8upOQgz2GsonzlWxwyKdAJgOpyLwA/1/public/values?alt=json'
        );
        setdata(res.data.feed.entry);
        setDescription(res.data['feed']['entry'][0]['gsx$text']['$t']);
        setYear(res.data['feed']['entry'][0]['gsx$year']['$t']);
        setProgram(res.data['feed']['entry'][0]['gsx$program']['$t']);
        setOverall(res.data['feed']['entry'][0]['gsx$overall']['$t']);
        setOverallAverageSalary(
          res.data['feed']['entry'][0]['gsx$overallaveragesalary']['$t']
        );
        // console.log(res.data['feed']['entry']);
        // console.log(res.data.feed.entry);
        // console.log(res.data['feed']['entry']);
        // console.log(res.data['feed']['entry'][0]);
        // console.log(res.data['feed']['entry'][0]['gsx$program']);
        // console.log(res.data['feed']['entry'][0]['gsx$program']['$t']);
      } catch (err) {
        console.log(err);
      }
    };
    fetchdata();
    setLoding(false);
  }, []);
  var arr = [];
  for (var key in val) {
    if (key !== '0') {
      arr.push({ key: val[key] });
      percentage.push(val[key]['gsx$percentage']['$t']);
    }
  }
  // useEffect(() => {
  //   const setNum = () => {
  //     var tempArr = [];
  //     var mainArr = [];
  //     try {
  //       for (var key in val) {
  //         if (key !== '0') {
  //           mainArr.push({ key: val[key] });
  //           tempArr.push(val[key]['gsx$percentage']['$t']);
  //         }
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //     setPercentage(tempArr);
  //     setArr(mainArr);
  //   };
  //   setNum();
  // }, [val]);
  // for (var key in val) {
  //   if (key !== '0') {
  //     arr.push({ key: val[key] });
  //     percentage.push(val[key]['gsx$percentage']['$t']);
  //   }
  // }
  // console.log('val[0]');
  // console.log(val[0]);
  // console.log(arr[0]['key']['gsx$text']['$t']);
  // console.log({ description });
  // setDescription(val['0']['gsx$text']['$t']);
  // setProgram(arr['0']['key']['gsx$program']['$t']);
  // setYear(arr['0']['key']['gsx$year']['$t']);
  // setOverall(arr['0']['key']['gsx$overall']['$t']);
  // setOverallAverageSalary(arr['0']['key']['gsx$overallaveragesalary']['$t']);
  // // console.log(val);
  // // console.log(arr);
  // console.log('val[0]');
  // console.log(val);
  // setDescription(val[0]['gsx$text']);
  // console.log(description);
  // setYear(data[0].gsx$year);
  // setProgram(data[0].gsx$program);
  // setOverall(data[0].gsx$overall);
  // setOverallAverageSalary(data[0].gsx$overallaveragesalary);
  console.log(percentage);
  const PrepareData = () => {
    let list = [];
    arr.map((Data) => {
      return list.push(
        <TableRow key={Data['key']['gsx$branch']['$t']}>
          <TableCell component="th" scope="row">
            {Data['key']['gsx$branch']['$t']}
          </TableCell>
          <TableCell align="left">
            {Data['key']['gsx$percentage']['$t']}%
          </TableCell>
        </TableRow>
      );
    });
    return list;
  };
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid style={{ marginTop: '10px' }} item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    variant="h5"
                    style={{ fontSize: 30, textAlign: 'center' }}
                  >
                    Placement Statistics
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    variant="h5"
                    style={{ fontSize: 16 }}
                  >
                    {description}
                  </Typography>
                  <TableContainer
                    className={classes.tablewrapper}
                    component={Paper}
                    elevation={0}
                  >
                    <Table className={classes.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>{program}</TableCell>
                          <TableCell align="left">{year}</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {PrepareData()}
                        <TableRow key="overall">
                          <TableCell component="th" scope="row">
                            Overall
                          </TableCell>
                          <TableCell align="left">{overall}%</TableCell>
                        </TableRow>
                        <TableRow key="overallAvg">
                          <TableCell component="th" scope="row">
                            Overall Average Salary
                          </TableCell>
                          <TableCell align="left">
                            {overallaveragesalary}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default PlacementStatistics;
