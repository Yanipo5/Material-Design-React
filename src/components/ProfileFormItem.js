import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { editProfile } from "../store/actions/";

class ProfileFormItem extends Component {
  style = {
    width: 100,
    display: "inline-block"
  };
  render() {
    const stateName = this.props.stateName;
    const value = this.props[stateName];
    
    return (
      <div>
        <label>
          <span style={this.style}>{this.props.title} </span>
          <input
            type={this.props.type || "text"}
            value={value}
            onChange={e => {
              this.props.editProfile(stateName, e.target.value);
            }}
          />
        </label>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    work: state.profile.work,
    address: state.profile.address,
    email: state.profile.email
  };
}

function mapDispatchToProps(dispatch) {
  return {
    editProfile: bindActionCreators(editProfile, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormItem);