import React, { useState } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/StudentLogin.module.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = { id: email, password: password };
    instance
      .post('LDAP_login/', body)
      .then((res) => {
        //console.log(res.data);
        const { token } = res.data;
        localStorage.setItem('cdc_auth_token', token);
        localStorage.setItem('cdc_LoggedIn', true);
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data['Error']);
        }
      });
  }

  return (
    <div className={styles.Login}>
      <h3 className={styles.Heading}>Student Login</h3>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.Loginform}
          autoFocus
          placeholder="Enter LDAP ID"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Enter LDAP Password"
          className={styles.Loginform}
          onChange={(e) => setPassword(e.target.value)}
        />
        <center>
          <button
            variant="primary"
            size="lg"
            type="submit"
            disabled={!validateForm()}
            className={styles.LoginButton}
          >
            Login
          </button>
          <div className={styles.Error}>{error} </div>
        </center>
      </form>
    </div>
  );
};

export default StudentLogin;
