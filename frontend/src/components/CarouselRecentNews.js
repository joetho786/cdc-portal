import React from 'react';
import SectionCarousel from './Carousel';
import VirtualizedList from './RecentNews';
import Container from '@material-ui/core/Container';
import './Carousel_News.css';
const CarouselNewsWrapper = () => {
  return (
    <Container maxWidth="lg">
      <div className="container-Overview">
        <div className="box-1">
          <SectionCarousel />
        </div>
        <div className="box-2">
          <VirtualizedList />
        </div>
      </div>
    </Container>
  );
};

export default CarouselNewsWrapper;
