import MyPage_SideMenubarCss from '../css/MyPage_SideMenubarCss';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {BsPlusLg} from 'react-icons/bs';
import {useEffect, useState} from 'react';
import "../css/main/animation.css";
import { Modal ,Button } from 'react-bootstrap';
import { memberAtom , isLoginAtom } from '../atom';
import { useRecoilValue } from 'recoil';



function MyPage_SideMenubar() {

    const isLogin = useRecoilValue(isLoginAtom);
    const memberId = useRecoilValue(memberAtom);
    const [user, setUser] = useState(true);
    const [ceo, setCeo] = useState(false);

  
        if(isLogin !== false){
            if(memberId.is_business === true){
                setUser(true);
                setCeo(true);
            }else{
                setUser(true);
                setCeo(false);
            }
        }else if(isLogin === false){
            <Modal>
                    <Modal.Header closeButton>
                    <Modal.Title>로그인 오류</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>로그인 먼저 하세요</Modal.Body>
                    <Modal.Footer>
                    <Button variant="primary">
                        <Link to="/login">로그인 하기</Link>
                    </Button>
                </Modal.Footer>
            </Modal>
        }
    
    return (


        <>
            <MyPage_SideMenubarCss/>
            <div className="aa sdBar" style={{marginTop: "-250px"}}>
                {user && <Nav className="flex-column">
                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }}>
                            회원 관련<BsPlusLg />
                        </div>
                    </Nav.Link>
                    <div className="membermenu">
                        <Nav.Link as={Link} className="text-dark" to="/member/">회원 정보</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_MemberModify">회원 정보 수정</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_SizeRegister">체형 등록</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_MemberUnregister">회원 탈퇴</Nav.Link>
                    </div>
                </Nav>}

                {ceo && <Nav className="flex-column">
                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }} >
                            사업자 관련 광고<BsPlusLg />
                        </div>
                    </Nav.Link>
                     <div className="ceomenu">
                        {/* <Nav.Link as={Link} className="text-dark" to="/member/MyPage_Adapplication">광고 등록 신청</Nav.Link> */}
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_ChartPage">내가 올린 게시물 보기</Nav.Link>
                    </div>
                </Nav>}

                {/* {admin && <Nav className="flex-column">

                    <Nav.Link style={{color: "black"}}>
                        <div style={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            padding: ".5vw 0",
                            margin: ".2vw 0"
                        }} >
                            관리자 관련 광고<BsPlusLg />
                        </div>
                    </Nav.Link>
                    <div className="adminmenu">
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_AdManagerPage">광고 관리</Nav.Link>
                        <Nav.Link as={Link} className="text-dark" to="/member/MyPage_AdProvePage">광고 등록 승인</Nav.Link>
                    </div>

                    </Nav>} */}

            </div>
        </>
    );
}

export default MyPage_SideMenubar;