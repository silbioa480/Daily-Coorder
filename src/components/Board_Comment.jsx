import "../css/Board_Posts.css";
import { BsArrowDownShort } from "react-icons/bs";
import { Circle } from "../css/Board_Posts";
import similar from "../img/similar.png";
import React from "react";
function Answer() {
  const repeat = [
    {
      id: 1,
      name: "인용식1",
      content: "안녕하세요1",
    },
    {
      id: 2,
      name: "인용식2",
      content: "안녕하세요2",
    },
    {
      id: 3,
      name: "인용식3",
      content: "안녕하세요3",
    },
  ];
  const renderRepeat = repeat.map((rep) => {
    return (
      <div style={{ display: "flex", marginTop: "10px" }} key={rep.id}>
        <div>
          <a href="#">
            <Circle
              src={similar}
              style={{ display: "inline", marginLeft: "20px" }}
            ></Circle>
          </a>
        </div>
        <div
          style={{
            margin: "auto 0",
            marginLeft: "7px",
            border: "1px solid lightgray",
            width: "250px",
            height: "auto",
            minHeight: "59px",
            borderRadius: "5px",
          }}
        >
          <a href="#">
            <p
              style={{
                padding: "5px 5px 3px 5px", //상,우,하,좌
                fontWeight: "bold",
              }}
            >
              {rep.name}
            </p>
          </a>
          <p
            style={{
              padding: "0px 0px 0px 5px",
            }}
          >
            {rep.content}
          </p>
        </div>
      </div>
    );
  });
  return <div>{renderRepeat}</div>;
}

function Comment() {
  const textRef = React.createRef();
  const textResize = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };
  return (
    <div className="t-wrapper">
      <div className="c-wrapper">
        <h1
          style={{
            fontsize: "20px",
            fontWeight: "700",
            width: "40px",
            height: "25px",
            textAlign: "center",
            padding: "0.2em",
          }}
        >
          댓글
        </h1>
        <BsArrowDownShort
          style={{ width: "40px", height: "25px" }}
        ></BsArrowDownShort>
      </div>
      <Answer />
      <form>
        <div className="wrapper">
          <label for="comment">
            <a href="#">
              <Circle
                src={similar}
                style={{ display: "inline", marginLeft: "20px" }}
              ></Circle>
            </a>
          </label>
          <textarea
            ref={textRef}
            onKeyUp={textResize}
            onKeyDown={textResize}
            id="comment"
            placeholder="댓글을 입력하세요"
            cols={35}
            required
            style={{ marginLeft: "10px" }}
          ></textarea>
          <div
            className="comment_btn"
            style={{ display: "flex", padding: "5px" }}
          >
            <button style={{ marginLeft: "auto" }}>취소</button>
            <button
              type="submit"
              style={{ marginRight: "20px", marginLeft: "7px" }}
            >
              완료
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Comment;
