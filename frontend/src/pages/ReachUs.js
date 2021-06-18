import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading';
import styles from '../styles/pages/ReachUs.module.css';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Map from '../components/Map';

const ReachUs = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const ReachUsData = () => {
    return (
      <div
        style={{ padding: '1rem' }}
        dangerouslySetInnerHTML={{ __html: data.description }}
      />
    );
  };

  useEffect(() => {
    instance
      .get('main/navbar_suboptions?search=Reach')
      .then((res) => {
        setData(res.data[0]);
      })
      .then(setLoading(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Paper className={styles.reachUs} elevation={2}>
            <LocationOnIcon
              fontSize="large"
              style={{ margin: '0', padding: '0' }}
            />
            REACH US
          </Paper>
          <Paper style={{ padding: '0.5rem', margin: '2rem' }} elevation={2}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={5}
              style={{ width: '100%', heigth: '100%', margin: 'auto' }}
            >
              <Grid key="reachUs" item xs={12} sm={12} md={6} lg={6}>
                <ReachUsData />
              </Grid>
              <Grid key="Map" item xs={12} sm={12} md={6} lg={6}>
                <Map />
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </div>
  );
};

export default ReachUs;
