// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import React from "react";
import MainComponent5 from "./MainComponent5";

// css
import "../../css/main/MainAnother.css";

// 사진
import mainwth1 from "../../img/main/mainwth1.png";
import mainwth2 from "../../img/main/mainwth2.png";
import mainwth3 from "../../img/main/mainwth3.png";
import mainwth4 from "../../img/main/mainwth4.png";
import mainwth5 from "../../img/main/mainwth5.png";
import mainwth6 from "../../img/main/mainwth6.png";
import mainwth7 from "../../img/main/mainwth7.png";
import mainwth8 from "../../img/main/mainwth8.png";

function MainAnother() {
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
    {
      id: 9,
      title: mainwth8,
      name: "@kim_g",
      liked: 1721,
      followed: 2041,
    },
    {
      id: 10,
      title: mainwth8,
      name: "@kim_g",
      liked: 1721,
      followed: 2041,
    },
  ];

  const renderRepeat = datas.map((data) => {
    return <MainComponent5 data={data} key={data.id} />;
  });
  return (
    <>
      <div className="mainfollow-text">New Another</div>
      <hr className="Line"></hr>
      <div className="wth">
        <Carousel fade className="anothercar" style={{ width: "1400px" }}>
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

export default MainAnother;
