import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";

function PasswordSearch() {
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
    const nameRegex = /[0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
    if (!e.target.value || nameRegex.test(e.target.value)) setErrorName(false);
    else setErrorName(true);
    setName(e.currentTarget.value);
  };
  const checkId = $("#Id").val();
  const checkName = $("#name").val();
  const checkPhoneNumber = $("#phoneNumber").val();

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!checkId) {
      alert("아이디를 입력해주세요");
      $("#Id").val("");
      $("#Id").focus();
      return false;
    }
    $("#Id").removeClass("borderErr");

    if (!checkName) {
      alert("이름을 입력해주세요");
      $("#name").val("");
      $("#name").focus();
      return false;
    }
    $("#name").removeClass("borderErr");

    if (!checkPhoneNumber) {
      alert("휴대폰 번호를 입력해주세요");
      $("#phoneNumber").val("");
      $("#phoneNumber").focus();
      return false;
    }
    $("#phoneNumber").removeClass("borderErr");
  };

  const nameKeyPress = (e) => {
    $("#name").removeClass("borderErr");
  };
  const phoneNumberKeyPress = (e) => {
    $("#phoneNumber").removeClass("borderErr");
  };
  const idKeyPress = (e) => {
    $("#Id").removeClass("borderErr");
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
              onKeyPress={idKeyPress}
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
              onKeyPress={nameKeyPress}
              onChange={onNameHandler}
              className="loginregister_input"
            />{" "}
            {errorName && (
              <div
                className="invalid-input"
                style={{
                  color: "deepskyblue",
                  fontSize: "12px",
                  marginBottom: "10px",
                }}
              >
                이름 형식이 올바르지 않습니다.
              </div>
            )}
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
              value="비밀번호 찾기"
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
            <Link to="/login/IdSearch">아이디 찾기</Link> ||
            <Link to="/signup"> 회원가입 </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default PasswordSearch;
