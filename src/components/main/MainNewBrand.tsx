// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React, {useState} from "react";
import MainComponent5 from "./MainComponent5";

// css
import "../../css/main/MainNewBrand.css";
import "../../css/main/animation.css";
import IBoard from "../../interfaces/IBoard";
import IBusiness from "../../interfaces/IBusiness";
import IUser from "../../interfaces/IUser";

// 사진
import mainbran1 from "../../img/main/mainbran1.png";
import mainbran2 from "../../img/main/mainbran2.png";
import mainbran3 from "../../img/main/mainbran3.png";
import mainbran4 from "../../img/main/mainbran4.png";
import mainbran5 from "../../img/main/mainbran5.png";
import mainbran6 from "../../img/main/mainbran6.png";
import mainbran7 from "../../img/main/mainbran7.png";
import mainbran8 from "../../img/main/mainbran8.png";
import mainbran9 from "../../img/main/mainbran9.png";
import mainbran10 from "../../img/main/mainbran10.png";

function MainNewBrand() {

    const [business, setBusiness] = useState<IBusiness>();
    const [board, setBoard] = useState<IBoard[]>([]);


    // 비즈니스 테이블 다 가져온다.
    // 게시물 다 가져와서 10개 자르고
    // 맵으로 돌려서 getBoardByUserId
    // 최근 데이트순으로 5개 혹은 10개 가져온다.


    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
    const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);

    const datas = [
        {
            id: 1,
            title: mainbran1,
            name: "@official_Thursday Island",
            liked: 142,
            followed: 312,
        },
        {
            id: 2,
            title: mainbran2,
            name: "@official_Thursday Island",
            liked: 109,
            followed: 312,
        },
        {
            id: 3,
            title: mainbran3,
            name: "@official_Thursday Island",
            liked: 46,
            followed: 312,
        },
        {
            id: 4,
            title: mainbran4,
            name: "@official_Thursday Island",
            liked: 79,
            followed: 312,
        },
        {
            id: 5,
            title: mainbran5,
            name: "@official_Thursday Island",
            liked: 167,
            followed: 312,
        },
        {
            id: 6,
            title: mainbran6,
            name: "@official_Thursday Island",
            liked: 82,
            followed: 312,
        },
        {
            id: 7,
            title: mainbran7,
            name: "@official_Thursday Island",
            liked: 51,
            followed: 312,
        },
        {
            id: 8,
            title: mainbran8,
            name: "@official_Thursday Island",
            liked: 83,
            followed: 312,
        },
        {
            id: 9,
            title: mainbran9,
            name: "@official_Thursday Island",
            liked: 143,
            followed: 312,
        },
        {
            id: 10,
            title: mainbran10,
            name: "@official_Thursday Island",
            liked: 174,
            followed: 312,
        },
    ];
    // 내가 팔로우한 사람들(id)의 게시물을 가져오는 함수 getbyuserid
    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    // 2 내 아이디를 이용해서 내가 팔로우한 사람들의 id
    // async function getFollowersId() {
    //     setMyFollowers(await FollowService.getFollowerByUserId(myId).then(res => res.data));
    // }

    //                내가 팔로우한 상대방의 아이디만 가져옴 (배열로)

    // 3 그 사람들의 게시물 데이터를 가져옴
    // function getFollowerBoard() {
    //     myFollowers.map(async (follower) => {
    //         let boards = await BoardService.getBoardByUserId(follower).then(res => res.data);
    //         setFollowerBoards([...followerBoards, ...boards]);
    //     })
    // }

    // useEffect(() => {
    // getBusinessByName();
    // getBoardByBusinessName();
    //
    // }, []);

    const renderRepeat = datas.map((data) => {
        return <MainComponent5 data={data} key={data.id}/>;
    });
    return (
        <>
            <div className="bb mainfollow-text">New Brand</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <Carousel fade className="carousel-dark anothercar" style={{width: "1400px"}}>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(0, 5)}</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(5, 10)}</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default MainNewBrand;
