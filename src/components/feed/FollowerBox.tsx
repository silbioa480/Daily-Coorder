import { Carousel, Figure } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MainComponent from "../main/MainComponent";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";

import mainano1 from "../../img/main/mainano1.png";
import mainano2 from "../../img/main/mainano2.png";
import mainano3 from "../../img/main/mainano3.png";
import mainano4 from "../../img/main/mainano4.png";
import mainano5 from "../../img/main/mainano5.png";
import mainano6 from "../../img/main/mainano6.png";
import mainano7 from "../../img/main/mainano7.png";
import mainano8 from "../../img/main/mainano8.png";
import mainano9 from "../../img/main/mainano9.png";
import mainano10 from "../../img/main/mainano10.png";
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

interface IProps {
  follower: IFollower;
}

interface IFollower {
  name: string;
  followCount: number;
}

function FollowerBox(props: IProps) {
  const [myId, setMyId] = useState<IUser["user_id"]>("1");
  const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
  const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);

  // 내가 팔로우한 사람들(id)의 게시물을 가져오는 함수 getbyuserid
  // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
  // 2 내 아이디를 이용해서 내가 팔로우한 사람들의 id
  // async function getFollowersId() {
  //     setMyFollowers(await FollowService.getFollowerByUserId(myId).then(res => res.data));
  // }

  //                내가 팔로우한 상대방의 아이디만 가져옴 (배열로)

  // 3 그 사람들의 게시물 데이터를 가져옴
  // function getFollowerBoard() {
  //     myFollowers.map(async (follower) => {
  //         let boards = await BoardService.getBoardByUserId(follower).then(res => res.data);
  //         setFollowerBoards([...followerBoards, ...boards]);
  //     })
  // }

  // useEffect(() => {
  //     getFollowersId();
  //     getFollowerBoard();
  // }, []);

  const datas = [
    {
      id: 1,
      title: mainano1,
      name: "@shine_1",
      liked: 117,
      followed: 210,
    },
    {
      id: 2,
      title: mainano2,
      name: "@namju",
      liked: 1019,
      followed: 1423,
    },
    {
      id: 3,
      title: mainano3,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 4,
      title: mainano4,
      name: "@tae_tae",
      liked: 553,
      followed: 712,
    },
    {
      id: 5,
      title: mainano5,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 6,
      title: mainano6,
      name: "@hrsan",
      liked: 78,
      followed: 421,
    },
    {
      id: 7,
      title: mainano7,
      name: "@niks_13",
      liked: 133,
      followed: 1421,
    },
    {
      id: 8,
      title: mainano8,
      name: "@was_not",
      liked: 1240,
      followed: 1446,
    },
    {
      id: 9,
      title: mainano9,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 10,
      title: mainano10,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 11,
      title: mainano11,
      name: "@shine_1",
      liked: 117,
      followed: 210,
    },
    {
      id: 12,
      title: mainano12,
      name: "@namju",
      liked: 1019,
      followed: 1423,
    },
    {
      id: 13,
      title: mainano13,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 14,
      title: mainano14,
      name: "@tae_tae",
      liked: 553,
      followed: 712,
    },
    {
      id: 15,
      title: mainano15,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 16,
      title: mainano16,
      name: "@hrsan",
      liked: 78,
      followed: 421,
    },
    {
      id: 17,
      title: mainano17,
      name: "@niks_13",
      liked: 133,
      followed: 1421,
    },
    {
      id: 18,
      title: mainano18,
      name: "@was_not",
      liked: 1240,
      followed: 1446,
    },
    {
      id: 19,
      title: mainano19,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 20,
      title: mainano20,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 21,
      title: mainano21,
      name: "@shine_1",
      liked: 117,
      followed: 210,
    },
    {
      id: 22,
      title: mainano22,
      name: "@namju",
      liked: 1019,
      followed: 1423,
    },
    {
      id: 23,
      title: mainano23,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 24,
      title: mainano24,
      name: "@tae_tae",
      liked: 553,
      followed: 712,
    },
    {
      id: 25,
      title: mainano25,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 26,
      title: mainano26,
      name: "@hrsan",
      liked: 78,
      followed: 421,
    },
    {
      id: 27,
      title: mainano27,
      name: "@niks_13",
      liked: 133,
      followed: 1421,
    },
    {
      id: 28,
      title: mainano28,
      name: "@was_not",
      liked: 1240,
      followed: 1446,
    },
    {
      id: 29,
      title: mainano29,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 30,
      title: mainano30,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 31,
      title: mainano31,
      name: "@shine_1",
      liked: 117,
      followed: 210,
    },
    {
      id: 32,
      title: mainano32,
      name: "@namju",
      liked: 1019,
      followed: 1423,
    },
    {
      id: 33,
      title: mainano33,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 34,
      title: mainano34,
      name: "@tae_tae",
      liked: 553,
      followed: 712,
    },
    {
      id: 35,
      title: mainano35,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
    {
      id: 36,
      title: mainano1,
      name: "@hrsan",
      liked: 78,
      followed: 421,
    },
    {
      id: 37,
      title: mainano2,
      name: "@niks_13",
      liked: 133,
      followed: 1421,
    },
    {
      id: 38,
      title: mainano3,
      name: "@was_not",
      liked: 1240,
      followed: 1446,
    },
    {
      id: 39,
      title: mainano4,
      name: "@aaa_A",
      liked: 418,
      followed: 847,
    },
    {
      id: 40,
      title: mainano5,
      name: "@minkue",
      liked: 172,
      followed: 351,
    },
  ];

  const renderRepeat = datas
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map((data) => {
      return <MainComponent data={data} key={data.id} />;
    });

  return (
    <div
      className="aa"
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
        margin: "50px auto",
      }}
    >
      <Figure
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "150px",
          marginRight: "50px",
        }}
      >
        <Link to="#">
          <Figure.Image
            src={require("../../img/main/follow_icon.png")}
            alt="thumbnail"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
        </Link>
        <Figure.Caption>
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            <Link to="#">{props.follower.name}</Link>
          </div>
          <div style={{ marginTop: "16px", textAlign: "center" }}>
            팔로우 수 {props.follower.followCount}
          </div>
        </Figure.Caption>
      </Figure>

      <div className="feed">
        <Carousel
          fade
          className="carousel-dark feedcar"
          style={{ width: "1550px" }}
        >
          <Carousel.Item>
            <div>{renderRepeat.slice(0, 5)}</div>
          </Carousel.Item>

          <Carousel.Item>
            <div>{renderRepeat.slice(5, 10)}</div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default FollowerBox;
