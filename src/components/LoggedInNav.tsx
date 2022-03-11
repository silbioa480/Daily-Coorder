import "../css/Navi.css";

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
}

export default LoggedInNav;
