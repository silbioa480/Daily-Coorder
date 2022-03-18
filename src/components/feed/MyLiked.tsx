// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";

// css
import "../../css/main/MainAnother.css";

// 사진
import MainAnotherComponent from "../main/MainAnotherComponent";
import IBoard from "../../interfaces/IBoard";
import IUser from "../../interfaces/IUser";
import mainano1 from "../../img/main/mainano1.png";
import mainano2 from "../../img/main/mainano2.png";
import mainano9 from "../../img/main/mainano9.png";
import mainano4 from "../../img/main/mainano4.png";
import mainano5 from "../../img/main/mainano5.png";
import mainano6 from "../../img/main/mainano6.png";
import mainano7 from "../../img/main/mainano7.png";
import mainano8 from "../../img/main/mainano8.png";
import mainano3 from "../../img/main/mainano3.png";
import mainano10 from "../../img/main/mainano10.png";

function MyLiked() {

    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
    const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);

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
    //     getFollowersId();
    //     getFollowerBoard();
    // }, []);

    const [datas, setDatas] = useState([
        {
            id: 1,
            title: mainano1,
            name: "@Grilsan",
            liked: 1,
            followed: 674,
        },
        {
            id: 2,
            title: mainano2,
            name: "@hello_11",
            liked: 2,
            followed: 215,
        },
        {
            id: 3,
            title: mainano9,
            name: "@ch_bely",
            liked: 3,
            followed: 447,
        },
        {
            id: 4,
            title: mainano4,
            name: "@zzzqe11",
            liked: 4,
            followed: 95,
        },
        {
            id: 5,
            title: mainano5,
            name: "@Oo_oO",
            liked: 5,
            followed: 72,
        },
        {
            id: 6,
            title: mainano6,
            name: "@likeso",
            liked: 6,
            followed: 275,
        },
        {
            id: 7,
            title: mainano7,
            name: "@goodbye",
            liked: 7,
            followed: 145,
        },
        {
            id: 8,
            title: mainano8,
            name: "@Sor_but",
            liked: 8,
            followed: 431,
        },
        {
            id: 9,
            title: mainano3,
            name: "@son_mi",
            liked: 9,
            followed: 196,
        },
        {
            id: 10,
            title: mainano10,
            name: "@gong_0",
            liked: 10,
            followed: 1041,
        },
    ]);
    const [idx, setIdx] = useState<number>(1);
    const load = () => {
        setIdx(idx + 1);
    };

    const renderRepeat = datas.map((data) => {
        return <MainAnotherComponent data={data} key={data.id}/>;
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
