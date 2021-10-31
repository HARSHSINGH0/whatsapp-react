import React from "react"
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

// image add part
import dp from "./images/dp.jpg"
//

const CustomButton = withStyles({
  root: {
    background: "#1f2c34",
    borderRadius: 3,
    border: 0,
    color: "#01bea5",
    height: 30,
    padding: "0 30px",
    width: 80,
    fontSize: 16,
    fontWeight: 700,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />)
const CustomButton2 = withStyles({
  root: {
    background: "#1f2c34",
    borderRadius: 3,
    border: 0,
    color: "#87929c",
    height: 30,
    width: 80,
    fontSize: 16,
    fontWeight: 700,
    // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  label: {
    textTransform: "capitalize",
  },
})((props) => <Button {...props} />)
const CustomButton3 = withStyles({
  root: {
    background: "#1f2c34",
    border: 0,
    color: "#87929c",
    height: 50,
    padding: "0 0px",
    width: 120,
    fontSize: 20,
    fontWeight: "normal",
    margin: "5px 110px 0px 0px",
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

          {/* This is for spacing */}
          <IconButton aria-label="SearchIcon">
            <SearchIcon style={{ color: "#87929c" }} />
          </IconButton>
          <IconButton aria-label="MoreVertIcon">
            <MoreVertIcon style={{ color: "#87929c" }} />
          </IconButton>
        </Table>
        <Table striped bordered hover variant="dark">
          <tr>
            <td width="90px">
              <IconButton aria-label="CameraAltRoundedIcon">
                <CameraAltRoundedIcon style={{ color: "#87929c" }} />
              </IconButton>
            </td>
            <td width="210px">
              <CustomButton>CHATS</CustomButton>
            </td>
            <td width="210px">
              <CustomButton2>STATUS</CustomButton2>
            </td>
            <td width="210px">
              <CustomButton2>CALLS</CustomButton2>
            </td>
          </tr>
        </Table>
      </header>
      {/* <body className="App-line" style={{ color: "#01bea5" }}>
        ________
      </body> */}
      <body className="App-body">
        <div>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Hacks</p>

                <tr>
                  <p className="message">✔️📷 Photo</p>
                </tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Mage</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Message</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Message</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Message</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Message</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
          <Table>
            <tr>
              <td width="10px">
                <img src={dp} alt="Avatar" />
              </td>
              <td>
                <p className="name">Name</p>

                <tr className="message">Message</tr>
              </td>
              <td>
                <p className="dayofmessage">Yesterday</p>
              </td>
            </tr>
          </Table>
        </div>
      </body>
    </div>
  )
}

export default App
