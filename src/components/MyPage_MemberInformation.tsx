import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import {Figure} from 'react-bootstrap';
import "../css/main/animation.css";
import IMemberId from '../interfaces/IMemberId';
import MemberIdService from '../service/MemberIdService';
import IUser from "../interfaces/IUser";
import UserService from "../service/UserService";
import IBusiness from '../interfaces/IBusiness';
import BusinessSevice from '../service/BusinessSevice';
import {useEffect} from "react";
type memberid={
    infoId : IMemberId;
}


function Ceoinformation(props : memberid) {
    const [businessinfo,setBusinessInfo]=useState<IBusiness>();

    async function ceoInfo(){
        setBusinessInfo(await BusinessSevice.getBusinessById(props.infoId.member_id).then(res=>res.data));
    }

    useEffect(()=>{
        ceoInfo();
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
                        <p style={{padding: "1vh 1vw"}}>{businessinfo?.business_id}</p>
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
                        <p style={{padding: "1vh 1vw"}}><strong>{businessinfo?.business_password}</strong></p>
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
                        <p style={{padding: "1vh 1vw"}}>{businessinfo?.business_name}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{businessinfo?.business_number}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{businessinfo?.business_email}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{businessinfo?.business_phone}</p>
                    </div>
                </div>
            </div>
        </>
    );
}


function MemberInformation(props : memberid){
   const [userInfo,setUserInfo]=useState<IUser>();

   async function normalInfo(){
       setUserInfo(await UserService.getUserById(props.infoId.member_id).then(res=>res.data));
   }

   useEffect(()=>{
       normalInfo();
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_id}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_name}</p>
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
                        <p style={{padding: "1vh 1vw"}}><strong>{userInfo?.user_password}</strong></p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_nickname}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_email}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_phone}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_gender}</p>
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
                        <p style={{padding: "1vh 1vw"}}>{userInfo?.user_birth}</p>
                    </div>
            
                    <div style={{border:"1px solid #f7f7f7"}}>
                           <p style={{margin:"1.6vh 0 0 2vh",fontWeight:"bold"}}>체형</p>
                            <div style={{display:"flex",marginTop:"2vh",borderTop:"1px solid #f7f7f7"}}>
                                <p style={{width:"200px",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",fontWeight:"bold"}}>키</p>
                                <p style={{width:"125px",padding:"1vh 1vw"}}>{userInfo?.user_height}</p>
                                <p style={{width:"150px",marginLeft:"2vw",padding:"1vh 1vw",borderRight:"1px solid #f7f7f7",backgroundColor:"#f7f7f7",borderLeft:"1px solid #f7f7f7",fontWeight:"bold"}}>몸무게</p>
                                <p style={{padding:"1vh 1vw"}}>{userInfo?.user_weights}</p>
                            </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function MyPage_MemberInformation(Member : memberid) {

    // const [memberid,setMemberId]=useState<IUser["user_id"]>("");
    //일반인지  사업자인지 판별
    const [isMember,setIsMember]=useState(true);
    
    const handleMember=async()=>{
        const search=await MemberIdService.getIdById(Member.infoId.member_id).then(res=>res.data);
        if(search !== undefined){
            const member=await UserService.getUserById(search.member_id).then(res=>res.data);
            if(member.user_id === undefined || member.user_is_ad===true){
                setIsMember(false);
            }
        }
    }
    return (
        <>
            <MemInfoCss/>
            <div className="aa memberOrceo">
                <div style={{padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer"}}
                     onClick={handleMember}>
                    일반 회원 정보
                </div>
                <div style={{padding: "1vw 2vw", cursor: "pointer"}} onClick={handleMember}>
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
                {isMember && <MemberInformation infoId={Member.infoId}/>}
                {isMember && <Ceoinformation infoId={Member.infoId}/>}
            </div>


        </>

    );
}

export default MyPage_MemberInformation;