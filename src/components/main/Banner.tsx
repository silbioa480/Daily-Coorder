// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import '../../css/main/Banner.css';
import mainBanner1 from '../../img/main/mainBanner1.png';
import mainBanner2 from '../../img/main/mainBanner2.png';
import mainBanner3 from '../../img/main/mainBanner3.png';

function Banner() {
    return (
        <>

            <Carousel fade className="BannerCar">

                <Carousel.Item className="bannerpic" style={{width: '1000px', height: '280px'}}>
                    <Link to="/signup">
                    <img className="d-block w-100" src={mainBanner1} alt="First slide"/>
                    </Link>
                </Carousel.Item>

                <Carousel.Item className="bannerpic" style={{width: '1000px', height: '280px'}}>
                    <Link to="/signup">
                    <img className="d-block w-100" src={mainBanner2} alt="Second slide"/>
                    </Link>
                </Carousel.Item>

                <Carousel.Item className="bannerpic" style={{width: '1000px', height: '280px'}}>
                    <Link to="/signup">
                    <img className="d-block w-100" src={mainBanner3} alt="Second slide"/>
                    </Link>
                </Carousel.Item>

            </Carousel>

        </>

    );
}

export default Banner;
