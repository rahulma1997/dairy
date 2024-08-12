import React from "react";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";

import CancelSharpIcon from "@mui/icons-material/CancelSharp";

function User() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

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
      <div className="user">
        
      <h1>Users</h1>
         
         <div className="sel_op">
         <FormControl variant="standard" className="user-select">
        <InputLabel id="demo-simple-select-standard-label">Select Role</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
       
          label="Select Role"
        >
          <MenuItem value="1">
            <em>None</em>
          </MenuItem>
          <MenuItem value="2">Shop</MenuItem>
          <MenuItem value="3">Client</MenuItem>
          <MenuItem value="4">Party</MenuItem>
        </Select>
      </FormControl>
      </div>
           
      <div className="us-nam1">
            <TextField id="standard-basic" label="User Name" variant="standard" type="text" className="us-name"/>
            </div>
      
      <div className="us-pass">
       <TextField id="standard-basic" label="Password" variant="standard" type="password" className="us-name"/>
       </div>
     
     <div className="us-mobile">
      <TextField id="standard-basic" label="Mobile" variant="standard" type="text" className="us-name"/>
      </div>

      <div className="us-remark">
      <TextField id="standard-basic" label="Remark" variant="standard" type="text" className="us-name"/>
      </div>

      <div>
      <Link to="/Dashboard">
      <Button variant="contained" className="us-save">
            Save
          </Button>
   </Link>
      </div>

      </div>
    
    </>
  )
}

export default User;