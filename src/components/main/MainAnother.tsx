// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

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
import MainAnotherComponent from "./MainAnotherComponent";

function MainAnother() {
  function load() {
    alert("돌아가거라");
  }

  const datas = [
    {
      id: 1,
      title: mainano1,
      name: "@Grilsan",
      liked: 462,
      followed: 674,
    },
    {
      id: 2,
      title: mainano2,
      name: "@hello_11",
      liked: 34,
      followed: 215,
    },
    {
      id: 3,
      title: mainano9,
      name: "@ch_bely",
      liked: 94,
      followed: 447,
    },
    {
      id: 4,
      title: mainano4,
      name: "@zzzqe11",
      liked: 41,
      followed: 95,
    },
    {
      id: 5,
      title: mainano5,
      name: "@Oo_oO",
      liked: 34,
      followed: 72,
    },
    {
      id: 6,
      title: mainano6,
      name: "@likeso",
      liked: 112,
      followed: 275,
    },
    {
      id: 7,
      title: mainano7,
      name: "@goodbye",
      liked: 72,
      followed: 145,
    },
    {
      id: 8,
      title: mainano8,
      name: "@Sor_but",
      liked: 159,
      followed: 431,
    },
    {
      id: 9,
      title: mainano3,
      name: "@son_mi",
      liked: 79,
      followed: 196,
    },
    {
      id: 10,
      title: mainano10,
      name: "@gong_0",
      liked: 972,
      followed: 1041,
    },
  ];

  const renderRepeat = datas.map((data) => {
    return <MainAnotherComponent data={data} key={data.id} />;
  });
  return (
    <>
      <div className="mainfollow-text">New Another</div>
      <hr className="Line"></hr>
      <div className="wth">
        <div className="anothercar" style={{ width: "1400px" }}>
          <div style={{ display: "inline-block" }}>
            {renderRepeat.slice(0, 5)}
          </div>

          <div style={{ display: "inline-block" }}>
            {renderRepeat.slice(5, 10)}
          </div>

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
