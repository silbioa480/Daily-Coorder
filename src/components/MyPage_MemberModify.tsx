import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Figure } from 'react-bootstrap';

function MyPage_MemberModify(){
    const [show,setShow]=useState(false);
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    }


    return(
        <>
            <ModifyCss />
            <div className="containerCss">
                <Form className="pl-5">
                    <Row className="my-5">
                        <Col>
                                <div style={{width:"170px",height:"150px",margin:"3vh 0 0 0",border:"1px solid black"}}>
                                    <Figure style={{width:"170px",height:"150px"}}>
                                        <Figure.Image
                                            width={140}
                                            height={160}
                                            alt="프로필 사진"
                                            src="holder.js/140x160"
                                        />
                                    </Figure>
                                </div>
                                <div style={{margin:"1vh 0"}}>
                                    <label className="btn btn-primary" style={{overflow:"hidden"}}>
                                        프로필 사진 업로드<input type="file" style={{display:"none"}}/>
                                    </label>
                                </div>
                    
                                <Form.Group  controlId="formGridEmail">
                                        <Form.Label>ID</Form.Label>
                                        <div style={{width:"100%",display:"flex"}}>
                                            <Form.Control type="text" placeholder="Enter ID"/>
                                            <Button style={{width:"180px",textAlign:"center"}}>중복 확인</Button>
                                        </div>
                                
                                </Form.Group>


                            <Form.Group  controlId="formGridEmail" style={{marginTop:"1vh"}}>
                                    <Form.Label>닉네임</Form.Label>
                                    <div style={{width:"100%",display:"flex"}}>
                                        <Form.Control type="text" placeholder="Enter NickName"/>
                                        <Button style={{width:"180px",textAlign:"center"}}>닉네임중복 확인</Button>
                                    </div>
                            </Form.Group>
                        
                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>Password check</Form.Label>
                                <Form.Control type="password" placeholder="Password check" />
                            </Form.Group>
                    
                            <Form.Group className="my-3">
                                <Form.Label>Birth</Form.Label>
                                <Form.Control type="text" placeholder="생년월일 6자리입력" />
                            </Form.Group>


                            <Form.Group className="my-3">
                                <Form.Label>Phone Number</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="text" placeholder="Phone Number" />
                                    <Button style={{width:"180px",textAlign:"center"}}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>Email</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="email" placeholder="Enter Email" />
                                    <Button style={{width:"180px",textAlign:"center"}}>인증요청</Button>
                                </div>
                            </Form.Group>
                    
                        </Col>
                    </Row>

                    <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                        <Button variant="primary" type="submit" onClick={handleShow}>
                                회원 정보 수정
                        </Button>
                    </div>
                </Form> 
            </div> 

            <Modal show={show} onHide={handleClose}>
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

export default MyPage_MemberModify;