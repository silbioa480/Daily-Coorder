import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import NotLogInNav from "../components/NotLogInNav";
import LoggedInNav from "../components/LoggedInNav";

import "../css/Navi.css";

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
        display: "table",
        flexDirection: "column",
        position: "sticky",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "100",
        width: "100%",
        height: "65px",
        padding: "0 120px",
      }}
    >
      <div>
        <NavLine className="nav-box">
          <form className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="검색"
              style={{ height: "23px" }}
            />
            <BsSearch
              style={{ width: "20px", height: "20px", margin: "0 10px" }}
            />
          </form>
          <Link to="/" style={{ margin: "0 20px" }}>
            <Navbar.Brand
              style={{
                fontSize: "1.8em",
                color: "white",
                verticalAlign: "middle",
                lineHeight: "65px",
              }}
            >
              Daily Coorder
            </Navbar.Brand>
          </Link>
          <Nav className="login">
            <NotLogInNav />
            <LoggedInNav />
          </Nav>
        </NavLine>
      </div>
    </Navbar>
  );
}

export default Navigation;
