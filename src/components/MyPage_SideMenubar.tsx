import MyPage_SideMenubarCss from "../css/MyPage_SideMenubarCss";
import { Nav } from 'react-bootstrap';


function MyPage_SideMenubar(){
    return (

        <>
            <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">회원 정보</Nav.Link>
                    <Nav.Link eventKey="link-1">회원 정보 수정</Nav.Link>
                    <Nav.Link eventKey="link-2">체형 등록</Nav.Link>
                    <Nav.Link eventKey="link-3" >회원 탈퇴</Nav.Link>
            </Nav>

            <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">광고 등록 신청</Nav.Link>
                    <Nav.Link eventKey="link-1">게시물 차트 표시</Nav.Link>
            </Nav>

            <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">광고 관리</Nav.Link>
                    <Nav.Link eventKey="link-1">광고 등록 승인</Nav.Link>
            </Nav>
        </>
    );
}

export default MyPage_SideMenubar;