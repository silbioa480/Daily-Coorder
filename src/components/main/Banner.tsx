// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React from "react";
import {Link} from "react-router-dom";

import "../../css/main/Banner.css";
import "../../css/main/animation.css";
import mainBanner5 from "../../img/main/mainBanner5.png";
import mainBanner2 from "../../img/main/mainBanner2.png";
import mainBanner3 from "../../img/main/mainBanner3.png";


function Banner() {
    return (
        <>
            <div className="square-wrapper">
                <div className="square"></div>
            </div>

            <div className="ww banner-out">
                <Carousel fade className="carousel-dark BannerCar">
                    <Carousel.Item className="bannerpic">
                        <Link to="/signup">
                            <img
                                className="d-block w-100"
                                src={mainBanner5}
                                alt="First slide"
                            />
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item className="bannerpic">
                        <Link to="/signup">
                            <img
                                className="d-block w-100"
                                src={mainBanner2}
                                alt="Second slide"
                            />
                        </Link>
                    </Carousel.Item>

                    <Carousel.Item className="bannerpic">
                        <Link to="/signup">
                            <img
                                className="d-block w-100"
                                src={mainBanner3}
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
