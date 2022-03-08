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
    <>
      <NavButton to="/" className="logoutt">
        로그아웃
      </NavButton>

      <NavButton to="/upload" style={{ color: "white" }}>
        <BsPlusCircle style={{ width: "20px", height: "20px" }} />
      </NavButton>

      <NavButton to="/feed" style={{ color: "white" }}>
        <BsBookmarkHeart style={{ width: "20px", height: "20px" }} />
      </NavButton>

      <NavButton to="#" style={{ color: "white" }}>
        <BsBell style={{ width: "20px", height: "20px" }} />
      </NavButton>

      <NavButton to="member" style={{ color: "white" }}>
        <BsPerson style={{ width: "20px", height: "20px" }} />
      </NavButton>
    </>
  );
}

export default LoggedInNav;
