// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

// css
import "../../css/main/MainAnother.css";

// 사진
import mainfol2 from "../../img/main/mainfol2.png";
import mainfol3 from "../../img/main/mainfol3.png";
import mainfol4 from "../../img/main/mainfol4.png";
import mainano11 from "../../img/main/mainano11.png";
import mainano12 from "../../img/main/mainano12.png";
import mainano13 from "../../img/main/mainano13.png";
import mainano14 from "../../img/main/mainano14.png";
import mainano15 from "../../img/main/mainano15.png";
import mainano16 from "../../img/main/mainano16.png";
import mainano17 from "../../img/main/mainano17.png";
import mainano18 from "../../img/main/mainano18.png";
import mainano19 from "../../img/main/mainano19.png";
import mainano20 from "../../img/main/mainano20.png";
import mainano21 from "../../img/main/mainano21.png";
import mainano22 from "../../img/main/mainano22.png";
import mainano23 from "../../img/main/mainano23.png";
import mainano24 from "../../img/main/mainano24.png";
import mainano25 from "../../img/main/mainano25.png";
import mainano26 from "../../img/main/mainano26.png";
import mainano27 from "../../img/main/mainano27.png";
import mainano28 from "../../img/main/mainano28.png";
import mainano29 from "../../img/main/mainano29.png";
import mainano30 from "../../img/main/mainano30.png";
import mainano31 from "../../img/main/mainano31.png";
import mainano32 from "../../img/main/mainano32.png";
import mainano33 from "../../img/main/mainano33.png";
import mainano34 from "../../img/main/mainano34.png";
import mainano35 from "../../img/main/mainano35.png";
import { Link } from "react-router-dom";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

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

