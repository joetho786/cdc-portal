import React from 'react';
import '../styles/components/ContactCard.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const ContactCard = ({ data }) => {
  return (
    <div className="contact-card">
      <div className="card-header">
        <div className="designation">
          <b>{data.designation.designation}</b>
        </div>
        <div className="sub_designation">{data.sub_designation}</div>
      </div>
      <img className="profile-image" src={data.profile_image} alt={data.name} />
      <div className="card-content">
        <b style={{ margin: '0', fontSize: '1.5rem' }}>
          {data.user.first_name} {data.user.last_name}
        </b>
        <div className="footer">
          <table style={{ tableLayout: 'auto', margin: 'auto' }}>
            <tr>
              <td>
                <a href={`mailto:${data.user.email}`} className="email">
                  <EmailIcon style={{ margin: '0 0.5rem' }} />
                  {data.user.email}
                </a>
              </td>
            </tr>
            <tr>
              <td>
                <div className="phone">
                  <PhoneIcon style={{ margin: '0 0.5rem' }} />
                  {data.phone}
                </div>
              </td>
            </tr>
          </table>
          {data.github_link || data.linkedin_link ? (
            <div className="social">
              {data.github_link ? (
                <a href={data.github_link} className="github">
                  <GitHubIcon style={{ width: '1.8rem', height: '1.8rem' }} />
                </a>
              ) : null}
              {data.linkedin_link ? (
                <a href={data.linkedin_link} className="linkedin">
                  <LinkedInIcon
                    style={{
                      width: '2.2rem',
                      height: '2.2rem',
                    }}
                  />
                </a>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
