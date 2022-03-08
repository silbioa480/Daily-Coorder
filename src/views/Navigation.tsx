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
        height: "55px",
      }}
    >
      <NavLine className="header">
        <div>
          <Link to="/" style={{ margin: "0 20px" }}>
            <Navbar.Brand
              style={{
                fontSize: "2.1em",
                color: "white",
                verticalAlign: "middle",
                lineHeight: "55px",
              }}
            >
              Daily Coorder
            </Navbar.Brand>
          </Link>
          <form className="search">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="검색"
              style={{ marginLeft: "40px", height: "25px" }}
            />
            <BsSearch
              style={{ width: "20px", height: "20px", margin: "0 13px" }}
            />
          </form>
        </div>

        <Nav style={{ lineHeight: "55px" }}>
          <NotLogInNav />
          <LoggedInNav />
        </Nav>
      </NavLine>
    </Navbar>
  );
}

export default Navigation;
