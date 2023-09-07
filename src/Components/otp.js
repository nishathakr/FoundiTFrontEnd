import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OtpInput from 'react-otp-input';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Otp() {
  const [otp, setOtp] = useState('');
  const [open, setOpen] = useState(false);
  const [timer, setTimer] = useState(30);
  
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

 
    const handleSubmit = async () => {
      debugger;
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
        if(response.status===200)
        {
  
          Swal.fire({
            title: "Registration Completed Successfully",
            icon: "success",
       
          });
          
            setOtp('');
            handleClose();
           navigate('/index')
           setOpen(false);
         //window.location.reload(); 
        }
         
      } catch (error) {
        Swal.fire({
          title: "Registration Failed",
          icon: "error",
      });
      setOtp('');
      
        console.error(error);
      }
    };

    const handleResend = async () => {
      try {
        const response = await axios.post(
          'https://localhost:7177/api/Regsiter/Resend', 
          { phoneNumber: localStorage.getItem('PhoneNumber') }
        );
  
        if (response.status === 200) {
          Swal.fire({
            title: 'Resent Successfully',
            text: 'OTP has been resent to your phone number.',
            icon: 'success',
          });
  
          setOtp('');
          window.location.reload(); 

        }
      } catch (error) {
        Swal.fire({
          title: 'Resend Failed',
          text: 'Failed to resend OTP.',
          icon: 'error',
        });
        console.error(error);
      }
    };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    } else {
      handleClose();
      Swal.fire({
        title: 'OTP Expired',
        text: 'The OTP verification time has expired.',
        icon: 'error',
      });
    }
  }, [timer]);

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
        <p>Time remaining: {timer} seconds</p>
      
      </DialogContent>
      <div>
      <Button onClick={handleResend} disabled={timer > 0}>ResendOTP</Button>
      </div>
   
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Verify</Button>
      </DialogActions>
    </div>
  );
}

export default Otp;
