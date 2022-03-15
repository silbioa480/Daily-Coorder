import MyPage_SideMenubarCss from '../css/MyPage_SideMenubarCss';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs';
import {useEffect, useState} from 'react';
import "../css/main/animation.css";
import IMemberId from "../interfaces/IMemberId";
import IUser from '../interfaces/IUser';
import UserService from '../service/UserService';
import MemberIdService from '../service/MemberIdService';



function MyPage_SideMenubar() {
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [userId,setUserId]=useState<IUser["user_id"]>("");
    const [userInfo,setUserInfo]=useState<IUser>();

    async function getUser(){
        setUserInfo(await UserService.getUserById(userId).then(res=>res.data));
    }

    useEffect(()=>{
        getUser();
    })


    async function handleInfo(){        
        if(userInfo?.user_is_ad === true ){
            setShow(false);
            setShow1(true);
            setShow2(false);

        }else if(userInfo?.user_is_admin === true){
            setShow2(true);
            setShow(false);
            setShow1(false);
        }else{
            setShow2(false);
            setShow(true);
            setShow1(false);
        }
    }           


    
    return (


        <>
            <MyPage_SideMenubarCss/>
            <div className="aa sdBar" style={{marginTop: "-250px"}}>
                {show && <Nav className="flex-column">
                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }} onClick={handleInfo}>
                            회원 관련<BsPlusLg onClick={handleInfo}/>
                        </div>
                    </Nav.Link>
                    <div className="membermenu">
                        <Nav.Link as={Link} className="text-dark" to="/member/">회원 정보</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_MemberModify">회원 정보 수정</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_SizeRegister">체형 등록</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_MemberUnregister">회원 탈퇴</Nav.Link>
                    </div>
                </Nav>}

                {show1 && <Nav className="flex-column">
                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }} onClick={handleInfo}>
                            사업자 관련 광고<BsPlusLg onClick={handleInfo}/>
                        </div>
                    </Nav.Link>
                     <div className="ceomenu">
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_Adapplication">광고 등록 신청</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_ChartPage">게시물 차트 표시</Nav.Link>
                    </div>
                </Nav>}

                {show2 && <Nav className="flex-column">

                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }} onClick={handleInfo}>
                            관리자 관련 광고<BsPlusLg onClick={handleInfo}/>
                        </div>
                    </Nav.Link>
                    <div className="adminmenu">
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_AdManagerPage">광고 관리</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_AdProvePage">광고 등록 승인</Nav.Link>
                    </div>

                    </Nav>}

            </div>
        </>
    );
}

export default MyPage_SideMenubar;