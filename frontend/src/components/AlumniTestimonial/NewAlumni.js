import React from 'react';
import Slider from 'react-slick';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import testiBack from '../../assets/testiback2.jpg';
import styles from './AlumniTestimonial.module.css';
import { getLink } from '../../utils/getLink';

const AlumniTestimonial = ({ data }) => {
  const getAlumni_Testimonials = () => {
    let Testi_list = [];

    data.map((Testimonial_Obj) => {
      return Testi_list.push(
        <div key={Testimonial_Obj.alumni_name}>
          <div
            style={{
              margin: 10,
              justifyContent: 'center',
              display: 'flex',
            }}
          >
            <Card className={styles.root}>
              <CardActionArea>
                <CardMedia className={styles.media} image={testiBack} />
                <div className={styles.profile}>
                  <img
                    className={styles.avatar}
                    alt="Remy Sharp"
                    src={getLink(Testimonial_Obj.alumni_image)}
                  />
                </div>
                <CardContent>
                  <Typography
                    variant="body2"
                    component={'span'}
                    className={styles.main_content}
                  >
                    {Testimonial_Obj.testimonial}
                  </Typography>
                  <div className={styles.name_container}>
                    <Typography component={'span'} className={styles.name}>
                      {Testimonial_Obj.alumni_name}
                    </Typography>
                    <Typography
                      component={'span'}
                      className={styles.company_name}
                    >
                      {Testimonial_Obj.company_working}
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
              <CardActions style={{ justifyContent: 'center' }}>
                <div>
                  {Testimonial_Obj.facebook !== null && (
                    <Tooltip arrow title="facebook">
                      <IconButton
                        href={Testimonial_Obj.facebook}
                        color="primary"
                        variant="outlined"
                      >
                        <FacebookIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {Testimonial_Obj.mailId !== null && (
                    <Tooltip arrow title={Testimonial_Obj.mailId}>
                      <IconButton
                        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${Testimonial_Obj.mailId}`}
                        color="secondary"
                        variant="outlined"
                      >
                        <EmailIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                  {Testimonial_Obj.twitter !== null && (
                    <Tooltip arrow title="Twitter">
                      <IconButton
                        href={Testimonial_Obj.twitter}
                        color="primary"
                        variant="outlined"
                      >
                        <TwitterIcon />
                      </IconButton>
                    </Tooltip>
                  )}
                </div>
              </CardActions>
            </Card>
          </div>
        </div>
      );
    });

    return Testi_list;
  };
  var settings = {
    dots: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          fade: true,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          fade: true,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };
  return (
    <div style={{ marginBottom: '2rem', background: 'rgb(240,240,240)' }}>
      <div className="py-5">
        <Container
          style={{
            maxWidth: '100%',
          }}
        >
          <div>
            <h2
              style={{
                fontSize: 40,
                textAlign: '-webkit-center',
                justifyContent: 'center',
                display: 'grid',
                marginBottom: -10,
                marginTop: 70,
              }}
            >
              Alumni Testimonial
            </h2>
            <h3>
              <hr style={{ width: '60%', marginBottom: 35 }} />
            </h3>
          </div>
          <Slider style={{ width: '100%', marginTop: 0 }} {...settings}>
            {getAlumni_Testimonials()}
          </Slider>
        </Container>
      </div>
    </div>
  );
};

export default AlumniTestimonial;
