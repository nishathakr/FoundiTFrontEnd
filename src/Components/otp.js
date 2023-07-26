import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import Swal from "sweetalert2";
function Otp() {
  const [otp, setOtp] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async () => {
    const Data = {
      otp: otp,
      phoneNumber: localStorage.getItem('PhoneNumber'),
    };

    try {
      const response = await axios.post(
        'https://localhost:7177/api/Regsiter/OTPVerfication',
        Data
      );
      console.log('Response from server:', response.data);
      if(response.status===2000)
      {

        Swal.fire({
          title: "Registration Completed Successfully",
          icon: "success",
     
        });
      }
      handleClose();
    } catch (error) {
      Swal.fire({
        title: "Registration Failed",
        icon: "error",
    });
      console.error(error);
    }
  };

  const smallBoxStyle = {
    border: '1px solid #ccc',
    padding: '50px',
    borderRadius: '18px',
    width: '500px', // Adjust the width as per your requirement
    margin: 'auto',
    marginTop: '30px',
  };

  return (
    <div style={smallBoxStyle}>
      <DialogTitle className="text-primary">Enter Verification Code</DialogTitle>

      <DialogContent>
        <p>We have sent an OTP to your phone number</p>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4}
          renderSeparator={<span>---</span>}
          renderInput={(props) => (
            <input
              {...props}
              style={{
                width: '60px',
                height: '40px',
                textAlign: 'center',
                fontSize: '16px',
              }}
            />
          )}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Verify</Button>
      </DialogActions>
    </div>
  );
}

export default Otp;
