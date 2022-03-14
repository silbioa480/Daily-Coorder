// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import MainComponent from "./MainComponent";

// css
import "../../css/main/MainWeather.css";
import "../../css/main/animation.css";

// 사진
import mainwth1 from "../../img/main/mainwth1.png";
import mainwth2 from "../../img/main/mainwth2.png";
import mainwth3 from "../../img/main/mainwth3.png";
import mainwth4 from "../../img/main/mainwth4.png";
import mainwth5 from "../../img/main/mainwth5.png";
import mainwth6 from "../../img/main/mainwth6.png";
import mainwth7 from "../../img/main/mainwth7.png";
import mainwth8 from "../../img/main/mainwth8.png";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import FollowService from "../../service/FollowService";
import BoardService from "../../service/BoardService";

function MainWeather() {
    const datas = [
        {
            id: 1,
            title: mainwth1,
            name: "@sang12",
            liked: 568,
            followed: 1170,
        },
        {
            id: 2,
            title: mainwth2,
            name: "@ongsungo",
            liked: 1241,
            followed: 2149,
        },
        {
            id: 3,
            title: mainwth3,
            name: "@nana_",
            liked: 2113,
            followed: 3471,
        },
        {
            id: 4,
            title: mainwth4,
            name: "@dong_ha",
            liked: 243,
            followed: 319,
        },
        {
            id: 5,
            title: mainwth5,
            name: "@_nara",
            liked: 972,
            followed: 872,
        },
        {
            id: 6,
            title: mainwth6,
            name: "@han_s",
            liked: 1207,
            followed: 1529,
        },
        {
            id: 7,
            title: mainwth7,
            name: "@unaaa",
            liked: 742,
            followed: 1176,
        },
        {
            id: 8,
            title: mainwth8,
            name: "@kim_g",
            liked: 1721,
            followed: 2041,
        },
    ];

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
            <div className="aa mainfollow-text">Daily Weather Style</div>
            <hr className="left Line" style={{opacity: "1"}}></hr>
            <div className="bb wth">
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

export default MainWeather;
