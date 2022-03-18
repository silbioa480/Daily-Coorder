import {Circle} from "../../css/Board_Posts";
import {useState} from "react";
import "../../css/board/followButton.css";
import UserService from "../../service/UserService";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import FollowButton from "./FollowButton";
import mainno1 from "../../img/main/mainano1.png"

interface IProps {
    board: IBoard;
}

//팔로우버튼
//userinformation도들어있음
function UserFollower(props: IProps) {
    let board = props.board;

    const [user, setUser] = useState<IUser>();
    const [like, setLike] = useState(235);


    function likeln() {
        setLike(like + 1)
    }

    function likeDe() {
        setLike(like - 1);
    }


    // 게시물작성자()를 이용해 유저닉네임을 가져옴
    async function getUser() {

        setUser(await UserService.getUserById(board?.board_poster).then(res => res.data));
    }


    // useEffect(() => {
    //     console.log(board.board_poster);
    //     console.log(user);
    //     getUser();
    //
    // }, [board])


    //user_profile 이용 프로필이미지파일
    // let profileurl = "https://daily-coorder-backend.herokuapp.com/api/board_img/" + user?.user_profile;

    //<Circle src={profileurl} style={{marginLeft: "20px"}}></Circle>

    return (
        <>
            <div className="information_button">
                <div className="information">
                    <div style={{marginLeft: "20px"}}>
                        <a href="#">
                            <Circle src={mainno1} alt=""></Circle>

                            {/*<Circle src={mainno10.png} style={{marginLeft: "20px"}}></Circle>*/}
                        </a>
                    </div>
                    <div style={{margin: "auto 0", marginLeft: "7px"}}>
                        <a href="#">
                            <p style={{fontWeight: "bold", fontSize: "16px", padding: "3px "}}>JamesKim
                            </p>
                        </a>
                        <p style={{fontSize: "13px", padding: "3px"}}>팔로워 {like}명</p>
                    </div>
                </div>

                <FollowButton likeln={likeln} likeDe={likeDe} like={like} user={user as IUser}/>
            </div>
        </>
    );
}

export default UserFollower;
