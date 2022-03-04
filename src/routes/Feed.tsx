import { Route, Switch } from "react-router-dom";
import MyLiked from "../components/feed/MyLiked";
import MyUploaded from "../components/feed/MyUploaded";
import MyFollowers from "../components/feed/MyFollowers";
import FeedMenu from "../components/feed/FeedMenu";

function Feed() {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "30%" }}>
        <FeedMenu />
      </div>

      <div style={{ width: "70%", display: "flex", justifyContent: "center" }}>
        <Switch>
          <Route path="/feed/my_liked">
            <MyLiked />
          </Route>

          <Route path="/feed/my_uploaded">
            <MyUploaded />
          </Route>

          <Route path="/feed/">
            <MyFollowers />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Feed;
