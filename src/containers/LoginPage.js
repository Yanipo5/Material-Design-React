import React, { Component } from "react";
import { register, login } from "../store/actions/";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import swal from "sweetalert";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.fillInput = this.fillInput.bind(this);
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  fillInput(event, stateName) {
    const txt = event.target.value;
    switch (stateName) {
      case "email":
        this.setState({ email: txt });
        break;
      case "password":
        this.setState({ password: txt });
        break;
      default:
        break;
    }
  }

  register() {
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      new Promise((success, fail) => {
        this.props.register({
          email: this.state.email,
          password: this.state.password
        });
        success();
      })
        .then(() => {
          swal("User Added", "email added!", "success");
        })
        .then(() => {
          setTimeout(() => {
            window.location = "/login";
          }, 1000);
        })
        .catch(() => {
          console.log("dsdsdsdzzzzzz");
          swal("User Not Added!", "email added!", "fail");
        });
    }
  }

  login() {
    const { email, password } = this.state;
    if (email !== "" && password !== "") {
      this.props.login({
        email: this.state.email,
        password: this.state.password
      });
    }
  }

  style = {
    display: "flex",
    maxWidth: "100%",
    width: 500,
    margin: "auto",
    padding: 10,
    textAlign: "center"
  };

  render() {
    //redirect if already logged in.
    if (this.props.me !== "") {
      window.location = "/";
    }

    return (
      <div>
        <h1 style={{ textAlign: "center" }}>{"Welcome to App-Test"}</h1>
        <Paper style={this.style} zDepth={5}>
          <div>
            <input
              type="email"
              placeholder="enter your email"
              value={this.state.email}
              onChange={e => {
                this.fillInput(e, "email");
              }}
            />
            <input
              type="password"
              placeholder="enter your password"
              value={this.state.password}
              onChange={e => {
                this.fillInput(e, "password");
              }}
            />
            {this.props.newUser && (
              <div>
                <RaisedButton
                  onClick={() => {
                    this.register();
                  }}
                  disabled={
                    this.state.email === "" || this.state.password === ""
                  }
                >
                  {" Register "}
                </RaisedButton>

                <div>
                  {" "}
                  <a href="/login">{"(or go to login)"}</a>
                </div>
              </div>
            )}
            {!this.props.newUser && (
              <div>
              <RaisedButton
                onClick={() => {
                  this.login();
                }}
                disabled={this.state.email === "" || this.state.password === ""}
              >
                {" Login "}
              </RaisedButton>
                <div>
                  {" "}
                  <a href="/register">{"(or go to register)"}</a>
                </div>
              </div>
            )}
          </div>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return { me: state.me };
}

function mapDispatchToProps(dispatch) {
  return {
    register: bindActionCreators(register, dispatch),
    login: bindActionCreators(login, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
