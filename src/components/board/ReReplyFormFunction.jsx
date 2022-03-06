import { BsFillChatDotsFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import ModiRemoveForm from "./ModiRemoveForm";
import ReplyPostForm from "./ReplyPostForm";
import Heart from "./ReplyFormFunction/heart";
import Modi from "./ReplyFormFunction/modi";
import Reply from "./ReplyFormFunction/reply";
//댓글달았을때 나오는폼의 좋아요 대댓글 수정삭제 폼
function ReReplyFormFunction() {
  const [color, setColor] = useState("");
  const heartClick = () => {
    color === "" ? setColor("red") : setColor("");
  };
  const [isActive, setIsActive] = useState(false);
  const [isreply, setIsreply] = useState(false);

  return (
    <>
      <div style={{ marginLeft: "280px" }}>
        <AiFillHeart onClick={heartClick} style={{ color: color }} />
        <BsFillChatDotsFill onClick={(e) => setIsreply(!isreply)} />

        <FiMoreHorizontal onClick={(e) => setIsActive(!isActive)} />
        {isActive && <ModiRemoveForm />}
      </div>
      {isreply && <ReplyPostForm />}
    </>
  );
}

export default ReReplyFormFunction;
