import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";

import CancelSharpIcon from "@mui/icons-material/CancelSharp";

function Payment() {
  const [dateTime, setDateTime] = useState(new Date());
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const updateDateTime = () => {
    setDateTime(new Date());
  };

  useEffect(() => {
    const timerId = setInterval(updateDateTime, 1000);
    return () => clearInterval(timerId); 
  }, []);

  const formattedDateTime = dateTime.toLocaleString("en-in", {
    weekday: "long",
    year: "numeric", 
    month: "numeric", 
    day: "numeric", 
  });

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box>
      <div className="head">
        <Toolbar>
          <IconButton onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>
          <h3>Dashboard</h3>
        </Toolbar>
      </div>
      <Drawer variant="persistent" anchor="left" open={open}>
        <List>
          <div className="sidebar">
            <div className="icon">
              <IconButton onClick={handleDrawerClose} className="ic">
                {theme.direction === "ltr" ? (
                  <CancelSharpIcon className="ic" />
                ) : (
                  <CancelSharpIcon className="ic" />
                )}
              </IconButton>
            </div>

            <ul>
              <Link to="/User">
                <li>User</li>
              </Link>
              <Link to="/inward">
                <li>Inward</li>
              </Link>
              <Link to="/outward">
                <li>Outward</li>
              </Link>
              <Link to="/payment">
              <li>Payment</li>
              </Link>
              
              
              <li>Receipt</li>
              <li>Row Material Purpose</li>
              <li>Consumption</li>
              <li className="dropdown">
                Employee
                <ul className="dropdown-content">
                  <Link to="/Group">
                    <li>Account</li>
                  </Link>

                  <Link to="/Account">
                    <li>Attendace</li>
                  </Link>

                  <li>Employee</li>
                </ul>
              </li>
            </ul>
          </div>
        </List>
        {/* <Divider /> */}
      </Drawer>
    </Box>

      <div className="payment">
        <h1>Payment Form</h1>
        <form>
              <div className="datetime">
             <p><b> Date :- {formattedDateTime}</b></p> <br />
             </div> 

             <div className="voucher">
             <TextField id="standard-basic" label="Voucher No" variant="standard" type="text" className="voucher1" />
             </div>

             
          <br />
          
          <div  className="fromcontrol">
          <FormControl variant="standard" className="voucher1">
            <InputLabel id="demo-simple-select-standard-label">
              Select Account
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              label="Select Account"
            >
              <MenuItem value="1">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2">Account 1</MenuItem>
              <MenuItem value="3">Account 2</MenuItem>
              <MenuItem value="4">Account 3</MenuItem>
            </Select>
          </FormControl>
          
          </div>
          <br />
          <br />

          <div className="fromcontrol2">         
             <FormControl variant="standard" className="voucher1">
            <InputLabel id="demo-simple-select-standard-label">
              Ledger Account
            </InputLabel>
            <Select
              id="demo-simple-select-standard"
              label="Select Account"
            >
              <MenuItem value="1">
                <em>None</em>
              </MenuItem>
              <MenuItem value="2">Account 1</MenuItem>
              <MenuItem value="3">Account 2</MenuItem>
              <MenuItem value="4">Account 3</MenuItem>
            </Select>
          </FormControl>
          </div>

          <br />
          <br />
          <div className="Amount1">
          <TextField id="standard-basic" label=" Amount" variant="standard" className="voucher1"/>
          </div>
          <br />
          <br />
          <div className="Narration1">
          <TextField id="standard-basic" label="Narration" variant="standard" className="voucher1"/>
          </div>
          
          <br />
          <br />
          <div className="Save-edit">
          <Button variant="contained" color="success" className="pay-save">
            Save
          </Button>
          </div>
          <div className="Save-edit1">
          <Button variant="contained" className="pay-save">
            Edit
          </Button>
          </div>
        </form>
      </div>
    </>
  );
}
export default Payment;
