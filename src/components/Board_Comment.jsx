import "../css/board/Board_Post.css";
import ReplyForm from "./board/ReplyForm";
import PostForm from "./board/PostForm";
function Comment() {
  return (
    <>
      <div
        style={{
          marginLeft: "20px",
          padding: "20px 0px 0px 0px",
        }}
      >
        댓글
      </div>

      <PostForm />
    </>
  );
}
export default Comment;
