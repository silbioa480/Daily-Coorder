// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";

import '../../css/main/Banner.css';
import mainBanner1 from '../../img/main/mainBanner1.png';
import mainBanner2 from '../../img/main/mainBanner2.png';
import mainBanner3 from '../../img/main/mainBanner3.png';

function Banner() {
    return (
        <>
            <div className="carousel">
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mainBanner1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mainBanner2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={mainBanner3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
            </div>
        </>

    )
}

export default Banner;
