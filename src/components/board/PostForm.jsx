import { BsArrowDownShort } from "react-icons/bs";
import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import React, { useState } from "react";
import "../../css/board/postForm.css";
import ReplyFormfunction from "./ReplyFormFunction";
import ReplyForm from "./ReplyForm";
import momment from "moment";
import moment from "moment";
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
  };

  const [commentsList, setCommentList] = useState([]);

  const removeComment = (id) => {
    setCommentList(
      commentsList.filter((comment) => {
        return comment.id !== id;
      })
    );
  };
  const click = (e) => {
    e.preventDefault();

    setCommentList([
      ...commentsList,
      {
        id: Date.now(),
        content: content,
        time: moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초"),
      },
    ]);
    setContent(""); //입력하고나면 비워줌
  };
  const renderComments = commentsList.map((comments) => {
    return (
      <ReplyForm
        comments={comments}
        key={comments.id}
        removeComment={removeComment}
      />
    );
  });
  return (
    <>
      {renderComments}
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
                  placeholder="댓글을 입력해주세요"
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
              onClick={click}
              type="button"
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
