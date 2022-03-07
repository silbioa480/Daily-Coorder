import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import { Figure } from 'react-bootstrap';


function MemberInformation(){
    const [memberInfo,setMemberInfo]=useState({
        id:"",
        password:"",
        nickname:"",
        email:"",
        phone:"",
        gender:"",
        birth:"",
        body:{
            weight:"",
            height:""
        }
    })
    
    return (
        <> 
                    <div style={{marginTop:"3vh",border:"1px solid #f7f7f7",borderBottom:"none"}}>
                            <div style={{display:"flex"}}>
                                    <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>아이디</p>
                                    <p style={{padding:"1vh 1vw"}}>{memberInfo.id}</p>
                            </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>비밀번호</p>
                                <p style={{padding:"1vh 1vw"}}><strong>●●●●●●●●</strong></p>
                        </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>닉네임</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.nickname}</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>이메일</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.email}</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>전화번호</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.phone}</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>성별</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.gender}</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid #f7f7f7",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>생년월일</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.birth}</p>
                        </div>
                    </div>
            
                    <div style={{border:"1px solid #f7f7f7"}}>
                           <p style={{margin:"1.6vh 0 0 2vh",fontWeight:"bold"}}>체형</p>
                            <div style={{display:"flex",marginTop:"2vh",borderTop:"1px solid #f7f7f7"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>키</p>
                                <p style={{width:"125px",padding:"1vh 1vw"}}>{memberInfo.body.height}</p>
                                <p style={{width:"150px",marginLeft:"2vw",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",borderLeft:"1px solid #f7f7f7",fontWeight:"bold"}}>몸무게</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.body.weight}</p>
                            </div>
                    </div>
        </>
    );  
}


function MyPage_MemberInformation(){
    const [member,setMember]=useState([]);
    

    return (
            <>
                <MemInfoCss />
                <div className="memberContainer">
                        <div style={{width:"170px",height:"200px",margin:"3vh 0",border:"1px solid #dbdbdb"}}>
                            <Figure style={{width:"170px",height:"200px"}}>
                                <Figure.Image
                                    width={170}
                                    height={200}
                                    alt="프로필 사진"
                                    src="../Daily-Coorder/src/img/binimage.jpg/170x200"
                                />
                            </Figure>
                        </div>
                        <MemberInformation />
                </div>
            </>

    );
}

export default MyPage_MemberInformation;