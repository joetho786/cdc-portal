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
    marginBottom: 10,
    [theme.breakpoints.down(460)]: {
      padding: 2,
    },
  },
  paper: {
    padding: theme.spacing(2),
    [theme.breakpoints.up(460)]: {
      paddingInline: 40,
    },
    width: 'auto',
    color: 'rgb(0,0,0)',
  },
  text: {
    color: 'rgb(0,0,0)',
    fontsize: '1rem',
  },
}));

const AIPCNorms = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [text, settext] = useState([]);

  useEffect(() => {
    instance
      .get('main/navbar_suboptions/')
      .then((res) => {
        settext(
          res.data.filter((subOption) =>
            subOption.title.includes('AIPC Norms')
          )[0]
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const createtext = () => {
    return { __html: text.description };
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
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
                    AIPC Norms
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <Typography>
                    {text ? (
                      <p
                        className={classes.text}
                        dangerouslySetInnerHTML={createtext()}
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

export default AIPCNorms;
