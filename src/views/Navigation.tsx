import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
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
      bg="black"
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
            <Navbar.Brand style={{ fontSize: "2.3em", color: "white" }}>
              Daily Coorder
            </Navbar.Brand>
          </Link>
          <form style={{ display: "inline", margin: "auto 0", color: "white" }}>
            <input type="text" name="search" id="search" placeholder="검색" />
            <BsSearch
              style={{ width: "24px", height: "24px", margin: "0 10px" }}
            />
          </form>
        </div>
      </NavLine>

      <NavLine style={{ margin: "20px 0" }}>
        <Nav>
          <NotLogInNav />
          <LoggedInNav />
        </Nav>
      </NavLine>
    </Navbar>
  );
}

export default Navigation;
