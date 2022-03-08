import { Circle, Square, QR, CButton } from "../../css/Board_Posts";
import { useState } from "react";
import similar from "../../img/similar.png";
import "../../css/board/followButton.css";
import mainano1 from "../../img/main/mainano1.png";

//팔로우버튼
//userinformation도들어있음
function FollowButton() {
  const [backgroundcolor, setBackgroundcolor] = useState("lightgray");
  const [color, setColor] = useState("black");
  const [content, setContent] = useState("팔로우");

  const onClick = () => {
    backgroundcolor === "lightgray"
      ? setBackgroundcolor("black")
      : setBackgroundcolor("lightgray");

    color === "black" ? setColor("white") : setColor("black");
    content === "팔로우" ? setContent("팔로잉") : setContent("팔로우");
    // setContent((prev) => (prev === "팔로우" ? "팔로잉" : "팔로우")); :방법2
  };

  return (
    <>
      <div className="information_button">
        <div className="information">
          <div>
            <a href="#">
              <Circle src={mainano1} style={{ marginLeft: "20px" }}></Circle>
            </a>
          </div>
          <div style={{ margin: "auto 0", marginLeft: "7px" }}>
            <a href="#">
              <p>닉네임</p>
            </a>
            <p>팔로워 x명</p>
          </div>
        </div>

        <div>
          <CButton color={backgroundcolor} value={color} onClick={onClick}>
            {content}
          </CButton>
        </div>
      </div>
    </>
  );
}

export default FollowButton;
