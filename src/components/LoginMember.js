import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import $ from "jquery";
import "../css/LoginMember.css";

import NaverLogin from "react-naver-login";
import KakaoLogin from "react-kakao-login";

import naverlogo from "../img/login/naverlogo.png";
import kakaologo from "../img/login/kakaologo.png";
import PopUp from "./PopUp";
//아이디 기억하기 체크박스 때문에 install 했고, import함
import { useCookies } from "react-cookie";
import MemberIdService from "../service/MemberIdService";
import { useSetRecoilState } from "recoil";
import { isLoginAtom, memberAtom } from "../atom";

function LoginMember() {
  //모달 설정
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  const history = useHistory();

  const setIsLogin = useSetRecoilState(isLoginAtom);
  const setMemberId = useSetRecoilState(memberAtom);

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

  const clickSnsLoginNaver = (e) => {
    let naverid = e.id;
  };

  const clickSnsLoginKakao = (e) => {
    let kakaoid = e.profile.id;
  };

  const clickSnsLoginGoogle = (e) => {
    let googleid = e.Ft.NT;
  };

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

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (Id === "") {
      setPopup({
        open: true,
        title: "로그인 실패ㅠㅠㅠㅠ",
        message: "아이디를 입력해주세요!!",
      });
      return;
    }

    if (Password === "") {
      setPopup({
        open: true,
        title: "로그인 실패ㅠㅠㅠㅠ",
        message: "비밀번호를 입력해주세요!!",
      });
      return;
    }

    let memberId = await MemberIdService.getIdById(Id).then((res) => res.data);
    if (memberId === undefined) {
      setPopup({
        open: true,
        title: "로그인 실패",
        message: "등록되지 않은 아이디 입니다.",
      });
      return;
    }

    let CryptoJS = require("crypto-js");
    let decrypted = CryptoJS.AES.decrypt(
      memberId.member_password,
      "salt"
    ).toString(CryptoJS.enc.Utf8);
    if (decrypted !== Password) {
      setPopup({
        open: true,
        title: "로그인 실패",
        message: "잘못된 비밀번호입니다.",
      });

      return;
    }

    setIsLogin(true);
    setMemberId(memberId);

    setPopup({
      open: true,
      title: "축축!! 로그인 성공",
      message: "환영합니다!!!!",
      callback: function () {},
    });

    history.push("/");

    if (validation3()) return;
  };

  return (
    <div className="login-container" style={{ height: "880px" }}>
      <div className="login_member">
        <PopUp
          open={popup.open}
          setPopup={setPopup}
          message={popup.message}
          title={popup.title}
          callback={popup.callback}
        />
        <form>
          <p className="login_upper_font">Login</p>
          <br />
          <br />
          <div className="blue-line-out">
            <div className="blue-line-in"></div>
          </div>
          <div className="yellow-line-out">
            <div className="yellow-line-in"></div>
          </div>
          <label className="aa login_font">ID</label>
          <input
            className="aa login_inputs"
            id="Id"
            type="id"
            value={Id}
            placeholder="아이디를 입력해주세요."
            onChange={onIdHandler}
          />
          <br />
          <br />
          <label className="aa login_font">Password</label>
          <input
            className="aa login_inputs"
            id="Password"
            type="password"
            value={Password}
            placeholder="비밀번호를 입력해주세요."
            onChange={onPasswordHanlder}
          />
          <br />

          <div className="aa login_Mid">
            <label className="aa auto_Login" htmlFor="hint">
              {" "}
              <input
                type="checkbox"
                onChange={remHandleOnChange}
                checked={isRemember}
              />{" "}
              아이디 기억하기
            </label>
            <div className=" login_search_info">
              <Link to="/login/IdSearch">아이디</Link> /
              <Link to="/login/PasswordSearch"> 비밀번호 찾기</Link>
            </div>
          </div>
          <div className="login_button_out">
            <button
              className=" login_button"
              type="button"
              onClick={onSubmitHandler}
            >
              <span>Login</span>
            </button>
          </div>

          <div className="social_box">
            <div className="social_naver">
              <NaverLogin
                clientId={"elBauADvgkBV6aphmaxs"}
                callbackUrl="http://localhost:3000/"
                render={(renderProps) => (
                  <div
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      style={{ marginTop: "10px" }}
                      className="social_logo"
                      src={naverlogo}
                      resizeMode={"contain"}
                    />
                    <button
                      style={{ marginTop: "-17px" }}
                      type="submit"
                      className="social_button btn"
                      value="로그인"
                    >
                      <span style={{ fontSize: "17px" }}>Naver</span>
                    </button>
                  </div>
                )}
                onSuccess={(e) => clickSnsLoginNaver(e)}
                onFailure={(result) => console.error(result)}
              />
            </div>

            <div className="social_kakao">
              <KakaoLogin
                token={"5fdb813f9cf6797c6ec9f03a786f26b3"}
                render={(renderProps) => (
                  <div
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <img
                      style={{ marginTop: "10px" }}
                      className="social_logo"
                      src={kakaologo}
                      resizeMode={"contain"}
                    />
                    <button
                      style={{ marginTop: "-17px" }}
                      type="submit"
                      className="social_button btn"
                      value="로그인"
                    >
                      <span style={{ fontSize: "17px" }}>KaKao</span>
                    </button>
                  </div>
                )}
                onSuccess={(e) => clickSnsLoginKakao(e)}
                onFail={console.error}
                onLogout={console.Info}
              />
            </div>
          </div>

          <div className="login_end">
            <div className="login_line">
              회원이 아니신가요? <Link to="/signup">Signup</Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginMember;
