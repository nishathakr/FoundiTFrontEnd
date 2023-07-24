import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from 'axios';
import Swal from "sweetalert2";
function ForgotPassword() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [confirmPasswordError, setConfirmPasswordError] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleUpdatePassword = () => {
    // Reset previous errors
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    let isValid = true;

    // Perform validation checks here
    if (!email) {
      setEmailError('Please enter your email address.');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Please enter your password.');
      isValid = false;
    }

    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
      isValid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match. Please confirm your password.');
      isValid = false;
    }

    if (isValid) {
      // All validations passed, proceed with the update password logic here

      // Define the data object to be sent in the request
      const data = {
        email: email,
        password: password,
        confirmPassword:confirmPassword
      };

      axios.post('https://localhost:7177/api/Regsiter/api/ForgotPassword', data)
      .then((response) => {
        debugger;
        // Handle the API response here if needed
        console.log('Password update success:', response.data);
  
        // Update the messageDiv with the success message
        const messageDiv = document.getElementById('messageDiv');
        messageDiv.innerText = "Password Updated successfully ";
        messageDiv.style.display = "block"; // Show the messageDiv
  
        // Hide the messageDiv after 3 seconds
        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 4000);
  
       
      })
     
  
    // Close the modal after successful password update
    handleClose();
    }
  };

  return (
    <div>
       <div id="messageDiv" style={{ display: 'none', color: 'green' }}></div>
      <li onClick={handleClickOpen}>forgot password?</li>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className='text-primary'>Update your password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter your email address and new password here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={Boolean(emailError)}
            helperText={emailError}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={Boolean(passwordError)}
            helperText={passwordError}
          />
          <TextField
            autoFocus
            margin="dense"
            id="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={Boolean(confirmPasswordError)}
            helperText={confirmPasswordError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleUpdatePassword}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ForgotPassword;
