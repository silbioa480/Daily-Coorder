import { BsArrowDownShort } from "react-icons/bs";
import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import React, { useState } from "react";
import "../../css/board/postForm.css";
import ReplyFormfunction from "./ReplyFormFunction";
import ReplyForm from "./ReplyForm";
import momment from "moment";
import moment from "moment";
import ReplyPostForm from "./ReplyPostForm";
//댓글입력하면나오는폼
function EditForm({ modcontent }) {
  //textarea 늘려주는 기능
  const textRef = React.createRef();
  const textResize = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };
  //댓글입력하는기능
  const [content, setcontent] = useState("");
  const handleChange = (e) => {
    setcontent(e.target.value);
  };
  const [con, SetCon] = useState("");

  const [commentsList, setCommentList] = useState([]);
  const removeComment = (id) => {
    setCommentList(
      commentsList.filter((comment) => {
        return comment.id !== id;
      })
    );
  };
  const [formLocation, SetFormLocation] = useState(false);

  const modification = () => {
    SetFormLocation();
  };

  const click = (e) => {
    e.preventDefault();
    if (!content) {
      alert("여긴 에디터 폼입니다");
    } else {
      setCommentList([
        ...commentsList,
        {
          id: Date.now(),
          content: content,
          time: moment().format("YYYY년 MM월 DD일 HH시 mm분 "),
        },
      ]);
    }

    setcontent(""); //입력하고나면 비워줌
  };
  const renderComments = commentsList.map((comments, index) => {
    return (
      <div>
        <ReplyForm
          comments={comments}
          key={comments.id}
          removeComment={removeComment}
          modification={modification}
          index={index}

          // id={comments.id}
          // isEdit={false}
        />
        {/* {formLocation == index ? null : <EditForm />} */}
      </div>
    );
  });

  return (
    <>
      {renderComments}
      {formLocation == false ? (
        <div>
          <a href="#">
            <Circle
              src={similar}
              style={{ display: "inline", marginLeft: "20px" }}
            ></Circle>
          </a>

          <textarea
            ref={textRef}
            onKeyUp={textResize}
            onKeyDown={textResize}
            onChange={handleChange}
            onClick={function (e) {
              e.currentTarget.value = con;
            }}
            value={modcontent}
          ></textarea>
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
      ) : (
        renderComments
      )}
      )
    </>
  );
}

export default EditForm;
