import { BsFillChatDotsFill, BsJustify } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import ModiRemoveForm from "./ModiRemoveForm";
import ReplyPostForm from "./ReplyPostForm";
//댓글달았을때 나오는폼의 좋아요 대댓글 수정삭제 폼
function ReplyFormfunction({ comments, removeComment, modification }) {
  const [color, setColor] = useState("gray");
  const heartClick = () => {
    color === "gray" ? setColor("rgba(254,68,161,1)") : setColor("gray");
  };
  const [isActive, setIsActive] = useState(false);
  const [isreply, setIsreply] = useState(false);
  return (
    <>
      <div style={{ marginLeft: "270px" }}>
        <AiFillHeart onClick={heartClick} style={{ color: color }} />

        <BsFillChatDotsFill onClick={(e) => setIsreply(!isreply)} />
        <ModiRemoveForm
          comments={comments}
          removeComment={removeComment}
          modification={modification}
        />
      </div>
      {isreply && <ReplyPostForm />}
    </>
  );
}
// "rgba(254,68,161,1)"
export default ReplyFormfunction;
