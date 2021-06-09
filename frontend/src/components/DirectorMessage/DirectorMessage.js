import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
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
    instance
      .get('main/director_message/')
      .then((res) => {
        setText(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const createDirectorMessage = () => {
    return { __html: DirectorMessage.content };
  };

  return (
    <Container maxWidth="lg">
      {DirectorMessage ? (
        <Card className={classes.MessageContainer}>
          <CardMedia
            component="div"
            className={classes.cover}
            image={DirectorMessage.image}
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
              <p dangerouslySetInnerHTML={createDirectorMessage()} />
              <p color="textPrimary" style={{ fontSize: 20 }}>
                {DirectorMessage.name}
              </p>
            </CardContent>
          </div>
        </Card>
      ) : (
        ''
      )}
    </Container>
  );
}
