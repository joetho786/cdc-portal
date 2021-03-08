import React from 'react';
import C3MemberCardCSS from '../styles/components/C3MemberCard.module.css';
import EmailIcon from '@material-ui/icons/Email';

const C3MemberCard = ({ data }) => {
  return (
    <div className={C3MemberCardCSS.teamCard}>
      <img
        className={C3MemberCardCSS.profileImage}
        src={data.profile_image}
        alt={data.name}
      />
      <div className={C3MemberCardCSS.cardContent}>
        <b style={{ margin: '0', fontSize: '1.5rem' }}>{data.name}</b>
        <br></br>
        <div className={C3MemberCardCSS.department}>
          <b>{data.department}</b>
        </div>
        <div className={C3MemberCardCSS.cardFooter}>
          <a href={`mailto:${data.email}`} className={C3MemberCardCSS.email}>
            <EmailIcon style={{ margin: '0 0.5rem' }} />
            {data.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default C3MemberCard;
