import React, { useState } from 'react';
import { useGoogleLogin } from 'react-google-login';
import GButton from '../assets/google-icon.svg';
import styles from '../styles/pages/StudentLogin.module.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import instance from '../api/axios';
import back_img from '../assets/login_back.jpg';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const RecruiterLogin = () => {
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
    const body = { email: email, password: password };
    instance
      .post('login/', body)
      .then((res) => {
        //console.log(res.data);
        const { token, Dname } = res.data;
        localStorage.setItem('cdc_auth_token', token);
        localStorage.setItem('cdc_LoggedIn', true);
        localStorage.setItem('cdc_Dname', Dname);
        localStorage.setItem('cdc_loginType', 'Recruiter');
        window.location = 'RecruiterDashboard';
      })
      .catch(function (error) {
        if (error.response) {
          setError(error.response.data['Error']);
        }
        setLoading(false);
      });
  }

  const responseGoogle = (response) => {
    console.log(response);
  };

  const { sigIn } = useGoogleLogin({
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    clientId:
      '658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com',
    isSignedIn: true,
    accessType: 'offline',
  });

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
        <h3 className={styles.Heading}>Recruiter Login</h3>
        <form>
          <input
            className={styles.Loginform}
            autoFocus
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            className={styles.Loginform}
            onChange={(e) => setPassword(e.target.value)}
          />
          <center>
            <button
              variant="primary"
              size="lg"
              onClick={handleSubmit}
              disabled={!validateForm()}
              className={styles.LoginButton}
            >
              Login
            </button>
            <button
              variant="primary"
              size="lg"
              className={styles.LoginButton}
              onClick={(e) => {
                e.preventDefault();
                window.location = 'RecruiterRegister';
              }}
            >
              Register
            </button>
            <div>
              <button onClick={sigIn} className={styles.LoginButton}>
                <img
                  src={GButton}
                  className={styles.Gbutton}
                  alt="gooogle_button"
                />
              </button>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;
