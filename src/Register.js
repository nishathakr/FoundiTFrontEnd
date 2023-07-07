import * as React from 'react';
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

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');
  const [activeStep, setActiveStep] = React.useState(0);
  const [showPreviousFields, setShowPreviousFields] = React.useState(true);
  const [resume, setResume] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [gender, setGender] = React.useState('');
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

  const steps = ['Basic Information', 'Profesional Details' ,'Verification Cener','Employment Detail' ,'Job Preference' ];<p>Start Job Search</p>

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
      // Check required fields for Experience step
      if (!gender) {
        errors.genderError = true;
        isValid = false;
      }
      if (!experience) {
        errors.experienceError = true;
        isValid = false;
      }
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

  // const handleBack = () => {
  //   if (activeStep === 0) {
  //     // Clear file input value when navigating back from the first step
  //     setResume('');
  //   }
  //   setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   setShowPreviousFields(true);
  // };

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
              {/* <DialogContentText>
              
              </DialogContentText> */}
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
      {/* <Button onClick={handleBack}>Back</Button> */}
      <Button onClick={handleClose}>Cancel</Button>
      <Button onClick={handleContinue}>Continue</Button>
    </>
  )}
</DialogActions>


      </Dialog>
    </div>
  );
}
