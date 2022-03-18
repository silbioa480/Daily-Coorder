// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";

// css
import "../../css/main/MainAnother.css";
import "../../css/main/animation.css";

// 사진
import mainano1 from "../../img/main/mainano1.png";
import mainano2 from "../../img/main/mainano2.png";
import mainano3 from "../../img/main/mainano3.png";
import mainano4 from "../../img/main/mainano4.png";
import mainano5 from "../../img/main/mainano5.png";
import mainano6 from "../../img/main/mainano6.png";
import mainano7 from "../../img/main/mainano7.png";
import mainano8 from "../../img/main/mainano8.png";
import mainano9 from "../../img/main/mainano9.png";
import mainano10 from "../../img/main/mainano10.png";
import mainano11 from "../../img/main/mainano11.png";
import mainano12 from "../../img/main/mainano12.png";
import mainano13 from "../../img/main/mainano13.png";
import mainano14 from "../../img/main/mainano14.png";
import mainano15 from "../../img/main/mainano15.png";
import mainano16 from "../../img/main/mainano16.png";
import mainano17 from "../../img/main/mainano17.png";
import mainano18 from "../../img/main/mainano18.png";
import mainano19 from "../../img/main/mainano19.png";
import mainano20 from "../../img/main/mainano20.png";
import mainano21 from "../../img/main/mainano21.png";
import mainano22 from "../../img/main/mainano22.png";
import mainano23 from "../../img/main/mainano23.png";
import mainano24 from "../../img/main/mainano24.png";
import mainano25 from "../../img/main/mainano25.png";
import mainano26 from "../../img/main/mainano26.png";
import mainano27 from "../../img/main/mainano27.png";
import mainano28 from "../../img/main/mainano28.png";
import mainano29 from "../../img/main/mainano29.png";
import mainano30 from "../../img/main/mainano30.png";
import mainano31 from "../../img/main/mainano31.png";
import mainano32 from "../../img/main/mainano32.png";
import mainano33 from "../../img/main/mainano33.png";
import mainano34 from "../../img/main/mainano34.png";
import mainano35 from "../../img/main/mainano35.png";


import MainAnotherComponent from "./MainAnotherComponent";

let d = [

    {
        id: 11,
        title: mainano11,
        name: "@likecolor",
        liked: 513,
        followed: 275,
    },
    {
        id: 12,
        title: mainano12,
        name: "@good",
        liked: 165,
        followed: 1445,
    },
    {
        id: 13,
        title: mainano13,
        name: "@Sort",
        liked: 73,
        followed: 131,
    },
    {
        id: 14,
        title: mainano14,
        name: "@sqare",
        liked: 624,
        followed: 1196,
    },
    {
        id: 15,
        title: mainano15,
        name: "@gogos",
        liked: 235,
        followed: 541,
    },
    {
        id: 16,
        title: mainano16,
        name: "@trkeso",
        liked: 751,
        followed: 1175,
    },
    {
        id: 17,
        title: mainano17,
        name: "@goodbye",
        liked: 72,
        followed: 145,
    },
    {
        id: 18,
        title: mainano18,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
    },
    {
        id: 19,
        title: mainano19,
        name: "@son_mi",
        liked: 14,
        followed: 196,
    },
    {
        id: 20,
        title: mainano20,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
    },
    {
        id: 21,
        title: mainano21,
        name: "@likeso",
        liked: 11,
        followed: 275,
    },
    {
        id: 22,
        title: mainano22,
        name: "@goodbye",
        liked: 12,
        followed: 145,
    },
    {
        id: 23,
        title: mainano23,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
    },
    {
        id: 24,
        title: mainano24,
        name: "@son_mi",
        liked: 14,
        followed: 196,
    },
    {
        id: 25,
        title: mainano25,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
    },
    {
        id: 26,
        title: mainano26,
        name: "@likeso",
        liked: 11,
        followed: 275,
    },
    {
        id: 27,
        title: mainano27,
        name: "@goodbye",
        liked: 12,
        followed: 145,
    },
    {
        id: 28,
        title: mainano28,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
    },
    {
        id: 29,
        title: mainano29,
        name: "@son_mi",
        liked: 14,
        followed: 196,
    },
    {
        id: 30,
        title: mainano30,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
    },
    {
        id: 31,
        title: mainano31,
        name: "@likeso",
        liked: 11,
        followed: 275,
    },
    {
        id: 32,
        title: mainano32,
        name: "@goodbye",
        liked: 12,
        followed: 145,
    },
    {
        id: 33,
        title: mainano33,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
    },
    {
        id: 34,
        title: mainano34,
        name: "@son_mi",
        liked: 14,
        followed: 196,
    },
    {
        id: 35,
        title: mainano35,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
    },
]

function MainAnother() {
    // user 가져오기
    // const [myId, setMyId] = useState<IUser["user_id"]>("1");
    // 게시물 가져오기
    // const [boards, setBoards] = useState<IBoard[]>([]);
    // 게시물 cnt 가져오기
    // const [cnt, setCnt] = useState<number>(20);
    // 버튼 show boolean
    // const [isShow, setIsShow] = useState<boolean>(true);

    // 좋아요 높은 순으로 게시물 가져오기
    // async function getBoardOrderByLike() {
    //     if (idx >= cnt) setIsShow(false);
    //     setBoards([...boards, ...await BoardService.getBoardPage(idx).then(res => {
    //         return res.data;
    //     })]);
    // }
    //
    // async function getBoardCount() {
    //     setCnt(await BoardService.getBoardCount().then(res => res.data));
    // }
    //
    // const [idx, setIdx] = useState<number>(0);
    //
    // useEffect(() => {
    //     getBoardOrderByLike();
    // }, [idx]);
    //
    // useEffect(() => {
    //     getBoardCount();
    // }, []);
    //
    // // button onClick =>------------------------------
    //
    // const load = () => {
    //     setIdx(idx + 10);
    // };

    // 데이터가 없으면 or 10개가 안되면 다시 요청해서 + 버튼 히든처리
    // -----------------------------------------------

    // component.slice.map -------------------------------------


    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(10);

    let c = d.sort(() => Math.random() - 0.5);
    let e = [
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
            title: mainano3,
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
            title: mainano9,
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
    ];

    const [datas, setDatas] = useState(e.sort(() => Math.random() - 0.5));

    const load = () => {
        let temp = datas;

        for (let i = start; i < end; i++) {
            temp.push(c[i]);
        }

        setDatas(temp);

        setStart(start + 10);
        setEnd(end + 10);
    }

    const renderRepeat = datas.map((data) => {
        return <MainAnotherComponent data={data} key={data.id}/>;
    });

    // ---------------------------------------------------------
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
