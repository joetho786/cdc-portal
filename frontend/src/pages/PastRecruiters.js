import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
    padding: theme.spacing(3),
    width: 'auto',
    color: 'rgb(53,53,53)',
    fontSize: '1rem',
  },
  paper_s: {
    padding: theme.spacing(4),
    width: 'auto',
    color: 'rgb(53,53,53)',
    fontSize: '1rem',
  },
  text_: {
    color: 'rgb(53,53,53)',
    fontsize: '1rem',
    textAlign: 'center',
  },
}));

const PastRecruiters = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [publictext, setPublictext] = useState([]);
  const [privatetext, setPrivatetext] = useState([]);

  useEffect(() => {
    instance
      .get('main/navbar_suboptions/')
      .then((res) => {
        setPrivatetext(
          res.data.filter((subOption) =>
            subOption.title.includes('Past Recruiters Private')
          )[0]
        );
        setPublictext(
          res.data.filter((subOption) =>
            subOption.title.includes('Past Recruiters Public')
          )[0]
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const createtext = (d) => {
    return { __html: d.description };
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
                    display="block"
                    width="500"
                    style={{ fontSize: 30, textAlign: 'center' }}
                  >
                    Past Recruiters
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper_s}>
                  <Typography
                    component="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'rgb(53,53,53)',
                    }}
                  >
                    Private Companies
                  </Typography>
                  <Typography>
                    {privatetext ? (
                      <p
                        className={classes.text_}
                        dangerouslySetInnerHTML={createtext(privatetext)}
                      />
                    ) : (
                      <p>Coming soon...</p>
                    )}
                  </Typography>
                  <br />
                  <br />
                  <Typography
                    component="h3"
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'center',
                      color: 'rgb(53,53,53)',
                    }}
                  >
                    Public Sector Companies
                  </Typography>
                  <Typography>
                    {publictext ? (
                      <p
                        className={classes.text_}
                        dangerouslySetInnerHTML={createtext(publictext)}
                      />
                    ) : (
                      <p>Coming soon...</p>
                    )}
                  </Typography>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};

export default PastRecruiters;
