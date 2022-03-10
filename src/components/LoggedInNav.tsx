import "../css/Navi.css";

import {
  BsBell,
  BsBookmarkHeart,
  BsPerson,
  BsPlusCircle,
} from "react-icons/bs";
import { NavButton } from "../css/NavStyle";

function LoggedInNav() {
  return (
    <ul className='login-list'>
      <li className='logo-btn'>
        <a href="/src/routes/Upload.jsx"><BsPlusCircle /></a>
      </li>

      <li className='logo-btn'>
        <a href=""><BsBookmarkHeart /></a>
      </li>

      <li className='logo-btn'>
        <a href=""><BsBell /></a>
      </li>

      <li className='logo-btn'>
        <a href=""><BsPerson /></a>
      </li>

      <li className="logout-btn">
        <a href="">로그아웃</a>
      </li>
    </ul>
  );
}

export default LoggedInNav;
