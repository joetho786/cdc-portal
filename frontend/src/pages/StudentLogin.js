import React, { useState } from 'react';
import instance from '../api/axios';
import styles from '../styles/pages/StudentLogin.module.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import back_img from '../assets/login_back.jpg';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = React.useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const handleCloseerror = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setError('');
  };

  function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    const body = { id: email, password: password };
    instance
      .post('LDAP_login/', body)
      .then((res) => {
        //console.log(res.data);
        const { token, Dname } = res.data;
        localStorage.setItem('cdc_auth_token', token);
        localStorage.setItem('cdc_LoggedIn', true);
        localStorage.setItem('cdc_Dname', Dname);
        if (res.status === 201) {
          window.location = 'StudentRegister';
        } else {
          window.location = 'StudentDashboard';
        }
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data['Error']);
        }
        setLoading(false);
      });
  }

  return (
    <div
      style={{
        background: `url(${back_img}) no-repeat fixed`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        padding: '3%',
        justifyContent: 'center',
      }}
    >
      <div className={styles.background}>
        <div className={styles.Login}>
          <Backdrop
            style={{
              zIndex: 1,
              color: '#fff',
            }}
            open={loading}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Snackbar
            open={error !== ''}
            autoHideDuration={6000}
            onClose={handleCloseerror}
          >
            <Alert onClose={handleCloseerror} severity="error">
              {error}
            </Alert>
          </Snackbar>
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
            </center>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;
