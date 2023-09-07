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

export default function ProfessionalDetail() {
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
        <li onClick={handleClickOpen('paper')}>Continue</li>
        <Dialog
          open={open}
          onClose={handleClose}
          scroll={scroll}
          aria-labelledby="scroll-dialog-title"
          aria-describedby="scroll-dialog-description"
        >
          <DialogTitle id="scroll-dialog-title">Please Add Professional Details<br>
          </br>
          
        
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
            <Button >Continue</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }