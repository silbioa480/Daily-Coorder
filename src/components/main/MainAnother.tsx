// 부트 스트랩 Carousel
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect, useState} from "react";

// css
import "../../css/main/MainAnother.css";
import "../../css/main/animation.css";

// 사진
import MainAnotherComponent from "./MainAnotherComponent";
import IUser from "../../interfaces/IUser";
import IBoard from "../../interfaces/IBoard";
import BoardService from "../../service/BoardService";
import TagLikeService from "../../service/TagLikeService";
import ITagLike from "../../interfaces/ITagLike";
import TagService from "../../service/TagService";
import ITag from "../../interfaces/ITag";

function MainAnother() {

    const [myId, setMyId] = useState<IUser["user_id"]>("1");
    const [tagName, setTagName] = useState<ITagLike["tag_name"][]>([]);
    const [boardId, setBoardId] = useState<ITag["board_id"][]>([]);
    const [boards, setBoards] = useState<IBoard[]>([]);

    // NewAnother -------------------------------

    // 내가 좋아하는 태그들을 count 많은순으로 가져온다.
    async function getTagNameByMemberId() {
        setTagName(await TagLikeService.getTagNameByMemberId(myId).then(res => res.data));
    }

    // 태그네임으로 태그 id를 배열로 가져오고 맵으로 풀어준다.
    async function getBoardIdByTagName() {
        let ids: ITag["board_id"][] = [];
        tagName.map(async (boardsByTagName) => {
            let newId = await TagService.getBoardIdByTagName(boardsByTagName).then(res => res.data)
            ids.push(...newId);
        })
        setBoardId(ids);
    }

    // id를 풀어준 맵으로 그 id의 board를 가져온다.
    function getBoardByBoardId() {
        let b: IBoard[] = [];
        boardId.map(async (boardsByTag) => {
            let newBoards = await BoardService.getBoardById(boardsByTag).then(res => res.data);
            b.push(newBoards);
        })
        setBoards(b);
    }

    // -------------------------------------------

    useEffect(() => {
        getTagNameByMemberId();
        getBoardIdByTagName();
        getBoardByBoardId();
    }, [myId, tagName,]);
    // , boardId, boards

    const [idx, setIdx] = useState<number>(1);
    const load = () => {
        setIdx(idx + 1);
    };

    const renderRepeat = boards.slice(0, 10 * idx).map((data) => {
        return <MainAnotherComponent data={data} key={data.board_id}/>;
    });

    return (
        <>
            <div className="bb mainfollow-text">New Another</div>
            <hr className="bb Line"></hr>
            <div className="bb wth">
                <div className="anothercar">
                    {renderRepeat}

                    <div className="btn-out">
                        <button className="plus-btn" onClick={load}>
                            <span></span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MainAnother;
