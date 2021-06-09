import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import Footer from '../components/Footer/Footer';
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
    width: 'auto',
    color: theme.palette.text.secondary,
  },
}));

const DirectorMessage = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [message, setMessage] = useState([]);

  useEffect(() => {
    instance
      .get('main/navbar_suboptions/')
      .then((res) => {
        setMessage(
          res.data.filter((subOption) =>
            subOption.title.includes("Director's Message")
          )[0]
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const createMessage = () => {
    return { __html: message.description };
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
                    Director's Message
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper className={classes.paper}>
                  <p dangerouslySetInnerHTML={createMessage()} />
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

export default DirectorMessage;
