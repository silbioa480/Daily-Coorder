import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import { Figure } from 'react-bootstrap';



function MemberInformation(){
    
    const [member,setMember]=useState([]);
    return (
        <> 
                    <div style={{marginTop:"3vh",border:"1px solid black",borderBottom:"none"}}>
                            <div style={{display:"flex"}}>
                                    <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>아이디</p>
                                    <p style={{padding:"1vh 1vw"}}>12345</p>
                            </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>비밀번호</p>
                                <p style={{padding:"1vh 1vw"}}><strong>●●●●●●●●</strong></p>
                        </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>닉네임</p>
                                <p style={{padding:"1vh 1vw"}}>닉네임공간</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>이메일</p>
                                <p style={{padding:"1vh 1vw"}}>1234@2134</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>전화번호</p>
                                <p style={{padding:"1vh 1vw"}}>010-1●●●-●●●●</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>성별</p>
                                <p style={{padding:"1vh 1vw"}}>man or woman</p>
                        </div>
                    </div>

                    <div style={{border:"1px solid black",borderBottom:"none"}}>
                        <div style={{display:"flex"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>생년월일</p>
                                <p style={{padding:"1vh 1vw"}}>0000-00-00</p>
                        </div>
                    </div>
            
                    <div style={{border:"1px solid black"}}>
                           <p style={{margin:"1.6vh 0 0 2vh",fontWeight:"bold"}}>체형</p>
                            <div style={{display:"flex",marginTop:"2vh",borderTop:"1px solid black"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>키</p>
                                <p style={{width:"125px",padding:"1vh 1vw"}}>189</p>
                                <p style={{width:"150px",marginLeft:"2vw",padding:"1vh 1vw",borderRight:"1px solid black",backgroundColor:"#f7f7f7",borderLeft:"1px solid black",fontWeight:"bold"}}>몸무게</p>
                                <p style={{padding:"1vh 1vw"}}>100</p>
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
                        <div style={{width:"170px",height:"150px",margin:"3vh 0",border:"1px solid black"}}>
                            <Figure style={{width:"170px",height:"130px"}}>
                                <Figure.Image
                                    width={140}
                                    height={160}
                                    alt="프로필 사진"
                                    src="holder.js/140x160"
                                />
                            </Figure>
                        </div>
                        <div>
                                <label className="btn btn-primary">
                                    프로필 사진 업로드<input type="file" style={{display:"none"}} name="profileimage"/>
                                </label>
                        </div>
                        <MemberInformation />
                </div>
            </>

    );
}

export default MyPage_MemberInformation;