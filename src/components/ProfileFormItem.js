import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { edit } from "../store/actions/";

class ProfileFormItem extends Component {
  style = {
    width: 100,
    display: "inline-block"
  };
  render() {
    const value = this.props[this.props.stateName] || "";
    return (
      <div>
        <label>
          <span style={this.style}>{this.props.title} </span>
          <input
            type={this.props.type || "text"}
            value={value}
            onChange={e => {
              this.props.edit(this.props.stateName, e.target.value);
            }}
          />
        </label>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    me: state.me,
    email: state.me.email,
    address: state.me.address,
    work: state.me.work
  };
}

function mapDispatchToProps(dispatch) {
  return {
    edit: bindActionCreators(edit, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileFormItem);
