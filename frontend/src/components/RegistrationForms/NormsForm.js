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
          Fullowing are norms for students to register with Career Development
          Cell (CDC), IIT Jodhpur, for participating in the placement and
          internship activities facilitated by the Institute.{' '}
        </p>
        <br />
        <h4>
          <font color="black">General</font>
        </h4>
        <ol style={{ listStyle: 'disc' }}>
          <li>
            The Career Development Cell only assists students in the placement
            process and does not take responsibility for placing students.
          </li>
          <li>
            No Student should contact any official of a company registered with
            the CDC.
          </li>
          <li> A Student should not provide any wrong information to CDC.</li>
          <font color="red">
            <li>
              If a student is found using any unfair means during the online
              interview/tests, he/she shall be debarred from the process and be
              liable to severe consequences including disciplinary action.
            </li>
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
            If a Student registers to interview with a company, it is mandatory
            for the Student to participate in the entire process starting from
            presentation by the company to the interview.
          </li>
          <li>
            {' '}
            Inappropriate behavior is unacceptable by a Student during placement
            or internship process, which may hamper the Company-Institute
            relationship or Institute pulicies of decorum.
          </li>
          <li>
            {' '}
            It is mandatory for a student to fullow the dress code laid down by
            the CDC.
          </li>
          <li>
            {' '}
            It is suggested for a student to accept an offer made by a company.
            A Student, who is offered a job by a company, will be out of the
            placement process irrespective of whether he/she accepts the offer.
          </li>
          <li>
            {' '}
            In case a Student receives a Pre-Placement Offer (PPO), he/she must
            accept or reject the offer before appearing for the next round of
            the Interviews. Once the Student accepts the PPO, he/she will be
            immediately out of the placement process. Only when the Student
            rejects the PPO, can he/she participate in the further placement
            rounds.
          </li>
          <font color="red">
            <li>
              {' '}
              If a student registers and fails to show up at any stage of the
              whule process he/she shall be debarred from registering in the
              next 3 companies of the domain that applies to the candidate.
            </li>
          </font>
          <li>
            {' '}
            If a Student has multiple job offers on a single day, he/she should
            select one, and inform the same to CDC within the minimum time
            period specified by the CDC.
          </li>
          <li>
            {' '}
            Only the batch of Students graduating in summer 2021 is eligible to
            participate in the 2020 placement process.{' '}
            <font color="red">
              CDC has the sule authority to accommodate any exception in this
              regard under very special circumstances.
            </font>
          </li>
        </ol>
        <p></p>

        <br />

        <h4 class="h4">
          <font color="black">Internship</font>
        </h4>
        <p class="card-text"></p>
        <ol>
          <li>
            {' '}
            It is strongly recommended to a student that he/she should accept an
            internship offer made by a company. A Student, who is offered an
            internship by a company, will automatically be out of the internship
            process irrespective of whether the student accepts the internship
            or not.
          </li>
          <li>
            {' '}
            As an Intern in a company, a student is expected to create a
            positive image about himself and the Institute. Any negative
            feedback received from the company during a student’s internship
            period will be considered seriously and an appropriate action will
            be taken.
          </li>
          <font color="red">
            <li>
              {' '}
              . Post-acceptance, If a student fails to join the internship of a
              company that extended the offer, then he/she shall be denied from
              applying to any company on Day 1* of the successive placement
              season.
            </li>
          </font>
          <br />
          <font color="red">
            <p>
              *Day 1 refers to the first set of companies of the domain that
              applies to the candidate.
            </p>
          </font>
          <font color="red">
            <li>
              If a student registers and fails to show up at any stage of the
              whule process he/she shall be debarred from registering in the
              next 3 companies of the domain that applies to the candidate.
            </li>
          </font>
        </ol>
        <p></p>
        <br />
        <p style={{ fontSize: '15px' }}>
          <b>
            {' '}
            Viulation of any of the above norms will lead to debarring the
            student from the entire placement process.
          </b>{' '}
          Further, Career Development Cell reserves the right to inform any
          viulation by a Student to Office of Academics and/or the Office of
          Students for a suitable disciplinary action.{' '}
        </p>
        <br />
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
