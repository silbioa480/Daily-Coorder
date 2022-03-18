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
import FollowService from "../../service/FollowService";
import BoardLikeService from "../../service/BoardLikeService";
import TagService from "../../service/TagService";

interface IProps {
    data: IBoard;
}

function TagAnotherComponent(props: IProps) {
    const [isShow, setIsShow] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const [user, setUser] = useState<IUser>();
    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [isFollowed, setIsFollowed] = useState<boolean>(false);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    let board = props.data;

    const [tags, setTags] = useState<string[]>([]);
    const [boardId, setBoardId] = useState<number[]>([]);
    const [boards, setBoards] = useState<IBoard>();
    let imageurl = "https://daily-coorder-backend.herokuapp.com/api/board_img/" + board.board_url;


    // 1. 현재 게시물의 태그이름 가져오기
    async function getTagNameByBoardId() {
        setTags(await TagService.getTageNamesByBoardId(board.board_id).then(res => {
            console.log("tags" + tags);
            return res.data;
        }));
    }


    // 2. 가져온 태그가 들어있는 다른 게시물의 board_id 가져오기
    function getBoardId() {
        let ids: number[] = []
        tags.map(async (tagName) => {
            let tag = await TagService.getBoardIdByTagName(tagName).then(res => res.data);
            //지금이게 보드아이디를 가져오는게 아니라 태그배열을가져옴 그래서 그태그배열을 맵을돌림 보드아이디 넘버배열을 넣어줌
            tag.map((t) => {
                ids.push(t.board_id);
            })
        })
        setBoardId(ids); //boardid배열이들어감
        console.log("가져온태그가 들어있는 보드아이디:" + boardId);
    }

    // 3. board_id로 board 가져오기  //boardId에 태그이름이 들어간 board_id를 가져왔움?
    async function getBoardByBoardId() {
        // setBoards(await BoardService.getBoardById(board.board_id).then(res => res.data));
    }

    useEffect(() => {
        getTagNameByBoardId();
    }, [board])


    // User_id로 follow 테이블 가져와서 isFollow 확인
    async function checkFollow() {
        try {
            await FollowService.getCheckFollow(myId, user?.user_id as string).then(
                (res) => res.data
            );
            setIsFollowed(true);
        } catch {
            setIsFollowed(false);
        }
    }

    // ----------------------------------------------------

    // isLike ------------------------------------------------

    async function checkLike() {
        try {
            await BoardLikeService.getCheckLike(props.data.board_id, myId).then(
                (res) => res.data
            );
            setIsLiked(true);
        } catch {
            setIsLiked(false);
        }
    }

    // ---------------------------------------------------------

    // useEffect(() => {
    //     getTagNameByBoardId();
    // }, [board])

    // useEffect(() => {
    //     getBoardId();
    // }, [board])

    useEffect(() => {
        checkFollow();
    }, [user]);
    useEffect(() => {
        checkLike();
    }, [isFollowed]);

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
        setFollowed((followed as number) + 1);
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
                    <img className="d-block w-100" src={imageurl} alt="1-1 slide"/>
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
                        <div className="t1">{board.board_poster}</div>
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

export default TagAnotherComponent;
