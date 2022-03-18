import "../../css/board/explanation.css";
import IBoard from "../../interfaces/IBoard";

interface IProps {
    board: IBoard;
}

//게시물 제목,내용
function Explanation(props: IProps) {
    let board = props.board;

    return (
        <>
            {/*  ?:undefined가 아닐때만 뒤에값을 참조해라   */}
            <div className="explanation_title">hi
            </div>
            {/*{board?.board_title}*/}
            <div className="explanation_content">hi</div>
            {/*{board?.board_content}*/}
        </>
    );
}

export default Explanation;