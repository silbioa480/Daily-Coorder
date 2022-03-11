import "../css/Navi.css";

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
}

export default LoggedInNav;
