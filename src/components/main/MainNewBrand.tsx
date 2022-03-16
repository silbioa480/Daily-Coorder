// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import {Carousel} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import MainComponent5 from "./MainComponent5";

// css
import "../../css/main/MainNewBrand.css";
import "../../css/main/animation.css";
import IBoard from "../../interfaces/IBoard";
import IBusiness from "../../interfaces/IBusiness";
import FollowService from "../../service/FollowService";
import BoardService from "../../service/BoardService";
import IUser from "../../interfaces/IUser";

// 사진

function MainNewBrand() {

    // const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [businessName, setBusinessName] = useState<IBusiness>();
    const [brand, setBrand] = useState<IBoard[]>([]);


    // 비즈니스 테이블 다 가져온다.
    // 게시물 다 가져와서 10개 자르고
    // 맵으로 돌려서 getBoardByUserId
    // 최근 데이트순으로 5개 혹은 10개 가져온다.


    // business_id 를 가져온다.
    // async function getBusinessByName() {
    //     setBusinessName(await BusinessService.getBusinessById(myId).then(res => res.data));
    // }
    //
    // // business_name 을 가져온다. 최근 10개만
    // async function getBoardByBusinessName() {
    //     setBusinessName(await BusinessService.findTop10OrderByBusinessNameDesc(myId).then(res => res.data));
    // }

    // business_name의 board를


    // async function getBusinessById() {
    //     setBusinessName(await businessService.getBusinessById(myId).then(res => res.data));
    // }


    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [myFollowers, setMyFollowers] = useState<IUser["user_id"][]>([]);
    const [followerBoards, setFollowerBoards] = useState<IBoard[]>([]);

    // 내가 팔로우한 사람들(id)의 게시물을 가져오는 함수 getbyuserid
    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    // 2 내 아이디를 이용해서 내가 팔로우한 사람들의 id
    async function getFollowersId() {
        setMyFollowers(await FollowService.getFollowerByUserId(myId).then(res => res.data));
    }

    //                내가 팔로우한 상대방의 아이디만 가져옴 (배열로)

    // 3 그 사람들의 게시물 데이터를 가져옴
    function getFollowerBoard() {
        myFollowers.map(async (follower) => {
            let boards = await BoardService.getBoardByUserId(follower).then(res => res.data);
            setFollowerBoards([...followerBoards, ...boards]);
        })
    }

    useEffect(() => {
        // getBusinessByName();
        // getBoardByBusinessName();

    }, []);

    const renderRepeat = followerBoards.map((data) => {
        return <MainComponent5 data={data} key={data.board_id}/>;
    });
    return (
        <>
            <div className="bb mainfollow-text">New In Thursday Island</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <Carousel fade className="carousel-dark anothercar" style={{width: "1400px"}}>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(0, 5)}</div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div>{renderRepeat.slice(5, 10)}</div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
}

export default MainNewBrand;
