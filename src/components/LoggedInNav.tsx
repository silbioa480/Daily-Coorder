import "../css/Navi.css";

<<<<<<< HEAD
import {BsBell, BsBookmarkHeart, BsPerson, BsPlusCircle,} from "react-icons/bs";
import {NavButton} from "../css/NavStyle";

function LoggedInNav() {
    return (
        <>
            <NavButton to="/" className="logoutt">
                Logout
            </NavButton>

            <NavButton to="/upload" style={{color: "white"}}>
                <BsPlusCircle style={{width: "21px", height: "21px"}}/>
            </NavButton>

            <NavButton to="/feed" style={{color: "white"}}>
                <BsBookmarkHeart style={{width: "21px", height: "21px"}}/>
            </NavButton>

            <NavButton to="#" style={{color: "white"}}>
                <BsBell style={{width: "21px", height: "21px"}}/>
            </NavButton>

            <NavButton to="member" style={{color: "white"}}>
                <BsPerson style={{width: "21px", height: "21px"}}/>
            </NavButton>
        </>
    );
=======
import {
  BsBell,
  BsBookmarkHeart,
  BsPerson,
  BsPlusCircle,
} from "react-icons/bs";
import { NavButton } from "../css/NavStyle";
import { Link } from 'react-router-dom';

function LoggedInNav() {
  return (
    <ul className='login-list'>
      <li className='logo-btn'>
        <Link to="/upload"><BsPlusCircle /></Link>
      </li>

      <li className='logo-btn'>
        <Link to="/feed"><BsBookmarkHeart /></Link>
      </li>

      <li className='logo-btn'>
        <Link to="#"><BsBell /></Link>
      </li>

      <li className='logo-btn'>
        <Link to="/member"><BsPerson /></Link>
      </li>

      <li className="logout-btn">
        <Link to="">로그아웃</Link>
      </li>
    </ul>
  );
>>>>>>> 31e2b93 (CSS : Navbar)
}

export default LoggedInNav;
