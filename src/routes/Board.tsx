import Board_Posts from "../components/Board_Posts";
import Posts from "../components/Board_Posts";
import Board_Similar from "../components/Board_Similar";

function Board() {
  return (
    <div>
      <Board_Posts />
      <h1 style={{ textAlign: "center", padding: "30px" }}>유사한 핀 더보기</h1>
      <Board_Similar />
    </div>
  );
}

export default Board;
