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
import like_logoW from '../../img/main/like_logoW.png';
import like_icon from '../../img/main/like_icon.png';
import follow_icon from '../../img/main/follow_icon.png';
import follow_logoW from '../../img/main/follow_logoW.png';


function Mainfollow() {
  return (
      <>
          <div className="mainfollow-text">New Followrs Feed</div>
          <hr className="Line"></hr>
              <Carousel fade className="FeedCar" style={{width: '1250px'}}>

                  <Carousel.Item>
                      <div className="folpic">
                        <img className="d-block w-100" src={mainfol1}  alt="1-1 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@bn_sj2013</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">435</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">1,573</span>
                              </div>
                          </div>
                      </div>



                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol2}  alt="1-2 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@his_sung0</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">237</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">764</span>
                              </div>
                          </div>
                      </div>


                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol3}  alt="1-3 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@jung_gram</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">457</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">975</span>
                              </div>
                          </div>
                      </div>

                  </Carousel.Item>
                  <Carousel.Item>


                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol4}  alt="2-1 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@Tae_Tae</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">1,157</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">677</span>
                              </div>
                          </div>
                      </div>


                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol5}  alt="2-2 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@Won_ing</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">23</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">159</span>
                              </div>
                          </div>
                      </div>


                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol6}  alt="2-3 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@Covi_D</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">198</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">347</span>
                              </div>
                          </div>
                      </div>


                  </Carousel.Item>
              </Carousel>

      </>
  );
}

export default Mainfollow;
