import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";

function IdSearch() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);

  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^[0-9\b -]{0,13}$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setErrorPhoneNumber(false);
    else setErrorPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const checkPhoneNumber = $("#phoneNumber").val();
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!checkPhoneNumber) {
      alert("아이디를 입력해주세요");
      $("#phoneNumber").val("");
      $("#phoneNumber").focus();
      return false;
    }
    $("#phoneNumber").removeClass("borderErr");
  };
  const phoneNumberKeyPress = (e) => {
    $("#phoneNumber").removeClass("borderErr");
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
            아이디 찾기{" "}
          </p>
          <br />
          <br />

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
              onKeyPress={phoneNumberKeyPress}
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
                backgroundColor: "darkslategrey",
                color: "white",
                lineHeight: "1px",
                borderRadius: "3px",
                borderStyle: "none",
                marginBottom: "10px",
              }}
              type="submit"
              className="loginregister_button"
              value="아이디 찾기"
            />
          </div>
          <div
            style={{
              fontSize: "12px",
              color: "#8d8d8d",
              lineHeight: 3,
              textAlign: "center",
            }}
            className="searchinfo"
          >
            <Link to="/login/PasswordSearch">비밀번호 찾기</Link> ||
            <a href="/signup"> 회원가입</a>
          </div>
        </form>
      </div>
    </>
  );
}

export default IdSearch;
