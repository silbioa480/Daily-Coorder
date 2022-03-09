import "../css/board/Board_Post.css";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowRight } from "react-icons/ai";
import PostForm from "./board/PostForm";

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
