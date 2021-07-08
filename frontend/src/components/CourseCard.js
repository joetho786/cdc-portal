import React from 'react';
import styles from '../styles/components/CourseCard.module.css';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FadeUpWhenVisible from '../components/Animation/FadeUp';
import FadeInWhenVisible from '../components/Animation/FadeIn';

const CourseCard = ({ data }) => {
  return (
    <FadeUpWhenVisible>
      <Accordion style={{ width: '100%' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id={data.title}
        >
          <div className={styles.department}>{data.title}</div>
        </AccordionSummary>
        <AccordionDetails>
          <FadeInWhenVisible>
            <div
              className={styles.description}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </FadeInWhenVisible>
        </AccordionDetails>
      </Accordion>
    </FadeUpWhenVisible>
  );
};

export default CourseCard;
