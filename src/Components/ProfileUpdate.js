import React, { useEffect, useState, useRef } from "react";
//import { Link } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import { Grid, Container, Menu } from "semantic-ui-react";
//import { useNavigate } from "react-router-dom";
//import { Carousel } from "react-responsive-carousel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import ListItemText from "@mui/material/ListItemText";
import axios from "axios";

function ProfileUpdate() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [educationalDetails, setEducationalDetails] = useState({
    highestQualification: "",
    selectYourField: "",
    university_Insitute: "",
    yearOfGraduation: new Date().getFullYear().toString(),
    educationType: "",
    experience: "",
    currrentLocation: "",
  });

  const [topping, setTopping] = useState("")

  const onOptionChange = e => {
    setTopping(e.target.value)
  }

  const [selectedKeySkills, setSelectedKeySkills] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [selectedPreferredRole, setSelectedPreferredRole] = useState([]);
  const [selectedPreferredLocation, setSelectedPreferredLocation] = useState(
    []
  );

  const saveclick = () => {};

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

  const names1 = ["IT/Computers-Software", "Mechanical"];

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

  const names3 = [
    "Developer",
    "Database-Admistrator",
    "Designer",
    "Hr",
    "Business anaylst",
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
  ];

  

  const inputRefs = useRef(null);
  // const navigate = useNavigate();
  // const inputRefs = [];
  const editbasic = async () => {
    setIsModalOpen(true);
    //navigate("/update");
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const editbasic1 = async () => {
    setIsModalOpen1(true);
  };
  const closeModal1 = () => {
    setIsModalOpen1(false);
  };

  const editbasic2 = async () => {
    setIsModalOpen2(true);
  };

  const closeModal2 = () => {
    setIsModalOpen2(false);
  };

  const editbasic3 = async () => {
    setIsModalOpen3(true);
  };

  const closeModal3 = () => {
    setIsModalOpen3(false);
  };

  // const saveModal = () => {
  //   setIsModalOpen(true);
  // };
  const scrollToColumn = async (columnIndex) => {
    if (inputRefs[columnIndex]) {
      inputRefs[columnIndex].scrollIntoView({ behavior: "smooth" });
      inputRefs[columnIndex].focus();
    }
  };

  const changeHandler = (event) => {
    const { name, value } = event.target;
    setEducationalDetails((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      getUserById(userId);
    }
  }, []);

  async function getUserById(userId) {
    try {
      const response = await axios.get(
        `https://localhost:7177/api/User?userId=${userId}`
      );

      if (response.status === 200) {
        const userDataFromApi = response.data?.educationaldetails;
        if (userDataFromApi) {
          debugger;
          setEducationalDetails(userDataFromApi);
          console.log(educationalDetails);
        }
      } else {
        console.error("Failed to retrieve user data");
      }
    } catch (error) {
      console.error("An error occurred while retrieving user data:", error);
    }
  }

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Menu className="m-2">
          <Menu.Item onClick={() => scrollToColumn(0)} columnIndex="0">
            Basic Information
          </Menu.Item>
          <Menu.Item onClick={() => scrollToColumn(1)} columnIndex="1">
            Professional Details
          </Menu.Item>
          <Menu.Item onClick={() => scrollToColumn(2)} columnIndex="2">
            Educational Details
          </Menu.Item>
          <Menu.Item onClick={() => scrollToColumn(3)} columnIndex="3">
            Job Preference
          </Menu.Item>
          <Menu.Item onClick={() => scrollToColumn(4)} columnIndex="4">
            Cv Headline
          </Menu.Item>
          <Menu.Item onClick={() => scrollToColumn(5)} columnIndex="5">
            Resume
          </Menu.Item>
        </Menu>
      </div>

      <div id="user-profile-right-section" className="centered-container">
        <Container>
          <Grid>
            <div class="ui divided four column grid">
              <div class="stretched row">
                <div
                  className="column m-4 p-20"
                  style={{ width: "400px", height: "500px" }}
                >
                  <div class="ui segment">
                    <h3>Basic Information</h3>
                    <button
                      onClick={editbasic}
                      ref={(el) => (inputRefs[0] = el)}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    {isModalOpen && (
                      <div class="ui card">
                        <div class="content">
                          <div class="header">Basic Information</div>
                        </div>
                        <div class="content">
                          <h4 class="ui sub header">Activity</h4>
                          <div class="ui small feed">
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  <label htmlFor="txtname" className="col-sm-4">
                                    Name :
                                  </label>
                                  <div className="col-sm-8">
                                    <input
                                      type="text"
                                      id="txtname"
                                      name="name"
                                      placeholder="Name"
                                      className="form-control"
                                      // onChange={changeHandler}
                                      // value={formData.name}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Stevie Feliciano</a> was added as an{" "}
                                <a>Administrator</a> */}
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Helen Troy</a> added two pictures */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="extra content">
                          <button onClick={saveclick}>Update</button> &nbsp;
                          &nbsp;
                          <button onClick={closeModal}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div class="column" style={{ width: "600px", height: "400px" }}>
                  <div class="ui segment">
                    <button
                      ref={(el) => (inputRefs[1] = el)}
                      onClick={editbasic1}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    <h3>Professional Details</h3>
                    {isModalOpen1 && (
                      <div class="ui card">
                        <div class="content">
                          <div class="header">Professional Details</div>
                        </div>
                        <div class="content">
                          <h4 class="ui sub header">Activity</h4>
                          <div class="ui small feed">
                            <div class="event">
                              <div class="content">
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">
                                    Experience
                                  </FormLabel>
                                  <RadioGroup
                                    row
                                    aria-label="experience"
                                    name="Experience"
                                    // value={professionalDetails.experience}
                                    // onChange={(e) => setExperience(e.target.value)}
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
                                      // value={educationalDetails.currrentLocation}
                                      label="Current location"
                                      //  onChange={handleChange}
                                      // error={formErrors.locationError} // Apply error state to the Select component
                                    >
                                      <MenuItem value="Chandigarh">
                                        Chandigarh
                                      </MenuItem>
                                      <MenuItem value="Delhi">Delhi</MenuItem>
                                      <MenuItem value="Himachal">
                                        Himachal
                                      </MenuItem>
                                      <MenuItem value="Mumbai">Mumbai</MenuItem>
                                      <MenuItem value="Chennai">
                                        Chennai
                                      </MenuItem>
                                      <MenuItem value="Hyderabad">
                                        Hyderabad
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Stevie Feliciano</a> was added as an{" "}
                                  <a>Administrator</a> */}
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Helen Troy</a> added two pictures */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="extra content">
                          <button onClick={saveclick}>Update</button> &nbsp;
                          &nbsp;
                          <button onClick={closeModal1}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="ui segment">
                    <button
                      ref={(el) => (inputRefs[2] = el)}
                      onClick={editbasic2}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    <h3>Educational Details</h3>
                    {isModalOpen2 && (
                      <div class="ui card">
                        <div class="content">
                          <div class="header">Educational Details</div>
                        </div>
                        <div class="content">
                          <h4 class="ui sub header">Activity</h4>
                          <div class="ui small feed">
                            <div class="event">
                              <div class="content">
                                <Box sx={{ minWidth: 120 }}>
                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                      Highest Qualification
                                    </InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      name="highestQualification"
                                      value={
                                        educationalDetails.highestQualification
                                      }
                                      onChange={changeHandler}
                                      label="Highest Qualification"

                                      // error={
                                      //   formErrors.highestQualificationError
                                      // }
                                    >
                                      <MenuItem value="10th">10th</MenuItem>
                                      <MenuItem value="12th">12th</MenuItem>
                                      <MenuItem value="Bca">Bca</MenuItem>
                                      <MenuItem value="Btech">Btech</MenuItem>
                                      <MenuItem value="llb">llb</MenuItem>
                                      <MenuItem value="Phd">Phd</MenuItem>
                                      <MenuItem value="Bsc">Bsc</MenuItem>
                                    </Select>
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
                                      value={educationalDetails.selectYourField}
                                      name="selectYourField"
                                      onChange={changeHandler}
                                      // error={formErrors.fieldOfStudyError}
                                      label="Select your field"
                                      // onChange={(e) =>
                                      //   setFieldOfStudy(e.target.value)
                                      // }
                                    >
                                      <MenuItem value="Web Developer">
                                        Web Developer
                                      </MenuItem>
                                      <MenuItem value="Web Designer">
                                        Web Designer
                                      </MenuItem>
                                      <MenuItem value="Business Analyst">
                                        Business Analyst
                                      </MenuItem>
                                      <MenuItem value="Teacher">
                                        Teacher
                                      </MenuItem>
                                      <MenuItem value="Doctor">Doctor</MenuItem>
                                      <MenuItem value="Doctor">Doctor</MenuItem>
                                      <MenuItem value="Human Resurces">
                                        Human Resurces
                                      </MenuItem>
                                      <MenuItem value="Data Operator">
                                        Data Operator
                                      </MenuItem>
                                      <MenuItem value="IT">IT</MenuItem>
                                    </Select>
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
                                      value={
                                        educationalDetails.university_Insitute
                                      }
                                      onChange={changeHandler}
                                      //error={formErrors.universityError}
                                      label="University/Institute"
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
                                      <MenuItem value="HPU">HPU</MenuItem>
                                      <MenuItem value="J&K">
                                        J&K University
                                      </MenuItem>
                                    </Select>
                                  </FormControl>
                                </Box>
                                <br />
                                <TextField
                                  autoFocus
                                  margin="dense"
                                  id="Year of Graduation"
                                  label="Year of Graduation"
                                  name="yearOfGraduation"
                                  // type="date"
                                  fullWidth
                                  variant="standard"
                                  value={educationalDetails.yearOfGraduation}
                                  onChange={changeHandler}
                                  type="text"
                                
                                  // error={formErrors.graduationYearError}
                                  // onChange={(e) =>
                                  //   setGraduationYear(e.target.value)
                                  // }
                                />
                                <br></br> <br></br>
                                <FormControl component="fieldset">
                                  <FormLabel component="legend">
                                    Education Type
                                  </FormLabel>
                                  <RadioGroup
                                    row
                                    aria-label="Education Type"
                                    name="topping"
                                    value={educationalDetails.educationType}
                                      onChange={onOptionChange}
                                  >
                                    <FormControlLabel
                                      value="FullTime"
                                      control={<Radio />}
                                      label="Full time"
                                     // checked={topping === "FullTime"}
                                    />
                                    <FormControlLabel
                                      value="PartTime"
                                      control={<Radio />}
                                      label="Part time"
                                      checked={topping === "PartTime"}
                                    />

                                    <FormControlLabel
                                      value="Other"
                                      control={<Radio />}
                                      label="Other"
                                      checked={topping  === "Other"}
                                    />
                                  </RadioGroup>
                                </FormControl> 
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Stevie Feliciano</a> was added as an{" "}
                                  <a>Administrator</a> */}
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Helen Troy</a> added two pictures */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="extra content">
                          <button onClick={saveclick}>Update</button> &nbsp;
                          &nbsp;
                          <button onClick={closeModal2}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                  <div class="ui segment">
                    <button
                      ref={(el) => (inputRefs[3] = el)}
                      onClick={editbasic3}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    <h3>Job Preference</h3>
                    {isModalOpen3 && (
                      <div class="ui card">
                        <div class="content">
                          <div class="header">Job Preference</div>
                        </div>
                        <div class="content">
                          <h4 class="ui sub header">Activity</h4>
                          <div class="ui small feed">
                            <div class="event">
                              <div class="content">
                                <div>
                                  <FormControl sx={{ m: 1, width: 250 }}>
                                    <InputLabel id="demo-multiple-checkbox-label">
                                      Key Skills
                                    </InputLabel>
                                    <Select
                                      labelId="demo-multiple-checkbox-label"
                                      id="demo-multiple-checkbox"
                                      multiple
                                      value={selectedKeySkills}
                                      onChange={(event) =>
                                        setSelectedKeySkills(event.target.value)
                                      }
                                      //onClick={validateFields}
                                      input={
                                        <OutlinedInput label="Key Skills" />
                                      }
                                      renderValue={(selected) =>
                                        selected.join(", ")
                                      }
                                      MenuProps={MenuProps}
                                    >
                                      {names.map((name) => (
                                        <MenuItem key={name} value={name}>
                                          {name}
                                        </MenuItem>
                                      ))}
                                    </Select>
                                    </FormControl>
                                    <br></br> <br></br>
                                    <FormControl sx={{ m: 1, width: 250 }}>
                                      <InputLabel id="demo-multiple-checkbox-labels">
                                        Industry
                                      </InputLabel>
                                      <Select
                                        labelId="demo-multiple-checkbox-labels"
                                        id="demo-multiple-checkboxs"
                                        multiple
                                        value={selectedIndustry}
                                        onChange={(event) =>
                                          setSelectedIndustry(
                                            event.target.value
                                          )
                                        }
                                        // onClick={validateFields}
                                        input={
                                          <OutlinedInput label="Industry" />
                                        }
                                        renderValue={(selected) =>
                                          selected.join(", ")
                                        }
                                        MenuPropss={MenuPropss}
                                      >
                                        {names1.map((name) => (
                                          <MenuItem key={name} value={name}>
                                            {name}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                    </FormControl>
                                    <br></br> <br></br>
                                    <FormControl sx={{ m: 1, width: 250 }}>
                                      <InputLabel id="demo-multiple-checkbox-labelss">
                                        Department/Function
                                      </InputLabel>
                                      <Select
                                        labelId="demo-multiple-checkbox-labelss"
                                        id="demo-multiple-checkboxss"
                                        multiple
                                        value={selectedDepartment}
                                        onChange={(event) =>
                                          setSelectedDepartment(
                                            event.target.value
                                          )}
                                        // onClick={validateFields}
                                         input={<OutlinedInput label="Department/Function" />}
                                        renderValue={(selected) =>
                                          selected.join(", ")
                                        }
                                        MenuPropsss={MenuPropsss}
                                      >
                                         {names2.map((name) => (
                                        <MenuItem key={name} value={name}>
                                          {name}
                                        </MenuItem>
                                      ))}
                                      </Select>
                                    </FormControl>
                                    <br></br> <br></br>
                                    <FormControl sx={{ m: 1, width: 250 }}>
                                      <InputLabel id="demo-multiple-checkbox-labelsss">
                                        Preferred Role
                                      </InputLabel>
                                      <Select
                                        labelId="demo-multiple-checkbox-labelsss"
                                        id="demo-multiple-checkboxsss"
                                        multiple
                                        value={selectedPreferredRole}
                                        onChange={(event) =>
                                        setSelectedPreferredRole(
                                            event.target.value
                                          )}
                                        //onClick={validateFields}
                                        input={<OutlinedInput label="Preferred Role" />}
                                        renderValue={(selected) =>
                                          selected.join(", ")
                                        }
                                        MenuPropsssss={MenuPropsssss}
                                      >
                                          {names3.map((name) => (
                                        <MenuItem key={name} value={name}>
                                          {name}
                                        </MenuItem>
                                      ))}
                                      </Select>
                                    </FormControl>
                                    <br></br>
                                    <br></br>
                                    <FormControl sx={{ m: 1, width: 250 }}>
                                      <InputLabel id="demo-multiple-checkbox-labelsss">
                                        Preferred Location
                                      </InputLabel>
                                      <Select
                                        labelId="demo-multiple-checkbox-labelssss"
                                        id="demo-multiple-checkboxssss"
                                        multiple
                                        value={selectedPreferredLocation}
                                        onChange={(event) =>
                                        setSelectedPreferredLocation(
                                            event.target.value
                                          )}
                                        // onClick={validateFields}
                                        input={<OutlinedInput label="Preferred Location" />}
                                        renderValue={(selected) =>
                                          selected.join(", ")
                                        }
                                         MenuPropssssss={MenuPropssssss}
                                      >
                                        {names4.map((name)=>(
                                          <MenuItem key={name} value={name}>
                                            {name}
                                          </MenuItem>
                                        ))}
                                      </Select>
                                    </FormControl>
                               
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Stevie Feliciano</a> was added as an{" "}
                                  <a>Administrator</a> */}
                                </div>
                              </div>
                            </div>
                            <div class="event">
                              <div class="content">
                                <div class="summary">
                                  {/* <a>Helen Troy</a> added two pictures */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="extra content">
                          <button onClick={saveclick}>Update</button> &nbsp;
                          <button onClick={closeModal3}>Close</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="stretched row">
                <div class="column" style={{ width: "400px", height: "50px" }}>
                  <div class="ui segment">
                    <button
                      ref={(el) => (inputRefs[4] = el)}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    <h3>Cv Headline</h3>
                  </div>
                  <div class="ui segment">
                    <button
                      ref={(el) => (inputRefs[5] = el)}
                      class="editIcon"
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      <i class="edit outline icon"></i>
                    </button>
                    <h3>Resume</h3>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Container>
      </div>
    </div>
  );
}

export default ProfileUpdate;
