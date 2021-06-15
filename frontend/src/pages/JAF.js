import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from '../styles/pages/JAF.module.css';

const JAF = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    instance
      .get('main/navbar_suboptions?search=Job Announcement Form')
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
          <Paper className={styles.heading} elevation={2}>
            <DescriptionIcon
              fontSize="inherit"
              style={{ margin: '0 0.3rem', padding: '0' }}
            />
            JAF
          </Paper>
          <Paper elevation={2} className={styles.jaf}>
            <div className={styles.download}>
              <a download href={data['file']}>
                Click here to download the Job Announcement Form{' '}
                <i className="fa fa-external-link-alt"></i>
              </a>
            </div>
            <div className={styles.iframe}>
              <iframe
                src={`https://docs.google.com/gview?url=${data['file']}&embedded=true#view=fitH`}
                title="Job Announcement Form"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </Paper>
        </>
      )}
    </div>
  );
};

export default JAF;
