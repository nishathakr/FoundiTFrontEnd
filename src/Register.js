import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OtpInput from 'react-otp-input';
import OutlinedInput from '@mui/material/OutlinedInput';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  '.net',
  'react.js',
  'angular.js',
  'Mysql',
  'view.js',
  'next.js',
  'javascript',
  'Php',
  'c++',
  'c#',
];

const ITEM_HEIGHTS = 48;
const ITEM_PADDING_TOPS = 8;
const MenuPropss = {
  PaperProps1: {
    style: {
      maxHeight: ITEM_HEIGHTS * 4.5 + ITEM_PADDING_TOPS,
      width: 250,
    },
  },
};

const names1 = [
  'IT/Computers-Software',
  'Mechanical',
 
];



const ITEM_HEIGHTSS = 48;
const ITEM_PADDING_TOPSS = 8;
const MenuPropsss = {
  PaperProps2: {
    style: {
      maxHeight: ITEM_HEIGHTSS * 4.5 + ITEM_PADDING_TOPSS,
      width: 250,
    },
  },
};

const names2 = [
  'IT/Computers-Software Development',
  'Mechanical-Engineer-other',
  'Electrical-Engineer-other',

 
];


const ITEM_HEIGHTSSS = 48;
const ITEM_PADDING_TOPSSS = 8;
const MenuPropssss = {
  PaperProps3: {
    style: {
      maxHeight: ITEM_HEIGHTSSS * 4.5 + ITEM_PADDING_TOPSSS,
      width: 250,
    },
  },
};

const names3 = [
  'Developer',
  'Database-Admistrator',
  'Designer',
  'Hr',
  'Business anaylst',

 
];



