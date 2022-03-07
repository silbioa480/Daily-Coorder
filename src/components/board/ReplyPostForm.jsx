import { BsArrowDownShort } from "react-icons/bs";
import { Circle } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import React, { useState } from "react";

//대댓글 눌렀을떄 밑에나오는 댓글입력폼
function SmollPostForm() {
  //textarea 늘려주는 기능
  const textRef = React.createRef();
  const textResize = () => {
    textRef.current.style.height = "auto";
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  };
  //댓글입력하는기능
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form>
      <div style={{ marginTop: "10px" }}>
        <div className="wrapper">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div>
              <label for="comment">
                <a href="#">
                  <Circle src={similar}></Circle>
                </a>
              </label>
            </div>
            <div>
              <textarea
                ref={textRef}
                onKeyUp={textResize}
                onKeyDown={textResize}
                id="comment"
                placeholder="댓글을 입력하세요"
                cols={35}
                required
                onChange={handleChange}
              >
                {content}
              </textarea>
            </div>
          </div>
          <div
            className="comment_btn"
            style={{ display: "flex", padding: "5px" }}
          >
            <button style={{ marginLeft: "auto" }}>취소</button>
            <button
              type="submit"
              style={{ marginRight: "20px", marginLeft: "7px" }}
            >
              완료
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
export default SmollPostForm;
