import {Circle} from "../../css/Board_Posts";
import React, {useState} from "react";
import "../../css/board/postForm.css";
import ReplyForm from "./ReplyForm";
import moment from "moment";
import EditForm from "./EditForm";
import mainno10 from "../../img/main/mainano10.png"

//댓글입력하면나오는폼
function PostForm() {
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
    const [aaa, setAaa] = useState("");
    const [con, SetCon] = useState("");
    const [commentsList, setCommentList] = useState([]);
    const removeComment = (id) => {
        setCommentList(
            commentsList.filter((comment) => {
                return comment.id !== id;
            })
        );
    };
    // const onClick = {
    //   function(e) {
    //     e.currentTarget.value = con;
    //   },
    // };
    // onClick={function (e) {
    //   e.currentTarget.value = con;
    // }}
    const [formLocation, SetFormLocation] = useState(false);

    const modification = (content) => {
        SetCon(content);
        SetFormLocation(!formLocation);
        console.log(content);
    };

    const click = (e) => {
        e.preventDefault();
        if (!content) {
            alert("여긴 포스트 폼입니다");
        } else {
            setCommentList([
                ...commentsList,
                {
                    id: Date.now(),
                    content: content,
                    time: moment().format("YYYY년 MM월 DD일 HH시 mm분 "),
                },
            ]);
        }

        setContent(""); //입력하고나면 비워줌
    };
    const renderComments = commentsList.map((comments, index) => {
        return (
            <div>
                <ReplyForm
                    comments={comments}
                    key={comments.id}
                    removeComment={removeComment}
                    modification={modification}
                    index={index}
                    // id={comments.id}
                    // isEdit={false}
                />
                {/* {formLocation == index ? <EditForm /> : null} */}
            </div>
        );
    });

    return (
        <>
            {/* {renderComments} */}
            {formLocation == false ? (
                renderComments
            ) : (
                <EditForm modcontent={content}/>
            )}

            <div style={{marginTop: "10px", position: "relative"}}>
                <div className="wrapper">
                    <div style={{marginLeft: "10px"}}>
                        <div style={{display: "flex"}}>
                            <div style={{}}>
                                <a href="#">
                                    <Circle
                                        src={mainno10}
                                        style={{display: "inline", marginLeft: "20px"}}
                                    ></Circle>
                                </a>
                            </div>
                            <div>
                <textarea style={{marginLeft: "5px"}}
                          ref={textRef}
                          onKeyUp={textResize}
                          onKeyDown={textResize}
                          id="comment"
                          placeholder="댓글을 입력해주세요"
                          cols={35}
                          required
                          onChange={handleChange}
                          value={content}
                ></textarea>
                            </div>
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
                            style={{
                                marginRight: "20px",
                                marginLeft: "7px",
                            }}
                        >
                            완료
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostForm;
