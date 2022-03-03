import "../css/Board_Posts.css";
import { BsArrowDownShort, BsFillChatDotsFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { Circle } from "../css/Board_Posts";
import similar from "../img/similar.png";
import React, { useEffect, useState } from "react";
//댓글창
function Answer() {
  const [isActive, setIsActive] = useState({});
  // const toggleActive = (id) => {
  //   console.log(id);
  //   setIsActive((prevIsActive) => {
  //     console.log(prevIsActive);

  //     return {
  //       ...prevIsActive,
  //       [id]: !prevIsActive[id],
  //     };
  //   });
  // };
  const [isliked, setIsliked] = useState({});

  const toggleClick = (e, id) => {
    console.log(e);
    if (e.target.localName == "svg") {
      setIsActive((prevIsActive) => {
        console.log(prevIsActive);

        return {
          ...prevIsActive,
          [id]: !prevIsActive[id],
        };
      });
    } else {
      setIsliked((preve) => {
        console.log(preve);
        return {
          ...preve,
          [id]: !preve[id],
        };
      });
    }
  };

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
      <>
        <div>
          <div key={rep.id}>
            {/* 프로필사진 */}
            <div style={{ display: "flex", marginTop: "10px" }}>
              <div>
                <a href="#">
                  <Circle
                    src={similar}
                    style={{ display: "inline", marginLeft: "20px" }}
                  ></Circle>
                </a>
              </div>

              <div>
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
                  {/*닉네임  */}
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
                  {/* 댓글 */}
                  <p
                    style={{
                      padding: "0px 0px 0px 5px",
                    }}
                  >
                    {rep.content}
                  </p>
                </div>
                {/* 밑에아이콘 */}
                <div style={{ cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "right" }}>
                    <div
                      onClick={(e) => {
                        toggleClick(e, rep.id);
                      }}
                    >
                      <AiFillHeart color={isliked[rep.id] ? "red" : "black"} />
                    </div>

                    <div>
                      <BsFillChatDotsFill />
                    </div>

                    <div>
                      <FiMoreHorizontal
                        onClick={(e) => {
                          toggleClick(e, rep.id);
                        }}
                      />
                    </div>

                    {isActive[rep.id] ? (
                      <div
                        style={{
                          position: "absolute",
                          width: "130px",
                          height: "60px",
                          borderRadius: "10px",
                          boxShadow: "1px 1px 10px 6px rgba(0, 0, 0, 0.06)",
                          marginTop: "20px",
                          marginLeft: "200px",
                        }}
                      >
                        <button
                          className="modification_btn"
                          style={{
                            display: "block",
                            width: "100%",
                            height: "50%",
                            padding: "3px 5px 3px 5px",
                            border: "none",
                            borderRadius: "10px 10px 0px 0px",
                          }}
                        >
                          수정
                        </button>

                        <button
                          className="remove_btn"
                          style={{
                            padding: "3px 5px 3px 5px",
                            width: "100%",
                            height: "50%",
                            border: "none",
                            borderRadius: "0px 0px 10px 10px",
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  });
  return <>{renderRepeat}</>;
}

function Comment() {
  const textRef = React.createRef();
  const textResize = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
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
            onChange={handleChange}
          >
            {content}
          </textarea>
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
