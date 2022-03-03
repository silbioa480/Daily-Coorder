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
      <NavButton to="/">로그아웃</NavButton>

      <NavButton to="/upload">
        <BsPlusCircle style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="/feed">
        <BsBookmarkHeart style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="/">
        <BsBell style={{ width: "24px", height: "24px" }} />
      </NavButton>

      <NavButton to="member">
        <BsPerson style={{ width: "24px", height: "24px" }} />
      </NavButton>
    </>
  );
}

export default LoggedInNav;
