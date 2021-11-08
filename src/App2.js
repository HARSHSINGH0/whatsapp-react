import React, { Component } from "react"
import "./App.css"
import Button from "@material-ui/core/Button"
// // import CustomButton from "./custom.js"
// import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded"
import { withStyles } from "@material-ui/core/styles"
import CameraAltRoundedIcon from "@mui/icons-material/CameraAltRounded"
import IconButton from "@mui/material/IconButton"
import SearchIcon from "@mui/icons-material/Search"
import MoreVertIcon from "@mui/icons-material/MoreVert"

// image add part
import dp from "./images/dp.jpg"
import { render } from "react-dom"
import { useState } from "react"
import App from "./App"
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

export default class App2 extends Component {
  state = {
    profileImg:
      "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
  }
  imageHandler = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      if (reader.readyState === 2) {
        this.setState({ profileImg: reader.result })
      }
    }
    reader.readAsDataURL(e.target.files[0])
  }

  render() {
    const [name, setName] = useState(null)
    const [message, setMessage] = useState(null)
    const [days, setDays] = useState(null)
    function getName(val) {
      setName(val.target.value)
    }
    function getMessage(val) {
      setMessage(val.target.value)
    }
    function getDays(val) {
      setDays(val.target.value)
    }

    const { profileImg } = this.state
    return (
      <div>
        <header className="App-header">
          <table striped bordered hover variant="dark">
            <CustomButton3>WhatsApp</CustomButton3>

            {/* This is for spacing */}
            <IconButton aria-label="SearchIcon">
              <SearchIcon style={{ color: "#87929c" }} />
            </IconButton>
            <IconButton aria-label="MoreVertIcon">
              <MoreVertIcon style={{ color: "#87929c" }} />
            </IconButton>
          </table>
          <table striped bordered hover variant="dark">
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
          </table>
        </header>
        {/* <body className="App-line" style={{ color: "#01bea5" }}>
        ________
      </body> */}
        <body className="App-body">
          <table>
            <tr width="320px" height="568px">
              <table>
                <tr>
                  <td>
                    <img src={dp} alt="Avatar" />
                  </td>
                  <td>
                    <p className="name">{name}</p>

                    <tr>
                      <p className="message">{message}</p>
                    </tr>
                  </td>
                  <td>
                    <p className="dayofmessage">{days}</p>
                  </td>

                  <td>
                    <p className="tdofeditor">
                      Name: <input type="text" size="20" onChange={getDays} />
                      Message:
                      <input type="text" onChange={getMessage} />
                      Day :
                      <input type="text" onChange={getDays} />
                      Image:
                    </p>
                  </td>
                </tr>
              </table>
            </tr>
          </table>
        </body>

        <div className="img-holder">
          <img src={profileImg} alt="" id="img" className="img" />
        </div>
        <input
          type="file"
          accept="image/*"
          name="image-upload"
          className="input_image"
          onChange={this.imageHandler}
        />
        <div className="label">
          <label className="image-upload" htmlFor="input">
            <i className="material-icons">add_photo_alternate</i>
            Choose your Photo
          </label>
        </div>
      </div>
    )
  }
}
// export default App;
