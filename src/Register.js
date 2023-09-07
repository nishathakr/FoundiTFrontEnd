import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
//import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import OutlinedInput from "@mui/material/OutlinedInput";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";
//import { Link, redirect } from "react-router-dom";
//import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Register() {
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
    ".net",
    "react.js",
    "angular.js",
    "Mysql",
    "view.js",
    "next.js",
    "javascript",
    "Php",
    "c++",
    "c#",
    "hjgdfj",
    "uiui",
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

  const names1 = ["IT/Computers-Software", "Mechanical", "hgdfhj"];

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
    "IT/Computers-Software Development",
    "Mechanical-Engineer-other",
    "Electrical-Engineer-other",
    "dgfdg",
  ];

  const ITEM_HEIGHTSSSSS = 48;
  const ITEM_PADDING_TOPSSSSS = 8;
  const MenuPropssssss = {
    PaperProps4: {
      style: {
        maxHeight: ITEM_HEIGHTSSSSS * 4.5 + ITEM_PADDING_TOPSSSSS,
        width: 250,
      },
    },
  };

  const names3 = [
    "Developer",
    "Database-Admistrator",
    "Designer",
    "Hr",
    "Business anaylst",
    "dgffdgg",
  ];

  const ITEM_HEIGHTSSSS = 48;
  const ITEM_PADDING_TOPSSSS = 8;
  const MenuPropsssss = {
    PaperProps3: {
      style: {
        maxHeight: ITEM_HEIGHTSSSS * 4.5 + ITEM_PADDING_TOPSSSS,
        width: 250,
      },
    },
  };


  const names4 = [
    "kangra-Himachal",
    "Mohali",
    "Chandigarh",
    "Delhi",
    "Mumbai",
    "Hydrabaad",
    "banglore",
    "Chennai",
    "UP",
    "Pathankot",
    "J&K",
    "dfgfdgfdg",
  ];

  // Handle changes for each Select field
  const handleChange1 = (event) => {
    // alert("hi");
    setPersonName(event.target.value);
  };

  const handleChange2 = (event) => {
    setPersonName1(event.target.value);
  };

  const handleChange3 = (event) => {
    setPersonName2(event.target.value);
  };

  const handleChange33 = (event) => {
    setPersonName3(event.target.value);
  };

  
