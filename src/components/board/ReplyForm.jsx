import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import ReplyFormfunction from "./ReplyFormFunction";
import "../../css/board/replyForm.css";
//댓글을달았을때 입력받아서 나오는 폼
function ReplyForm({ comments, removeComment, modification }) {
  return (
    <>
      <div>
        {/* 프로필사진 */}
        <div className="reply">
          <div>
            <a href="#">
              <Circle
                src={similar}
                style={{ display: "inline", marginLeft: "20px" }}
              ></Circle>
            </a>
          </div>

          <div>
            <div className="reply_nick_content">
              {/*닉네임  */}
              <a href="#">
                <span>둘리</span>
              </a>
              {/* 시간 */}
              <span>{comments.time}</span>
              {/* 댓글 */}

              <p>{comments.content}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <ReplyFormfunction
            comments={comments}
            removeComment={removeComment}
            modification={modification}
          />
        </div>
      </div>
    </>
  );
}

export default ReplyForm;
