import {Circle} from "../../css/Board_Posts";
import React, {useState} from "react";
import moment from "moment";
import Re_ReplyForm from "./Re_ReplyForm";
import mainno5 from "../../img/main/mainano5.png"

//대댓글 눌렀을떄 밑에나오는 댓글입력폼
function ReplyPostForm() {
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
    const [commentsList, setCommentList] = useState([]);

    const removeComment = (id) => {
        setCommentList(
            commentsList.filter((comment) => {
                return comment.id !== id;
            })
        );
    };
    const click = (e) => {
        e.preventDefault();

        setCommentList([
            ...commentsList,
            {
                id: Date.now(),
                content: content,
                time: moment().format("YYYY년 MM월 DD일 HH시 mm분 ss초"),
            },
        ]);
        setContent(""); //입력하고나면 비워줌
    };
    const renderComments = commentsList.map((comments) => {
        return (
            <Re_ReplyForm
                comments={comments}
                key={comments.id}
                removeComment={removeComment}
            />
        );
    });
    return (
        <>
            {renderComments}

            <div style={{marginTop: "10px"}}>
                <div className="wrapper">
                    <div style={{display: "flex", justifyContent: "center"}}>
                        <div>
                            <label for="comment">
                                <a href="#">
                                    <Circle src={mainno5}></Circle>
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
                  value={content}
              ></textarea>
                        </div>
                    </div>
                    <div
                        className="comment_btn"
                        style={{display: "flex", padding: "5px"}}
                    >
                        <button style={{marginLeft: "auto"}}>취소</button>
                        <button
                            onClick={click}
                            type="button"
                            style={{marginRight: "20px", marginLeft: "7px"}}
                        >
                            완료
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReplyPostForm;
