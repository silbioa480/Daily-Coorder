// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

import "../../css/main/Banner.css";
import "../../css/main/animation.css";

import mainBanners5 from "../../img/main/mainBanners5.png";

function Banner() {
    return (
        <>
            <div className="square-wrapper">
                <div className="square">
                    <img className="squarepic" src={mainBanners5}></img>
                </div>
            </div>

            {/*<div className="ww banner-out">*/}
            {/*    <Carousel fade className="carousel-dark BannerCar">*/}
            {/*        <Carousel.Item className="bannerpic">*/}
            {/*            <Link to="/signup">*/}
            {/*                <img*/}
            {/*                    className="d-block w-100"*/}
            {/*                    src={mainBanner1}*/}
            {/*                    alt="First slide"*/}
            {/*                />*/}
            {/*            </Link>*/}
            {/*        </Carousel.Item>*/}

            {/*        <Carousel.Item className="bannerpic">*/}
            {/*            <Link to="/signup">*/}
            {/*                <img*/}
            {/*                    className="d-block w-100"*/}
            {/*                    src={mainBanner2}*/}
            {/*                    alt="Second slide"*/}
            {/*                />*/}
            {/*            </Link>*/}
            {/*        </Carousel.Item>*/}

            {/*        <Carousel.Item className="bannerpic">*/}
            {/*            <Link to="/signup">*/}
            {/*                <img*/}
            {/*                    className="d-block w-100"*/}
            {/*                    src={mainBanner3}*/}
            {/*                    alt="Second slide"*/}
            {/*                />*/}
            {/*            </Link>*/}
            {/*        </Carousel.Item>*/}
            {/*    </Carousel>*/}
            {/*</div>*/}
            <div style={{width: "100%", height: "30px"}}></div>
        </>
    );
}

export default Banner;
