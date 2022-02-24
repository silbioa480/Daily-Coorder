import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { NavButton } from "../css/NavStyle";
import NotLogInNav from "../components/NotLogInNav";
import LoggedInNav from "../components/LoggedInNav";

const NavLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Navigation() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
      }}
    >
      <NavLine>
        <div>
          <Link to="/" style={{ margin: "0 20px" }}>
            <Navbar.Brand style={{ fontSize: "1.8em" }}>
              Daily Coorder
            </Navbar.Brand>
          </Link>
          <form style={{ display: "inline", margin: "auto 0" }}>
            <input type="text" name="search" id="search" placeholder="검색" />
            <BsSearch
              style={{ width: "24px", height: "24px", margin: "0 10px" }}
            />
          </form>
        </div>
      </NavLine>

      <NavLine style={{ margin: "20px 0" }}>
        <Nav>
          <NavButton to="/">좋아요 베스트</NavButton>

          <NavButton to="/">클릭 베스트</NavButton>

          <NavButton to="/">브랜드</NavButton>

          <NavButton to="/">남성</NavButton>

          <NavButton to="/">여성</NavButton>

          <NavButton to="/">상의</NavButton>

          <NavButton to="/">하의</NavButton>
        </Nav>
        <Nav>
          <NotLogInNav />
          <LoggedInNav />
        </Nav>
      </NavLine>
    </Navbar>
  );
}

export default Navigation;
