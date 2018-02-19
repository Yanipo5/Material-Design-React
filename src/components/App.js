import React, { Component } from "react";
import RaisedButton from "material-ui/RaisedButton";
import MainAppBar from "./MainAppBar";
import MyProfile from "./MyProfile";

export default class App extends Component {
  style = {
    margin: 12
  };

  flexbox = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    maxWidth: "100%",
    justifyContent: "center",
    alignItems: "center"
  };

  render() {
    return (
      <div>
        <MainAppBar />
        <div style={this.flexbox}>
          <RaisedButton label="Action1" style={this.style} />
          <RaisedButton label="Action2" style={this.style} />
          <RaisedButton label="Action3" style={this.style} />
          <MyProfile open={true} />
        </div>
      </div>
    );
  }
}
