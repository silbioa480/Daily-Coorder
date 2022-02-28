// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";

import '../../css/main/MainPage.css';
import mainfol1 from '../../img/main/mainfol1.png';
import mainfol2 from '../../img/main/mainfol2.png';
import mainfol3 from '../../img/main/mainfol3.png';
import mainfol4 from '../../img/main/mainfol4.png';
import mainfol5 from '../../img/main/mainfol5.png';
import mainfol6 from '../../img/main/mainfol6.png';


function Mainfollow() {
  return (
      <>
          <div className="mainfollow-text">New Followrs Feed</div>
          <hr className="Line"></hr>

              {/*<div className="folpicdiv">*/}
              {/*    <img src={mainfol1}  className="folpic" style={{width:'420px', height:'520px'}}/>*/}
              {/*</div>*/}
              {/*<div className="folpicdiv">*/}
              {/*    <img src={mainfol2}  className="folpic" style={{width:'420px', height:'520px'}}/>*/}
              {/*</div>*/}
              {/*<div className="folpicdiv">*/}
              {/*    <img src={mainfol3}  className="folpic" style={{width:'420px', height:'520px'}}/>*/}
              {/*</div>*/}
          <div className="carousel">
              <Carousel fade style={{width: '350px'}}>
                  <Carousel.Item>
                      <img className="d-block w-100" src={mainfol1}alt="First slide"/>
                      <img className="d-block w-100" src={mainfol2}alt="Second slide"/>
                      <img className="d-block w-100" src={mainfol3}alt="third slide"/>
                  </Carousel.Item>
                  <Carousel.Item>
                      <img className="d-block w-100" src={mainfol4}alt="First slide"/>
                      <img className="d-block w-100" src={mainfol5}alt="First slide"/>
                      <img className="d-block w-100" src={mainfol6}alt="First slide"/>
                  </Carousel.Item>

              </Carousel>
          </div>




      </>
  );
}

export default Mainfollow;
