import React from "react";
import Picture_Tag from "./Picture_Tag";
import "../../css/board/pictureQr.css";
import IBoard from "../../interfaces/IBoard";

interface IProps {
    board: IBoard;
}

//게시물사진 및 qr코드
function PictureQr(props: IProps) {
    let board = props.board;
    let imageurl = "http://localhost:8080/api/board_img/" + board.board_url;

    return (
        <div className="board_picture">
            <div className="picture">
                <img src={imageurl}/>
                {/*<img src={require(`../img/${board?.board_img}`)} alt=""></img>*/}
                {/*<Qrcode></Qrcode>*/}
            </div>
            <Picture_Tag board={board as IBoard}/>
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

export default PictureQr;
