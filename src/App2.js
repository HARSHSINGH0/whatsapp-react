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
import { useState } from "react"
// image add part
import dp from "./images/dp.jpg"
import { render } from "react-dom"

export default class App extends Component {
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
    const { profileImg } = this.state
    return (
      <div className="page">
        <div className="container">
          <h1 className="heading">Add your Image</h1>
          <div className="img-holder">
            <img src={profileImg} alt="" id="img" className="img" />
          </div>
          <input
            type="file"
            accept="image/*"
            name="image-upload"
            id="input"
            onChange={this.imageHandler}
          />
          <div className="label">
            <label className="image-upload" htmlFor="input">
              <i className="material-icons">add_photo_alternate</i>
              Choose your Photo
            </label>
          </div>
        </div>
      </div>
    )
  }
}
// export default App;
