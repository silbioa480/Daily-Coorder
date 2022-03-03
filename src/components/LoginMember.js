import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from "jquery";

import facebooklogo from "../img/login/facebooklogo.png";
import kakaologo from "../img/login/kakaologo.png";
import googlelogo from "../img/login/googlelogo.png";
import naverlogo from "../img/login/naverlogo.png";
import PopUp from "./PopUp";

function LoginMember() {
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });
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
      title: "로그인 성공♡♡",
      message: "꺄아아아앗!!!!",
      callback: function () {},
    });
    if (validation3()) return;
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "40vh",
      }}
    >
      <PopUp
        open={popup.open}
        setPopup={setPopup}
        message={popup.message}
        title={popup.title}
        callback={popup.callback}
      />
      <form>
        <p
          style={{
            marginTop: "300px",
            display: "flex",
            flexDirection: "column",
            fontSize: "25px",
          }}
        >
          로그인
        </p>
        <br />
        <br />
        <label>아이디</label>
        <input
          id="Id"
          style={{
            marginTop: "15px",
            borderRadius: "2px",
            width: "100%",
            height: "40px",
            border: "1px solid #e5e5e5",
            padding: "9px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
          type="id"
          value={Id}
          placeholder="아이디를 입력해주세요."
          onChange={onIdHandler}
        />
        <br />
        <br />
        <label>비밀번호</label>
        <input
          id="Password"
          style={{
            marginTop: "15px",
            borderRadius: "2px",
            width: "100%",
            height: "40px",
            border: "1px solid #e5e5e5",
            padding: "9px 12px",
            outline: "none",
            boxSizing: "border-box",
          }}
          type="password"
          value={Password}
          placeholder="비밀번호를 입력해주세요."
          onChange={onPasswordHanlder}
        />
        <br />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="loginMid"
        >
          <label className="autoLogin" htmlFor="hint">
            {" "}
            <input type="checkbox" id="hint" /> 로그인 유지하기
          </label>
          <div
            style={{
              fontSize: "12px",
              color: "#8d8d8d",
              lineHeight: 3,
            }}
            className="searchinfo"
          >
            <Link to="/login/IdSearch">아이디</Link> /
            <Link to="/login/PasswordSearch"> 비밀번호 찾기</Link>
          </div>
        </div>

        <button
          style={{
            width: "350px",
            height: "40px",
            fontSize: "14px",
            padding: "13px 30px",
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
            lineHeight: "1px",
            marginTop: "20px",
            marginBottom: "12px",
            borderRadius: "3px",
            borderStyle: "none",
          }}
          className="btn_login"
          type="button"
          onClick={onSubmitHandler}
        >
          로그인
        </button>

        <div
          style={{
            marginBottom: "30px",
          }}
          className="socialBox"
        >
          <div
            style={{
              backgroundColor: "white",
              borderColor: "black",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              marginBottom: "10px",
              borderRadius: "3px",
            }}
            className="google"
          >
            <img
              style={{
                width: "24px",
                height: "25px",
              }}
              className="googleLogo"
              src={googlelogo}
            />
            <button
              style={{
                width: "300px",
                fontSize: "15px",
                textAlign: "center",
                display: "inline-block",
                boxSizing: "border-box",
              }}
              type="submit"
              className="facebookText btn"
              value="로그인"
            >
              구글 계정으로 신규가입
            </button>
          </div>
          <div
            style={{
              backgroundColor: "#00c300",
              borderColor: "#00c300",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              marginBottom: "10px",
              borderRadius: "3px",
            }}
            className="naver"
          >
            <img
              style={{
                width: "24px",
                height: "25px",
              }}
              className="naverLogo"
              src={naverlogo}
            />
            <button
              style={{
                width: "300px",
                fontSize: "15px",
                textAlign: "center",
                display: "inline-block",
                boxSizing: "border-box",
              }}
              type="submit"
              className="naverText btn"
              value="로그인"
            >
              네이버 계정으로 신규가입
            </button>
          </div>
          <div
            style={{
              backgroundColor: "#feec34",
              borderColor: "#feec34",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              marginBottom: "10px",
              borderRadius: "3px",
            }}
            className="kakao"
          >
            <img
              src={kakaologo}
              style={{
                width: "24px",
                height: "25px",
              }}
              className="kakaoLogo"
            />
            <button
              style={{
                width: "300px",
                fontSize: "15px",
                textAlign: "center",
                display: "inline-block",
                boxSizing: "border-box",
              }}
              type="submit"
              className="kakaoText btn"
              value="로그인"
            >
              카카오 계정으로 신규가입
            </button>
          </div>
          <div
            style={{
              backgroundColor: "#3a559f",
              borderColor: "#3a559f",
              height: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxSizing: "border-box",
              marginBottom: "10px",
              borderRadius: "3px",
            }}
            className="facebook"
          >
            <img
              style={{
                width: "24px",
                height: "25px",
              }}
              className="facebookLogo"
              src={facebooklogo}
            />
            <button
              style={{
                width: "300px",
                fontSize: "15px",
                textAlign: "center",
                display: "inline-block",
                boxSizing: "border-box",
              }}
              type="submit"
              className="facebookText btn"
              value="로그인"
            >
              페이스북 계정으로 신규가입
            </button>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
            fontSize: "10px",
          }}
          className="loginEnd"
        >
          <div
            style={{
              color: "#bcbcbc",
              fontSize: "15px",
              marginBottom: "35px",
              cursor: "pointer",
            }}
            className="loginLine"
          >
            회원이 아니신가요? <a href="/signup">회원가입</a>
          </div>
        </div>
      </form>
    </div>
  );
}

//
export default LoginMember;
