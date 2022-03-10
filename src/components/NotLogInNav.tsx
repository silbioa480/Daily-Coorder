import "../css/Navi.css";
import {NavButton} from "../css/NavStyle";

function NotLogInNav() {
    return (
        <>
            <NavButton to="/login" className="login">
                Login
            </NavButton>
            <NavButton to="/signup" className="signupp">
                Signup
            </NavButton>
        </>
    );
}

export default NotLogInNav;
