// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";

// css
import "../../css/main/MainAnother.css";

// 사진
import MainAnotherComponent from "../main/MainAnotherComponent";
import IBoard from "../../interfaces/IBoard";
import IUser from "../../interfaces/IUser";
import FollowService from "../../service/FollowService";
import BoardService from "../../service/BoardService";

function MyLiked() {

    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
    const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);

    // 내가 팔로우한 사람들(id)의 게시물을 가져오는 함수 getbyuserid
    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    // 2 내 아이디를 이용해서 내가 팔로우한 사람들의 id
    async function getFollowersId() {
        setMyFollowers(await FollowService.getFollowerByUserId(myId).then(res => res.data));
    }

    //                내가 팔로우한 상대방의 아이디만 가져옴 (배열로)

    // 3 그 사람들의 게시물 데이터를 가져옴
    function getFollowerBoard() {
        myFollowers.map(async (follower) => {
            let boards = await BoardService.getBoardByUserId(follower).then(res => res.data);
            setFollowerBoards([...followerBoards, ...boards]);
        })
    }

    useEffect(() => {
        getFollowersId();
        getFollowerBoard();
    }, []);

    const [idx, setIdx] = useState<number>(1);
    const load = () => {
        setIdx(idx + 1);
    };

    const renderRepeat = followerBoards.map((data) => {
        return <MainAnotherComponent data={data} key={data.board_id}/>;
    });

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="mainfollow-text">My Liked</div>
            <hr className="Line"></hr>
            <div className="wth">
                <div className="anothercar" style={{width: "1400px"}}>
                    <div style={{display: "inline-block"}}>{renderRepeat}</div>

                    <div className="btn-out">
                        <button className="plus-btn" onClick={load}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyLiked;