function LikeComponent(props: IProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  let board = props.data;

  // 가져온 테이블에서 팔로우 숫자 가져오기
  const [liked, setLiked] = useState(props.data.liked);
  const [followed, setFollowed] = useState(props.data.followed);
  //                        ?  언디파인드 아닐떄만 접근해라

  const [likecolor, setLikecolor] = useState("rgba(30,66,141,1)");
  const [followcolor, setFollowcolor] = useState("");

  // 좋아요 + 1
  function likeIn() {
    setLiked(liked - 1);
  }

  // 좋아요 - 1
  function likeDe() {
    setLiked(liked + 1);
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
    likecolor === "" ? setLikecolor("rgba(30,66,141,1)") : setLikecolor("");
    setIsShow(!isShow);
    // createFollow();
    if (!isShow) {
      likeIn();
    } else {
      likeDe();
    }
  }

  // 팔로우 색깔 toglle and 팔로우 + 1 or - 1
  function togglefollow() {
    followcolor === ""
      ? setFollowcolor("rgba(254,68,161,1)")
      : setFollowcolor("");
    setIsDone(!isDone);
    if (!isDone) {
      followIn();
    } else {
      followDe();
    }
  }

  // 이부분을 Component화.
  return (
    <div className="anotherpic-out">
      <div className="anotherpic">
        <Link to="/board/board1" className="link">
          <img
            className="d-block w-100"
            src={props.data.title}
            alt="1-1 slide"
          />
        </Link>

        <div className="ano-group_icon5">
          <div className="like_logoA">
            <AiFillHeart onClick={toggleShow} style={{ color: likecolor }} />
          </div>

          <div className="follow_logoA">
            <AiFillStar onClick={togglefollow} style={{ color: followcolor }} />
          </div>
        </div>

        <Link to="/feed">
          <div className="ano-group_txt5">
            <div className="t1">{props.data.name}</div>
            <div className="like_group">
              <AiFillHeart className="like_icon" />
              <span className="like_cnt">{liked}</span>
            </div>
            <div className="follow_group">
              <AiFillStar className="follow_icon" />
              <span className="follow_cnt">{followed}</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

let d = [
  {
    id: 11,
    title: mainano11,
    name: "@likecolor",
    liked: 513,
    followed: 275,
  },
  {
    id: 12,
    title: mainano12,
    name: "@good",
    liked: 165,
    followed: 1445,
  },
  {
    id: 13,
    title: mainano13,
    name: "@Sort",
    liked: 73,
    followed: 131,
  },
  {
    id: 14,
    title: mainano14,
    name: "@sqare",
    liked: 624,
    followed: 1196,
  },
  {
    id: 15,
    title: mainano15,
    name: "@gogos",
    liked: 235,
    followed: 541,
  },
  {
    id: 16,
    title: mainano16,
    name: "@trkeso",
    liked: 751,
    followed: 1175,
  },
  {
    id: 17,
    title: mainano17,
    name: "@goodbye",
    liked: 72,
    followed: 145,
  },
  {
    id: 18,
    title: mainano18,
    name: "@Sor_but",
    liked: 13,
    followed: 431,
  },
  {
    id: 19,
    title: mainano19,
    name: "@son_mi",
    liked: 14,
    followed: 196,
  },
  {
    id: 20,
    title: mainano20,
    name: "@gong_0",
    liked: 15,
    followed: 1041,
  },
  {
    id: 21,
    title: mainano21,
    name: "@likeso",
    liked: 11,
    followed: 275,
  },
  {
    id: 22,
    title: mainano22,
    name: "@goodbye",
    liked: 12,
    followed: 145,
  },
  {
    id: 23,
    title: mainano23,
    name: "@Sor_but",
    liked: 13,
    followed: 431,
  },
  {
    id: 24,
    title: mainano24,
    name: "@son_mi",
    liked: 14,
    followed: 196,
  },
  {
    id: 25,
    title: mainano25,
    name: "@gong_0",
    liked: 15,
    followed: 1041,
  },
  {
    id: 26,
    title: mainano26,
    name: "@likeso",
    liked: 11,
    followed: 275,
  },
  {
    id: 27,
    title: mainano27,
    name: "@goodbye",
    liked: 12,
    followed: 145,
  },
  {
    id: 28,
    title: mainano28,
    name: "@Sor_but",
    liked: 13,
    followed: 431,
  },
  {
    id: 29,
    title: mainano29,
    name: "@son_mi",
    liked: 14,
    followed: 196,
  },
  {
    id: 30,
    title: mainano30,
    name: "@gong_0",
    liked: 15,
    followed: 1041,
  },
  {
    id: 31,
    title: mainano31,
    name: "@likeso",
    liked: 11,
    followed: 275,
  },
  {
    id: 32,
    title: mainano32,
    name: "@goodbye",
    liked: 12,
    followed: 145,
  },
  {
    id: 33,
    title: mainano33,
    name: "@Sor_but",
    liked: 13,
    followed: 431,
  },
  {
    id: 34,
    title: mainano34,
    name: "@son_mi",
    liked: 14,
    followed: 196,
  },
  {
    id: 35,
    title: mainano35,
    name: "@gong_0",
    liked: 15,
    followed: 1041,
  },
];

// mainfol 2, 3, 4
function MyLiked() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  let c = d.sort(() => Math.random() - 0.5);
  let e = [
    {
      id: 1,
      title: mainfol2,
      name: "@Grilsan",
      liked: 1020,
      followed: 1423,
    },
    {
      id: 2,
      title: mainfol3,
      name: "@hello_11",
      liked: 419,
      followed: 847,
    },
    {
      id: 3,
      title: mainfol4,
      name: "@ch_bely",
      liked: 554,
      followed: 712,
    },
  ];

  const [datas, setDatas] = useState(e);

  const load = () => {
    // let temp = datas;
    //
    // for (let i = start; i < end; i++) {
    //   temp.push(c[i]);
    // }
    //
    // setDatas(temp);
    //
    // setStart(start + 10);
    // setEnd(end + 10);
  };

  const renderRepeat = datas.map((data) => {
    return <LikeComponent data={data} key={data.id} />;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="mainfollow-text">My Liked</div>
      <hr className="Line"></hr>
      <div className="wth">
        <div className="anothercar" style={{ width: "1400px" }}>
          <div style={{ display: "inline-block" }}>{renderRepeat}</div>

          <div className="btn-out">
            <button className="plus-btn" onClick={load}>
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyLiked;
