import React from 'react';
import HeroSection from '../components/herosection1';
import AboutUs from '../components/AboutUs';
import CarouselNewsWrapper from '../components/CarouselRecentNews';
import '../components/base.css';
import MediaControlCard from '../components/DirectorMessage';
import PastRecruiters from '../components/PastRecruiters';
import AlumniTestimonial from '../components/NewAlumni';
import Footer from '../components/Footer';
function Home() {
  return (
    <>
      <>
        <HeroSection />
      </>
      <AboutUs />
      <MediaControlCard />
      <div>
        <CarouselNewsWrapper />
      </div>
      <div>
        <PastRecruiters />
      </div>
      <div>
        <AlumniTestimonial />
      </div>
      <>
        <Footer />
      </>
    </>
  );
}

export default Home;
