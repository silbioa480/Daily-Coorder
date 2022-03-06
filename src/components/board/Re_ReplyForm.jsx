import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import ReReplyFormFunction from "./ReReplyFormFunction";

//대댓글 달았을때 나오는 폼

function Re_ReplyForm() {
  const repeat = [
    {
      id: 1,
      name: "홍길동1",
      content: "반갑습니다1",
    },
  ];

  const renderRepeat = repeat.map((rep) => {
    return (
      <>
        <div>
          <div key={rep.id}>
            {/* 프로필사진 */}
            <div
              style={{ display: "flex", marginTop: "10px", marginLeft: "20px" }}
            >
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
                    <p
                      style={{
                        padding: "5px 5px 3px 5px", //상,우,하,좌
                        fontWeight: "bold",
                      }}
                    >
                      {rep.name}
                    </p>
                  </a>
                  {/* 댓글 */}
                  <p
                    style={{
                      padding: "0px 0px 0px 5px",
                    }}
                  >
                    {rep.content}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <ReReplyFormFunction />
            </div>
          </div>
        </div>
      </>
    );
  });
  return <>{renderRepeat}</>;
}
//좋아요 대대댓글 수정삭제 기능추가

export default Re_ReplyForm;
