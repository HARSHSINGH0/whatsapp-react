import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Button from "@material-ui/core/Button"
// // import CustomButton from "./custom.js"
// import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded"
import { withStyles } from "@material-ui/core/styles"
import { Table } from "react-bootstrap"
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import MoreVertIcon from "@mui/icons-material/MoreVert"

import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule"
import { padding, width } from "@mui/system"
import { Box } from "@mui/system"
const CustomButton = withStyles({
  root: {
    background: "#435a64",
    borderRadius: 3,
    border: 0,
    color: "#01bea5",
    height: 48,
    padding: "0 30px",
    width: 100,
    fontSize: 18,
    fontWeight: "bolder",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />)
const CustomButton2 = withStyles({
  root: {
    background: "#435a64",
    borderRadius: 3,
    border: 0,
    color: "#98a1a4",
    height: 48,
    padding: "0 30px",
    width: 100,
    fontSize: 18,
    fontWeight: "bolder",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />)
const CustomButton3 = withStyles({
  root: {
    background: "#435a64",
    borderRadius: 3,
    border: 0,
    color: "#98a1a4",
    height: 48,
    padding: "0 0px",
    width: 120,
    fontSize: 23,
    fontWeight: "initial",
    margin: "20px 60px 20px 0px",
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Table striped bordered hover variant="dark">
          <CustomButton3>WhatsApp</CustomButton3>
          <Button disabled></Button>
          {/* This is for spacing */}
          <IconButton aria-label="SearchIcon">
            <SearchIcon style={{ color: "#98A1A4" }} />
          </IconButton>
          <IconButton aria-label="MoreVertIcon">
            <MoreVertIcon style={{ color: "#98A1A4" }} />
          </IconButton>
        </Table>
        <Table striped bordered hover variant="dark">
          <IconButton aria-label="CameraAltRoundedIcon">
            <CameraAltRoundedIcon style={{ color: "#98A1A4" }} />
          </IconButton>
          <CustomButton>CHATS</CustomButton>
          <CustomButton2>STATUS</CustomButton2>
          <CustomButton2>CALLS</CustomButton2>
        </Table>
        <IconButton aria-label="HorizontalRuleIcon">
          <HorizontalRuleIcon style={{ color: "#01bea5" }} />
          <HorizontalRuleIcon style={{ color: "#01bea5" }} />
          <HorizontalRuleIcon style={{ color: "#01bea5" }} />
          <HorizontalRuleIcon style={{ color: "#01bea5" }} />
        </IconButton>
      </header>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default App
