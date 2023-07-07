import React, { useState } from 'react';
import video from '../images/video.mp4';
import images1 from '../images/about-fullscreen-1-1920x700.jpg';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '@fortawesome/fontawesome-free/css/all.css';
import Register from '../Register';
const Index = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  const validateForm = () => {
    let isValid = true;
  
    // Validate email
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format. Please enter a valid email address.');
      isValid = false;
    } else {
      setEmailError('');
    }
  
    // Validate password
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
  
    return isValid;
  };

  return (
    <>
    <>

    <Dialog open={open} onClose={handleClose}>
    <DialogTitle >
    <h6 className='float-right'>
    <li>

     New to foundit?

      <a className='color' style={{ color: '#ed563b' }}> <Register/> </a>


           </li>
      <br /><br /><br />
    
    </h6>
    <h1 className=' color: #333;
      font-size: 24px;
      text-align: center;
      padding: 20px;
      background-color: #f2f2f2;
      border-radius: 5px;'>
 Login
</h1>
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
<br></br>
<br></br>
</DialogTitle>
        <DialogContent>
          <DialogContentText></DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!emailError}
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
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!passwordError}
            helperText={passwordError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => validateForm() && handleClose()}>Login</Button>
        </DialogActions>
      </Dialog>




  <header className="header-area header-sticky">
    <div className="container">
      <div className="row">
        <div className="col-12 ">
          <nav className="main-nav">
            {/* ***** Logo Start ***** */}
            <a  href="index.html" className="logo">
              
            <div className="monster-logo primary-logo">

              
             {/* <a
                 href="/"
                rel="noreferrer"
                aria-label="foundit header logo"
                onclick="window.homeBehavior.home.tracking.trackMonsterLogo()"
                className="logo-normall"
                >
    <img
      src="//media.foundit.in/trex/public/default/images/companyLogo.svg"
      width={345}
      height={45}
      alt="foundit logo"
    />
    
  </a> */}
</div>

            </a>
            {/* ***** Logo End ***** */}
            {/* ***** Menu Start ***** */}
            <ul className="nav">
           <li>
             <a className='active' onClick={handleClickOpen}>Login</a>   
            
            </li>

            <li>
    <a ><Register /></a>   
</li>

            
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
            <a className="menu-trigger">
              <span>Menu</span>
            </a>
            {/* ***** Menu End ***** */}
          </nav>
        </div>
      </div>    
    </div>
  </header>
  {/* ***** Header Area End ***** */}
  {/* ***** Main Banner Area Start ***** */}
  <div className="main-banner" id="top">
  <video autoPlay muted loop id="bg-video">
    <source src={video} type="video/mp4" />
  </video>
  <div className="video-overlay header-text">
    <div className="caption">
      <h6>It is never too late to be what you might have been</h6>
      <h2>
        Find the perfect <em>Job</em>
      </h2>
      <div className="main-button">
        <a href="contact.html">Contact Us</a>
      </div>
    </div>
  </div>
</div>

  <section
    className="section section-bg"
    id="schedule"
    style={{
      backgroundImage: `url(${images1})`
    }}
  >
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading dark-bg">
            <h2>
              Read <em>About Us</em>
            </h2>
            <img src="assets/images/line-dec.png" alt="" />
            <p>
            Now the jar of sem, the laoreet as a fear of it, the trucks have a great effect. But
              cartoon very pain, ultricies fermentation mass of football.
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          <div className="cta-content text-center">
            <p>
            It is very important for the customer to pay attention to the adipiscing process. Work hard
              for the pleasure of the gentle! They will see to it that we lead them
              easy, he is asperated here, other times, he wants the pleasure of these things,
              for pleasure! They are indeed.
            </p>
            <p>
            It is very important for the customer to pay attention to the adipiscing process. Just
              no where with laborious duties. At the same time, something is because of his
              not the pain of rejecting all the chosen ones who praise the advantages and pain
              no! And most of all the pain that caused him to be guilty of guilt and the like
              easy pleasure in pain! With the pleasures of choosing him.
              Distinction, no!
            </p>
          </div>
        </div>
      </div>
    </div>

   

  </section>
 

</>

    </>
  )
}

export default Index;