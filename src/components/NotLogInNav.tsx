import { NavButton } from "../css/NavStyle";

function NotLogInNav() {
  return (
    <>
      <NavButton to="login">로그인</NavButton>
      <NavButton to="signup">회원가입</NavButton>
    </>
  );
}

export default NotLogInNav;
