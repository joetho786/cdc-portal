import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import './Carousel.css';

export default function SectionCarousel() {
  const [IC_Objs, setIC_Obj] = useState([]);
  useEffect(() => {
    const fetchIC_Objs = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/main/home_image_carousel/`
        );
        setIC_Obj(res.data);
      } catch (err) {}
    };
    fetchIC_Objs();
  }, []);

  const getIC_Objs = () => {
    let list = [];

    IC_Objs.map((IC) => {
      return list.push(
        <div>
          <img src={IC.image} alt={IC.title} className="slick-image" />
        </div>
      );
    });

    return list;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Grid container className="carousel_container">
      <Grid item xs={12} sm={12} md={8} className="carousel_grid">
        <Card>
          <Slider {...settings}>{getIC_Objs()}</Slider>
        </Card>
      </Grid>
    </Grid>
  );
}
