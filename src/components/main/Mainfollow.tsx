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
    const [isDone, setIsDone] =useState(true);
    const [liked, setLiked] =useState(100);
    const [followed, setFollowed] =useState(200);
    const empty_like = <img src={like_logoW} className="like_logoW" onClick={toggleShow}  /> ;
    const full_like = <img src={like_icon} className="like_logoW" onClick={toggleShow}  /> ;

    function likeIn() {
        setLiked(liked + 1);
    }

    function likeDe() {
        setLiked(liked - 1);
    }

    function toggleShow() {
        setIsShow(!isShow);
        if(!isShow) {
            likeIn();
        }   else {
            likeDe();
        }

    }

    function togglefollow() {
        setIsDone(!isDone);
    }


  return (
      <>
          <div className="mainfollow-text">New Followrs Feed</div>
          <hr className="Line"></hr>
          <div className="feed">
              <Carousel fade className="feedcar" style={{width: '1250px'}}>
                  <Carousel.Item>

                      <div className="folpic">

                          <Link to="/signup">
                        <img className="d-block w-100" src={mainfol1}  alt="1-1 slide" />
                          </Link>

                          <div className="group_icon">

                              <div className="like_logoA">
                                  { isShow ? full_like : empty_like }
                              </div>

                              <div className="follow_logoA">
                                  {isDone ?
                                      <img src={follow_logoW} className="follow_logoW" onClick={togglefollow}/> :
                                      <img src={follow_icon} className="follow_logoW" onClick={togglefollow}/> }
                              </div>

                          </div>

                          <div className="group_txt">
                              <div className="t1">@shine_1</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon" />
                                  <span className="like_cnt">{liked}</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">{followed}</span>
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

                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol4}  alt="1-3 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@tae_v</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">635</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">572</span>
                              </div>
                          </div>
                      </div>

                  </Carousel.Item>
                  <Carousel.Item>


                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol5}  alt="2-1 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@yahni</div>
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
                          <img className="d-block w-100" src={mainfol6}  alt="2-2 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@won_ing</div>
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
                          <img className="d-block w-100" src={mainfol7}  alt="2-3 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@covi_d</div>
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

                      <div className="folpic">
                          <img className="d-block w-100" src={mainfol8}  alt="2-3 slide"/>
                          <div className="group_icon">
                              <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                              <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                          </div>
                          <div className="group_txt">
                              <div className="t1">@hni_b</div>
                              <div className="like_group">
                                  <img src={like_icon} className="like_icon"/>
                                  <span className="like_cnt">1,586</span>
                              </div>
                              <div className="follow_group">
                                  <img src={follow_icon} className="follow_icon"/>
                                  <span className="follow_cnt">2,476</span>
                              </div>
                          </div>
                      </div>


                  </Carousel.Item>
              </Carousel>
          </div>
      </>
  );
}

export default Mainfollow;
