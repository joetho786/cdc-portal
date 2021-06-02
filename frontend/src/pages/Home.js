import React from 'react';
import HeroSection from '../components/herosection1';
import AboutUs from '../components/AboutUs/AboutUs';
import CarouselNewsWrapper from '../components/CarouselNewsWrapper/CarouselRecentNews';
import '../components/base.css';
import MediaControlCard from '../components/DirectorMessage/DirectorMessage';
import PastRecruiters from '../components/PastRecruiters/PastRecruiters';
import AlumniTestimonial from '../components/AlumniTestimonial/NewAlumni';
import Footer from '../components/Footer/Footer';
import styles from '../styles/pages/Home.module.css';
function Home() {
  return (
    <div className={styles.aboutusWrapper}>
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
    </div>
  );
}

export default Home;
