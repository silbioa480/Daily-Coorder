import "../css/board/Board_Post.css";
import ReplyForm from "./board/ReplyForm";
import PostForm from "./board/PostForm";
import { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
function Comment() {
  const [isShow, setIsShow] = useState(false);

  const toggle = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <div className="arrow_btn">
        댓글
        <button onClick={() => setIsShow(!isShow)}>
          {isShow ? <AiOutlineArrowDown /> : <AiOutlineArrowRight />}
        </button>
      </div>
      {isShow && <PostForm />}
    </>
  );
}
export default Comment;
