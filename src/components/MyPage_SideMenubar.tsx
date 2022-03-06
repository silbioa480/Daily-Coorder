import MyPage_SideMenubarCss from '../css/MyPage_SideMenubarCss';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { BsPlusLg } from 'react-icons/bs';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

function isCeo(){
    
}

function isAdmin(){

}


function MyPage_SideMenubar(){
    const [show,setShow]=useState(false);
    const [show1,setShow1]=useState(false);
    const [show2,setShow2]=useState(false);

    const handleshow=()=>{
        setShow(true);
    }
    const handleshow1=()=>{
        setShow1(true);
    }
    const handleshow2=()=>{
        setShow2(true);
    }
    return (


        <>
                <MyPage_SideMenubarCss />
                <BrowserRouter>
                    <div className="sdBar">
                        <Nav className="flex-column">
                                    <Nav.Link style={{color:"black"}}>
                                            <div style={{width:"100%",display:"flex", justifyContent:"space-between",padding:".5vw 0",margin:".2vw 0"}}>
                                                회원 관련<BsPlusLg onClick={handleshow}/>
                                            </div>
                                    </Nav.Link>
                                    {show && <div className="membermenu">
                                                <Nav.Link className="text-dark" href="/member/">회원 정보</Nav.Link>
                                                <Nav.Link className="text-dark" href="/member/MyPage_MemberModify">회원 정보 수정</Nav.Link>
                                                <Nav.Link className="text-dark" href="/member/MyPage_SizeRegister">체형 등록</Nav.Link>
                                                <Nav.Link className="text-dark" href="/member/MyPage_MemberUnregister">회원 탈퇴</Nav.Link>    
                                            </div>}
                        </Nav>

                        <Nav className="flex-column">     
                                    <Nav.Link style={{color:"black"}}>
                                        <div style={{width:"100%",display:"flex", justifyContent:"space-between",padding:".5vw 0",margin:".2vw 0"}}>
                                            사업자 관련 광고<BsPlusLg onClick={handleshow1}/>
                                        </div>
                                    </Nav.Link>
                                    {show1 && <div className="ceomenu">
                                            <Nav.Link className="text-dark" href="/member/MyPage_Adapplication">광고 등록 신청</Nav.Link>
                                            <Nav.Link className="text-dark" href="/member/MyPage_ChartPage">게시물 차트 표시</Nav.Link>
                                        </div>}
                        </Nav>

                        <Nav className="flex-column">
                            
                                    <Nav.Link style={{color:"black"}}>
                                        <div style={{width:"100%",display:"flex", justifyContent:"space-between",padding:".5vw 0",margin:".2vw 0"}}>
                                            관리자 관련 광고<BsPlusLg onClick={handleshow2}/>
                                        </div>
                                    </Nav.Link>
                                    {show2 && <div className="adminmenu">
                                            <Nav.Link className="text-dark" href="/member/MyPage_AdManagerPage">광고 관리</Nav.Link>
                                            <Nav.Link className="text-dark" href="/member/MyPage_AdProvePage">광고 등록 승인</Nav.Link>
                                        </div>}
                            
                        </Nav>
                        
                    </div>
                </BrowserRouter>
        </>
    );
}

export default MyPage_SideMenubar;