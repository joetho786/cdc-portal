import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    background: 'rgb(240,240,240)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -30,
    boxShadow: 'none',
  },
  MessageContainer: {
    width: '100%',
    height: 'auto',
    marginTop: 40,
    marginBottom: 40,
    zIndex: 2,
    display: 'flex',
    flexDirection: 'row',
    boxShadow: 'none',
    borderRadius: '0',
    [theme.breakpoints.down(780)]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  MessageHeader: {
    color: 'rgb(0, 0, 0)',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 0,
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    minWidth: 250,
    height: 250,
    margin: 30,
    boxShadow: '0 0 12px',
    borderRadius: '50%',
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const [DirectorMessage, setText] = useState([]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/main/director_message/`
        );
        setText(res.data[0]);
        console.log(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchText();
  }, []);

  const createDirectorMessage = () => {
    return { __html: DirectorMessage.content };
  };

  return (
    <Container maxWidth="lg">
      <Card className={classes.root}>
        <Card className={classes.MessageContainer}>
          <CardMedia
            className={classes.cover}
            image={DirectorMessage.image}
            title="Live from space album cover"
          />
          <div className={classes.details}>
            <CardContent className={classes.content}>
              <Typography
                className={classes.MessageHeader}
                component="h5"
                variant="h5"
                style={{ fontSize: 30 }}
              >
                {DirectorMessage.title}
              </Typography>
              <Typography>
                <p dangerouslySetInnerHTML={createDirectorMessage()} />
              </Typography>
              <Typography
                component="h5"
                color="textPrimary"
                style={{ fontSize: 20 }}
                variant="subtitle1"
              >
                {DirectorMessage.name}
              </Typography>
            </CardContent>
          </div>
        </Card>
      </Card>
    </Container>
  );
}
