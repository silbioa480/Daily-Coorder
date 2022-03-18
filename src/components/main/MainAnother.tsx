// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

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

import MainAnotherComponent from "./MainAnotherComponent";

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
  let lastindex = 10;

  // let i = 5;
  const load = () => {

    setDatas([
      ...datas,
      {
        id: 11,
        title: mainano6,
        name: "@likeso",
        liked: 11,
        followed: 275,
      },
      {
        id: 12,
        title: mainano7,
        name: "@goodbye",
        liked: 12,
        followed: 145,
      },
      {
        id: 13,
        title: mainano8,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
      },
      {
        id: 14,
        title: mainano3,
        name: "@son_mi",
        liked: 14,
        followed: 196,
      },
      {
        id: 15,
        title: mainano10,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
      },
      {
        id: 16,
        title: mainano6,
        name: "@likeso",
        liked: 11,
        followed: 275,
      },
      {
        id: 17,
        title: mainano7,
        name: "@goodbye",
        liked: 12,
        followed: 145,
      },
      {
        id: 18,
        title: mainano8,
        name: "@Sor_but",
        liked: 13,
        followed: 431,
      },
      {
        id: 19,
        title: mainano3,
        name: "@son_mi",
        liked: 14,
        followed: 196,
      },
      {
        id: 20,
        title: mainano10,
        name: "@gong_0",
        liked: 15,
        followed: 1041,
      },
    ]);
    lastindex = datas[datas.length - 1].id + 5;
  };

  const renderRepeat = datas.map((data) => {
    return <MainAnotherComponent data={data} key={data.id} />;
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
