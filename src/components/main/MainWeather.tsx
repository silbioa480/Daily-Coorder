// 부트 스트랩 Carousel
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";
import React from "react";

// css
import '../../css/main/MainWeather.css';

// 사진
import mainwth1 from '../../img/main/mainwth1.png';
import mainwth2 from '../../img/main/mainwth2.png';
import mainwth3 from '../../img/main/mainwth3.png';
import mainwth4 from '../../img/main/mainwth4.png';
import mainwth5 from '../../img/main/mainwth5.png';
import mainwth6 from '../../img/main/mainwth6.png';
import mainwth7 from '../../img/main/mainwth7.png';
import mainwth8 from '../../img/main/mainwth8.png';
import like_logoW from '../../img/main/like_logoW.png';
import like_icon from '../../img/main/like_icon.png';
import follow_icon from '../../img/main/follow_icon.png';
import follow_logoW from '../../img/main/follow_logoW.png';


function MainWeather() {
    return (
        <>
            <div className="mainfollow-text">Daily Weather Style</div>
            <hr className="Line"></hr>
            <Carousel fade className="feedcar" style={{width: '1250px'}}>

                <Carousel.Item>
                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth1}  alt="1-1 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@aksakfn1</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">2,579</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">4,057</span>
                            </div>
                        </div>
                    </div>



                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth2}  alt="1-2 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@osw_onge</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">824</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">1,347</span>
                            </div>
                        </div>
                    </div>


                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth3}  alt="1-3 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@marcellasne_</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">3,572</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">3,495</span>
                            </div>
                        </div>
                    </div>

                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth4}  alt="1-3 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@dlehdgnl</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">1,247</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">1,657</span>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
                <Carousel.Item>


                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth5}  alt="2-1 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@tra_v</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">247</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">312</span>
                            </div>
                        </div>
                    </div>


                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth6}  alt="2-2 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@havely</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">755</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">1,124</span>
                            </div>
                        </div>
                    </div>


                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth7}  alt="2-3 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@im_Soo</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">27</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">162</span>
                            </div>
                        </div>
                    </div>

                    <div className="folpic">
                        <img className="d-block w-100" src={mainwth8}  alt="2-3 slide"/>
                        <div className="group_icon">
                            <div className="like_logoA"><img src={like_logoW} className="like_logoW"/></div>
                            <div className="follow_logoA"><img src={follow_logoW} className="follow_logoW"/></div>
                        </div>
                        <div className="group_txt">
                            <div className="t1">@curt23</div>
                            <div className="like_group">
                                <img src={like_icon} className="like_icon"/>
                                <span className="like_cnt">157</span>
                            </div>
                            <div className="follow_group">
                                <img src={follow_icon} className="follow_icon"/>
                                <span className="follow_cnt">371</span>
                            </div>
                        </div>
                    </div>

                </Carousel.Item>
            </Carousel>

        </>
    );
}

export default MainWeather;
