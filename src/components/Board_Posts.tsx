import Comment from "../components/Board_Comment";
import Explanation from "./board/Explanation";
import PictureQr from "./board/PictureQr";
import DownBtn from "./board/DownBtn";
import {useState} from "react";
import IBoard from "../interfaces/IBoard";
import BoardService from "../service/BoardService";
import UserFollower from "./board/UserFollower";

interface IProps {
    boardId: number;
}

function Board_Posts(props: IProps) {
    let boardId = props.boardId;

    // @ts-ignore
    const [board, setBoard] = useState<IBoard>({
        board_id: 0,
        board_poster: "",
        board_img: 0,
        board_title: "",
        board_content: "",
        board_url: "",
        board_like_number: 0,
        board_view: 0,
        board_post_date: new Date(),
        board_update_date: new Date(),
    });

    /*const [user, setUser] = useState<IUser>();*/


    //board아이디를 이용해 board:number에맞는 게시판을 가져옴
    async function getBoard() {
        console.log("getBoard");
        setBoard(
            await BoardService.getBoardById(boardId).then(res => res.data)
        );
    };

    // useEffect(() => {
    //     getBoard().then(() => {
    //         // getUser();
    //         console.log("board_poster:" + board.board_poster)
    //     });
    // }, []);

    return (
        <>
            <div className="aa Board_Posts">

                <PictureQr board={board}/>
                <div className="aa">
                    <DownBtn/>
                    <Explanation board={board}/>
                    <UserFollower board={board}/>


                    <Comment/>
                </div>
            </div>
        </>
    );

}

export default Board_Posts;
