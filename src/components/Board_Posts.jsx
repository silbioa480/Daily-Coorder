import Comment from "../components/Board_Comment";
import Explanation from "./board/Explanation";
import FollowButton from "./board/FollowButton";
import PictureQr from "./board/PictureQr";
import DownBtn from "./board/DownBtn";

function Board_Posts() {
  return (
    <>
      <div className="Board_Posts">
        <PictureQr />
        <div>
          <DownBtn />
          <Explanation />
          <FollowButton />

          <Comment />
        </div>
      </div>
    </>
  );
}
export default Board_Posts;
