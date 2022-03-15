import {CButton, Circle} from "../../css/Board_Posts";
import {useEffect, useState} from "react";
import "../../css/board/followButton.css";
import IFollow from "../../interfaces/IFollow";
import FollowService from "../../service/FollowService";
import UserService from "../../service/UserService";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";

interface IProps {
    board: IBoard;
}

//팔로우버튼
//userinformation도들어있음
function FollowButton(props: IProps) {
    let board = props.board;
    const [backgroundcolor, setBackgroundcolor] = useState("lightgray");
    const [color, setColor] = useState("black");
    const [content, setContent] = useState("팔로우");
    //follow가 undifinde일수도있으니 초기값을 설정해준다 이게싫으면 as IFollow를 하면된다
    const [follow, setFollow] = useState<IFollow>({
        follow_id: 0,
        from_user_id: "",
        to_user_id: ""
    });
    const [user, setUser] = useState<IUser>();

    // 게시물작성자()를 이용해 유저닉네임을 가져옴
    async function getUser() {

        setUser(await UserService.getUserById(board.board_poster).then(res => res.data));
    }


    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    //팔로우 버튼을 누르면 팔로워테이블에 내아이디 상대방아이디 생성 (post create)
    async function createFollow() {
        setFollow(await FollowService.createFollow(follow).then(res => res.data));
    }

    //팔로우된 상태에서 버튼을 누르면 테이블delete
    async function deleteFollow() {
        await FollowService.deleteFollow(follow.follow_id).then(res => {
            console.log(res.data);
            if (res.data.delete === true) {
                follow.follow_id = 0;
            }
        });
    }


    async function selectFollow() {
        // await FollowService.getCheckFollow("2", user?.user_id as IUser["user_id"]).then(res => {
        await FollowService.getCheckFollow("2", "1").then(res => {
            console.log("=============");
            console.log(user);
            console.log("=============");
            console.log(res.data);
            if (res.data === null) {
                follow.follow_id = 0;
            } else {
                setFollow(res.data);
            }
        });
    }

    useEffect(() => {
        getUser().then(() => {
            selectFollow().then(() => {
                console.log("팔로우아이디:" + follow.follow_id);
                if (follow.follow_id === 0) {
                    setBackgroundcolor("lightgray");
                    setColor("black");
                    setContent("팔로우");
                } else {
                    setBackgroundcolor("black");
                    setColor("white");
                    setContent("팔로잉");
                }
            })
        });

    }, [board],)
    //유저 테이블에 팔로우숫자 , 팔로워 숫자도 늘어나야하는데.....

    const onClick = () => {
        backgroundcolor === "lightgray"
            ? setBackgroundcolor("black")
            : setBackgroundcolor("lightgray");

        color === "black" ? setColor("white") : setColor("black");
        content === "팔로우" ? setContent("팔로잉") : setContent("팔로우");

        // 팔로우테이블에 from_user_id와 to_user_id가 순서에맞게(?) 없으면 create 있으면 delete
        if (follow.follow_id === 0) {
            createFollow();
        } else {
            deleteFollow();
        }
    };

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
