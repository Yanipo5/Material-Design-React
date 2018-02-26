import { combineReducers } from "redux";
import users from "./users";
import me from "./me";
import details from "./details";

export default combineReducers({
  users,
  me,
  details,
});
