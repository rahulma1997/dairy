import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TextField from "@mui/material/TextField";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import ReactPaginate from "react-paginate";
import Autocomplete from "@mui/material/Autocomplete";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Fab from '@mui/material/Fab';
import CancelSharpIcon from "@mui/icons-material/CancelSharp";



const PAGE_SIZE = 5; 

function Outward() {
  const [dateTime, setDateTime] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(0);
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  
  const [data] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: "",
      buffaloMorning: "",
      buffaloEvening: "",
      cowMorning: "",
      cowEvening: "",
    }))
  );

  const top100Films = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
    { label: "The Dark Knight", year: 2008 },
  
  ];
  
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

 
  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const paginatedData = data.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

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

      <div className="Tabel-box">
        <h2 className="Hadding">Outward</h2>
        <div className="container">
          <p><b>Date :- {formattedDateTime}</b></p>

          <div className="outward-rate">
            <TextField variant="standard" label="Rate" type="text" />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">S.No</th>
              <th rowSpan="2">Name</th>
              <th colSpan="2">Buffalo</th>
              <th colSpan="2">Cow</th>
              <th rowSpan="2" colSpan="2">
                Action
              </th>
            </tr>
            <tr>
              <th>Morning</th>
              <th>Evening</th>
              <th>Morning</th>
              <th>Evening</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>
                  <Autocomplete
                  freeSolo
                    options={top100Films}
                    className="sx"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        InputProps={{
                          ...params.InputProps,
                          disableUnderline: true,
                        }}
                      />
                    )}
                  />
                </td>
                <td>
                  <TextField
                    variant="standard"
                    sx={{ width: 100 }}
                    InputProps={{ disableUnderline: true }}
                  />
                </td>
                <td>
                  <TextField
                    variant="standard"
                    sx={{ width: 100 }}
                    InputProps={{ disableUnderline: true }}
                  />
                </td>
                <td>
                  <TextField
                    variant="standard"
                    sx={{ width: 100 }}
                    InputProps={{ disableUnderline: true }}
                  />
                </td>
                <td>
                  <TextField
                    variant="standard"
                    sx={{ width: 100 }}
                    InputProps={{ disableUnderline: true }}
                  />
                </td>
                <td>
                  {/* <DeleteSweepIcon /> */}
                  <Fab color="primary" aria-label="delete" sx={{ width: 40, height: 40 }}>
                    <DeleteSweepIcon sx={{ width: 20 }} />
                  </Fab>
                </td>
                <td>
                <Fab color="secondary" aria-label="edit" sx={{ width: 40, height: 40 }}>
                    <EditIcon sx={{ width: 20 }} />
                  </Fab>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"<-"}
          nextLabel={"-> "}
          //  breakLabel={"..."}
          pageCount={Math.ceil(data.length / PAGE_SIZE)}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active"}
        />

        <div className="outwad-save-btn">
          <Button variant="contained" color="success">
            Save
          </Button>
        </div>
      </div>
    </>
  );
}

export default Outward;