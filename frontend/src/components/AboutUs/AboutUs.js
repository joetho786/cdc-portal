import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
import Container from '@material-ui/core/Container';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  const [aboutText, setText] = useState([]);

  useEffect(() => {
    instance
      .get('main/about_us/')
      .then((res) => {
        setText(res.data[0]);
      })
      .catch((error) => console.log(error));
  }, []);

  const createAboutUs = () => {
    return { __html: aboutText.content };
  };

  return (
    <Container maxWidth="lg">
      {aboutText ? (
        <Container maxWidth="lg" className={styles.textContainer}>
          <h2 className={styles.aboutUsTitle}>{aboutText.title}</h2>
          <p dangerouslySetInnerHTML={createAboutUs()} />
        </Container>
      ) : (
        ''
      )}
    </Container>
  );
};

export default AboutUs;
