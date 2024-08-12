import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Forget_Password() {
  return (
    <>
      <div className="Forget_p">
        <h1>
          <b>Forget Password</b>
        </h1>

        <TextField id="standard-basic" label="Email" variant="standard" type="Email"  className="forget"/>
        <br />
        <br />

        <TextField id="standard-basic" label="Code" variant="standard" type="text" className="forget"/>
        <br />
        <br />

        <TextField id="standard-basic" label="New Password" variant="standard" type="password" className="forget"/>
        <br />
        <br />

        <TextField id="standard-basic" label="Confirm Password" variant="standard" type="password" className="forget"/>

        <br />
        <br />
         
         <div className="forget-btn">
        <Link to="/">
         
          <Button variant="contained" >Change</Button>
        </Link>
        </div>
      </div>
    </>
  );
}

export default Forget_Password;