const MAX_SELECTIONS = 3;
  const handleChange333 = (event) => {
    const selectedValues = event.target.value;
    if (selectedValues.length <= MAX_SELECTIONS) {
      setPersonName4(selectedValues);
      setFormErrors({ personName4Error: false });
    } else {
      setFormErrors({ personName4Error: true });
    }
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");

  const handleChangePhoneNumber = (event) => {
    const {
      target: { value },
    } = event;

    // Remove any non-digit characters from the input
    const cleanedPhoneNumber = value.replace(/\D/g, "");

    // Check if the cleaned number starts with +91, if not, add it
    if (cleanedPhoneNumber.startsWith("91")) {
      setPhoneNumber("+91" + cleanedPhoneNumber.slice(2)); // Add +91 and slice the first 2 characters (91)
    } else if (!cleanedPhoneNumber.startsWith("+")) {
      setPhoneNumber("+91" + cleanedPhoneNumber); // Add +91 if the number doesn't start with +
    } else {
      setPhoneNumber(cleanedPhoneNumber); // Otherwise, set the cleaned number as it is
    }
  };

  const handleChange4 = (event) => {
    const {
      target: { value },
    } = event;

    setExperience(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const handleChange5 = (event) => {
    const {
      target: { value },
    } = event;
    setEducationtype(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const [otp, setOtp] = useState("");
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setLocation(
      // On autofill we get a stringified value.
      typeof value === "string" ? [value] : value // Wrap value in an array if it's not already an array
    );
  };

  const [location, setLocation] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");
  const [activeStep, setActiveStep] = React.useState(0);
  const [showPreviousFields, setShowPreviousFields] = React.useState(true);

  const [imageFile, setimageFile] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [gender, setGender] = React.useState("female");

  const [highestQualification, setHighestQualification] = React.useState("");
  const [fieldOfStudy, setFieldOfStudy] = React.useState("");
  const [university, setUniversity] = React.useState("");
  const [graduationYear, setGraduationYear] = React.useState("");

  const [experience, setExperience] = React.useState("");
  const [educationtype, setEducationtype] = React.useState([]);

  const [personName, setPersonName] = React.useState([]);
  const [personName1, setPersonName1] = React.useState([]);
  const [personName2, setPersonName2] = React.useState([]);
  const [personName3, setPersonName3] = React.useState([]);
  const [personName4, setPersonName4] = React.useState([]);

  


 // const navigate = useNavigate();

  const handleChangeFile = (event) => {
    const file = event.target.files[0]; // Get the selected file from the event
    setimageFile(file); // Set the selected file in the state
  };

  const [formErrors, setFormErrors] = React.useState({
    resumeError: false,
    fullNameError: false,
    emailError: false,
    passwordError: false,
    mobileError: false,
    genderError: false,
    experienceError: false,
    locationError: false,
    fieldOfStudyError: false,
    universityError: false,
    graduationYearError: false,
    educationTypeError: false,

    personNameError: false,
    personName1Error: false,
    personName2Error: false,
    personName3Error: false,
    personName4Error: false,
  });

  const [jobPreference, setJobPreference] = React.useState({
    keySkills: [],
    industry: [],
    department: [],
    preferredRole: [],
  });

  const steps = [
    "Basic Information",
    "Professional Details",
    "Education Details",
    "Job Preference",
  ];

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [errors, setErrors] = useState({});
  const handleContinue = () => {
    const errors = {};
    let isValid = true;

    if (activeStep === 0) {
      // Check required fields for Personal Information step
      // if (!imageFile) {
      //   errors.resumeError = true;
      //   isValid = false;
      // }
      if (!name) {
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
      if (!phoneNumber) {
        errors.mobileError = true;
        isValid = false;
      }
    } else if (activeStep === 1) {
      // Check required fields for Professional Details step
      if (!experience) {
        errors.experienceError = true;
        isValid = false;
      }
      if (!location) {
        errors.locationError = true;
        isValid = false;
      }
    } else if (activeStep === 2) {
      if (!highestQualification) {
        errors.highestQualificationError = true;
        isValid = false;
      }

      if (!fieldOfStudy) {
        errors.fieldOfStudyError = true;
        isValid = false;
      }

      if (!university) {
        errors.universityError = true;
        isValid = false;
      }

      if (!graduationYear) {
        errors.graduationYearError = true;
        isValid = false;
      }

      if (!educationtype) {
        errors.educationTypeError = true;
        isValid = false;
      }
    } else if (activeStep === 3) {
      // Check required fields for Job Preference step
      // if (!personName) {
      //   alert("errorset");
      //   errors.personNameError = true;
      //   isValid = false;
      // }
    } else if (activeStep === 4) {
      // Check required fields for Verification Center step
      if (!otp) {
        errors.otpError = true;
        isValid = false;
      }
    }

    if (isValid) {
      if (activeStep === steps.length - 1) {
        // Last step, submit the form
        // Add your form submission logic here
        
      } else {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setShowPreviousFields(false);
      }
    } else {
      setFormErrors(errors);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setPhoneNumber('');
    setGender('');
    setExperience('');
    setLocation('');
    setHighestQualification('');
    setFieldOfStudy('');
    setUniversity('');
    setGraduationYear('');
    setEducationtype([]);
    setPersonName([]);
    setPersonName1([]);
    setPersonName2([]);
    setPersonName3([]);
    setPersonName4([]);
    setShowPreviousFields(true); // Assuming you want to reset this state as well
  };

  //const [registrationStatus, setSuccessMessage] = useState("");


  const handleSubmit = async () => {
    let isValid = true;
    const errors = {};
    // console.log("myconsole");
    // console.log(personName);
    if (personName.length === 0) {
      errors.personNameError = true;
      isValid = false;
      setFormErrors(errors);
    }

    if (personName1.length === 0) {
      errors.personName1Error = true;
      isValid = false;
      setFormErrors(errors);
    }

    if (personName2.length === 0) {
      errors.personName2Error = true;
      isValid = false;
      setFormErrors(errors);
    }

    if (personName3.length === 0) {
      errors.personName3Error = true;
      isValid = false;
      setFormErrors(errors);
    }

    if (personName4.length === 0) {
      errors.personName4Error = true;
      isValid = false;
      setFormErrors(errors);
    }
    if (isValid) {
      try {
        const formData = new FormData();
        // formData.append("ImageFile", imageFile);
        formData.append("Name", name);
        formData.append("Email", email);
        formData.append("Password", password);
        formData.append("PhoneNumber", phoneNumber);
        localStorage.setItem("PhoneNumber", phoneNumber);

        formData.append("Gender", gender);
        //Experince Fields
        formData.append("Experience", experience);
        formData.append("CurrentLocation", location);

        //Education Details

        formData.append("HighestQualification", highestQualification);
        formData.append("SelectYourField", fieldOfStudy);
        formData.append("University_Insitute", university);
        formData.append("YearOfGraduation", graduationYear);
        formData.append("EducationType", educationtype);

        // Job preference
        formData.append("KeySkills", personName.join(","));
        formData.append("Industry", personName1.join(","));
        formData.append("Department", personName2.join(","));
        formData.append("PrefrredRole", personName3.join(","));
        formData.append("PrefrredLocation", personName4.join(","));

        // Append other relevant fields from the form
        const response = await axios.post(
          "https://localhost:7177/api/Regsiter/api/RegisterUser",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
        if (response.status === 200) {
          debugger;
          handleClose();
          Swal.fire({
            icon: 'success',
            title: 'Registration Successful!',
            text: 'You can now proceed to the next step.',
          });

           resetForm();
        }
          
         // navigate("/Otp");
      } catch (error) {
        handleClose();
        Swal.fire({
          icon: 'error',
          title: 'Registration Failed',
          text: 'An error occurred during registration.',
        });
        resetForm();
  
       // navigate("/Otp");
        if (error.response) {
          handleClose();
          console.error("Response Error:", error.response.data);
          if (error.response.status === 400 && error.response.data.errors) {
            const validationErrors = error.response.data.errors;
            console.log(validationErrors);
          }
        } else if (error.request) {
          console.error("Request Error:", error.request);
        } else {
          console.error("Error:", error.message);
        }
      }
    }
  };

  //   const newErrors = {};

  //   if (personName.length === 0) {
  //     newErrors.skillsError = 'Please select at least one Key Skill';
  //   }

  //   if (personName1.length === 0) {
  //     newErrors.industryError = 'Please select Industry';
  //   }

  //   if (personName2.length === 0) {
  //     newErrors.departmentError = 'Please select at least one Department/Function';
  //   }

  //   if (personName3.length === 0) {
  //     newErrors.roleError = 'Please select at least one Preferred Role';
  //   }

  //   if (personName4.length === 0) {
  //     newErrors.locationError = 'Please select at least one Preferred Location';
  //   }

  //   setErrors(newErrors);

  //   return Object.keys(newErrors).length === 0;
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
      <li onClick={handleClickOpen("paper")}>Register</li>
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

        <DialogContent dividers={scroll === "paper"}>
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {/* {registrationStatus && (
      <DialogContentText className="success-message">
        {registrationStatus}
      </DialogContentText>
    )} */}
          <br />

          {showPreviousFields ? (
            <>
              <br></br>
              <h4 className="text-primary "></h4>
              <p></p>
              <br></br>
              {/* <TextField
                autoFocus
                margin="dense"
                id="Upload Resume"
                label="ImageFile"
                type="file"
                fullWidth
                variant="standard"
                // Update the value prop and add onChange event to handle file selection
                // The value prop should be an empty string or null; you can't set the value of a file input
                value={null}
                error={formErrors.resumeError}
                helperText={
                  formErrors.resumeError ? "Please upload a resume" : ""
                }
                onChange={handleChangeFile} // Call the new handleChangeFile function for file selection
              /> */}
              <TextField
                autoFocus
                margin="dense"
                id="FullName"
                label="Full Name"
                type="text"
                fullWidth
                variant="standard"
                value={name}
                error={formErrors.fullNameError}
                helperText={
                  formErrors.fullNameError ? "Please enter your full name" : ""
                }
                onChange={(e) => setName(e.target.value)}
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
                helperText={
                  formErrors.emailError
                    ? "Please enter a valid email address"
                    : ""
                }
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
                value={password}
                error={formErrors.passwordError}
                helperText={
                  formErrors.passwordError
                    ? "Please enter a password exactly 8 characters long"
                    : ""
                }
                onChange={(e) => {
                  const password = e.target.value;
                  if (password.length === 8) {
                    setPassword(password);
                    setFormErrors({ ...formErrors, passwordError: false });
                  } else {
                    setPassword(password);
                    setFormErrors({ ...formErrors, passwordError: true });
                  }
                }}
              />
              <TextField
                autoFocus
                margin="dense"
                id="Mobile Number"
                label="Mobile Number"
                type="phoneNumber"
                fullWidth
                variant="standard"
                value={phoneNumber}
                error={formErrors.mobileError}
                helperText={
                  formErrors.mobileError
                    ? "Please enter a valid mobile number"
                    : ""
                }
                onChange={handleChangePhoneNumber}
              />
              <br></br> <br></br>
              <FormControl error={formErrors.genderError} component="fieldset">
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
                </RadioGroup>
                {formErrors.genderError && (
                  <p style={{ color: "red", margin: "0" }}>
                    Please select your gender
                  </p>
                )}
              </FormControl>
            </>
          ) : (
            <>
              {activeStep === 1 && (
                <>
                  <br />
                  <h4 className="text-primary">Professional Details</h4>
                  <p>Help us understand you better</p>
                  <br />
                  <FormControl
                    setErrors={formErrors.experienceError}
                    component="fieldset"
                  >
                    <FormLabel component="legend">Experience</FormLabel>
                    <RadioGroup
                      row
                      aria-label="experience"
                      name="Experience"
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                    >
                      <FormControlLabel
                        value="Fresher"
                        control={<Radio />}
                        label="I am Fresher"
                      />
                      <FormControlLabel
                        value="Experienced"
                        control={<Radio />}
                        label="I am Experienced"
                      />
                    </RadioGroup>
                    {formErrors.experienceError && (
                      <p style={{ color: "red", margin: "0" }}>
                        Please select your experience
                      </p>
                    )}
                  </FormControl>
                  <br />
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Current location
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={location}
                        label="Current location"
                        onChange={handleChange}
                        setErrors={formErrors.locationError} // Apply error state to the Select component
                      >
                        <MenuItem value="Chandigarh">Chandigarh</MenuItem>
                        <MenuItem value="Delhi">Delhi</MenuItem>
                        <MenuItem value="Himachal">Himachal</MenuItem>
                        <MenuItem value="Mumbai">Mumbai</MenuItem>
                        <MenuItem value="Chennai">Chennai</MenuItem>
                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                      </Select>
                      {formErrors.locationError && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please enter your current location
                        </p>
                      )}
                    </FormControl>
                  </Box>
                </>
              )}
              {activeStep === 2 && (
                <>
                  <br></br>
                  <h4 className="text-primary">Education Details</h4>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Highest Qualification
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={highestQualification}
                        label="Highest Qualification"
                        setErrors={formErrors.highestQualificationError}
                        onChange={(e) =>
                          setHighestQualification(e.target.value)
                        }
                      >
                        <MenuItem value="10th">10th</MenuItem>
                        <MenuItem value="12th">12th</MenuItem>
                        <MenuItem value="Bca">Bca</MenuItem>
                        <MenuItem value="Btech">Btech</MenuItem>
                        <MenuItem value="llb">llb</MenuItem>
                        <MenuItem value="Phd">Phd</MenuItem>
                      </Select>
                      {formErrors.highestQualificationError && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please enter your qualification
                        </p>
                      )}
                    </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Select your field
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fieldOfStudy}
                        setErrors={formErrors.fieldOfStudyError}
                        label="Select your field"
                        onChange={(e) => setFieldOfStudy(e.target.value)}
                      >
                        <MenuItem value="Web Developer">Web Developer</MenuItem>
                        <MenuItem value="Web Designer">Web Designer</MenuItem>
                        <MenuItem value="Business Analyst">
                          Business Analyst
                        </MenuItem>
                        <MenuItem value="Teacher">Teacher</MenuItem>
                        <MenuItem value="Doctor">Doctor</MenuItem>
                        <MenuItem value="Doctor">Doctor</MenuItem>
                        <MenuItem value="Human Resurces">
                          Human Resurces
                        </MenuItem>
                        <MenuItem value="Data Operator">Data Operator</MenuItem>
                      </Select>
                      {formErrors.fieldOfStudyError && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please enter your field
                        </p>
                      )}
                    </FormControl>
                  </Box>
                  <br />
                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        University/Institute
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={university}
                        setErrors={formErrors.universityError}
                        label="University/Institute"
                        onChange={(e) => setUniversity(e.target.value)}
                      >
                        <MenuItem value="PTU">
                          Punjab Technical University
                        </MenuItem>
                        <MenuItem value="Web Designer">
                          Chandigarh University
                        </MenuItem>
                        <MenuItem value="CenterUniverity">
                          Center University
                        </MenuItem>
                        <MenuItem value="Hptu">Hptu</MenuItem>
                        <MenuItem value="J&K">J&K University</MenuItem>
                      </Select>
                      {formErrors.universityError && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please enter your University
                        </p>
                      )}
                    </FormControl>
                  </Box>
                  <br />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="Year of Graduation"
                    label="Year of Graduation"
                    type="year"
                    fullWidth
                    variant="standard"
                    value={graduationYear}
                    setErrors={formErrors.graduationYearError}
                    onChange={(e) => setGraduationYear(e.target.value)}
                  />
                  {formErrors.graduationYearError && (
                    <p style={{ color: "red", margin: "0" }}>Field Required</p>
                  )}
                  <br></br> <br></br>
                  <FormControl
                    setErrors={formErrors.educationTypeError}
                    component="fieldset"
                  >
                    <FormLabel component="legend">Education Type</FormLabel>
                    <RadioGroup
                      row
                      aria-label="Education Type"
                      name="EducationType"
                      value={educationtype}
                      onChange={(e) => setEducationtype(e.target.value)}
                    >
                      <FormControlLabel
                        value="FullTime"
                        control={<Radio />}
                        label="Full time"
                      />
                      <FormControlLabel
                        value="PartTime"
                        control={<Radio />}
                        label="Part time"
                      />

                      <FormControlLabel
                        value="Other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                    {formErrors.educationTypeError && ( // Change genderError to educationTypeError
                      <p style={{ color: "red", margin: "0" }}>
                        Please select Education Type
                      </p>
                    )}
                  </FormControl>
                </>
              )}

              {activeStep === 3 && (
                <>
                  <h4 className="text-primary">Job Preference</h4>
                  <p>Hepls to find better matching jobs</p>
                  <br></br>
                  <div>
                    <FormControl
                      setErrors={formErrors.personNameError}
                      sx={{ m: 1, width: 500 }}
                    >
                      <InputLabel id="demo-multiple-checkbox-label">
                        Key Skills
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-label"
                        id="demo-multiple-checkbox"
                        multiple
                        value={personName}
                        onChange={handleChange1}
                        input={<OutlinedInput label="Key Skills" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuProps={MenuProps}
                        // error={formErrors.personNameError}
                      >
                        {names.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                      {formErrors.personNameError && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please select Key skill
                        </p>
                      )}
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labels">
                        Industry
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labels"
                        id="demo-multiple-checkboxs"
                        multiple
                        value={personName1}
                        onChange={handleChange2}
                        input={<OutlinedInput label="Industry" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropss={MenuPropss}
                      >
                        {names1.map((name1) => (
                          <MenuItem key={name1} value={name1}>
                            <Checkbox
                              checked={personName1.indexOf(name1) > -1}
                            />
                            <ListItemText primary={name1} />
                          </MenuItem>
                        ))}
                      </Select>
                      {formErrors.personName1Error && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please select industry
                        </p>
                      )}
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelss">
                        Department/Function
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelss"
                        id="demo-multiple-checkboxss"
                        multiple
                        value={personName2}
                        onChange={handleChange3}
                        input={<OutlinedInput label="Department/Function" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropsss={MenuPropsss}
                      >
                        {names2.map((name2) => (
                          <MenuItem key={name2} value={name2}>
                            <Checkbox
                              checked={personName2.indexOf(name2) > -1}
                            />
                            <ListItemText primary={name2} />
                          </MenuItem>
                        ))}
                      </Select>
                      {formErrors.personName2Error && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please select industry
                        </p>
                      )}
                    </FormControl>
                    <br></br> <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelsss">
                        Preferred Role
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelsss"
                        id="demo-multiple-checkboxsss"
                        multiple
                        value={personName3}
                        onChange={handleChange33}
                        input={<OutlinedInput label="Preferred Role" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropsssss={MenuPropsssss}
                      >
                        {names3.map((name3) => (
                          <MenuItem key={name3} value={name3}>
                            <Checkbox
                              checked={personName3.indexOf(name3) > -1}
                            />
                            <ListItemText primary={name3} />
                          </MenuItem>
                        ))}
                      </Select>
                      {formErrors.personName3Error && (
                        <p style={{ color: "red", margin: "0" }}>
                          Please select Preferred Role
                        </p>
                      )}
                    </FormControl>
                    <br></br>
                    <br></br>
                    <FormControl sx={{ m: 1, width: 500 }}>
                      <InputLabel id="demo-multiple-checkbox-labelsss">
                        Preferred Location
                      </InputLabel>
                      <Select
                        labelId="demo-multiple-checkbox-labelssss"
                        id="demo-multiple-checkboxssss"
                        multiple
                        value={personName4}
                        onChange={handleChange333}
                        input={<OutlinedInput label="Preferred Location" />}
                        renderValue={(selected) => selected.join(", ")}
                        MenuPropssssss={MenuPropssssss}
                      >
                        {names4.map((name4) => (
                          <MenuItem key={name4} value={name4}>
                            <Checkbox
                              checked={personName4.indexOf(name4) > -1}
                            />
                            <ListItemText primary={name4} />
                          </MenuItem>
                        ))}
                      </Select>
                      {formErrors.personName4Error && (
                        <p style={{ color: "red", margin: "0" }}>
                        Please select up to {MAX_SELECTIONS} Preferred Locations
                        </p>
                      )}
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
              {/* <Button onClick={handleSubmit}>Submit</Button> */}
            </>
          ) : (
            <>
              {/* {activeStep > 0 && (
                <Button onClick={() => setShowPreviousFields(true)}>Back</Button>
              )} */}
              <Button onClick={handleClose}>Cancel</Button>
              {/* <Button onClick={handleContinue}>Continue</Button>  */}
              {activeStep <= 2 ? (
                <Button onClick={handleContinue}>Continue</Button>
              ) : (
                <Button onClick={handleSubmit}>Register</Button>
              )}
            </>
          )}


        </DialogActions>
      </Dialog>
      
  {/* {registrationStatus && (
    <div className="success-message">
      {registrationStatus}
    </div>
  )} */}

    </div>
  );
}
