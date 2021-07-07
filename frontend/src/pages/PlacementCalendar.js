import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import instance from '../api/axios';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpBigDataWhenVisible from '../components/Animation/FadeUpBigData';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
    fontSize: '1rem',
    color: 'black',
  },
}));

const localizer = momentLocalizer(moment);

function getDate(date) {
  date = new Date(date);
  return date.toDateString();
}

const PlacementCalendar = () => {
  const classes = useStyles();
  const [loading, setLoding] = useState(false);
  const [dialog, setdialog] = useState({});
  const [open, setopen] = useState(false);
  const [data, setdata] = useState([]);

  const handleClickOpen = (event) => {
    setdialog(event);
    setopen(true);
  };

  const handleClose = () => {
    setopen(false);
    setdialog({});
  };

  useEffect(() => {
    instance
      .get('main/placement_calendar/')
      .then((res) => {
        setdata(res.data);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
              <Grid style={{ marginTop: '30px' }} item xs={12}>
                <FadeInWhenVisible>
                  <Paper className={classes.paper}>
                    <Typography
                      component="h5"
                      variant="h5"
                      style={{ fontSize: 30, textAlign: 'center' }}
                    >
                      Placement Calendar
                    </Typography>
                  </Paper>
                </FadeInWhenVisible>
              </Grid>
              <Grid item xs={12}>
                <FadeUpBigDataWhenVisible>
                  <Paper className={classes.paper}>
                    <Calendar
                      localizer={localizer}
                      events={data}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 500 }}
                      onSelectEvent={(event, e) => handleClickOpen(event)}
                    />
                  </Paper>
                </FadeUpBigDataWhenVisible>
              </Grid>
            </Grid>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {dialog.title} ({getDate(dialog.start)} - {getDate(dialog.end)})
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {dialog.description}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          </Container>
        </>
      )}
    </div>
  );
};

export default PlacementCalendar;
