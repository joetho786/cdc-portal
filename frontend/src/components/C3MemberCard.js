import React from 'react';
import styles from '../styles/components/C3MemberCard.module.css';
import EmailIcon from '@material-ui/icons/Email';

const C3MemberCard = ({ data }) => {
  function getLink(link) {
    try {
      link = new URL(link);
      link = link.pathname;
    } catch {}
    let backend = `http://${
      process.env.BACKEND_HOST ? process.env.BACKEND_HOST : '127.0.0.1'
    }:8000`;
    let newLink =
      process.env.NODE_ENV === 'production'
        ? window.location.origin + link
        : backend + link;
    return newLink;
  }

  return (
    <div className={styles.teamCard}>
      <img
        className={styles.profileImage}
        src={getLink(data.profile_image)}
        alt={data.name}
      />
      <div className={styles.cardContent}>
        <b style={{ margin: '0', fontSize: '1.4rem' }}>{data.name}</b>
        <br></br>
        <div className={styles.department}>{data.department}</div>
        <div className={styles.cardFooter}>
          <a href={`mailto:${data.email}`} className={styles.email}>
            <EmailIcon style={{ margin: '0 0.5rem' }} />
            {data.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default C3MemberCard;
