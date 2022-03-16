import {Circle} from "../../css/Board_Posts";
import {useEffect, useState} from "react";
import "../../css/board/followButton.css";
import UserService from "../../service/UserService";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import FollowButton from "./FollowButton";

interface IProps {
    board: IBoard;
}

//팔로우버튼
//userinformation도들어있음
function UserFollower(props: IProps) {
    let board = props.board;

    const [user, setUser] = useState<IUser>();

    // 게시물작성자()를 이용해 유저닉네임을 가져옴
    async function getUser() {

        setUser(await UserService.getUserById(board?.board_poster).then(res => res.data));
    }


    useEffect(() => {
        console.log(board.board_poster);
        console.log(user);
        getUser();

    }, [board])


    //user_profile 이용 프로필이미지파일
    let profileurl = "http://localhost:8080/api/board_img/" + user?.user_profile;


    return (
        <>
            <div className="information_button">
                <div className="information">
                    <div>
                        <a href="#">
                            <Circle src={profileurl} style={{marginLeft: "20px"}}></Circle>
                        </a>
                    </div>
                    <div style={{margin: "auto 0", marginLeft: "7px"}}>
                        <a href="#">
                            <p>{user?.user_nickname}</p>
                        </a>
                        <p>팔로워 {user?.user_follower_number}명</p>
                    </div>
                </div>

                <FollowButton user={user as IUser}/>
            </div>
        </>
    );
}

export default UserFollower;
