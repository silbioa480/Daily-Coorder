import {Carousel, Figure} from "react-bootstrap";
import React from "react";
import mainfol1 from "../../img/main/mainfol1.png";
import mainfol2 from "../../img/main/mainfol2.png";
import mainfol3 from "../../img/main/mainfol3.png";
import mainfol4 from "../../img/main/mainfol4.png";
import mainfol5 from "../../img/main/mainfol5.png";
import mainfol6 from "../../img/main/mainfol6.png";
import mainfol7 from "../../img/main/mainfol7.png";
import mainfol8 from "../../img/main/mainfol8.png";
import {Link} from "react-router-dom";
import MainComponent from "../main/MainComponent";

interface IProps {
    follower: IFollower;
}

interface IFollower {
    name: string;
    followCount: number;
}

function FollowerBox(props: IProps) {
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
        {
            id: 9,
            title: mainfol3,
            name: "@aaa_A",
            liked: 418,
            followed: 847,
        },
        {
            id: 10,
            title: mainfol5,
            name: "@minkue",
            liked: 172,
            followed: 351,
        },
    ];

    const renderRepeat = datas.map((data) => {
        return <MainComponent data={data} key={data.id}/>;
    });

    return (
        <div
            className="aa"
            style={{
                display: "flex",
                justifyContent: "center",
                width: "100vw",
                margin: "50px auto",
            }}
        >
            <Figure
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "150px",
                    marginRight: "50px",
                }}
            >
                <Link to="#">
                    <Figure.Image
                        src={require("../../img/main/follow_icon.png")}
                        alt="thumbnail"
                        style={{width: "150px", height: "150px", borderRadius: "50%"}}
                    />
                </Link>
                <Figure.Caption>
                    <div
                        style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            textAlign: "center",
                        }}
                    >
                        <Link to="#">{props.follower.name}</Link>
                    </div>
                    <div style={{marginTop: "16px", textAlign: "center"}}>
                        팔로우 수 {props.follower.followCount}
                    </div>
                </Figure.Caption>
            </Figure>

            <div className="feed">
                <Carousel fade className="carousel-dark feedcar" style={{width: "1550px"}}>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(0, 5)}</div>
                    </Carousel.Item>

                    <Carousel.Item>
                        <div>{renderRepeat.slice(5, 10)}</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default FollowerBox;
