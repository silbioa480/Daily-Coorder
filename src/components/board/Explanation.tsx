import "../../css/board/explanation.css";
import IBoard from "../../interfaces/IBoard";
import { useEffect, useState } from "react";
import BoardService from "../../service/BoardService";

interface IProps {
    boardId: number;
}

//게시물 제목,내용
function Explanation(props: IProps) {
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
            {/*  ?:undefined가 아닐때만 뒤에값을 참조해라   */}
            <div className="explanation_title">{board?.board_title}</div>
            <div className="explanation_content">{board?.board_content}</div>
        </>
    );
}

export default Explanation;