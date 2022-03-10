import "../css/Navi.css";

function NotLogInNav() {
  return (
    <ul className='login-list'>
      <li className="login-btn">
        <a href='/src/routes/LogIn.js'>로그인</a>
      </li>
      <li className="signup-btn">
        <a href='/src/routes/SignUp.js'>회원가입</a>
      </li>
    </ul>
  );
}

export default NotLogInNav;
