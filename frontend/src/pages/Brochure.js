import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Paper from '@material-ui/core/Paper';
import Loading from '../components/Loading';
import DescriptionIcon from '@material-ui/icons/Description';
import styles from '../styles/pages/Brochure.module.css';

const Brochure = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  function getLink(link) {
    try {
      link = new URL(link);
      link = link.pathname;
    } catch {}
    let backend = `http://${
      process.env.BACKEND_HOST ? process.env.BACKEND_HOST : '127.0.0.1'
    }:8000`;
    let newLink =
      process.env.NODE_ENV === 'production'
        ? window.location.origin + link
        : backend + link;
    return newLink;
  }

  useEffect(() => {
    instance
      .get('main/navbar_suboptions?search=Brochure')
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
            Brochure
          </Paper>
          <Paper elevation={2} className={styles.jaf}>
            <div className={styles.download}>
              <a download href={getLink(data['file'])}>
                Click here to download the Brochure{' '}
                <i className="fa fa-external-link-alt"></i>
              </a>
            </div>
            <div className={styles.iframe}>
              <iframe
                src={`https://docs.google.com/gview?url=${getLink(
                  data['file']
                )}&embedded=true#view=fitH`}
                title="Brochure"
                style={{ width: '100%', height: '100%' }}
                frameborder="0"
              />
            </div>
          </Paper>
        </>
      )}
    </div>
  );
};

export default Brochure;
