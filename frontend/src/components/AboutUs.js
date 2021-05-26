import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AboutUs.css';
import Container from '@material-ui/core/Container';

const AboutUs = () => {
  const [aboutText, setText] = useState([]);

  useEffect(() => {
    const fetchText = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/main/about_us/`
        );
        setText(res.data[0]);
        console.log(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };

    fetchText();
  }, []);

  const createBlog = () => {
    return { __html: aboutText.content };
  };

  return (
    <Container maxWidth="lg">
      <Container maxWidth="lg" className="text-container">
        <h2>{aboutText.title}</h2>
        <p dangerouslySetInnerHTML={createBlog()} />
      </Container>
    </Container>
  );
};

export default AboutUs;
