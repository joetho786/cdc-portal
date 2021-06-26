import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import Loading from '../components/Loading';
import HeroSection from '../components/herosection1';
import AboutUs from '../components/AboutUs/AboutUs';
import CarouselNewsWrapper from '../components/CarouselNewsWrapper/CarouselRecentNews';
import DirectorMessageComponent from '../components/DirectorMessage/DirectorMessage';
import PastRecruiters from '../components/PastRecruiters/PastRecruiters';
import AlumniTestimonial from '../components/AlumniTestimonial/NewAlumni';
import styles from '../styles/pages/Home.module.css';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
function Home() {
  const [loading, setLoding] = useState(true);
  const [aboutText, setAboutText] = useState([]);
  const [DirectorMessage, setDirectorMessage] = useState([]);
  const [IC_Objs, setIC_Obj] = useState([]);
  const [news, setNews] = useState([]);
  const [PR_Objs, setPR_Obj] = useState([]);
  const [Alumni_Testimonials, setPAlumni_Testimonial] = useState([]);
  useEffect(() => {
    instance
      // set about us text
      .get('main/about_us/')
      .then((res) => {
        setAboutText(res.data[0]);
      })
      .catch((error) => console.log(error));
    instance
      // set director message
      .get('main/director_message/')
      .then((res) => {
        setDirectorMessage(res.data[0]);
      })
      .catch((error) => console.log(error));
    instance
      .get('main/past_recruiters/')
      .then((res) => {
        setPR_Obj(res.data);
      })
      .catch((error) => console.log(error));
    instance
      .get('main/alumni_testimonial/')
      .then((res) => {
        setPAlumni_Testimonial(res.data);
      })
      .catch((error) => console.log(error));
    instance
      .get('main/home_image_carousel/')
      .then((res) => {
        setIC_Obj(res.data);
      })
      .catch((error) => console.log(error));
    instance
      .get('main/news/')
      .then((res) => {
        setNews(res.data);
      })
      .catch((error) => console.log(error))
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className={styles.homeWrapper}>
            <FadeInWhenVisible>
              <HeroSection />
            </FadeInWhenVisible>
            <FadeUpWhenVisible>
              <AboutUs data={aboutText} />
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <DirectorMessageComponent data={DirectorMessage} />
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <CarouselNewsWrapper IC_Objs={IC_Objs} news={news} />
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <PastRecruiters data={PR_Objs} />
            </FadeUpWhenVisible>
            <FadeUpWhenVisible>
              <AlumniTestimonial data={Alumni_Testimonials} />
            </FadeUpWhenVisible>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
