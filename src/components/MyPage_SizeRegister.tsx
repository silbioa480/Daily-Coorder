import { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../css/main/animation.css";

function AlertResister() {
  const [close, setClose] = useState(false);

  const handleClose = () => {
    setClose(true);
  }
  return (
    <>
      <Modal close={close} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>정보 수정 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>회원정보를 정말 수정하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            이전
          </Button>
          <Button variant="primary" onClick={handleClose}>
            수정 완료
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function MyPage_SizeRegister() {
  const [memberId, setMemberId] = useState({ id: "" });
  const [memberNickName, setMemberNickname] = useState({ nickname: "" });
  const [userBody, setBody] = useState({
    weight: "",
    height: ""
  });

  const [show, setShow] = useState(false);

  const handleChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    setBody((values) => ({ ...values, [name]: [value] }));
  }

  const handleResister = () => {
    setShow(true);
  }
  return (

    <>
      <Container className="aa" style={{
        backgroundColor: "white",
        borderRadius: "20px", boxShadow: "0px 10px 29px 0px #e0e0e0", paddingBottom: "10px"
      }}>
        <div style={{ marginBottom: "3em", paddingTop: "3em", display: "flex", justifyContent: "center" }}>
          <div>
            <label style={{
              margin: "1vh 0",
              padding: "1vw",
              textAlign: "center",
              width: "140px",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>
              아이디
            </label>
            <p style={{
              marginLeft: "1vw",
              display: "inline-block",
              width: "140px",
              backgroundColor: "green"
            }}>{memberId.id}</p>
          </div>
        </div>
        <div style={{ marginBottom: "3em", paddingTop: "3em", display: "flex", justifyContent: "center" }}>
          <div>
            <label style={{
              margin: "1vh 0",
              padding: "1vw",
              textAlign: "center",
              width: "140px",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>
              닉네임
            </label>
            <p style={{
              marginLeft: "1vw",
              display: "inline-block",
              width: "140px",
              backgroundColor: "green"
            }}>{memberNickName.nickname}</p>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "3em 2em" }}>
          <label style={{ fontSize: "1.5vw" }}>체 형</label>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div style={{ display: "flex" }}>
            <label style={{
              width: "250px",
              padding: "1vw",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>weight</label>
            <Form.Control type="text" placeholder="weight" id="weight" name="weight"
              style={{ width: "250px" }} value={userBody.weight || ""} onChange={handleChange} />
          </div>
          <div style={{ display: "flex" }}>
            <label style={{
              width: "250px",
              padding: "1vw",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>height</label>
            <Form.Control type="text" placeholder="height" id="height" name="height"
              style={{ width: "250px" }} value={userBody.height || ""} onChange={handleChange} />
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "3.5em 0" }}>
          <Button onClick={handleResister}>체형 등록 하기</Button>
        </div>
      </Container>

      {show && <AlertResister />}
    </>
  );
}

export default MyPage_SizeRegister;