import "../css/Board_Similar.css";
import similar from "../img/similar.png";
import { Circle } from "../css/Board_Posts";
import Board_Posts from "./Board_Posts";

function Similar_Pin() {
  return (
    <div className="aaa">
      <div className="similar">
        <div className="similar_img">
          <a href="#">
            <img src={similar} alt=""></img>
          </a>
        </div>
        <a href="#">
          <div className="by">
            <Circle src={similar}></Circle>
            <div className="nickname">
              <span>인용식</span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

function Board_Similar() {
  //반복문
  return (
    <div>
      <h1 style={{ textAlign: "center", height: "50px", padding: "1em" }}>
        유사한 핀 더보기
      </h1>
      <Similar_Pin />
    </div>
  );
}

export default Board_Similar;
