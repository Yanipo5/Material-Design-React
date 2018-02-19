import React, { Component } from "react";

import DatePicker from "material-ui/DatePicker";
import ProfileFormItem from "./ProfileFormItem";

export default class ProfileForm extends Component {
  mainFlexContainer = {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  };

  seconderyFlexContainer = { ...this.mainFlexContainer };
  seconderyFlexContainer = {
    width: "50%"
  };

  render() {
    return (
      <div style={this.mainFlexContainer}>
        <div style={this.seconderyFlexContainer}>
          <ProfileFormItem
            title="My Email"
            stateName="EMAIL"
            />
          <ProfileFormItem
            title="My Address"
            stateName="ADDRESS"
            />
          <ProfileFormItem
            title="My Work"
            stateName="WORK"
          />
        </div>
        <div style={this.seconderyFlexContainer}>
          <div>
            <label>
              {"My Birthday"}
              <DatePicker hintText="choose date" />
            </label>
          </div>
        </div>
      </div>
    );
  }
}