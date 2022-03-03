import MyPage_SideMenubarCss from '../css/MyPage_SideMenubarCss';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


function isCeo(){
    
}

function isAdmin(){

}


function MyPage_SideMenubar(){
    return (


        <>
                <MyPage_SideMenubarCss />
                <BrowserRouter>
                    <div className="sdBar">
                        <Nav className="flex-column">
                                    <Nav.Link className="text-dark" href="/member/">회원 정보</Nav.Link>
                                    <Nav.Link className="text-dark" href="/member/MyPage_MemberModify">회원 정보 수정</Nav.Link>
                                    <Nav.Link className="text-dark" href="/member/MyPage_SizeRegister">체형 등록</Nav.Link>
                                    <Nav.Link className="text-dark" href="/member/MyPage_MemberUnregister">회원 탈퇴</Nav.Link>    
                        </Nav>

                        <Nav className="flex-column">     
                                    <Nav.Link className="text-dark" href="/member/MyPage_Adapplication">광고 등록 신청</Nav.Link>
                                    <Nav.Link className="text-dark" href="/member/MyPage_ChartPage">게시물 차트 표시</Nav.Link>
                        </Nav>

                        <Nav className="flex-column">
                            
                                    <Nav.Link className="text-dark" href="/member/MyPage_AdManagerPage">광고 관리</Nav.Link>
                                    <Nav.Link className="text-dark" href="/member/MyPage_AdProvePage">광고 등록 승인</Nav.Link>
                            
                        </Nav>
                        
                    </div>
                </BrowserRouter>
        </>
    );
}

export default MyPage_SideMenubar;