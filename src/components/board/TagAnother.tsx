// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";

// css
import "../../css/main/MainAnother.css";
import "../../css/main/animation.css";

// 사진
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import ITag from "../../interfaces/ITag";
import BoardService from "../../service/BoardService";
import TagAnotherComponent from "./TagAnotherComponent";

function TagAnother() {

    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [boardId, setBoardId] = useState<ITag["board_id"][]>([]);
    const [boards, setBoards] = useState<IBoard[]>([]);
    const [cnt, setCnt] = useState<number>(20);
    const [isShow, setIsShow] = useState<boolean>(true);

    // NewAnother -------------------------------

    async function getBoardOrderByLike() {
        if (idx >= cnt) setIsShow(false);

        setBoards([...boards, ...await BoardService.getBoardPage(idx).then(res => {
            console.log(res.data);
            return res.data;
        })]);
    }

    async function getBoardCount() {
        setCnt(await BoardService.getBoardCount().then(res => res.data));
    }

    // -------------------------------------------
    const [idx, setIdx] = useState<number>(0);

    useEffect(() => {
        getBoardOrderByLike();
    }, [idx]);

    useEffect(() => {
        getBoardCount();
    }, []);

    // , boardId, boards

    const load = () => {
        setIdx(idx + 10);
        console.log("idx:" + idx);
        //getBoardOrderByLike();
    };
    // 데이터가 없으면 or 10개가 안되면 다시 요청해서 + 버튼 히든처리

    const renderRepeat = boards.slice(0, idx + 10).map((data) => {
        console.log("data.board_id:" + data.board_id);
        return <TagAnotherComponent data={data} key={data.board_id}/>;
    });

    return (
        <>
            <div className="bb mainfollow-text">유사한 게시물 더보기</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <div className="anothercar">
                    {renderRepeat}
                    <div className="btn-out">
                        {isShow && <button className="plus-btn" onClick={load}>
                            <span></span>
                        </button>}
                    </div>

                </div>
            </div>
        </>
    );
}


export default TagAnother;
