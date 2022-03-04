// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

// css
import "../../css/main/MainComponent5.css";

// 사진
import like_logoW from "../../img/main/like_logoW.png";
import like_icon from "../../img/main/like_icon.png";
import follow_icon from "../../img/main/follow_icon.png";
import follow_logoW from "../../img/main/follow_logoW.png";

interface IProps {
  data: IData;
}

interface IData {
  id: number;
  title: string;
  name: string;
  liked: number;
  followed: number;
}

function MainComponent(props: IProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);
  const [liked, setLiked] = useState(props.data.liked);
  const [followed, setFollowed] = useState(props.data.followed);
  const [name, setName] = useState(props.data.name);
  // 삼항연산자 간단하게 위해 선언 (좋아요)
  const empty_like = (
    <img src={like_logoW} className="like_logoW" onClick={toggleShow} />
  );
  const full_like = (
    <img src={like_icon} className="like_logoW" onClick={toggleShow} />
  );
  // 삼항연산자 간단하게 위해 선언 (팔로우)
  const empty_follow = (
    <img src={follow_logoW} className="follow_logoW" onClick={togglefollow} />
  );
  const full_follow = (
    <img src={follow_icon} className="follow_logoW" onClick={togglefollow} />
  );

  // 좋아요 + 1
  function likeIn() {
    setLiked(liked + 1);
  }

  // 좋아요 - 1
  function likeDe() {
    setLiked(liked - 1);
  }

  // 팔로우 + 1
  function followIn() {
    setFollowed(followed + 1);
  }

  // 팔로우 - 1
  function followDe() {
    setFollowed(followed - 1);
  }

  // 좋아요 색깔 toglle and 좋아요 + 1 or - 1
  function toggleShow() {
    setIsShow(!isShow);
    if (!isShow) {
      likeIn();
    } else {
      likeDe();
    }
  }

  // 팔로우 색깔 toglle and 팔로우 + 1 or - 1
  function togglefollow() {
    setIsDone(!isDone);
    if (!isDone) {
      followIn();
    } else {
      followDe();
    }
  }

  // 이부분을 Component화.
  return (
    <div className="anopic">
      <Link to="/board/board1" className="link">
        <img className="d-block w-100" src={props.data.title} alt="1-1 slide" />
      </Link>

      <div className="group_icon5">
        <div className="like_logoA">{isShow ? full_like : empty_like}</div>

        <div className="follow_logoA">
          {isDone ? full_follow : empty_follow}
        </div>
      </div>

      <Link to="/feed">
        <div className="group_txt5">
          <div className="t1">{props.data.name}</div>
          <div className="like_group">
            <img src={like_icon} className="like_icon" />
            <span className="like_cnt">{liked}</span>
          </div>
          <div className="follow_group">
            <img src={follow_icon} className="follow_icon" />
            <span className="follow_cnt">{followed}</span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MainComponent;
