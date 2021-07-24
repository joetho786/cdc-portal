import React, { useState, useEffect } from 'react';
import instance from '../api/axios';
import ContactCard from '../components/ContactCard';
import PaperHeader from '../components/PaperHeader';
import Loading from '../components/Loading';
import Grid from '@material-ui/core/Grid';
import PeopleIcon from '@material-ui/icons/People';

const PlacementTeam = () => {
  const [loading, setLoding] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const designations = [
      'Faculty Incharge',
      'Senior Assistant',
      'Student Co-ordinator',
      'Internship Co-ordinator',
      'Departmental Representative',
      'Web Development Team',
    ];

    instance
      .get('main/core_team_contacts/')
      .then((res) => {
        var placementTeam = [];
        designations.forEach((designation) => {
          placementTeam.push(
            res.data.filter((member) =>
              member.designation.designation.includes(designation)
            )
          );
        });
        setData(placementTeam);
      })
      .then(() => setLoding(false))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={{ height: 'auto', width: '100%' }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <PaperHeader data={{ icon: PeopleIcon, heading: 'Placement Team' }} />
          {data.map((dt) => {
            return (
              <div>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                  spacing={5}
                  style={{ width: '100%', margin: '2rem auto 2rem auto' }}
                >
                  {dt.map((member) => {
                    return (
                      <Grid
                        key={member.user.email}
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                      >
                        <ContactCard data={member} />
                      </Grid>
                    );
                  })}
                </Grid>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default PlacementTeam;
