import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";
import PopUp from "./PopUp";

function PasswordSearch() {
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  const [Id, setId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [errorId, setErrorId] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorName, setErrorName] = useState(false);

  const onChangeId = (e) => {
    const IdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || IdRegex.test(e.target.value)) setErrorId(false);
    else setErrorId(true);
    setId(e.target.value);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^[0-9\b -]{0,13}$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setErrorPhoneNumber(false);
    else setErrorPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const validation5 = () => {
    if (!Id) setErrorId(true);
    if (!name) setErrorName(true);
    if (!phoneNumber) setErrorPhoneNumber(true);

    if (Id && name && phoneNumber) return true;
    else return false;
  };

  const checkId = $("#Id").val();

  const validCheckId = () => {
    if (!checkId) {
      $("#Id").val("");
      $("#Id").focus();
      return true;
    }
  };

  const checkName = $("#name").val();

  const validCheckName = () => {
    if (!checkName) {
      $("#name").val("");
      $("#name").focus();
      return true;
    }
  };

  const checkPhoneNumber = $("#phoneNumber").val();

  const validCheckPhoneNumber = () => {
    if (!checkPhoneNumber) {
      $("#phoneNumber").val("");
      $("#phoneNumber").focus();
      return true;
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (validCheckId("")) {
      setPopup({
        open: true,
        title: "비밀번호 찾기 실패ㅠㅠㅠㅠ",
        message: "아이디를 입력해주세요!!",
      });
      return;
    }

    if (validCheckName("")) {
      setPopup({
        open: true,
        title: "비밀번호 찾기 실패ㅠㅠㅠㅠ",
        message: "이름을 입력해주세요!!",
      });
      return;
    }

    if (validCheckPhoneNumber("")) {
      setPopup({
        open: true,
        title: "비밀번호 찾기 실패ㅠㅠㅠㅠ",
        message: "휴대폰 번호를 입력해주세요!!",
      });
      return;
    }

    if (!validation5()) {
      setPopup({
        open: true,
        title: "비밀번호 찾기 실패ㅠㅠㅠㅠ",
        message: "정보가 일치하지 않아요!!",
      });
      return;
    } else {
    }
    setPopup({
      open: true,
      title: "비밀번호 찾기 성공!!",
      message: "회원님의 비밀번호는 '♡♡♡♡' 입니다!!",
      callback: function () {},
    });
    if (validation5()) return;
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "40vh",
          marginTop: "50px",
        }}
        className="SignUp"
      >
        <PopUp
          open={popup.open}
          setPopup={setPopup}
          message={popup.message}
          title={popup.title}
          callback={popup.callback}
        />
        <form onSubmit={onSubmitHandler}>
          <p
            style={{
              marginTop: "30px",
              flexDirection: "column",
              fontSize: "25px",
              display: "block",
              width: 350,
              padding: 30,
            }}
          >
            {" "}
            비밀번호 찾기{" "}
          </p>
          <br />
          <br />

          <div>
            <label
              htmlFor="user-id"
              style={{
                marginTop: "20px",
              }}
            >
              아이디
            </label>
            <input
              style={{
                marginBottom: "15px",
                marginTop: "10px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
              }}
              id="Id"
              name="user-id"
              type="id"
              placeholder="아이디"
              value={Id}
              onChange={onChangeId}
              class="loginregister_input"
            />
            <label htmlFor="user-name">이름</label>
            <input
              style={{
                marginTop: "10px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "10px",
              }}
              id="name"
              name="user-name"
              type="text"
              placeholder="이름"
              value={name}
              onChange={onNameHandler}
              className="loginregister_input"
            />{" "}
          </div>
          <div>
            <label
              htmlFor="user-phone"
              style={{
                marginTop: "15px",
              }}
            >
              휴대폰 번호
            </label>
            <input
              style={{
                marginTop: "15px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "20px",
              }}
              id="phoneNumber"
              name="user-phone"
              type="text"
              placeholder="-를 제외하고 숫자만 입력하세요"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
              className="loginregister_input"
            />
            {errorPhoneNumber && (
              <div
                className="invalid-input"
                style={{
                  color: "deepskyblue",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                숫자만 입력하세요
              </div>
            )}
          </div>
          <div>
            <input
              style={{
                width: "100%",
                height: "30px",
                fontSize: "14px",
                padding: "13px 30px",
                cursor: "pointer",
                backgroundColor: "black",
                color: "white",
                lineHeight: "1px",
                borderRadius: "3px",
                borderStyle: "none",
                marginBottom: "10px",
              }}
              type="submit"
              className="loginregister_button"
              value="비밀번호 찾기"
            />
          </div>
          <div
            style={{
              fontSize: "15px",
              color: "#8d8d8d",
              lineHeight: 3,
              textAlign: "center",
            }}
            className="searchinfo"
          >
            <Link to="/login/IdSearch">아이디 찾기</Link> ||
            <Link to="/signup"> 회원가입 </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default PasswordSearch;
