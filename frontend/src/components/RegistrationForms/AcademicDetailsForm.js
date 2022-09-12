import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

export default function AcademicDetailsForm({ p1, p2 }) {
  const handleChangegpa = (event) => {
    p2({ ...p1, ...{ gpa: event.target.value } });
  };
  const handleChangeugclg = (event) => {
    p2({ ...p1, ...{ ugclg: event.target.value } });
  };
  const handleChangeugpa = (event) => {
    p2({ ...p1, ...{ ugpa: event.target.value } });
  };
  const handleChangeugyear = (event) => {
    p2({ ...p1, ...{ ugyear: event.target.value } });
  };
  const handleChangeugprbr = (event) => {
    p2({ ...p1, ...{ ugprbr: event.target.value } });
  };
  const handleChangejeeair = (event) => {
    p2({ ...p1, ...{ jeeair: event.target.value } });
  };
  const handleChangeby12 = (event) => {
    p2({ ...p1, ...{ by12: event.target.value } });
  };
  const handleChangeby10 = (event) => {
    p2({ ...p1, ...{ by10: event.target.value } });
  };
  const handleChangebn12 = (event) => {
    p2({ ...p1, ...{ bn12: event.target.value } });
  };
  const handleChangebn10 = (event) => {
    p2({ ...p1, ...{ bn10: event.target.value } });
  };
  const handleChangebp12 = (event) => {
    p2({ ...p1, ...{ bp12: event.target.value } });
  };
  const handleChangebp10 = (event) => {
    p2({ ...p1, ...{ bp10: event.target.value } });
  };
  return (
    <React.Fragment>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <TextField
            required
            name="GPA"
            label="GPA"
            type="number"
            fullWidth
            autoComplete="GPA"
            value={p1.gpa}
            onChange={handleChangegpa}
            helperText="Please select your Fill in your current GPA here(all students). For first year PG students who don't have a GPA yet, fill in the GPA of your previous qualification"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="U.G College"
            label="U.G College"
            type="text"
            fullWidth
            autoComplete="U.G College"
            helperText="This field is only for P.G. students"
            value={p1.ugclg}
            onChange={handleChangeugclg}
          />
          <TextField
            name="U.G GPA"
            label="U.G GPA"
            type="number"
            fullWidth
            autoComplete="U.G GPA"
            helperText="This field is only for P.G. students"
            value={p1.ugpa}
            onChange={handleChangeugpa}
          />
          <TextField
            name="U.G Passing Year"
            label="U.G Passing Year"
            type="number"
            fullWidth
            autoComplete="U.G Passing Year"
            helperText="This field is only for P.G. students"
            value={p1.ugyear}
            onChange={handleChangeugyear}
          />
          <TextField
            name="U.G Program And Branch"
            label="U.G Program And Branch"
            type="text"
            fullWidth
            autoComplete="U.G Program And Branch"
            helperText="This field is only for P.G. students"
            value={p1.ugprbr}
            onChange={handleChangeugprbr}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="JEE AIR"
            label="JEE AIR"
            type="number"
            fullWidth
            autoComplete="JEE AIR"
            value={p1.jeeair}
            onChange={handleChangejeeair}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="12th Board Year"
            label="12th Board Year"
            type="number"
            fullWidth
            autoComplete="12th Board Year"
            error={p1.by12.length > 4}
            helperText={
              p1.by12.length > 4
                ? "Length of 12th Board Year can't be more than 4"
                : ''
            }
            value={p1.by12}
            onChange={handleChangeby12}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="10th Board Year"
            label="10th Board Year"
            type="number"
            fullWidth
            autoComplete="10th Board Year"
            error={p1.by10.length > 4}
            helperText={
              p1.by10.length > 4
                ? "Length of 10th Board Year can't be more than 4"
                : ''
            }
            value={p1.by10}
            onChange={handleChangeby10}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="12th Board Name"
            label="12th Board Name"
            fullWidth
            autoComplete="12th Board Name"
            error={p1.bn12.length > 100}
            helperText={
              p1.bn12.length > 100
                ? "Length of 12th Board Name can't be more than 100"
                : ''
            }
            value={p1.bn12}
            onChange={handleChangebn12}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="10th Board Name"
            label="10th Board Name"
            fullWidth
            autoComplete="10th Board Name"
            error={p1.bn10.length > 100}
            helperText={
              p1.bn10.length > 100
                ? "Length of 10th Board Name can't be more than 100"
                : ''
            }
            value={p1.bn10}
            onChange={handleChangebn10}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="12th Board %"
            label="12th Board %"
            type="number"
            fullWidth
            autoComplete="12th Board %"
            error={p1.bp12.length > 10}
            helperText={
              p1.bp12.length > 10
                ? "Length of 12th Board %/CGPA can't be more than 10"
                : ''
            }
            value={p1.bp12}
            onChange={handleChangebp12}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            name="10th Board %/CGPA"
            label="10th Board %/CGPA"
            type="number"
            fullWidth
            autoComplete="10th Board %/CGPA"
            error={p1.bp10.length > 10}
            helperText={
              p1.bp10.length > 10
                ? "Length of 10th Board %/CGPA can't be more than 10"
                : ''
            }
            value={p1.bp10}
            onChange={handleChangebp10}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
