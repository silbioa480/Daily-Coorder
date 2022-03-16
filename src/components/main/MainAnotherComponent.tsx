// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

// css
import "../../css/main/MainAnotherComponent.css";

// 사진
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import IBoard from "../../interfaces/IBoard";
import IUser from "../../interfaces/IUser";
import UserService from "../../service/UserService";
import FollowService from "../../service/FollowService";
import BoardLikeService from "../../service/BoardLikeService";

interface IProps {
    data: IBoard;
}


function MainComponent(props: IProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [board, setBoard] = useState<IBoard>({
        board_id: 0,
        board_poster: "",
        board_img: new File([], ""),
        board_title: "",
        board_content: "",
        board_url: "",
        board_like_number: 0,
        board_view: 0,
        board_post_date: new Date(),
        board_update_date: new Date(),

    });

    let imageurl = "http://localhost:8080/api/board_img/" + board.board_url;


    // isFollow ---------------------------------------------

    // User_id 가져온다.
    async function getUser() {
        setUser(await UserService.getUserById(props.data.board_poster).then(res => res.data));
    }

    // User_id로 follow 테이블 가져와서 isFollow 확인
    async function checkFollow() {
        try {
            await FollowService.getCheckFollow(myId, user?.user_id as string).then(res => res.data);
            setIsFollowed(true);
        } catch {
            setIsFollowed(false);
        }
    }

    // ----------------------------------------------------

    // isLike ------------------------------------------------


    async function checkLike() {
        try {
            await BoardLikeService.getCheckLike(props.data.board_id, myId).then(res => res.data);
            setIsLiked(true);
        } catch {
            setIsLiked(false);
        }
    }

    // ---------------------------------------------------------

    useEffect(() => {
        getUser();
        checkFollow();
        checkLike();
    }, []);

    // 가져온 테이블에서 팔로우 숫자 가져오기
    const [followed, setFollowed] = useState(user?.user_follower_number);
    const [liked, setLiked] = useState(props.data.board_like_number);
    //                        ?  언디파인드 아닐떄만 접근해라

    const [likecolor, setLikecolor] = useState("");
    const [followcolor, setFollowcolor] = useState("");

    // 좋아요 + 1
    function likeIn() {
        setLiked(liked + 1);
    }

    // 좋아요 - 1
    function likeDe() {
        setLiked(liked - 1);
    }

    // 팔로우 + 1
    function followIn() {
        setFollowed(followed as number + 1);
    }

    // 팔로우 - 1
    function followDe() {
        if (followed) {
            setFollowed(followed - 1);
        }
    }

    // 좋아요 색깔 toglle and 좋아요 + 1 or - 1
    function toggleShow() {
        likecolor === "" ? setLikecolor("rgba(30,66,141,1)") : setLikecolor("");
        setIsShow(!isShow);
        if (!isShow) {
            likeIn();
        } else {
            likeDe();
        }
    }

    // 팔로우 색깔 toglle and 팔로우 + 1 or - 1
    function togglefollow() {
        followcolor === ""
            ? setFollowcolor("rgba(254,68,161,1)")
            : setFollowcolor("");
        setIsDone(!isDone);
        if (!isDone) {
            followIn();
        } else {
            followDe();
        }
    }

    // 이부분을 Component화.
    return (
        <div className="anotherpic-out">
            <div className="anotherpic">
                <Link to="/board/board1" className="link">
                    <img
                        className="d-block w-100"
                        src={imageurl}
                        alt="1-1 slide"
                    />
                </Link>

                <div className="ano-group_icon5">
                    <div className="like_logoA">
                        <AiFillHeart onClick={toggleShow} style={{color: likecolor}}/>
                    </div>

                    <div className="follow_logoA">
                        <AiFillStar onClick={togglefollow} style={{color: followcolor}}/>
                    </div>
                </div>

                <Link to="/feed">
                    <div className="ano-group_txt5">
                        <div className="t1">{props.data.board_poster}</div>
                        <div className="like_group">
                            <AiFillHeart className="like_icon"/>
                            <span className="like_cnt">{liked}</span>
                        </div>
                        <div className="follow_group">
                            <AiFillStar className="follow_icon"/>
                            <span className="follow_cnt">{followed}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default MainComponent;
