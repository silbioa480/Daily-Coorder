// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";
import {Link} from "react-router-dom";

// css
import "../../css/main/MainComponent5.css";

// 사진
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import IUser from "../../interfaces/IUser";

interface IProps {
    data: IData;
}

interface IData {
    id: number;
    title: string;
    name: string;
    liked: number;
    followed: number;
}


function MainComponent(props: IProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);

    // isFollow ---------------------------------------------

    // User_id 가져온다.
    // async function getUser() {
    //     setUser(await UserService.getUserById(props.data.board_poster).then(res => res.data));
    // }

    // User_id로 follow 테이블 가져와서 isFollow 확인
    // async function checkFollow() {
    //     try {
    //         await FollowService.getCheckFollow(myId, user?.user_id as string).then(res => res.data);
    //         setIsFollowed(true);
    //     } catch {
    //         setIsFollowed(false);
    //     }
    // }

    // ----------------------------------------------------

    // isLike ------------------------------------------------


    // async function checkLike() {
    //     try {
    //         await BoardLikeService.getCheckLike(props.data.board_id, myId).then(res => res.data);
    //         setIsLiked(true);
    //     } catch {
    //         setIsLiked(false);
    //     }
    // }

    // ---------------------------------------------------------

    // useEffect(() => {
    //     getUser();
    //     checkFollow();
    //     checkLike();
    // }, []);


    // 가져온 테이블엣거 팔로우 숫자 가져오기
    const [liked, setLiked] = useState(props.data.liked);
    const [followed, setFollowed] = useState(props.data.followed);
    const [name, setName] = useState(props.data.name);
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
        <div className="anopic">
            <a
                href="http://www.gncostyle.com/brandshop/thursdayisland"
                className="link">
                <img className="d-block w-100" src={props.data.title} alt="1-1 slide"/>
            </a>

            <div className="group_icon5">
                <div className="like_logoA">
                    <AiFillHeart onClick={toggleShow} style={{color: likecolor}}/>
                </div>

                <div className="follow_logoA">
                    <AiFillStar onClick={togglefollow} style={{color: followcolor}}/>
                </div>
            </div>

            <Link to="/feed">
                <div className="group_txt5">
                    <div className="t1">{props.data.name}</div>
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
    );
}

export default MainComponent;
