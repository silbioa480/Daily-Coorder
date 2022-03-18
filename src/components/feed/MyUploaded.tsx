// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

// css
import "../../css/main/MainAnother.css";

// 사진
import MainAnotherComponent from "../main/MainAnotherComponent";

import mainano1 from "../../img/main/mainano1.png";
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
];

// mainano1
function MyUploaded() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  let c = d.sort(() => Math.random() - 0.5);
  let e = [
    {
      id: 1,
      title: mainano1,
      name: "@mains",
      liked: 0,
      followed: 0,
    },
  ];

  const [datas, setDatas] = useState(e.sort(() => Math.random() - 0.5));

  const load = () => {
    // let temp = datas;
    //
    // for (let i = start; i < end; i++) {
    //   temp.push(c[i]);
    // }
    //
    // setDatas(temp);
    //
    // setStart(start + 10);
    // setEnd(end + 10);
  };

  const renderRepeat = datas.map((data) => {
    return <MainAnotherComponent data={data} key={data.id} />;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="mainfollow-text">My Uploaded</div>
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

export default MyUploaded;
