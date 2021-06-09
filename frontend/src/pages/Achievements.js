import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    marginBottom: 10,
    [theme.breakpoints.down(460)]: {
      padding: 5,
    },
  },
  paper: {
    padding: theme.spacing(2),
    width: 'auto',
    color: theme.palette.text.secondary,
  },
  Hroot: {
    maxWidth: 345,
    margin: 10,
    float: 'left',
    minWidth: 'auto',
  },
  media: {
    height: 140,
  },
  Awrapper: {
    justifyContent: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
}));

const Achievements = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(true);
  const [highlights, setHighlight] = useState([]);
  const [others, setOthers] = useState([]);

  useEffect(() => {
    instance
      .get('main/achievements/')
      .then((res) => {
        setHighlight(
          res.data.filter((subOption) =>
            subOption.category.includes('Highlight')
          )
        );
        setOthers(
          res.data.filter((subOption) => subOption.category.includes('Other'))
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  const createAchievements = (text) => {
    return { __html: text };
  };

  const gethighlights = () => {
    let highlights_list = [];

    highlights.map((highlights_Obj) => {
      return highlights_list.push(
        <Card key={highlights_Obj.title} className={classes.Hroot}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={highlights_Obj.image}
              title={highlights_Obj.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {highlights_Obj.title}
              </Typography>
              <p
                dangerouslySetInnerHTML={createAchievements(
                  highlights_Obj.description
                )}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });

    return highlights_list;
  };

  const getothers = () => {
    let others_list = [];

    others.map((others_Obj) => {
      return others_list.push(
        <Card key={others_Obj.title} className={classes.Hroot}>
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {others_Obj.title}
              </Typography>
              <p
                dangerouslySetInnerHTML={createAchievements(
                  others_Obj.description
                )}
              />
            </CardContent>
          </CardActionArea>
        </Card>
      );
    });

    return others_list;
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
                    Achievements
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 30, margin: 10, textAlign: 'center' }}
                >
                  Highlights
                </Typography>
                <Container maxWidth="lg" className={classes.Awrapper}>
                  {highlights === [] ? ' ' : gethighlights()}
                </Container>
              </Grid>
            </Grid>
          </Container>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Typography
                  component="h5"
                  variant="h5"
                  style={{ fontSize: 30, margin: 10, textAlign: 'center' }}
                >
                  Others
                </Typography>
                <Container maxWidth="lg" className={classes.Awrapper}>
                  {others === [] ? ' ' : getothers()}
                </Container>
              </Grid>
            </Grid>
          </Container>
        </>
      )}
    </div>
  );
};
export default Achievements;
