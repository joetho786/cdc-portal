import React from 'react';
import Container from '@material-ui/core/Container';
import styles from './AboutUs.module.css';

const AboutUs = ({ data }) => {
  const createAboutUs = () => {
    return { __html: data.content };
  };

  return (
    <Container maxWidth="lg">
      {data ? (
        <Container maxWidth="lg" className={styles.textContainer}>
          <h2 className={styles.aboutUsTitle}>{data.title}</h2>
          <p dangerouslySetInnerHTML={createAboutUs()} />
        </Container>
      ) : (
        ''
      )}
    </Container>
  );
};

export default AboutUs;
