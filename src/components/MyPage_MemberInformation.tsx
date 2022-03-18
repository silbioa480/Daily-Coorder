import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import MemInfoCss from '../css/MyPage_MemInfoCss';
import { Figure, Modal ,Button} from 'react-bootstrap';
import "../css/main/animation.css";
import IUser from "../interfaces/IUser";
import UserService from "../service/UserService";
import IBusiness from '../interfaces/IBusiness';
import BusinessSevice from '../service/BusinessService';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { memberAtom , isLoginAtom } from '../atom';
import { useRecoilValue } from 'recoil';
import mainano10 from '../img/main/mainano10.png';


// function Ceoinformation() {
//   const memberId = useRecoilValue(memberAtom);

//   const [businessId, setBusinessId] = useState<IBusiness["business_id"]>(memberId.member_id);
//   const [businessinfo, setBusinessInfo] = useState<IBusiness>();

//   async function ceoInfo() {
//     console.log("ceoInfo");
//     setBusinessInfo(await BusinessSevice.getBusinessById(businessId).then(res => res.data));
//   }

//   useEffect(() => {
//     ceoInfo();
//   }, []);

//   return (
//     <>
//       <div className="aa">
//         <div style={{ marginTop: "3vh", border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>아이디</p>
//             <p style={{ padding: "1vh 1vw" }}>{businessinfo?.business_id}</p>
//           </div>
//         </div>

//         <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>비밀번호</p>
//             <p style={{ padding: "1vh 1vw" }}><strong>{businessinfo?.business_password}</strong></p>
//           </div>
//         </div>

//         <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>상호명</p>
//             <p style={{ padding: "1vh 1vw" }}>{businessinfo?.business_name}</p>
//           </div>
//         </div>

//         <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>사업자번호</p>
//             <p style={{ padding: "1vh 1vw" }}>{businessinfo?.business_number}</p>
//           </div>
//         </div>

//         <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>사업자이메일</p>
//             <p style={{ padding: "1vh 1vw" }}>{businessinfo?.business_email}</p>
//           </div>
//         </div>

//         <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
//           <div style={{ display: "flex" }}>
//             <p style={{
//               width: "200px",
//               padding: "1vh 1vw",
//               borderRight: "1px solid #f7f7f7",
//               backgroundColor: "#f7f7f7",
//               fontWeight: "bold"
//             }}>전화번호</p>
//             <p style={{ padding: "1vh 1vw" }}>{businessinfo?.business_phone}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


function MemberInformation() {

  const memberId = useRecoilValue(memberAtom);

  const [userId, setUserId] = useState<IUser["user_id"]>(memberId.member_id);
  const [userInfo, setUserInfo] = useState<IUser>();

  async function normalInfo() {
    if (userId !== undefined) {
      setUserInfo(await UserService.getUserById(userId).then(res => res.data));
    }
  }

  useEffect(() => {
    normalInfo();
    
  }, [userInfo]);

  const birth=new Date((userInfo as IUser)?.user_birth);
  const birthstr= birth.getFullYear() +
  "년 " +
  (birth.getMonth() + 1) +
  "월 " +
  birth.getDate() +
  "일";

  return (
    <>
      <div className="aa">
        <div style={{ marginTop: "3vh", border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>아이디</p>
            <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_id}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>이름</p>
            <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_name}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>닉네임</p>
            <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_nickname}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>이메일</p>
            <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_email}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>전화번호</p>
            <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_phone}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>성별</p>
            <p style={{ padding: "1vh 1vw" }}>{(userInfo?.user_gender) ? "남성" : "여성"}</p>
          </div>
        </div>

        <div style={{ border: "1px solid #f7f7f7", borderBottom: "none" }}>
          <div style={{ display: "flex" }}>
            <p style={{
              width: "200px",
              padding: "1vh 1vw",
              borderRight: "1px solid #f7f7f7",
              backgroundColor: "#f7f7f7",
              fontWeight: "bold"
            }}>생년월일</p>
            <p style={{ padding: "1vh 1vw" }}>{birthstr}</p>
          </div>

          <div style={{ border: "1px solid #f7f7f7" }}>
            <p style={{ margin: "1.6vh 0 0 2vh", fontWeight: "bold" }}>체형</p>
            <div style={{ display: "flex", marginTop: "2vh", borderTop: "1px solid #f7f7f7" }}>
              <p style={{ width: "200px", padding: "1vh 1vw", borderRight: "1px solid #f7f7f7", backgroundColor: "#f7f7f7", fontWeight: "bold" }}>키</p>
              <p style={{ width: "125px", padding: "1vh 1vw" }}>{userInfo?.user_height}</p>
              <p style={{ width: "150px", marginLeft: "2vw", padding: "1vh 1vw", borderRight: "1px solid #f7f7f7", backgroundColor: "#f7f7f7", borderLeft: "1px solid #f7f7f7", fontWeight: "bold" }}>몸무게</p>
              <p style={{ padding: "1vh 1vw" }}>{userInfo?.user_weight}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function MyPage_MemberInformation() {

  //일반인지  사업자인지 판별

  const isLogin = useRecoilValue(isLoginAtom);
  const memberId = useRecoilValue(memberAtom);

  const [isMember, setIsMember] = useState(true);
  const [isCeo, setIsCeo] = useState(false);



  useEffect(()=>{
    if(memberId.is_business === true){
        setIsMember(false);
        setIsCeo(true);
    }else{
      setIsMember(true);
        setIsCeo(false);
    }
    console.log(isLogin);
  },[]);

 
 
  return (
    <>
      <MemInfoCss />
      {/* <div className="aa memberOrceo">
        <div style={{ padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer" }}
        >
          일반 회원 정보
        </div>
        <div style={{ padding: "1vw 2vw", cursor: "pointer" }} >
          사업자 회원 정보
        </div>
      </div> */}
      <div className="aa memberContainer" style={{
        backgroundColor: "rgba(247,247,247,1)",
        borderRadius: "20px",
        boxShadow: "0px 10px 29px 0px #e0e0e0"
      }}>
        <div style={{ width: "170px", height: "200px", margin: "3vh 0", border: "1px solid #dbdbdb" }}>
          <Figure style={{ width: "170px", height: "200px" }}>
            <Figure.Image
              width={170}
              height={200}
              alt="프로필 사진"
              src={mainano10}
            />
          </Figure>
        </div>
        {isMember && <MemberInformation />}
        {/* {isCeo && <Ceoinformation />} */}
      </div>


    </>

  );
}

export default MyPage_MemberInformation;