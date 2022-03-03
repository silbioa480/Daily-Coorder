import IdSearch from "../components/IdSearch";
import PasswordSearch from "../components/PasswordSearch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginMember from "../components/LoginMember";

function LogIn() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login/IdSearch">
            <IdSearch />
          </Route>
          <Route exact path="/login/PasswordSearch">
            <PasswordSearch />
          </Route>
          <Route exact path="/login">
            <LoginMember />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

//
export default LogIn;
