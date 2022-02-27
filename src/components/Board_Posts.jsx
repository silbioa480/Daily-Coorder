import "../css/Board_Posts.css";
import { BsDownload, BsBookmarks, BsPlusSquare } from "react-icons/bs";
import { FiMoreHorizontal, FiX } from "react-icons/fi";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import jini from "../img/jini.png";
import qr from "../img/qr.png";
import { Circle, Com, Square } from "../css/Board_Posts";
import { useState } from "react";
import similar from "../img/similar.png";

function Board_Picture() {
  return (
    <div className="bp">
      <div className="picture">
        <img src={jini} alt="profile" />
      </div>
      <div className="bp1">
        <Square style={{ marginTop: "10px" }}>20대</Square>
        <Square style={{ marginTop: "10px" }}>여성</Square>
        <Square style={{ marginTop: "10px" }}>핫</Square>
      </div>
      <div className="bp2">
        <div style={{ margin: "5px" }} type="button">
          <HiOutlineThumbUp />
        </div>
        <div style={{ margin: "5px" }} type="button">
          <BsPlusSquare />
        </div>
        <div style={{ margin: "5px" }} type="button">
          <RiShareForwardLine />
        </div>
      </div>
    </div>
  );
}

function Information() {
  return (
    <div className="infor">
      <Drop />
      <Qrcode />
      <Comment />
    </div>
  );
}

function Comment() {
  return (
    <table>
      <tr>
        <div className="wrapper">
          <td>
            <Circle src={similar}></Circle>
          </td>
          <td>
            <textarea
              placeholder="댓글을 입력하세요"
              cols={35}
              required
            ></textarea>
          </td>
        </div>
      </tr>
      <tr>
        <div className="comment_btn">
          <td>
            <button>취소</button>
          </td>
          <br></br>
        </div>
        <div className="comment_btn2">
          <td>
            <button type="submit">완료</button>
          </td>
        </div>
      </tr>
    </table>
  );
}

function Qrcode() {
  return (
    <div>
      <div className="qr">
        <img src={qr} alt="profile" />
      </div>
    </div>
  );
}

function Drop() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <FiMoreHorizontal />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <BsDownload style={{ marginRight: "10px" }} />
            이미지 다운로드
          </div>
          <div className="dropdown-item">
            <BsBookmarks style={{ marginRight: "10px" }} />
            게시물 저장
          </div>
          <div className="dropdown-item">
            <FiX style={{ marginRight: "10px" }} />
            게시물 숨기기
          </div>
        </div>
      )}
    </div>
  );
}

function Board_Posts() {
  return (
    <div className="Board_Posts">
      <Board_Picture />
      <Information />
    </div>
  );
}
export default Board_Posts;
