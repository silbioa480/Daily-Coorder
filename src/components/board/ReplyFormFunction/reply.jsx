import { BsFillChatDotsFill } from "react-icons/bs";
import { useState } from "react";
import ReplyPostForm from "../ReplyPostForm";
function Reply() {
  const [isreply, setIsreply] = useState(false);
  return (
    <>
      <BsFillChatDotsFill onClick={(e) => setIsreply(!isreply)} />
      {isreply && <ReplyPostForm />}
    </>
  );
}
export default Reply;
