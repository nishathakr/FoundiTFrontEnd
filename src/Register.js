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


export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState('paper');

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
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
        <DialogTitle id="scroll-dialog-title">Create an account<br>
        </br>
        <h6>    It only takes a couple of minutes to get started!</h6>
        <br></br>
        <a
  className="btn btn-primary"
  style={{ backgroundColor: "#55acee" }}
  href="#!"
  role="button"
>
  <i className="fab fa-twitter me-2" />
  Twitter
  
</a>
<>
  {/* Facebook */}
  <a
  style={{ color: "#3b5998", margin: "10px" }}
  href="#!"
  role="button"
>
  <i className="fab fa-facebook-f fa-lg" />
</a>
</>
<a
  className="btn btn-primary"
  style={{ backgroundColor: "#dd4b39" }}
  href="#!"
  role="button"
>
  <i className="fab fa-google" />
</a>
        </DialogTitle>
        
        <DialogContent dividers={scroll === 'paper'}>
          <DialogContentText>
      
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="Upload Resume"
            label="Upload Resume"
            type="file"
            fullWidth
            variant="standard"
          />


<TextField
            autoFocus
            margin="dense"
            id="FullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
          />

<TextField
            autoFocus
            margin="dense"
            id="EmailId"
            label="Email ID"
            type="Email"
            fullWidth
            variant="standard"
          />

<TextField
            autoFocus
            margin="dense"
            id="Password"
            label="Password"
            type="Password"
            fullWidth
            variant="standard"
          />

<TextField
            autoFocus
            margin="dense"
            id="Mobile Number"
            label="Mobile Number"
            type="Number"
            fullWidth
            variant="standard"
          />
  <FormControl>
    <br></br>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>
    </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}