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
      <NavButton to="/" style={{ color: "white" }}>
        로그아웃
      </NavButton>

      <NavButton to="/upload" style={{ color: "white" }}>
        <BsPlusCircle style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="/feed" style={{ color: "white" }}>
        <BsBookmarkHeart style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="#" style={{ color: "white" }}>
        <BsBell style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="member" style={{ color: "white" }}>
        <BsPerson style={{ width: "24px", height: "24px" }} />
      </NavButton>
    </>
  );
}

export default LoggedInNav;
