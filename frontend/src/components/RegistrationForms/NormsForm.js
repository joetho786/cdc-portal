import React from 'react';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function NormsForm({ p1, p2 }) {
  const handleChange = (event) => {
    p2({ check: event.target.checked });
  };
  return (
    <React.Fragment>
      <div
        style={{
          overflowY: 'scroll',
          height: '350px',
          width: '100%',
          margin: 'auto',
          padding: '0 5%',
        }}
      >
        <br />

        <h3
          style={{
            textDecoration: 'underline',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          Norms for Student Placements and Internships
        </h3>
        <p>
          The norms for students’ placement processes are elucidated below.
          Students who register with the Career Development Cell (CDC), IIT
          Jodhpur to participate in the placements are requested to read these
          guidelines carefully before registering for the process:{' '}
        </p>
        <br />
        <h4>
          <font color="black">General</font>
        </h4>
        <ol>
          <li>
            Placement registration is for one academic year only. Students are
            required to register to indicate their interest in the campus
            placement process.
            <p style={{ textDecoration: 'underline' }}>
              Only the registered students can sit for campus recruitments.
            </p>
          </li>
          <li>
            A student is expected to read the Job Advertisement of the
            respective company thoroughly before applying to that particular
            company. He/She shall check the background of the company
          </li>
          <li>
            Information provided by the student to the CDC should be accurate.
            Sharing false information may lead to disciplinary action against
            the student including debarment from the upcoming placement drives.
          </li>
          <li>
            Once a student registers for a particular company, they are bound to
            attend the entire selection process of that company.
          </li>
          <li>
            During the Pre-Placement Talk by companies, a student is responsible
            to gather necessary information related to the company or the
            selection process well before the selection process begins.
          </li>
          <li>
            No student is allowed to contact any official of a company
            registered with the CDC. Only the concerned authority/ student
            coordinators of the CDC can do the same
          </li>
          <li>
            A student appearing for the virtual selection process is required to
            log in to the test/interview platform at least 15 minutes before the
            scheduled starting time.
          </li>
          <font color="red">
            <li>
              Students are expected to register twice on the Career Development
              Cell website, once for the (December-February) term and again for
              the (March-May) term.
            </li>
            <li>
              Use of cell phones or any devices during the pre placement talk/
              campus connect of any company is strictly prohibited. Such
              behaviour might attract consequences such as being debarred from
              the placement process of the concerned company.
            </li>
            <li>
              If a student is found using any unfair means during the
              interview/tests, he/she shall be debarred from the respective
              company’s selection process and be liable to face disciplinary
              action.
            </li>
            <br />
            <br />
            <b>
              Please note: CDC only offers assistance to the students in the
              placement process however it doesn’t extend any guarantee for
              selection/ placement of the students.
            </b>
          </font>
        </ol>
        <p></p>

        <br />

        <h4 class="h4">
          <font color="black">Placement</font>
        </h4>
        <p class="card-text"></p>
        <ol>
          <li>
            {' '}
            Only the students graduating in the year 2023 are eligible to
            participate in the placement season 2022 - 2023.
          </li>
          <li>
            {' '}
            It is mandatory for a student who has applied to a particular
            company to participate in the entire selection process conducted by
            that company.
          </li>
          <li>
            {' '}
            It is mandatory for a student to be dressed in business formals
            during the selection process.
          </li>
          <li>
            {' '}
            If a student receives a Pre-Placement Offer (PPO), he/she must
            accept or reject the offer before appearing for the on campus
            placement process. If the student accepts the PPO then he/she will
            be considered out of the placement process of the subsequent
            companies. The student will have to reject the PPO to be allowed to
            appear in the on campus placement process.
          </li>
          <li>
            {' '}
            If a student applies for a company but misses to appear in any stage
            of the selection process, they shall be debarred from applying to
            the upcoming drive of 3 companies for placements.
          </li>
          <li>
            {' '}
            If a student gets multiple job offers on a single day, then they
            should select one out of those and inform the CDC about their
            decision within two hours of receiving the offer.
          </li>
          <li>
            <font color="red">
              {' '}
              Once a student is extended an offer from the company, they will be
              out of the campus recruitment process irrespective of the
              student’s response(accept/reject) to the offer. It is hence
              advised to accept the extended offer.
            </font>
          </li>
          <font color="red">
            <li>
              <b>
                {' '}
                Failure to disclose information regarding PPO to the CDC (within
                48 hours after the offer was extended)will lead to disciplinary
                action against the student.
              </b>
            </li>
            <li>
              A student who gets placed at a CTC of below Rs 6 Lakhs* shall be
              given an option to apply to the companies that offer a CTC of
              above Rs 6 Lakhs*. Once they have been offered a package above 6
              lakhs*, they will be out of the placement process.
            </li>
            <li>
              Any inappropriate behaviour by a student during the selection
              process of a company that hampers the Institute’s relationship
              with that company or hurts the reputation of the Institute shall
              call for a strict disciplinary action against the student
              concerned.
            </li>
          </font>
        </ol>
        <br />
        <p>
          <b>
            Please note: CDC reserves the right to modify the norms as and when
            required
          </b>
        </p>
        <p style={{ fontSize: '15px', color: 'red' }}>
          <b>
            {' '}
            Please note: CDC reserves the right to take disciplinary action
            against the student who violates the aforementioned norms of the
            Placement/ Internship Process
          </b>{' '}
        </p>
        <br />
        <b>
          <i>*The norms are last updated on 13-09-2022*</i>
        </b>
        <br />
      </div>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox
              color="secondary"
              name="confirm"
              checked={p1}
              onChange={handleChange}
            />
          }
          label=" I have read the Placement Norms and hereby agree to comply."
        />
      </Grid>
    </React.Fragment>
  );
}