export default function Register() {

  const [personName, setPersonName] = React.useState([]);
  const [personName1, setPersonName1] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [personName3, setPersonName3] = React.useState([]);


  const handleChange1 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };


  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange3 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName3(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const [otp, setOtp] = useState('');
  const handleChange = (event) => {
    setlocation(event.target.value);
  };
  const [location, setlocation] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [activeStep, setActiveStep] = React.useState(0);
  const [showPreviousFields, setShowPreviousFields] = React.useState(true);
  const [resume, setResume] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [gender, setGender] = React.useState('female');
  const [educationtype, seteducationtype] = React.useState('full time');
  
  const [experience, setExperience] = React.useState('');
  const [formErrors, setFormErrors] = React.useState({
    resumeError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
    mobileError: false,
    genderError: false,
    experienceError: false,
  });

  const steps = ['Basic Information', 'Verification Center', 'Professional Details', 'Education Details', 'Job Preference'];

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleContinue = () => {
    const errors = {};
    let isValid = true;

    if (activeStep === 0) {
      // Check required fields for Personal Information step
      if (!resume) {
        errors.resumeError = true;
        isValid = false;
      }
      if (!fullName) {
        errors.fullNameError = true;
        isValid = false;
      }
      if (!email) {
        errors.emailError = true;
        isValid = false;
      }
      if (!password) {
        errors.passwordError = true;
        isValid = false;
      }
      if (!mobile) {
        errors.mobileError = true;
        isValid = false;
      }
    } else if (activeStep === 1) {
      // Check required fields for Verification Center step
      if (!otp) {
        errors.otpError = true;
        isValid = false;
      }
    } else if (activeStep === 2) {
      // Check required fields for Professional Details step
      if (!experience) {
        errors.experienceError = true;
        isValid = false;
      }
    }

    else if (activeStep === 3) {
      // Check required fields for Education Details step
     
    }

    else if (activeStep === 4) {
      // Check required fields for Job Preference step
     
    }

    if (isValid) {
      if (activeStep === steps.length - 1) {
        // Last step, submit the form
        // Add your form submission logic here
        handleClose();
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setShowPreviousFields(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const descriptionElementRef = React.useRef(null);

  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  return (
    <div>
      <li onClick={handleClickOpen('paper')}>Register</li>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <span style={{ marginRight: "340px" }}>Sign Up</span>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#dd4b39" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-google" />
          </a>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#55acee", marginLeft: "10px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter" />
          </a>
          <a
            className="btn btn-primary"
            style={{ backgroundColor: "#3b5998", marginLeft: "10px" }}
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f" />
          </a>
        </DialogTitle>

        <DialogContent dividers={scroll === 'paper'}>
          
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <br />
          
          {showPreviousFields ? (
            <>
            <br></br>
            <h4 className='text-primary '>Basic Information</h4>
            <p></p>
            <br></br>
         <TextField
                autoFocus
                margin="dense"
                id="Upload Resume"
                label="Upload Resume"
                type="file"
                fullWidth
                variant="standard"
                value={resume}
                error={formErrors.resumeError}
                helperText={formErrors.resumeError ? 'Please upload a resume' : ''}
                onChange={(e) => setResume(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="FullName"
                label="Full Name"
                type="text"
                fullWidth
                variant="standard"
                value={fullName}
                error={formErrors.fullNameError}
                helperText={formErrors.fullNameError ? 'Please enter your full name' : ''}
                onChange={(e) => setFullName(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="EmailId"
                label="Email ID"
                type="Email"
                fullWidth
                variant="standard"
                value={email}
                error={formErrors.emailError}
                helperText={formErrors.emailError ? 'Please enter a valid email address' : ''}
                onChange={(e) => setEmail(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="Password"
                label="Password"
                type="Password"
                fullWidth
                variant="standard"
                value={password}
                error={formErrors.passwordError}
                helperText={formErrors.passwordError ? 'Please enter a password' : ''}
                onChange={(e) => setPassword(e.target.value)}
              />

              <TextField
                autoFocus
                margin="dense"
                id="Mobile Number"
                label="Mobile Number"
                type="Number"
                fullWidth
                variant="standard"
                value={mobile}
                error={formErrors.mobileError}
                helperText={formErrors.mobileError ? 'Please enter a valid mobile number' : ''}
                onChange={(e) => setMobile(e.target.value)}
              />
<br></br> <br></br>
<FormControl
  error={formErrors.genderError}
  component="fieldset"
>
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup
    row
    aria-label="gender"
    name="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  >
    <FormControlLabel
      value="female"
      control={<Radio />}
      label="Female"
    />
    <FormControlLabel
      value="male"
      control={<Radio />}
      label="Male"
    />
    <FormControlLabel
      value="other"
      control={<Radio />}
      label="Other"
    />
  </RadioGroup>
  {formErrors.genderError && (
    <p style={{ color: 'red', margin: '0' }}>
      Please select your gender
    </p>
  )}
</FormControl>


            </>
          ) : (
            <>
              {activeStep === 1 && (
                <>
                  {/* Verification Center Fields */}
                  <br />
                  <h5 className='text-primary'>Enter Verification Code</h5><br></br>
                  <p>We have sent an OTP to your phone number</p>
                  <br />
                  <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>---</span>}
                    renderInput={(props) => (
                      <input
                        {...props}
                        style={{
                          width: "60px",
                          height: "40px",
                          textAlign: "center",
                          fontSize: "16px",
                        }}
                      />
                    )}
                  />
                  <br />
                </>
              )}

              {activeStep === 2 && (
                <>
                <br></br>  
                <h4 className='text-primary'>Professional Details</h4>
                <p>Help us understand you better</p>
                <br></br>
                  <FormControl
                    error={formErrors.experienceError}
                    component="fieldset"
                  >
                    <FormLabel component="legend">Experience</FormLabel>
                    <RadioGroup
                      row
                      aria-label="experience"
                      name="experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <FormControlLabel
                        value="I am Fresher"
                        control={<Radio />}
                        label="I am Fresher"
                      />
                      <FormControlLabel
                        value="I am Experienced"
                        control={<Radio />}
                        label="I am Experienced"
                      />
                    </RadioGroup>
                    {formErrors.experienceError && (
                      <p style={{ color: 'red', margin: '0' }}>
                        Please select your experience
                      </p>
                    )}
                    
                  </FormControl>
                   <br></br>
              <br></br>
              <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Current location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={location}
          label="Current location"
          onChange={handleChange}
        >
          <MenuItem value={10}>Chandigarh</MenuItem>
          <MenuItem value={20}>Delhi</MenuItem>
          <MenuItem value={30}>Himachal</MenuItem>
          <MenuItem value={30}>Mumbai</MenuItem>
          <MenuItem value={30}>Chennai</MenuItem>
          <MenuItem value={30}>Hyderabad</MenuItem>
        </Select>
      </FormControl>
    </Box>
                </>
              )}



{activeStep === 3 && (
                <>
<br></br>
<h4 className='text-primary'>Education Details</h4>
<p>Tell recruiters about your educational qualifications</p>
<br></br>

               <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Highest Qualification</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
       
          label="Current location"
       
        >
          <MenuItem value="10th">10th</MenuItem>
          <MenuItem value="12th" >12th</MenuItem>
          <MenuItem value="Bca" >Bca</MenuItem>
          <MenuItem value="Btech" >Btech</MenuItem>
          <MenuItem value="llb" >llb</MenuItem>
          <MenuItem value="Phd" >Phd</MenuItem>
         




          
        </Select>
      </FormControl>
    </Box>
            <br></br>

    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select your field</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
       
          label="Select your field"
       
        >
          <MenuItem value="Web Developer">Web Developer</MenuItem>
          <MenuItem value="Web Designer" >Web Designer</MenuItem>
          <MenuItem value="Business Analyst" >Business Analyst</MenuItem>
          <MenuItem value="Teacher" >Teacher</MenuItem>
          <MenuItem value="Doctor" >Doctor</MenuItem>
          <MenuItem value="Doctor" >Doctor</MenuItem>
          <MenuItem value="Human Resurces" >Human Resurces</MenuItem>
          <MenuItem value="Data Operator" >Data Operator</MenuItem>

        </Select>
      </FormControl>
    </Box>
<br></br>
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">University/Insitute</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
       
          label="University/Insitute"
       
        >
          <MenuItem value="PTU">Punjab Technical University</MenuItem>
          <MenuItem value="Web Designer" >Chandigarh University</MenuItem>
          <MenuItem value="CenterUniverity" >Center University</MenuItem>
          <MenuItem value="Hptu" >Hptu</MenuItem>
          <MenuItem value="J&K" >J&K University</MenuItem>
         

        </Select>
      </FormControl>
    </Box>
<br></br>

<TextField
  autoFocus
  margin="dense"
  id="Year of Graduation"
  label="Year of Graduation"
  type="date"
  fullWidth
  variant="standard"
/>

<br></br> <br></br>
<FormControl
  // error={formErrors.genderError}
  component="fieldset"
>
  <FormLabel component="legend">Education Type</FormLabel>
  <RadioGroup
    row
    aria-label="Education"
    name="Education"
    value={educationtype}
    onChange={(e) => seteducationtype(e.target.value)}
  >
    <FormControlLabel
      value="full time"
      control={<Radio />}
      label="Full time"
    />
    <FormControlLabel
      value="Part time"
      control={<Radio />}
      label="Part time"
    />
    <FormControlLabel
      value="Correspondence"
      control={<Radio />}
      label="Other"
    />
  </RadioGroup>
  {/* {formErrors.genderError && (
    <p style={{ color: 'red', margin: '0' }}>
      Please select your gender
    </p>
  )} */}
</FormControl>


                </>
              )}


{activeStep === 4 && (
                <>
<h4 className='text-primary'>Job Preference</h4>
<p>Hepls to find better matching jobs</p>
<br></br>
<div>
      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel id="demo-multiple-checkbox-label">Key Skills</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={personName}
          onChange={handleChange1}
          input={<OutlinedInput label="Key Skills" />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem key={name} value={name}>
              <Checkbox checked={personName.indexOf(name) > -1} />
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

<br></br> <br></br>

      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel id="demo-multiple-checkbox-labels">Industry</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-labels"
          id="demo-multiple-checkboxs"
          multiple
          value={personName1}
          onChange={handleChange2}
          input={<OutlinedInput label="Key Skills" />}
          renderValue={(selected) => selected.join(', ')}
          MenuPropss={MenuPropss}
        >
          {names1.map((name1) => (
            <MenuItem key={name1} value={name1}>
              <Checkbox checked={personName1.indexOf(name1) > -1} />
              <ListItemText primary={name1} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <br></br> <br></br>

      <FormControl sx={{ m: 1, width: 500 }}>
        <InputLabel id="demo-multiple-checkbox-labelss">Department/Function</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-labelss"
          id="demo-multiple-checkboxss"
          multiple
          value={personName2}
          onChange={handleChange3}
          input={<OutlinedInput label="Department/Function" />}
          renderValue={(selected) => selected.join(', ')}
          MenuPropsss={MenuPropsss}
        >
          {names2.map((name2) => (
            <MenuItem key={name2} value={name2}>
              <Checkbox checked={personName2.indexOf(name2) > -1} />
              <ListItemText primary={name2} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>


      <br></br> <br></br>

<FormControl sx={{ m: 1, width: 500 }}>
  <InputLabel id="demo-multiple-checkbox-labelsss">Preferred Role</InputLabel>
  <Select
    labelId="demo-multiple-checkbox-labelsss"
    id="demo-multiple-checkboxsss"
    multiple
    value={personName3}
    onChange={handleChange4}
    input={<OutlinedInput label="Preferred Role" />}
    renderValue={(selected) => selected.join(', ')}
    MenuPropssss={MenuPropssss}
  >
    {names3.map((name3) => (
      <MenuItem key={name3} value={name3}>
        <Checkbox checked={personName3.indexOf(name3) > -1} />
        <ListItemText primary={name3} />
      </MenuItem>
    ))}
  </Select>
</FormControl>

    </div>

                </>
              )}


            </>
            
          )}
          
        </DialogContent>
        <DialogActions>
          {showPreviousFields ? (
            <>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleContinue}>Continue</Button>
            </>
          ) : (
            <>
              {/* {activeStep > 0 && (
                <Button onClick={() => setShowPreviousFields(true)}>Back</Button>
              )} */}
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleContinue}>Continue</Button>
            </>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
