import Board_Posts from "../components/Board_Posts";
import MainAnother from "../components/main/MainAnother";
import {useParams} from "react-router-dom";

interface IParams {
    boardNumber: string;
}

function Board() {
    let params: IParams = useParams(); //params라는 변수안에 object가 담기고 URL파라미터가 저장된다
    let boardId = +params.boardNumber;


    return (
        <div>
            <Board_Posts boardId={boardId}/>
            <MainAnother/>
        </div>
    );
}

export default Board;