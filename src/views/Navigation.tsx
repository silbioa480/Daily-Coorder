import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import NotLogInNav from "../components/NotLogInNav";
import LoggedInNav from "../components/LoggedInNav";

import "../css/Navi.css";

function Navigation() {
  return (
    <Navbar id='navbar'>
      <div className="navbar-box">
        <div>
          <h1 className="title">
            <a href='/src/routes/Main.tsx' className="title">Daliy Coorder</a>
          </h1>
          <form className="search-form">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="검색"
            />
            <BsSearch className='search-icon'
            />
          </form>
        </div>
        {/* <NotLogInNav /> */}
        <LoggedInNav />
      </div>
    </Navbar >
  );
}

export default Navigation;
