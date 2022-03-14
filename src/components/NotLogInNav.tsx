import { Link } from 'react-router-dom';
import "../css/Navi.css";
import { NavButton } from "../css/NavStyle";

function NotLogInNav() {
  return (
    <>
      <ul className='login-list'>
        <li className="login-btn">
          <Link to='/login'>로그인</Link>
        </li>
        <li className="signup-btn">
          <Link to='/signup'>회원가입</Link>
        </li>
      </ul>
      {/* toggle button */}
      <button
        className='toggle-btn'

      >
        <i className="fa-solid fa-bars"></i>
      </button>
    </>
  );
}

export default NotLogInNav;
