import React from 'react';
import HeroSection from '../components/herosection1';
import AboutUs from '../components/AboutUs';
import Carousel_News_Wrapper from '../components/Carousel_RecentNews';
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
        <Carousel_News_Wrapper />
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
