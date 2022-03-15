import React, { useState } from "react";
import Picture_Tag from "./Picture_Tag";
import "../../css/board/pictureQr.css";
import IBoard from "../../interfaces/IBoard";

interface IProps {
    boardId: number;
    board: IBoard;
}

//게시물사진 및 qr코드
function Board_Picture(props: IProps) {
    let boardId = props.boardId;
    let board = props.board;
    const [imageurl, setImageulr] = useState(
        "http://localhost:8080/board_image/" + board.board_img
    );

    // const [board, setBoard] = useState<IBoard>();
    //
    // useEffect(() => {
    //   async function getBoard() {
    //     setBoard(
    //       await BoardService.getBoardById(boardId).then((res) => res.data)
    //     );
    //   }
    //
    //   getBoard();
    // }, []);
    return (
        <div className="board_picture">
            <div className="picture">
                <img src="${imageurl} " />
                {/*<img src={require(`../img/${board?.board_img}`)} alt=""></img>*/}
                {/*<Qrcode></Qrcode>*/}
            </div>
            <Picture_Tag />
        </div>
    );
}

//qr누르면 modal로 나오는창
// function Click_Qr(props) {
//     return (
//         <Modal
//             {...props}
//             size="sm"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//         >
//             <Modal.Title id="contained-modal-title-vcenter">
//                 <QR src={qr}></QR>
//             </Modal.Title>
//         </Modal>
//     );
// }
//
// function Qrcode() {
//     const [modalShow, setModalShow] = React.useState(false);
//
//     return (
//         <>
//             <button className="qr_btn" onClick={() => setModalShow(true)}>
//                 <ImQrcode/>
//             </button>
//
//             <Click_Qr show={modalShow} onHide={() => setModalShow(false)}/>
//         </>
//     );
// }

export default Board_Picture;
