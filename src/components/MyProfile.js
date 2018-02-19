import React, { Component } from "react";
import ProfileForm from "./ProfileForm";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */
export default class MyProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onClick={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          disabled={true}
          onClick={this.handleClose}
        />,
      ];

    return (
        <span>
        <RaisedButton label="My Profile" onClick={this.handleOpen} />
        <Dialog
          title="My Profile"
          actions={actions}
          modal={true}
          open={this.state.open}
        >
          <ProfileForm />
        </Dialog>
      </span>
    );
  }
}

