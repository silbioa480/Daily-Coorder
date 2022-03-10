// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React from "react";
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

function Mainfollow() {
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
        return <MainComponent data={data} key={data.id}/>;
    });
    return (
        <>
            <div className="aa blue-line-out">
                <div className="aa blue-line-in"></div>
            </div>
            <div className="aa yellow-line-out">
                <div className="aa yellow-line-in"></div>
            </div>
            <div className="aa mainfollow-text">New Followers Feed</div>
            <hr className="aa Line"></hr>
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
