import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function FeedMenu() {
  return (
    <ListGroup as="ul">
      <ListGroup.Item as="li">
        <Link
          to={"/feed/"}
          style={{
            display: "inline-block",
            width: "100%",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          팔로워
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link
          to={"/feed/my_liked"}
          style={{
            display: "inline-block",
            width: "100%",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          내가 좋아요한 게시물
        </Link>
      </ListGroup.Item>

      <ListGroup.Item as="li">
        <Link
          to="/feed/my_uploaded"
          style={{
            display: "inline-block",
            width: "100%",
            padding: "10px 0",
            textAlign: "center",
          }}
        >
          내가 업로드한 게시물
        </Link>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default FeedMenu;
