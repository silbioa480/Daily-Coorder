import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import "../css/LoginMember.css";

import facebooklogo from "../img/login/facebooklogo.png";
import kakaologo from "../img/login/kakaologo.png";
import googlelogo from "../img/login/googlelogo.png";
import naverlogo from "../img/login/naverlogo.png";
import PopUp from "./PopUp";
//아이디 기억하기 체크박스 때문에 install 했고, import함
import { useCookies } from "react-cookie";

function LoginMember() {
  //모달 설정
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  //아이디 기억하기(로그인 페이지 내 체크박스)
  const [cookies, setCookie, removeCookie] = useCookies(["rememberId"]);
  const [isRemember, setIsRemember] = useState(false);

  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [proId, setProId] = useState("");
  const [proPassword, setProPassword] = useState("");

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorProId, setErrorProId] = useState(false);
  const [errorProPassword, setErrorProPassword] = useState(false);

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onProIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onProPasswordHanlder = (e) => {
    setPassword(e.currentTarget.value);
  };

  /*여기서부터 아이디 기억하기 함수 구현*/
  useEffect(() => {
    if (cookies.rememberId !== undefined) {
      setId(cookies.rememberId);
      setIsRemember(true);
    }
  }, []);

  const remHandleOnChange = (e) => {
    setIsRemember(e.target.check);
    if (e.target.check) {
      setCookie("rememberId", Id, { maxAge: 2000 });
    } else {
      removeCookie("rememberId");
    }
  };
  /*여기까지 아이디 기억하기 함수 구현*/

  const validation3 = () => {
    if (!Id) setErrorId(true);
    if (!Password) setErrorPassword(true);
    // if (!proId) setErrorProId(true);
    // if (!proPassword) setErrorProPassword(true);

    if (Id && Password) return true;
    else return false;

    // if (proId && proPassword) return true;
    // else return false;
  };
  const checkId = $("#Id").val();
  const validCheckId = () => {
    if (!checkId) {
      $("#Id").val("");
      $("#Id").focus();
      return true;
    }
  };

  const checkPassword = $("#Password").val();
  const validCheckPassword = () => {
    if (!checkPassword) {
      $("#Password").val("");
      $("#Password").focus();
      return true;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validCheckId("")) {
      setPopup({
        open: true,
        title: "로그인 실패ㅠㅠㅠㅠ",
        message: "아이디를 입력해주세요!!",
      });
      return;
    }

    if (validCheckPassword("")) {
      setPopup({
        open: true,
        title: "로그인 실패ㅠㅠㅠㅠ",
        message: "비밀번호를 입력해주세요!!",
      });
      return;
    }

    if (!validation3()) {
      setPopup({
        open: true,
        title: "로그인 실패ㅠㅠㅠㅠ",
        message: "정보가 일치하지 않아요!!",
      });
      return;
    } else {
    }
    setPopup({
      open: true,
      title: "축축!! 로그인 성공",
      message: "환영합니다!!!!",
      callback: function () {},
    });
    if (validation3()) return;
  };

  return (
    <div className="login_member">
      <PopUp
        open={popup.open}
        setPopup={setPopup}
        message={popup.message}
        title={popup.title}
        callback={popup.callback}
      />
      <form>
        <p className="login_upper_font">로그인</p>
        <br />
        <br />
        <label className="login_font">아이디</label>
        <input
          className="login_inputs"
          id="Id"
          type="id"
          value={Id}
          placeholder="아이디를 입력해주세요."
          onChange={onIdHandler}
        />
        <br />
        <br />
        <label className="login_font">비밀번호</label>
        <input
          className="login_inputs"
          id="Password"
          type="password"
          value={Password}
          placeholder="비밀번호를 입력해주세요."
          onChange={onPasswordHanlder}
        />
        <br />

        <div className="login_Mid">
          <label className="auto_Login" htmlFor="hint">
            {" "}
            <input
              type="checkbox"
              onChange={remHandleOnChange}
              checked={isRemember}
            />{" "}
            아이디 기억하기
          </label>
          <div className="login_search_info">
            <Link to="/login/IdSearch">아이디</Link> /
            <Link to="/login/PasswordSearch"> 비밀번호 찾기</Link>
          </div>
        </div>

        <button
          className="login_button"
          type="button"
          onClick={onSubmitHandler}
        >
          로그인
        </button>

        <div className="social_box">
          <div className="social_google">
            <img className="social_logo" src={googlelogo} />
            <button type="submit" className="social_button btn" value="로그인">
              구글 계정으로 로그인
            </button>
          </div>
          <div className="social_naver">
            <img className="social_logo" src={naverlogo} />
            <button type="submit" className="social_button btn" value="로그인">
              네이버 계정으로 로그인
            </button>
          </div>
          <div className="social_kakao">
            <img src={kakaologo} className="social_logo" />
            <button type="submit" className="social_button btn" value="로그인">
              카카오 계정으로 로그인
            </button>
          </div>
          <div className="social_facebook">
            <img className="social_logo" src={facebooklogo} />
            <button type="submit" className="social_button btn" value="로그인">
              페이스북 계정으로 로그인
            </button>
          </div>
        </div>

        <div className="login_end">
          <div className="login_line">
            회원이 아니신가요? <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginMember;
