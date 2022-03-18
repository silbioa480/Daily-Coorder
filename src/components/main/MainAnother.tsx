// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState} from "react";

// css
import "../../css/main/MainAnother.css";
import "../../css/main/animation.css";

// 사진
import MainAnotherComponent from "./MainAnotherComponent";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";

function MainAnother() {
    // user 가져오기
    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    // 게시물 가져오기
    const [boards, setBoards] = useState<IBoard[]>([]);
    // 게시물 cnt 가져오기
    const [cnt, setCnt] = useState<number>(20);
    // 버튼 show boolean
    const [isShow, setIsShow] = useState<boolean>(true);

    // 좋아요 높은 순으로 게시물 가져오기
    // async function getBoardOrderByLike() {
    //     if (idx >= cnt) setIsShow(false);
    //     setBoards([...boards, ...await BoardService.getBoardPage(idx).then(res => {
    //         return res.data;
    //     })]);
    // }
    //
    // async function getBoardCount() {
    //     setCnt(await BoardService.getBoardCount().then(res => res.data));
    // }
    //
    // const [idx, setIdx] = useState<number>(0);
    //
    // useEffect(() => {
    //     getBoardOrderByLike();
    // }, [idx]);
    //
    // useEffect(() => {
    //     getBoardCount();
    // }, []);
    //
    // // button onClick =>------------------------------
    //
    // const load = () => {
    //     setIdx(idx + 10);
    // };

    // 데이터가 없으면 or 10개가 안되면 다시 요청해서 + 버튼 히든처리
    // -----------------------------------------------

    // component.slice.map -------------------------------------

    const renderRepeat = boards.map((data) => {
        return <MainAnotherComponent data={data} key={data.board_id}/>;
    });

    // ---------------------------------------------------------
    return (
        <>
            <div className="bb mainfollow-text">New Another</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <div className="anothercar">
                    {renderRepeat.slice(0, 10)}
                    <div className="btn-out">
                        {/*<button className="plus-btn" onClick={load}>*/}
                        <button className="plus-btn">
                            <span></span>
                        </button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default MainAnother;
