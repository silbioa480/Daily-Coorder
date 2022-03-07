import { useState } from "react";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form'; 

function MyPage_SizeRegister(){
    const [memberId,setMemberId]=useState({id:""});
    const [memberNickName,setMemberNickname]=useState({nickname:""});
    const [userBody,setBody]=useState({
        weight:"",
        height:""
    });

    const handleChange=(event : any)=>{
            const name=event.target.name;
            const value=event.target.value;

            setBody((values) =>({...values,[name]:[value]}));
    }
    return(

        <>
                <Container>
                        <div style={{marginBottom:"3em",paddingTop:"3em",display:"flex",justifyContent:"center"}}>
                            <div>
                                <label style={{margin:"1vh 0",padding:"1vw",textAlign:"center",width:"140px",fontWeight:"bold",fontSize:"1vw"}}>
                                    아이디
                                </label>
                                <p style={{marginLeft:"1vw",display:"inline-block",width:"140px",backgroundColor:"green"}}>{memberId.id}</p>
                            </div>
                        </div>
                        <div style={{marginBottom:"3em",paddingTop:"3em",display:"flex",justifyContent:"center"}}>
                            <div>
                                <label style={{margin:"1vh 0",padding:"1vw",textAlign:"center",width:"140px",fontWeight:"bold",fontSize:"1vw"}}>
                                    닉네임
                                </label>
                                <p style={{marginLeft:"1vw",display:"inline-block",width:"140px",backgroundColor:"green"}}>{memberNickName.nickname}</p>
                            </div>
                        </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"center",padding:"3em 2em"}}>
                            <label style={{fontSize:"1.5vw"}}>체 형</label>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-around"}}>
                            <div style={{display:"flex"}}>
                                <label style={{width:"250px",padding:"1vw",textAlign:"center",fontWeight:"bold",fontSize:"1vw"}}>weight</label>
                                <Form.Control type="text" placeholder="weight" id="weight" name="weight" style={{width:"250px"}} value={userBody.weight || ""} onChange={handleChange}/>
                            </div>
                            <div style={{display:"flex"}}>
                                <label style={{width:"250px",padding:"1vw",textAlign:"center",fontWeight:"bold",fontSize:"1vw"}}>height</label>
                                <Form.Control type="text" placeholder="height" id="height" name="height" style={{width:"250px"}} value={userBody.height || ""} onChange={handleChange}/>
                            </div>
                        </div>
                        <div style={{width:"100%",display:"flex",justifyContent:"center",margin:"3.5em 0"}}>
                            <Button>체형 등록 하기</Button>
                        </div>
                </Container>  
        </>
    );
}

export default MyPage_SizeRegister;