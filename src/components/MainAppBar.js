import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { logout } from "../store/actions/";
import { connect } from "react-redux";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";

class MainAppBar extends Component {
  render() {
    if (this.props.me === "") {
      window.location = "/login";
    }
    return (
      <AppBar
        title="Test-App"
        iconElementRight={
          <FlatButton
            label="logout"
            onClick={() => {
              this.props.logout();
            }}
          />
        }
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { me: state.me };
}

function mapDispatchToProps(dispatch) {
  return { logout: bindActionCreators(logout, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainAppBar);
