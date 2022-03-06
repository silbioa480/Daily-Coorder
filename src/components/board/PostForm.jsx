import { BsArrowDownShort } from "react-icons/bs";
import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import React, { useState } from "react";
import "../../css/board/postForm.css";
import ReplyFormfunction from "./ReplyFormFunction";
import ReplyForm from "./ReplyForm";
//댓글입력하면나오는폼
function PostForm() {
  //textarea 늘려주는 기능
  const textRef = React.createRef();
  const textResize = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };
  //댓글입력하는기능
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
    console.log(commentsList);
  };
  const [commentsList, setCommentList] = useState([]);

  const click = () => {
    setCommentList([...commentsList, content]);
    console.log(commentsList);
  };

  return (
    <>
      {commentsList.map((comments) => (
        <ReplyForm content={comments} /> //댓글입력하면 이게나옴
      ))}
      <div style={{ marginTop: "10px", position: "relative" }}>
        <div className="wrapper">
          <div style={{ marginLeft: "20px" }}>
            <div style={{ display: "flex" }}>
              <div>
                <a href="#">
                  <Circle
                    src={similar}
                    style={{ display: "inline", marginLeft: "20px" }}
                  ></Circle>
                </a>
              </div>
              <div>
                <textarea
                  ref={textRef}
                  onKeyUp={textResize}
                  onKeyDown={textResize}
                  id="comment"
                  placeholder="댓글을 입력하세요"
                  cols={35}
                  required
                  onChange={handleChange}
                  value={content}
                ></textarea>
              </div>
            </div>
          </div>
          <div
            className="comment_btn"
            style={{ display: "flex", padding: "5px" }}
          >
            <button style={{ marginLeft: "auto" }}>취소</button>
            <button
              type="button"
              onClick={click}
              style={{
                marginRight: "20px",
                marginLeft: "7px",
              }}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostForm;
