import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/CareerCounselling.module.css';
import C3MemberCard from '../components/C3MemberCard';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import FadeInWhenVisible from '../components/Animation/FadeIn';
import PaperHeader from '../components/PaperHeader';
import PeopleIcon from '@material-ui/icons/People';

const CareerCounselling = () => {
  const [loading, setLoding] = useState(true);
  const [chairman, setChairman] = useState([]);
  const [facultyIncharge, setFacultyIncharge] = useState([]);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    instance
      .get('main/career_committee/')
      .then((res) => {
        setChairman(
          res.data.filter((member) =>
            member.designation.designation.includes('Chairman')
          )
        );
        setFacultyIncharge(
          res.data.filter((member) =>
            member.designation.designation.includes('Faculty Incharge')
          )
        );
        setMembers(
          res.data.filter((member) =>
            member.designation.designation.includes('Member')
          )
        );
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaperHeader
            data={{ icon: PeopleIcon, heading: 'Career Counselling Committee' }}
          />
          <FadeInWhenVisible>
            <div className={styles.chairman}>
              <MenuIcon
                fontSize="large"
                style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
              />
              CHAIRMAN
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {chairman.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <FadeInWhenVisible>
            <div className={styles.facultyIncharge}>
              <MenuIcon
                fontSize="large"
                style={{
                  margin: '0 0.5rem 0 0',
                  paddingTop: '0rem',
                }}
              />
              FACULTY INCHARGE
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto' }}
          >
            {facultyIncharge.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
          <hr className={styles.hr} style={{ marginTop: '5rem' }}></hr>
          <FadeInWhenVisible>
            <div className={styles.members}>
              <MenuIcon
                fontSize="large"
                style={{ margin: '0 0.5rem 0 0', paddingTop: '0rem' }}
              />
              MEMBERS
            </div>
          </FadeInWhenVisible>
          <hr className={styles.hr}></hr>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{ width: '100%', margin: 'auto', marginBottom: '2rem' }}
          >
            {members.map((member) => {
              return (
                <Grid key={member.email} item xs={12} sm={6} md={4} lg={3}>
                  <C3MemberCard data={member} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </div>
  );
};

export default CareerCounselling;
