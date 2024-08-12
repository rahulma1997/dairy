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

function Inward() {
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
        </Drawer>
      </Box>

      <div className="milk-form-container">
        <form className="for">
          <h2>
            <b>INWARD</b>
          </h2>
          <p className="inwar-voucher">
            <b> Date :- {formattedDateTime}</b>
          </p>

          <div className="upper-container">
            <div className="in-s">
              <TextField
                id="standard-basic"
                label="S.No"
                variant="standard"
                type="text"
                className="in-srate"
              />
            </div>
            <TextField
              id="standard-basic"
              label="Rate"
              variant="standard"
              type="text"
              className="in-rate"
            />
          </div>

          <div className="inwad_Account">
            <FormControl variant="standard" className="in-accoun">
              <InputLabel id="demo-simple-select-standard-label">
                Shift
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Account"
              >
                <MenuItem value="1">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="2">Morning</MenuItem>
                <MenuItem value="3">Evening</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div className="inwad-voucher">
            <TextField
              id="standard-basic"
              label="Name"
              variant="standard"
              type="text"
              className="in-name"
            />
          </div>

          <div className="inwad-AC">
            <FormControl variant="standard" sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-standard-label">
                Type
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Select Account"
              >
                <MenuItem value="1">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="2">Baffelo</MenuItem>
                <MenuItem value="3">Cow</MenuItem>
              </Select>
            </FormControl>

            <div className="inwad-fat">
              <TextField
                id="standard-basic"
                label="Fat (%)"
                variant="standard"
                type="text"
              />
            </div>

            <div className="inwad-liters">
              <TextField
                id="standard-basic"
                label="Liters"
                variant="standard"
                type="text"
              />
            </div>
          </div>

          <div className="inwad-save">
            <Button variant="contained" className="in-save">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Inward;
