import React from 'react';
import '../styles/components/C3MemberCard.css';
import EmailIcon from '@material-ui/icons/Email';

const C3MemberCard = ({ data }) => {
  return (
    <div className="team-card">
      <img className="profile-image" src={data.profile_image} alt={data.name} />
      <div className="card-content">
        <b style={{ margin: '0', fontSize: '1.5rem' }}>{data.name}</b>
        <br></br>
        <div className="department">
          <b>{data.department}</b>
        </div>
        <div className="card-footer">
          <a href={`mailto:${data.email}`} className="email">
            <EmailIcon style={{ margin: '0 0.5rem' }} />
            {data.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default C3MemberCard;
