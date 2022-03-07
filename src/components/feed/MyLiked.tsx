// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

// css
import "../../css/main/MainAnother.css";

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
import MainAnotherComponent from "../main/MainAnotherComponent";

function MyLiked() {
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
    ]);
    lastindex = datas[datas.length - 1].id + 5;
    console.log("이제 마지막 데이터의 번호는 " + lastindex);
  };

  const renderRepeat = datas.map((data) => {
    return <MainAnotherComponent data={data} key={data.id} />;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="mainfollow-text">My Liked</div>
      <hr className="Line"></hr>
      <div className="wth">
        <div className="anothercar" style={{ width: "1400px" }}>
          <div style={{ display: "inline-block" }}>{renderRepeat}</div>

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
