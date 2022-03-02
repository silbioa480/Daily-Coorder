import LogInmember from "../components/LogInmember";
import IdSearch from "../components/IdSearch";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PasswordSearch from "../components/PasswordSearch";

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
            <LogInmember />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default LogIn;
