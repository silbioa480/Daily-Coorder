import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import {Figure} from 'react-bootstrap';
import "../css/main/animation.css";
import IUser from '../interfaces/IUser';
import IProfileImage from '../interfaces/IProfileImage';
import UserService from "../service/UserService";
import IBusiness from '../interfaces/IBusiness';
import BusinessService from "../service/BusinessSevice";
import axios from 'axios';


function Ceoinformation() {
   
    // const [ceoId,setCeoId]=useState({business_id:""});

    // const CeoInfo=BusinessService.getBusinessById(ceoId);
    
   
    return (
        <>
            <div className="aa">
                <div style={{marginTop: "3vh", border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>아이디</p>
                        <p style={{padding: "1vh 1vw"}}>{}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>비밀번호</p>
                        <p style={{padding: "1vh 1vw"}}><strong>●●●●●●●●{}</strong></p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>상호명</p>
                        <p style={{padding: "1vh 1vw"}}>{}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>사업자번호</p>
                        <p style={{padding: "1vh 1vw"}}>{}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>이메일</p>
                        <p style={{padding: "1vh 1vw"}}>{}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>전화번호</p>
                        <p style={{padding: "1vh 1vw"}}>{}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


function MemberInformation(){
    const [memberInfo,setMemberInfo]=useState({
        id:"",
        name:"",
        password:"",
        nickname:"",
        email:"",
        phone:"",
        gender:"",
        birth:"",
        weight:"",
        height:""
    })
    
    return (
        <>
            <div className="aa">
                <div style={{marginTop: "3vh", border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>아이디</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.id}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>이름</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.name}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>비밀번호</p>
                        <p style={{padding: "1vh 1vw"}}><strong>●●●●●●●●</strong></p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>닉네임</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.nickname}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>이메일</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.email}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>전화번호</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.phone}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>성별</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.gender}</p>
                    </div>
                </div>

                <div style={{border: "1px solid #f7f7f7", borderBottom: "none"}}>
                    <div style={{display: "flex"}}>
                        <p style={{
                            width: "200px",
                            padding: "1vh 1vw",
                            borderRight: "1px solid #f7f7f7",
                            backgroundColor: "#f7f7f7",
                            fontWeight: "bold"
                        }}>생년월일</p>
                        <p style={{padding: "1vh 1vw"}}>{memberInfo.birth}</p>
                    </div>
            
                    <div style={{border:"1px solid #f7f7f7"}}>
                           <p style={{margin:"1.6vh 0 0 2vh",fontWeight:"bold"}}>체형</p>
                            <div style={{display:"flex",marginTop:"2vh",borderTop:"1px solid #f7f7f7"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>키</p>
                                <p style={{width:"125px",padding:"1vh 1vw"}}>{memberInfo.height}</p>
                                <p style={{width:"150px",marginLeft:"2vw",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",borderLeft:"1px solid #f7f7f7",fontWeight:"bold"}}>몸무게</p>
                                <p style={{padding:"1vh 1vw"}}>{memberInfo.weight}</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function MyPage_MemberInformation() {
    const [isceo, setIsceo] = useState(false);
    const [isuser, setIsuser] = useState(true);

    const handleUser = () => {
        setIsuser(true);
        setIsceo(false);
    }

    const handleCeo = () => {
        setIsuser(false);
        setIsceo(true);
    }
    return (
        <>
            <MemInfoCss/>
            <div className="aa memberOrceo">
                <div style={{padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer"}}
                     onClick={handleUser}>
                    일반 회원 정보
                </div>
                <div style={{padding: "1vw 2vw", cursor: "pointer"}} onClick={handleCeo}>
                    사업자 회원 정보
                </div>
            </div>
            <div className="aa memberContainer" style={{backgroundColor: "rgba(247,247,247,1)"}}>
                <div style={{width: "170px", height: "200px", margin: "3vh 0", border: "1px solid #dbdbdb"}}>
                    <Figure style={{width: "170px", height: "200px"}}>
                        <Figure.Image
                            width={170}
                            height={200}
                            alt="프로필 사진"
                            src="../Daily-Coorder/src/img/binimage.jpg/170x200"
                        />
                    </Figure>
                </div>
                {isuser && <MemberInformation/>}
                {isceo && <Ceoinformation/>}
            </div>


        </>

    );
}

export default MyPage_MemberInformation;