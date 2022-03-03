// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

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

    const [isShow, setIsShow] =useState(false);
    const [isDone, setIsDone] =useState(false);
    const [liked, setLiked] =useState(100);
    const [followed, setFollowed] =useState(200);
    const [name, setName] = useState("");
    // 삼항연산자 간단하게 위해 선언 (좋아요)
    const empty_like = <img src={like_logoW} className="like_logoW" onClick={toggleShow}  /> ;
    const full_like = <img src={like_icon} className="like_logoW" onClick={toggleShow}  /> ;
    // 삼항연산자 간단하게 위해 선언 (팔로우)
    const empty_follow = <img src={follow_logoW} className="follow_logoW" onClick={togglefollow}/> ;
    const full_follow = <img src={follow_icon} className="follow_logoW" onClick={togglefollow}/> ;

    // 좋아요 + 1
    function likeIn() {
        setLiked(liked + 1);
    }
    // 좋아요 - 1
    function likeDe() {
        setLiked(liked - 1);
    }
    // 팔로우 + 1
    function followIn() {
        setFollowed(followed + 1);
    }
    // 팔로우 - 1
    function followDe() {
        setFollowed(followed - 1);
    }
    // 좋아요 색깔 toglle and 좋아요 + 1 or - 1
    function toggleShow() {
        setIsShow(!isShow);
        if(!isShow) {
            likeIn();
        }   else {
            likeDe();
        }
    }
    // 팔로우 색깔 toglle and 팔로우 + 1 or - 1
    function togglefollow() {
        setIsDone(!isDone);
        if(!isDone) {
            followIn();
        }   else {
            followDe();
        }
    }

    const repeat = [
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
        // {
        //     id: 5,
        //     title: mainfol5,
        //     name: "@ewq",
        //     liked: 11,
        //     followed: 22,
        // },
        // {
        //     id: 6,
        //     title: mainfol6,
        //     name: "@rrwe",
        //     liked: 14,
        //     followed: 56,
        // },
        // {
        //     id: 7,
        //     title: mainfol7,
        //     name: "@efd",
        //     liked: 133,
        //     followed: 1421,
        // },
        // {
        //     id: 8,
        //     title: mainfol8,
        //     name: "@ewqeqewew",
        //     liked: 5456,
        //     followed: 74745,
        // },
    ];

    const renderRepeat = repeat.map((rep) => {

        return (
            <div className="folpic" key={rep.id}>

                <Link to="/signup" className="link">
                    <img className="d-block w-100" src={rep.title} alt="1-1 slide"/>
                </Link>

                <div className="group_icon">

                    <div className="like_logoA">
                        {isShow ? full_like : empty_like}
                    </div>

                    <div className="follow_logoA">
                        {isDone ? full_follow : empty_follow}
                    </div>

                </div>

                <div className="group_txt">
                    <div className="t1">{rep.name}</div>
                    <div className="like_group">
                        <img src={like_icon} className="like_icon"/>
                        <span className="like_cnt">{rep.liked}</span>
                    </div>
                    <div className="follow_group">
                        <img src={follow_icon} className="follow_icon"/>
                        <span className="follow_cnt">{rep.followed}</span>
                    </div>
                </div>
            </div>
            );
        });
    return (
        <>
            <div className="mainfollow-text">New Followers Feed</div>
            <hr className="Line"></hr>
            <div className="feed">
                <Carousel fade className="feedcar" style={{width: '1250px'}}>


                    <Carousel.Item>
                       <div>{renderRepeat}</div>



                    </Carousel.Item>
                    {/*<Carousel.Item>*/}



                    {/*</Carousel.Item>*/}

                </Carousel>
            </div>

        </>
    );

    }
export default Mainfollow;
