import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import ReplyFormfunction from "./ReplyFormFunction";
import "../../css/board/replyForm.css";
//댓글을달았을때 입력받아서 나오는 폼
function ReplyForm(prop) {
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
                <p>둘리</p>
              </a>
              {/* 댓글 */}
              <p>{prop.content}</p>
            </div>
            <div></div>
          </div>
        </div>
        <div>
          <ReplyFormfunction />
        </div>
      </div>
    </>
  );
}

export default ReplyForm;
