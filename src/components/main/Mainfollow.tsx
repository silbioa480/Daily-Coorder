// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import MainComponent from "./MainComponent";

// css
import "../../css/main/MainNewFollow.css";
import "../../css/main/animation.css";

// 사진
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import FollowService from "../../service/FollowService";
import BoardService from "../../service/BoardService";

function Mainfollow() {
    
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

    const renderRepeat = followerBoards.map((data) => {
        return <MainComponent data={data} key={data.board_id}/>;
    });

    return (
        <>
            <div className="aa mainfollow-text">New Followers Feed</div>
            <hr className="left Line" style={{opacity: "1"}}></hr>
            <div className="bb feed">
                <Carousel fade className="carousel-dark feedcar" style={{width: "1250px"}}>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(0, 4)}</div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>{renderRepeat.slice(4, 8)}</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default Mainfollow;
