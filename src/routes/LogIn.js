import IdSearch from "../components/IdSearch";
import PasswordSearch from "../components/PasswordSearch";
import { Route, Switch } from "react-router-dom";
import LoginMember from "../components/LoginMember";
import SignUp from "./SignUp";

function LogIn() {
  return (
    <>
      <Switch>
        <Route exact path="/login/IdSearch">
          <IdSearch />
        </Route>
        <Route exact path="/login/PasswordSearch">
          <PasswordSearch />
        </Route>

        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/login">
          <LoginMember />
        </Route>
      </Switch>
    </>
  );
}

//
export default LogIn;
