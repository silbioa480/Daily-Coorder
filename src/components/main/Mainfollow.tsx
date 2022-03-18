// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React, {useState} from "react";
import MainComponent from "./MainComponent";

// css
import "../../css/main/MainNewFollow.css";
import "../../css/main/animation.css";

// 사진
import mainfol1 from "../../img/main/mainfol1.png";
import mainfol2 from "../../img/main/mainfol2.png";
import mainfol3 from "../../img/main/mainfol3.png";
import mainfol4 from "../../img/main/mainfol4.png";
import mainfol5 from "../../img/main/mainfol5.png";
import mainfol6 from "../../img/main/mainfol6.png";
import mainfol7 from "../../img/main/mainfol7.png";
import mainfol8 from "../../img/main/mainfol8.png";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";

function Mainfollow() {

    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
    const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);


    // 내가 팔로우한 사람들(id)의 게시물을 가져오는 함수 getbyuserid
    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    // 2 내 아이디를 이용해서 내가 팔로우한 사람들의 id
    // async function getFollowersId() {
    //     setMyFollowers(await FollowService.getFollowerByUserId(myId).then(res => res.data));
    //     // 내가 팔로우한 상대방의 아이디만 가져옴 (배열로)
    // }

    // 3 그 사람들의 게시물 데이터를 가져옴
    // function getFollowerBoard() {
    //     myFollowers.map(async (follower) => {
    //         let boards = await BoardService.getBoardByUserId(follower).then(res => res.data);
    //         setFollowerBoards([...followerBoards, ...boards]);
    //     })
    // }

    // useEffect(() => {
    //     getFollowersId();
    // }, []);
    //
    // useEffect(() => {
    //     getFollowerBoard();
    // }, [myFollowers]);


    const datas = [
        {
            id: 1,
            title: mainfol1,
            name: "@shine_1",
            liked: 117,
            followed: 210,
        },
        {
            id: 2,
            title: mainfol2,
            name: "@namju",
            liked: 1019,
            followed: 1423,
        },
        {
            id: 3,
            title: mainfol3,
            name: "@aaa_A",
            liked: 418,
            followed: 847,
        },
        {
            id: 4,
            title: mainfol4,
            name: "@tae_tae",
            liked: 553,
            followed: 712,
        },
        {
            id: 5,
            title: mainfol5,
            name: "@minkue",
            liked: 172,
            followed: 351,
        },
        {
            id: 6,
            title: mainfol6,
            name: "@hrsan",
            liked: 78,
            followed: 421,
        },
        {
            id: 7,
            title: mainfol7,
            name: "@niks_13",
            liked: 133,
            followed: 1421,
        },
        {
            id: 8,
            title: mainfol8,
            name: "@was_not",
            liked: 1240,
            followed: 1446,
        },
    ];
    const renderRepeat = datas.map((data) => {

        // console.log(data);
        return <MainComponent data={data} key={data.id}/>;
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
