import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import AllInboxIcon from '@material-ui/icons/AllInbox';

function Logout(event) {
  event.preventDefault();
  localStorage.setItem('cdc_LoggedIn', false);
  localStorage.setItem('cdc_auth_token', '');
  window.location = '/';
}

export const mainListItems = (
  <div>
    <a
      href="/student-dashboard/"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <ListItem>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </a>
    <a
      href="/student-dashboard/"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <ListItem button>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItem>
    </a>
    <a
      href="/student-dashboard/uploadresume"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <ListItem button>
        <ListItemIcon>
          <CloudUploadIcon />
        </ListItemIcon>
        <ListItemText primary="Upload Resume" />
      </ListItem>
    </a>
    <a
      href="/student-dashboard/offers"
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <ListItem button>
        <ListItemIcon>
          <AllInboxIcon />
        </ListItemIcon>
        <ListItemText primary="Available Offers" />
      </ListItem>
    </a>
  </div>
);

export const secondaryListItems = (
  <div>
    <a
      href="/"
      onClick={Logout}
      style={{ color: 'inherit', textDecoration: 'none' }}
    >
      <ListItem button>
        <ListItemIcon>
          <PowerSettingsNewIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </a>
  </div>
);
