import axios from "axios";
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Update() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });


  const changeHandler = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,  [name]: value,
    }));
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `https://localhost:7177/api/Regsiter/UpdateUserDetails/${formData.id}`,
        formData
      );
      if (response.status === 200) {
        
        setFormData(response.data);
      } else {
        console.error("FAILED TO UPDATE")
      }
    } catch (error) {
      console.error("AN ERROR OCCURD WHILE UPDATING DATA")
      
    }
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
       console.log(response.data. userExist);

      } else {
        console.error("Failed to retrieve user data");
      }
    } catch (error) {
      console.error("An error occurred while retrieving user data:", error);
    }
  }

  return (
    <div>
      <div className="container-modal">
        <div className="modal-content">
          <div className="custom-header m-1">
            <div className="custom-tile">Update Profile</div>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="custom-modal-body">
            <div className="row">
              <div className="col-10">
                <div className="form-group row">
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
                      onChange={changeHandler}
                      value={formData.name}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="txtemail" className="col-sm-4">
                    Email :
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="txtemail"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      onChange={changeHandler}
                      value={formData.email}
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="txtphoneNumber" className="col-sm-4">
                    MobileNumber :
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="text"
                      id="txtphoneNumber"
                      name="phoneNumber"
                      placeholder="MobileNumber"
                      className="form-control"
                      onChange={changeHandler}
                      value={formData.phoneNumber}
                    />
                  </div>
                </div>
                {/* Uncomment and modify this section if you want to include Password */}
                {/* <div className="form-group row">
                  <label htmlFor="txtPassword" className="col-sm-4">
                    Password :
                  </label>
                  <div className="col-sm-8">
                    <input
                      type="password"
                      id="txtPassword"
                      name="password"
                      placeholder="Password"
                      className="form-control"
                      onChange={changeHandler}
                      value={formData.password}
                    />
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="custom-modal-footer">
            <button
              type="button"
              className="btn btn-secondary p-2 m-2"
              data-dismiss="modal"
            >
              Close
            </button>
            &nbsp;
            <button
              type="button"
              className="btn btn-primary p-2 m-2"
              onClick={handleUpdate}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;

















   
