// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import MainComponent from "./MainComponent";

// css
import '../../css/main/MainNewFollow.css';

// 사진
import mainfol1 from '../../img/main/mainfol1.png';
import mainfol2 from '../../img/main/mainfol2.png';
import mainfol3 from '../../img/main/mainfol3.png';
import mainfol4 from '../../img/main/mainfol4.png';
import mainfol5 from '../../img/main/mainfol5.png';
import mainfol6 from '../../img/main/mainfol6.png';
import mainfol7 from '../../img/main/mainfol7.png';
import mainfol8 from '../../img/main/mainfol8.png';
import like_logoW from '../../img/main/like_logoW.png';
import like_icon from '../../img/main/like_icon.png';
import follow_icon from '../../img/main/follow_icon.png';
import follow_logoW from '../../img/main/follow_logoW.png';


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
            name: "@qew",
            liked: 1019,
            followed: 1423,
        },
        {
            id: 3,
            title: mainfol3,
            name: "@e",
            liked: 431,
            followed: 4571,
        },
        {
            id: 4,
            title: mainfol4,
            name: "@ewq",
            liked: 1234,
            followed: 5232,
        },
        {
            id: 5,
            title: mainfol5,
            name: "@ewq",
            liked: 11,
            followed: 22,
        },
        {
            id: 6,
            title: mainfol6,
            name: "@rrwe",
            liked: 14,
            followed: 56,
        },
        {
            id: 7,
            title: mainfol7,
            name: "@efd",
            liked: 133,
            followed: 1421,
        },
        {
            id: 8,
            title: mainfol8,
            name: "@ewqeqewew",
            liked: 5456,
            followed: 74745,
        },
    ];

    const renderRepeat = datas.map((data) => {

        return (
            <MainComponent data={data} key={data.id}/>

            );
    });
    return (
        <>
            <div className="mainfollow-text">New Followers Feed</div>
            <hr className="Line"></hr>
            <div className="feed">
                <Carousel fade className="feedcar" style={{width: '1250px'}}>


                    <Carousel.Item>
                        <div>{renderRepeat.slice(0,4)}</div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>{renderRepeat.slice(4,8)}</div>
                    </Carousel.Item>

                </Carousel>
            </div>

        </>
    );
    }
export default Mainfollow;
