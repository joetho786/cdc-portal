import React, { useState, useEffect } from 'react';
import instance from '../../api/axios';
import Slider from 'react-slick';
import Grid from '@material-ui/core/Grid';
import './Carousel.css';

export default function SectionCarousel() {
  const [IC_Objs, setIC_Obj] = useState([]);
  useEffect(() => {
    instance
      .get('main/home_image_carousel/')
      .then((res) => {
        setIC_Obj(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const getIC_Objs = () => {
    let list = [];

    IC_Objs.map((IC) => {
      return list.push(
        <div key={IC.title}>
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
    <Grid
      style={{ boxShadow: '0 0 6px' }}
      container
      className="carousel_container"
    >
      <Grid item xs={12} sm={12} md={8} className="carousel_grid">
        <div>
          <Slider {...settings}>{getIC_Objs()}</Slider>
        </div>
      </Grid>
    </Grid>
  );
}
