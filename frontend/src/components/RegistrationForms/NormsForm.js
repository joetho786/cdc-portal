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
          The norms for students’ placements and internships processes are
          elucidated below. Students who register with the Career Development
          Cell (CDC), IIT Jodhpur, for participating in the placement and
          internship activities facilitated by the Institute are requested to
          read these guidelines carefully before registering for the process:{' '}
        </p>
        <br />
        <h4>
          <font color="black">General</font>
        </h4>
        <ol style={{ listStyle: 'disc' }}>
          <li>
            The role of the Career Development Cell is only to offer assistance
            to the students in the placement process. It does not take the
            responsibility of placing all the students.
          </li>
          <li>
            Placement registration is for one academic year only. Students have
            to register to indicate their interest in the campus placement
            process. Only the registered students can sit for campus
            recruitments.
          </li>
          <li>
            No student is allowed to contact any official of a company
            registered with the CDC. Only the student coordinators of the CDC
            can do so under the guidance of the Faculty Supervisor.
          </li>
          <li>
            The information provided by the student to the CDC should be
            accurate. Sharing wrong/bogus information with the CDC may lead to
            disciplinary action against the student.
          </li>
          <li>
            Suppose a student is found using any unfair means during the online
            interview/tests. In that case, he/she shall be debarred from the
            respective company’s selection process and be liable to face
            disciplinary action.
          </li>
          <li>
            A student appearing for the selection process is required to log in
            to the test/interview platform at least 10 minutes before the
            scheduled starting time.
          </li>
          <li>
            A student is expected to read thoroughly the Job Announcement Form
            (JAF)/ Internship Announcement Form (IAF) before applying to a
            particular company. Once a student has applied to a company, no
            requests for withdrawal of candidature at any later stage shall be
            accepted.
          </li>
          <li>
            During the Pre-Placement Talk by companies, a student is required to
            gather all the information related to the company or the selection
            process well before the selection process begins.
          </li>

          <li> A Student should not provide any wrong information to CDC.</li>
          <font color="red">
            <li>
              Once a student registers for a particular company, he/she is bound
              to attend the entire selection process of that company.
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
            It is mandatory for a student who has applied to a particular
            company to participate in the entire selection process conducted by
            that company.
          </li>
          <li>
            {' '}
            Any inappropriate behaviour by a student during the selection
            process of a company that is likely to hamper the Institute’s
            relationship with that company or hurt the reputation of the
            Institute shall call for strict disciplinary action against the
            student concerned.
          </li>
          <li>
            {' '}
            A student must be dressed in business formals during the selection
            process
          </li>
          <li>
            {' '}
            It is suggested that a student accept a placement offer made by a
            company. A student who a company offers a placement will be out of
            the placement process of the following companies regardless of
            whether he/she accepts the offer.
          </li>
          <li>
            {' '}
            If a student receives a Pre-Placement Offer (PPO), he/she must
            accept or reject the offer before appearing for the selection
            process of other companies. If the student accepts the PPO, he/she
            will be considered out of the placement process of the following
            companies. The student will have to reject the PPO that is offered
            to him/her to appear in the selection process of other companies.
          </li>
          <li>
            {' '}
            If a student applies for a company but misses to appear in any stage
            of the selection process, then he/she shall be debarred from
            applying to the following three companies of his/her domain that
            come for placements.
          </li>
          <li>
            {' '}
            If a student gets multiple job offers on a single day, then he/she
            should select one out of those and inform the CDC about his/her
            decision within the minimum stipulated time period.
          </li>
          <li>
            <font color="red">
              {' '}
              Failure to disclose information regarding PPO to the CDC may lead
              to disciplinary action against the student.
            </font>
          </li>
          <li>
            {' '}
            A student who gets placed at a CTC of below Rs 5 Lakhs shall be
            given an option to apply to the companies that offer a CTC of above
            Rs 5 Lakhs. Once he/she has been offered a package above five lakhs,
            he/she will be out of the placement process.
          </li>
          <font color="red">
            <li>
              {' '}
              Only the students graduating in 2022 are eligible to participate
              in the 2022 placement process{' '}
            </li>
            <li>
              Please note that the CDC reserves the right to modify the norms as
              and when required. The norms can be modified in the case of PSUs,
              or any other company , if required on the companies upfront.
            </li>
          </font>
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
            It is suggested that a student accept an internship offer made to
            him/her. A student who is offered an internship by a company will be
            out of the internship selection process of the subsequent companies
            regardless of whether the student accepts the internship or not.
          </li>
          <li>
            {' '}
            As an Intern in a company, a student is expected to create a
            positive image about himself and the Institute. Any negative
            feedback received from the company during a student’s internship
            period will be considered seriously, which might lead to his/her
            debarment from the placement process of the other companies or any
            other disciplinary action as may deem appropriate
          </li>
          <font color="red">
            <li>
              {' '}
              If a student fails to join the internship of a company that
              extended him/her the offer on Day1, then post-acceptance, he/she
              shall be denied from applying to any company on Day 1 of the
              successive placement season. Similarly, the norm holds true for
              day2 and day3.
            </li>
          </font>
          <br />
          <font color="red">
            <p>
              *Day 1 refers to the first set of companies of the domain that
              apply to the candidate
            </p>
          </font>
          <font color="red">
            <li>
              If a student applies to a company but fails to show up at any
              stage of the selection process, then he/she shall be debarred from
              applying to the following three companies of his/her domain that
              come for internships
            </li>
            <li>
              Only the batch of students graduating in 2023 is eligible to
              participate in the 2023 internship process.
            </li>
            <li>
              A student must disclose the information regarding his/her PPO to
              the CDC within the same day of the offer being made
            </li>
          </font>
        </ol>
        <p></p>
        <br />
        <p style={{ fontSize: '15px' }}>
          <b>
            {' '}
            The Career Counselling Committee reserves the right to take any
            disciplinary action or debar the students from the Placement/
            Internship Process who violate the aforementioned norms.
          </b>{' '}
        </p>
        <br />
        <b>
          <i>*The norms are last updated on 30-07-2021*</i>
        </b>
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
