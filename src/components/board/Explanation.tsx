import "../../css/board/explanation.css";
import IBoard from "../../interfaces/IBoard";
import {useState} from "react";

interface IProps {
    board: IBoard;
}

//게시물 제목,내용
function Explanation(props: IProps) {
    let board = props.board;

    const [sboard, setSboard] = useState<IBoard>(board);
   
    return (
        <>
            {/*  ?:undefined가 아닐때만 뒤에값을 참조해라   */}
            <div className="explanation_title">{board?.board_title}</div>
            <div className="explanation_content">{board?.board_content}</div>
        </>
    );
}

export default Explanation;