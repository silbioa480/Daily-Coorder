// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";

// css
import "../../css/main/MainAnother.css";
import "../../css/main/animation.css";

// 사진
import MainAnotherComponent from "./MainAnotherComponent";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import FollowService from "../../service/FollowService";
import BoardService from "../../service/BoardService";

function MainAnother() {

    const [myId, setMyId] = useState<IUser["user_id"]>("");
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
    const [datas, setDatas] = useState();
    // let i = 5;
    const load = () => {
        let lastindex = 10;

        console.log(lastindex + "부터 5개 가져온다. setDatas");
        // i += 5;
        // return (
        //   <div style={{ display: "inline-block" }}>
        //     {renderRepeat.slice(i, i + 5)}
        //   </div>
        // );
        // setDatas();
        lastindex = followerBoards[followerBoards.length - 1].board_id;
        console.log("이제 마지막 데이터의 번호는 " + lastindex);
    };

    const renderRepeat = followerBoards.map((data) => {
        return <MainAnotherComponent data={data} key={data.board_id}/>;
    });

    return (
        <>
            <div className="bb mainfollow-text">New Another</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <div className="anothercar">
                    {renderRepeat}

                    <div className="btn-out">
                        <button className="plus-btn" onClick={load}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainAnother;
