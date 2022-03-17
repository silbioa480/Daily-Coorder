import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import LoggedInNav from "../components/LoggedInNav";

import "../css/main/animation.css";
import "../css/Navi.css";
import { useRecoilValue } from "recoil";
import { isLoginAtom } from "../atom";
import NotLogInNav from "../components/NotLogInNav";

const NavLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

function Navigation() {
  const isLogin = useRecoilValue(isLoginAtom);

  return (
    <>
      <Navbar id="navbar">
        <div className="navbar-box">
          <div className="navbar-right">
            <h1 className="title">
              <Link to="/" className="title">
                Daliy Coorder
              </Link>
            </h1>
            {/* <form className="search-form">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="검색"
              />
              <BsSearch className='search-icon'
              />
            </form> */}
          </div>
          {isLogin ? <LoggedInNav /> : <NotLogInNav />}
        </div>
      </Navbar>
      <ul className="ukraine">
        <li className="blue"></li>
        <li className="yellow"></li>
      </ul>
    </>
  );
}

export default Navigation;
