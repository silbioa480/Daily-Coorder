import { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'; 

function MyPage_SizeRegister(){
    const [memberId,setMemberId]=useState("본인id");
    const [memberName,setMembename]=useState("본인이름")
    return(

        <>
                <Container>
                        <div style={{marginBottom:"3em",paddingTop:"3em",display:"flex",justifyContent:"center"}}>
                            <div>
                                <label style={{margin:"1vh 0",width:"140"}}>
                                    아이디
                                </label>
                                <p style={{marginLeft:"1vw",display:"inline-block"}}>본인아이디</p>
                            </div>
                        </div>
                        <div style={{marginBottom:"3em",paddingTop:"3em",display:"flex",justifyContent:"center"}}>
                            <div>
                                <label style={{margin:"1vh 0"}}>
                                    닉네임
                                </label>
                                <p style={{marginLeft:"1vw",display:"inline-block"}}>본인닉네임</p>
                            </div>
                        </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"center",padding:"3em 2em"}}>
                            <label style={{fontSize:"1.5vw"}}>체 형</label>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <label>weight</label>
                            <Form.Control type="text" placeholder="weight" id="weight" style={{width:"250px"}}/>
                            <label>height</label>
                            <Form.Control type="text" placeholder="height" id="height" style={{width:"250px"}}/>
                        </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"3.5em 0"}}>
                            <Button>체형 등록 하기</Button>
                        </div>
                </Container>  
        </>
    );
}

export default MyPage_SizeRegister;