
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import MyPage_MemberInformation from './MyPage_MemberInformation';


function MyPage_MemberUnregister(){
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }
    return (
        <>
                <div style={{width:"60%",margin:"4em auto",height:"750px"}}>
                    <MyPage_MemberInformation />
                
                    <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"5em"}}>
                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={handleShow} size="lg">
                                회원 탈퇴
                            </Button>
                        </div>

                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                            <Modal.Title>회원탈퇴 확인</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>회원탈퇴를 정말 하시겠습니까?</Modal.Body>
                            <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                이전
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                            회원 탈퇴
                            </Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>

               
        </>
    );
}

export default MyPage_MemberUnregister;