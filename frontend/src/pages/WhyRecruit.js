import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getLink } from '../utils/getLink';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginBottom: '2rem',
    [theme.breakpoints.down(460)]: {
      padding: 15,
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    color: 'rgb(53,53,53)',
    fontSize: '1rem',
  },
  paper_card: {
    padding: theme.spacing(2),
    width: 'auto',
    color: 'rgb(53,53,53)',
    fontSize: '1rem',
  },
  card: {
    width: 370,
  },
  card_content: {
    backgroundColor: '#82b1ff',
    height: 290,
    '&:hover': {
      background: '#fce4ec',
    },
  },
}));

const WhyRecruit = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [recruitdata, setRecruitdata] = useState([]);

  useEffect(() => {
    instance
      .get('main/whyrecruitdata/')
      .then((res) => {
        setRecruitdata(res.data);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
    console.log(instance);
  }, []);

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
                    Why Recruit?
                  </Typography>
                </Paper>
              </Grid>
              <br />
            </Grid>
          </Container>
          <br />
          <Container maxwidth="lg" className={classes.root}>
            <Paper className={classes.paper}>
              <Grid container spacing={4}>
                {recruitdata.map((item, index) => (
                  <Grid item xs={12} sm={6} md={4}>
                    <Card className={classes.card} raised="True">
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          alt={item.title}
                          height="200"
                          justify-content="center"
                          image={getLink(item.img)}
                          title={item.title}
                          padding="5"
                          backgroundColor="#2979ff"
                        />
                        <CardContent className={classes.card_content}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            align="center"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body3"
                            color="#004d40"
                            component="p"
                          >
                            {item.text}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Container>
          <br></br>
          <br></br>
        </>
      )}
    </div>
  );
};

export default WhyRecruit;
