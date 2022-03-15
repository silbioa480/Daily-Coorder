import Comment from "../components/Board_Comment";
import Explanation from "./board/Explanation";
import FollowButton from "./board/FollowButton";
import PictureQr from "./board/PictureQr";
import DownBtn from "./board/DownBtn";

import { useEffect, useState } from "react";
import BoardService from "../service/BoardService";
import IBoard from "../interfaces/IBoard";

interface IProps {
    boardId: number;
}

interface IA {
    board: IBoard;
}

function Board_Posts(props: IProps) {
    let boardId = props.boardId;

    const [board, setBoard] = useState<IBoard>();

    useEffect(() => {
        async function getBoard() {
            setBoard(
                await BoardService.getBoardById(boardId).then((res) => res.data)
            );
        }

        getBoard();
    }, []);
    return (
        <>
            <div className="aa Board_Posts">
                <PictureQr board={board} />
                <div className="aa">
                    <DownBtn />
                    <Explanation boardId={boardId} />
                    <FollowButton />

                    <Comment />
                </div>
            </div>
        </>
    );
}

export default Board_Posts;
