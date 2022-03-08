import { BsPlusSquare } from "react-icons/bs";
import { ImQrcode } from "react-icons/im";
import { HiOutlineThumbUp } from "react-icons/hi";
import { RiShareForwardLine } from "react-icons/ri";
import qr from "../../img/qr.png";

import { Square, QR } from "../../css/Board_Posts";
import similar from "../../img/similar.png";
import React from "react";
import { Modal } from "react-bootstrap";
import Picture_Tag from "./Picture_Tag";
import "../../css/board/pictureQr.css";
import mainano1 from "../../img/main/mainano1.png";
//게시물사진 및 qr코드
function Board_Picture() {
  return (
    <div className="board_picture">
      <div className="picture">
        <img src={mainano1} alt=""></img>
        <Qrcode></Qrcode>
      </div>
      <Picture_Tag />
      <div className="board_picture_icon">
        <div style={{ margin: "5px" }} type="button">
          <HiOutlineThumbUp />
        </div>
        <div style={{ margin: "5px" }} type="button">
          <BsPlusSquare />
        </div>
        <div style={{ margin: "5px" }} type="button">
          <RiShareForwardLine />
        </div>
      </div>
    </div>
  );
}
//qr누르면 modal로 나오는창
function Click_Qr(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Title id="contained-modal-title-vcenter">
        <QR src={qr}></QR>
      </Modal.Title>
    </Modal>
  );
}
function Qrcode() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <button className="qr_btn" onClick={() => setModalShow(true)}>
        <ImQrcode />
      </button>

      <Click_Qr show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}
export default Board_Picture;
