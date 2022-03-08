import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Figure } from 'react-bootstrap';

function CeoModify(){
    const [imgfile,setImgFile]=useState('');

    const [ceoinfo,setCeoinfo]=useState({
        id:"",
        password:"",
        ceonumber:"",
        brandname:"",
        email:"",
        phone:""
    });

    const handleChange=(event: any)=>{
        const name=event.target.name;
        const value=event.target.value;
        setCeoinfo((ceoinfos)=>({...ceoinfos,[name]:[value]}));

    }

    const onloadfile=(event : any)=>{
        const file=event?.target.files;
        setImgFile(URL.createObjectURL(file[0]));
    }

    const handleSubmit=(event :any)=>{
        event.preventDefault();

    }

    const compareIdCheck=()=>{

    }

    const assignRequest=()=>{
        alert("입력하신 전화번호로 인증요청을 보냈습니다");
    }
 
    const assignEmail=()=>{
        alert("입력하신 이메일로 인증메일을 보냈습니다.");
    }
    return(
        <>
                     <Form className="pl-5" onSubmit={handleSubmit}>
                    <Row className="my-5">
                        <Col>
                                <div style={{width:"170px",height:"200px",margin:"3vh 0 0 0",border:"1px solid #dbdbdb"}}>
                                    <Figure style={{width:"170px",height:"200px"}}>
                                        <Figure.Image
                                            width={170}
                                            height={200}
                                            alt="프로필 사진"
                                            src={imgfile}
                                        />
                                    </Figure>
                                </div>
                                <div style={{margin:"1vh 0"}}>
                                    <label className="btn btn-white" htmlFor="ppimage" style={{overflow:"hidden",border:"1px solid #dbdbdb",fontWeight:"bold",padding:".3vw .75vw",borderRadius:"5px"}}>
                                        프로필 사진 업로드<input type="file" style={{display:"none"}} id="ppimage" accept='image/*' onChange={onloadfile}/>
                                    </label>
                                </div>
                    
                                <Form.Group  controlId="formGridEmail">
                                        <Form.Label>아이디</Form.Label>
                                        <div style={{width:"100%",display:"flex"}}>
                                            <Form.Control type="text" placeholder="Enter ID" name="id" value={ceoinfo.id} onChange={handleChange}/>
                                            <Button style={{width:"180px",textAlign:"center"}}  onClick={compareIdCheck}>중복 확인</Button>
                                        </div>
                                
                                </Form.Group>


                            <Form.Group  controlId="formGridEmail" style={{marginTop:"1vh"}}>
                                    <Form.Label>상호명</Form.Label>
                                    <div style={{width:"100%",display:"flex"}}>
                                        <Form.Control type="text" placeholder="Enter NickName" name="brandname" value={ceoinfo.brandname} onChange={handleChange}/>
                                      
                                    </div>
                            </Form.Group>
                        
                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={ceoinfo.password} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control type="password" placeholder="Password check" name="passwordCheck"/>
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>사업자 번호</Form.Label>
                                <Form.Control type="text" placeholder="ceo number" name="ceonumber" value={ceoinfo.ceonumber} onChange={handleChange}/>
                            </Form.Group>
                    

                            <Form.Group className="my-3">
                                <Form.Label>전화번호</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="text" placeholder="Phone Number" name="phoneNumber" value={ceoinfo.phone} onChange={handleChange}/>
                                    <Button style={{width:"180px",textAlign:"center"}} onClick={assignRequest}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>이메일</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" value={ceoinfo.email} onChange={handleChange}/>
                                    <Button style={{width:"180px",textAlign:"center"}} onClick={assignEmail}>인증요청</Button>
                                </div>
                            </Form.Group>
                    
                        </Col>
                    </Row>

                  
                </Form> 
        </>
    );
}


