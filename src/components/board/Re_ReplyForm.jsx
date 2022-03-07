import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import ReReplyFormFunction from "./ReReplyFormFunction";

//대댓글 달았을때 나오는 폼

function Re_ReplyForm({ comments }) {
  return (
    <>
      <div>
        {/* 프로필사진 */}
        <div style={{ display: "flex", marginTop: "10px", marginLeft: "20px" }}>
          <div>
            <a href="#">
              <Circle
                src={similar}
                style={{
                  display: "inline",
                  marginLeft: "20px",
                  width: "36px",
                  height: "36px",
                }}
              ></Circle>
            </a>
          </div>

          <div>
            <div
              style={{
                margin: "auto 0",
                marginLeft: "7px",
                border: "1px solid lightgray",
                width: "243px",
                height: "auto",
                minHeight: "59px",
                borderRadius: "5px",
              }}
            >
              {/*닉네임  */}
              <a href="#">
                <span
                  style={{
                    padding: "5px 5px 3px 5px", //상,우,하,좌
                    fontWeight: "bold",
                  }}
                >
                  둘리
                </span>
              </a>
              {/* 시간 */}
              <span
                style={{
                  fontWeight: "lighter",
                  fontSize: "small",
                }}
              >
                {comments.time}
              </span>
              {/* 댓글 */}
              <p
                style={{
                  padding: "0px 0px 0px 5px",
                }}
              >
                {comments.content}
              </p>
            </div>
          </div>
        </div>
        <div>
          <ReReplyFormFunction />
        </div>
      </div>
    </>
  );
}
//좋아요 대대댓글 수정삭제 기능추가

export default Re_ReplyForm;
