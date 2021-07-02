import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SuggestionInquiryForm({ p1, p2 }) {
  const handleChangecat = (event) => {
    p2({ ...p1, ...{ category: event.target.value } });
  };
  const handleChangesubject = (event) => {
    p2({ ...p1, ...{ subject: event.target.value } });
  };
  const handleChangetext = (event) => {
    p2({ ...p1, ...{ text: event.target.value } });
  };
  const handleChangesendto = (event) => {
    p2({ ...p1, ...{ sendto: event.target.value } });
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Category *</InputLabel>
            <Select fullWidth value={p1.category} onChange={handleChangecat}>
              <MenuItem value="Suggestion">Suggestion</MenuItem>
              <MenuItem value="Inquiry">Inquiry</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel>Send mail to department of *</InputLabel>
            <Select fullWidth value={p1.sendto} onChange={handleChangesendto}>
              <ListSubheader>Suggestion</ListSubheader>
              <MenuItem value="noreply@localhost.com">Office name</MenuItem>
              <ListSubheader>Inquiry</ListSubheader>
              <MenuItem value="ananya@iitj.ac.in">Chemistry</MenuItem>
              <MenuItem value="pkdammala@iitj.ac.in">
                Civil and Infrastructure Engineering
              </MenuItem>
              <MenuItem value="mishra@iitj.ac.in">
                Computer Science and Engineering
              </MenuItem>
              <MenuItem value="ruhisonal@iitj.ac.in">
                Humanites and Social Sciences
              </MenuItem>
              <MenuItem value="abir@iitj.ac.in">
                Metallurgical and Materials Engineering
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="subject"
            name="subject"
            label=" subject"
            fullWidth
            multiline
            rowsMax={4}
            autoComplete=" subject"
            value={p1.subject}
            onChange={handleChangesubject}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="text"
            name="text"
            label=" text"
            fullWidth
            multiline
            rowsMax={8}
            autoComplete=" text"
            value={p1.text}
            onChange={handleChangetext}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