function MyPage_MemberModify(){
    const [show,setShow]=useState(false);
    const [imgfile,setImgFile]=useState('');
    const [userId,setId]=useState("user1234");
    const [userNickname,setNickname]=useState("nickname");
    const [userPassword,setPassword]=useState("");
    const [isceo,setIsceo]=useState(false);
    const [isuser,setIsuser]=useState(true);

    const [userInfo,setUserInfo]=useState({
        id:"",
        password:"",
        nickname:"",
        email:"",
        phone:""
    });
    
    const handleShow=()=>{
        setShow(true);
    }
    const handleClose=()=>{
        setShow(false);
    } 

    const handleSubmit=(event:any)=>{
        event.preventDefalut();
    }

   const handleChange=(event:any)=>{
        const name=event.target.name;
        const value=event.target.value;

        setUserInfo((userinfo)=>({...userinfo,[name]:[value]}));

   }

   const onloadfile=(event: any)=>{
    const file=event.target.files;
    setImgFile(URL.createObjectURL(file[0]));
    }

   const passwordCheck=(event:any)=>{
        setPassword(event.target.value);
       if(userInfo.password!=userPassword){
           alert("비밀번호가 다릅니다");
       }
   }

   const compareIdCheck=(event:any) =>{
       if(userInfo.id==userId){
           alert("이미존재하는 아이디입니다.");
       }else{
           alert("사용가능한 아이디입니다.");
       }
   }
    
   const compareNickName=(event : any)=>{
        if(userInfo.nickname==userNickname){
            alert("이미존재하는 닉네임입니다.");
        }else{
            alert("사용가능한 닉네임입니다.");
        }
   }

   const assignRequest=()=>{
       alert("입력하신 전화번호로 인증요청을 보냈습니다");
   }

   const assignEmail=()=>{
       alert("입력하신 이메일로 인증메일을 보냈습니다.");
   }
    const handleUser=()=>{
        setIsuser(true);
        setIsceo(false);
    }

    const handleCeo=()=>{
        setIsuser(false);
        setIsceo(true);
    }
    return(
        <>
            <ModifyCss />
            <div className="memberOrceo">
                <div style={{padding:"1vw 2vw",borderRight:"1px solid #dbdbdb",cursor:"pointer"}} onClick={handleUser}>
                                일반 회원 정보
                            </div>
                            <div style={{padding:"1vw 2vw",cursor:"pointer"}} onClick={handleCeo}>
                                사업자 회원 정보
                            </div>
                </div>
            <div className="containerCss">
                {isuser && <Form className="pl-5" onSubmit={handleSubmit}>
                    <Row className="my-5">
                        <Col>
                                <div style={{width:"170px",height:"200px",margin:"3vh 0 0 0",border:"1px solid #dbdbdb"}}>
                                    <Figure style={{width:"170px",height:"200px"}}>
                                        <Figure.Image
                                            width={170}
                                            height={200}
                                            alt="프로필 사진"
                                            src={imgfile}
                                        />
                                    </Figure>
                                </div>
                                <div style={{margin:"1vh 0"}}>
                                    <label className="btn btn-white" htmlFor="ppimage" style={{overflow:"hidden",border:"1px solid #dbdbdb",fontWeight:"bold",padding:".3vw .75vw",borderRadius:"5px"}}>
                                        프로필 사진 업로드<input type="file" style={{display:"none"}} id="ppimage" accept='image/*' onChange={onloadfile}/>
                                    </label>
                                </div>
                    
                                <Form.Group  controlId="formGridEmail">
                                        <Form.Label>아이디</Form.Label>
                                        <div style={{width:"100%",display:"flex"}}>
                                            <Form.Control type="text" placeholder="Enter ID" name="id" value={userInfo.id} onChange={handleChange}/>
                                            <Button style={{width:"180px",textAlign:"center"}}  onClick={compareIdCheck}>중복 확인</Button>
                                        </div>
                                
                                </Form.Group>


                            <Form.Group  controlId="formGridEmail" style={{marginTop:"1vh"}}>
                                    <Form.Label>닉네임</Form.Label>
                                    <div style={{width:"100%",display:"flex"}}>
                                        <Form.Control type="text" placeholder="Enter NickName" name="nickname" value={userInfo.nickname} onChange={handleChange}/>
                                        <Button style={{width:"180px",textAlign:"center"}} onClick={compareNickName}>닉네임중복 확인</Button>
                                    </div>
                            </Form.Group>
                        
                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" placeholder="Password" name="password" value={userInfo.password} onChange={handleChange}/>
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control type="password" placeholder="Password check" name="passwordCheck" onChange={passwordCheck}/>
                            </Form.Group>
                    
                            <Form.Group className="my-3">
                                <Form.Label>생년월일</Form.Label>
                                <Form.Control type="text" placeholder="생년월일 6자리입력" name="birth"/>
                            </Form.Group>


                            <Form.Group className="my-3">
                                <Form.Label>전화번호</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="text" placeholder="Phone Number" name="phoneNumber" value={userInfo.phone} onChange={handleChange}/>
                                    <Button style={{width:"180px",textAlign:"center"}} onClick={assignRequest}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>이메일</Form.Label>
                                <div style={{width:"100%",display:"flex"}}>
                                    <Form.Control type="email" placeholder="Enter Email" name="email" value={userInfo.email} onChange={handleChange}/>
                                    <Button style={{width:"180px",textAlign:"center"}} onClick={assignEmail}>인증요청</Button>
                                </div>
                            </Form.Group>
                    
                        </Col>
                    </Row>
                    
                   
                </Form> }
                {isceo && <CeoModify />}
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                        <Button variant="primary" type="submit" onClick={handleShow}>
                                회원 정보 수정
                        </Button>
                </div>
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