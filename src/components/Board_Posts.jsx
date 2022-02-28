import "../css/Board_Posts.css";
import {
  BsDownload,
  BsBookmarks,
  BsPlusSquare,
  BsArrowDownShort,
} from "react-icons/bs";
import { FiMoreHorizontal, FiX } from "react-icons/fi";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import qr from "../img/qr.png";
import { Circle, Com, Square } from "../css/Board_Posts";
import { useCallback, useState } from "react";
import similar from "../img/similar.png";
import { useRef } from "react";
import React from "react";
import Comment from "../components/Board_Comment";

function Board_Picture() {
  return (
    <div className="bp">
      <div className="picture">
        <img src={similar} alt="" />
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

function Download() {
  return (
    <div style={{ padding: "10px" }}>
      <Drop />
    </div>
  );
}

function Follow() {
  return (
    <div className="infor" style={{ display: "flex" }}>
      <div style={{ width: "300px", display: "flex" }}>
        <div>
          <a href="#">
            <Circle src={similar} style={{ marginLeft: "20px" }}></Circle>
          </a>
        </div>
        <div style={{ margin: "auto 0", marginLeft: "7px" }}>
          <a href="#">
            <p>닉네임</p>
          </a>
          <p>팔로워 x명</p>
        </div>
      </div>

      <div>
        <button
          style={{
            width: "80px",
            height: "48px",
            border: "none",
            borderRadius: "24px",
          }}
          // 팔로우누으면 팔로잉으로 바뀌고 backgroundc색 조정
        >
          팔로우
        </button>
      </div>
    </div>
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
      <div>
        <Download />
        <Follow />
        <Comment />
      </div>
    </div>
  );
}
export default Board_Posts;
