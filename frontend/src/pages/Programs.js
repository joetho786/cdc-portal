import React from 'react';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';

const useStyles = makeStyles((theme) => ({
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
    width: 'auto',
    color: 'rgb(0,0,0)',
    fontSize: '1rem',
  },
  text: {
    color: 'rgb(0,0,0)',
    fontsize: '1rem',
    textAlign: 'center',
  },
  table: {
    minWidth: 'auto',
    maxWidth: 'auto',
    border: 'black',
  },
  tablewrapper: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'left',
  },
  heads: {
    fontSize: '1rem',
    fontWeight: 'bold',
    color: 'rgb(0,0,0)',
    textAlign: 'center',
  },
}));

function createData(name, link) {
  return { name, link };
}

const btechrows = [
  createData(
    'B. Tech. (Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=12'
  ),
  createData(
    'B. Tech. (Mechanical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=15'
  ),
  createData(
    'B. Tech. (Electrical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=14'
  ),
  createData(
    'B. Tech. (Computer Science and Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=btech&dep=cse'
  ),
  createData(
    'B. Tech. (Artificial Intelligence and Data Science)',
    'https://cse.iitj.ac.in/index.php/undergraduate#b_ai'
  ),
  createData(
    'B. Tech. (Chemical Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=chemical'
  ),
  createData(
    'B. Tech. (Metallurgical and Materials Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=materials'
  ),
  createData(
    'B. Tech. (Civil and Infrastructure Engineering)',
    'https://iitj.ac.in/department/index.php?id=ug_program&dept=civil'
  ),
];

const mtechrows = [
  createData(
    'M. Tech. (Bioscience and Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=19'
  ),
  createData(
    'M. Tech. (Computer Science and  Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=20'
  ),
  createData(
    'M. Tech. (Artificial Intelligence)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=39'
  ),
  createData(
    'M. Tech. (Cyber Physical Systems)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=43'
  ),
  createData(
    'M. Tech. (Sensors and Internet of Things)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=44'
  ),
  createData(
    'M. Tech. (Data and Computational Science)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=45'
  ),
  createData(
    'M. Tech. (Advanced Manufacturing and Design)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=41'
  ),
  createData(
    'M. Tech. (Thermofluids Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=40'
  ),
  createData(
    'M. Tech. (Metallurgical and Material Design)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=21'
  ),
];

const mscrows = [
  createData(
    'M.Sc. (Chemistry)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=16'
  ),
  createData(
    'M.Sc. (Mathematics)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=17'
  ),
  createData(
    'M.Sc. (Physics)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=18'
  ),
];

const mscmtechrows = [
  createData(
    'Mathematics & Data Science',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=34'
  ),
];

const mtechphdrows = [
  createData(
    'M.Tech.-Ph.D. Dual Degree (Bioscience & Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=10'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Computer Science & Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=2'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Artificial Enfineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=1'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Communication Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=6'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Cyber Physical Systems)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=7'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Sensors and Internet of Things)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=8'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Data and Computational Sciences)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=9'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Metallurgical & Materials Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=11'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Design Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=5'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Advanced Manufacturing and Design)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&prog=3'
  ),
  createData(
    'M.Tech.-Ph.D. Dual Degree (Thermofluids Engineering)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=4'
  ),
];

const phdcorerows = [
  createData(
    'Ph.D. (Chemistry)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=chemistry'
  ),
  createData(
    'Ph.D. (Mathematics)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=maths'
  ),
  createData(
    'Ph.D. (Physics)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=physics'
  ),
];

const phdesrows = [
  createData(
    'Ph.D. (Biosciences and Bioengineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=biology'
  ),
  createData('Ph.D. (Computer Science and Engineering)', '#'),
  createData(
    'Ph.D. (Electrical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=ee'
  ),
  createData(
    'Ph.D. (Mechanical Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=me'
  ),
  createData(
    'Ph.D. (Metallurgical and Materials Engineering)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=mtech&dep=mt'
  ),
];

const phdintrows = [
  createData(
    'Ph.D. (AUV Technologies)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Cognitive Science)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Digital Humanities)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (IOT & Applications)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Quantum Information and Computation)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Smart Healthcare)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
  createData(
    'Ph.D. (Space Technologies)',
    'http://iitj.ac.in/academics/index.php?id=acad_program&&prog=phd'
  ),
];

const phdhumrows = [
  createData(
    'Ph.D. (Humanities & Social Sciences)',
    'http://iitj.ac.in/academics/index.php?id=curriculum&prog=phd&dep=hss'
  ),
];

const Programmes = () => {
  const classes = useStyles();
  const loading = false;

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid style={{ marginTop: '30px' }} item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h5"
                    variant="h5"
                    display="block"
                    width="500"
                    style={{ fontSize: 30, textAlign: 'center' }}
                  >
                    Programmes
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography
                    component="h4"
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                    }}
                  >
                    Academic Programs
                  </Typography>
                  <Typography className={classes.text}>
                    The Institute offers the following Academic Programs:
                  </Typography>
                  <br />
                  <TableContainer
                    className={classes.tablewrapper}
                    component={Paper}
                    elevation={0}
                  >
                    <Table className={classes.table} aria-label="simple table">
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Bachelor of Technology Programs
                        </TableRow>
                        {btechrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <br />
                      <br />
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Master of Technology Programs
                        </TableRow>
                        {mtechrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <br />
                      <br />
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Master of Science Programs
                        </TableRow>
                        {mscrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <br />
                      <br />
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Master of Science - Master of Technology Programs
                        </TableRow>
                        {mscmtechrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <br />
                      <br />
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Master of Technology - Doctor of Philosophy
                          (M.Tech.-Ph.D.) Dual Degree Programs
                        </TableRow>
                        {mtechphdrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                      <br />
                      <br />
                      <TableBody>
                        <TableRow className={classes.heads}>
                          Doctor of Philosophy Programs
                        </TableRow>
                        <br />
                        <Typography className={classes.text}>
                          Core Sciences
                        </Typography>
                        {phdcorerows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                        <br />
                        <Typography className={classes.text}>
                          Engineering Sciences
                        </Typography>
                        {phdesrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                        <br />
                        <Typography className={classes.text}>
                          Inter-disciplinary Areas
                        </Typography>
                        {phdintrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
                          </TableRow>
                        ))}
                        <br />
                        <Typography className={classes.text}>
                          Humanities and Social Sciences
                        </Typography>
                        {phdhumrows.map((row) => (
                          <TableRow key={row.name}>
                            <TableCell
                              component="th"
                              scope="row"
                              className={classes.text}
                            >
                              <Link href={row.link}>{row.name}</Link>
                            </TableCell>
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
      )}
    </div>
  );
};

export default Programmes;
