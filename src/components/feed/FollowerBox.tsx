import { Carousel, Figure } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import mingu2 from "../../img/main/mingu2.png";
import mingu3 from "../../img/main/mingu3.png";
import mingu4 from "../../img/main/mingu4.png";
import mingu5 from "../../img/main/mingu5.png";
import mainfol5 from "../../img/main/mainfol5.png";
import { AiFillHeart, AiFillStar } from "react-icons/ai";

interface IFollowProps {
  data: IData;
}

interface IData {
  id: number;
  title: string;
  name: string;
  liked: number;
  followed: number;
}

function FollowComponent(props: IFollowProps) {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDone, setIsDone] = useState<boolean>(false);

  //                        ?  언디파인드 아닐떄만 접근해라
  const [liked, setLiked] = useState(props.data.liked);
  const [followed, setFollowed] = useState(props.data.followed);
  const [name, setName] = useState(props.data.name);

  const [likecolor, setLikecolor] = useState("");
  const [followcolor, setFollowcolor] = useState("rgba(254, 68, 161, 1)");

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
    setFollowed((followed as number) + 1);
  }

  // 팔로우 - 1
  function followDe() {
    if (followed) {
      setFollowed(followed - 1);
    }
  }

  // 좋아요 색깔 toglle and 좋아요 + 1 or - 1
  function toggleShow() {
    likecolor === "" ? setLikecolor("rgba(30,66,141,1)") : setLikecolor("");
    setIsShow(!isShow);
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
    <div className="folpic">
      <Link to={`/board/{props.data.board_id}`} className="link">
        <img className="d-block w-100" src={props.data.title} alt="1-1 slide" />
      </Link>
      <div className="group_icon">
        <div className="like_logoA">
          <AiFillHeart onClick={toggleShow} style={{ color: likecolor }} />
        </div>

        <div className="follow_logoA">
          <AiFillStar onClick={togglefollow} style={{ color: followcolor }} />
        </div>
      </div>

      <Link to="/feed">
        <div className="group_txt">
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
  );
}

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
      title: mainfol5,
      name: "@shine_1",
      liked: 117,
      followed: 352,
    },
    {
      id: 2,
      title: mingu2,
      name: "@namju",
      liked: 1019,
      followed: 352,
    },
    {
      id: 3,
      title: mingu3,
      name: "@aaa_A",
      liked: 418,
      followed: 352,
    },
    {
      id: 4,
      title: mingu4,
      name: "@tae_tae",
      liked: 553,
      followed: 352,
    },
    {
      id: 5,
      title: mingu5,
      name: "@minkue",
      liked: 172,
      followed: 352,
    },
  ];

  const renderRepeat = datas.map((data) => {
    return <FollowComponent data={data} key={data.id} />;
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
            src={require("../../img/main/minguIcon.jpg")}
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
        </Carousel>
      </div>
    </div>
  );
}

export default FollowerBox;
