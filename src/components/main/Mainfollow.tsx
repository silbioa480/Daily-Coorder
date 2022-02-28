// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";

// css
import '../../css/main/MainNewFollow.css';

// 사진
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
              <Carousel fade style={{width: '1200px'}}>
                  <Carousel.Item>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                        <img className="d-block w-100" src={mainfol1}  alt="1-1 slide"/>
                      </div>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                          <img className="d-block w-100" src={mainfol2}  alt="1-2 slide"/>
                      </div>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                         <img className="d-block w-100" src={mainfol3}  alt="1-3 slide"/>
                      </div>
                  </Carousel.Item>
                  <Carousel.Item>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                          <img className="d-block w-100" src={mainfol4}  alt="1-1 slide"/>
                      </div>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                          <img className="d-block w-100" src={mainfol5}  alt="1-2 slide"/>
                      </div>
                      <div className="folpic"
                          style={{width: '400px', height: '490px', float: 'left'}}>
                          <img className="d-block w-100" src={mainfol6}  alt="1-3 slide"/>
                      </div>
                  </Carousel.Item>
              </Carousel>
      </>
  );
}

export default Mainfollow;
