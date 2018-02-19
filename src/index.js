import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import LoginPage from "./containers/LoginPage";
import store from "./store/index.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
require('dotenv').config()
process.env.environment = 'development'

render(
  <MuiThemeProvider>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" render={() => <LoginPage newUser={false} />} />
          <Route path="/register" render={() => <LoginPage newUser={true} />} />
        </Switch>
      </Router>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById("root")
);
