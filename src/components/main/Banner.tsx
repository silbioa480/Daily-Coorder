// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "../../css/main/Banner.css";
import "../../css/main/animation.css";

import mainBanner6 from "../../img/main/mainBanner6.jpg";
import mainBanner7 from "../../img/main/mainBanner7.jpg";
import {Carousel} from "react-bootstrap";
import {Link} from "react-router-dom";

function Banner() {
    return (
        <>
            {/*<div className="square-wrapper">*/}
            {/*<div className="square">*/}
            {/*    <img className="squarepic" src={mainBanner6}></img>*/}

            {/*    <img className="squarepic" src={mainBanner7}></img>*/}
            {/*</div>*/}

            {/*</div>*/}

            <div className="ww banner-out">
                <Carousel fade className="carousel BannerCar">
                    <Carousel.Item className="bannerpic">
                        <Link to="/signup">
                            <img
                                className="d-block w-100"
                                src={mainBanner6}
                                alt="First slide"
                            />
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item className="bannerpic">
                        <Link to="/signup">
                            <img
                                className="d-block w-100"
                                src={mainBanner7}
                                alt="Second slide"
                            />
                        </Link>
                    </Carousel.Item>

                </Carousel>
            </div>
            <div style={{width: "100%", height: "30px"}}></div>
        </>
    );
}

export default Banner;
