import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "./views/Navigation";
import Section from "./views/Section";
import Main from "./routes/Main";
import Feed from "./routes/Feed";
import Board from "./routes/Board";
import MyPage from "./routes/MyPage";
import Upload from "./routes/Upload";
import LogIn from "./routes/LogIn";
import SignUp from "./routes/SignUp";

function Router() {
  return (
    <BrowserRouter>
      <Navigation />

      <Section>
        <Switch>
          <Route path="/">
            <Main />
          </Route>

          <Route path="/feed">
            <Feed />
          </Route>

          <Route path="/upload">
            <Upload />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/board/:boardNumber">
            <Board />
          </Route>

          <Route path="/:memberId">
            <MyPage />
          </Route>
        </Switch>
      </Section>
    </BrowserRouter>
  );
}

export default Router;
