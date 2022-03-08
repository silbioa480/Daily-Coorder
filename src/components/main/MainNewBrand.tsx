// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import React from "react";
import MainComponent5 from "./MainComponent5";

// css
import "../../css/main/MainNewBrand.css";
import "../../css/main/animation.css";

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

function MainAnother() {
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

  const renderRepeat = datas.map((data) => {
    return <MainComponent5 data={data} key={data.id} />;
  });
  return (
    <>
      <div className="bb mainfollow-text">New In Thursday Island</div>
      <hr className="bb Line"></hr>
      <div className="bb wth">
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
