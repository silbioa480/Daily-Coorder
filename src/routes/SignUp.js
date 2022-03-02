import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Result } from "antd";
import $ from "jquery";

function SignUp() {
  const [isOnCheck, setIsOnCheck] = useState(false);

  //일반회원
  const [name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [term, setTerm] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [termError, setTermError] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);

  //사업자회원
  const [proId, setProId] = useState("");
  const [proPassword, setProPassword] = useState("");
  const [proName, setProName] = useState("");
  const [proNumber, setProNumber] = useState("");
  const [proEmail, setProEmail] = useState("");
  const [proPhone, setProPhone] = useState("");

  const [errorProId, setErrorProId] = useState(false);
  const [errorProPassword, setErrorProPassword] = useState(false);
  const [confirmProPasswordError, setConfirmProPasswordError] = useState(false);
  const [errorProName, setErrorProName] = useState(false);
  const [errorProEmail, setErrorProEmail] = useState(false);
  const [errorProNumber, setErrorProNumber] = useState(false);
  const [errorProPhone, setErrorProPhone] = useState(false);

  const [confirmProPassword, setConfirmProPassword] = useState("");

  // 약관동의
  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const [show, setShow] = useState(false);
  const [value, setValue] = useState({
    Id: "",
    Password: "",
    name: "",
    nickname: "",
    phoneNumber: "",
    email: "",
    proNumber: "",
    usableId: false,
  });

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onProNameHandler = (event) => {
    setProName(event.currentTarget.value);
  };

  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^[0-9\b -]{0,13}$/;
    if (!e.target.value || phoneNumberRegex.test(e.target.value))
      setErrorPhoneNumber(false);
    else setErrorPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const onChangeProPhone = (e) => {
    const proPhoneRegex = /^[0-9\b -]{0,13}$/;
    if (!e.target.value || proPhoneRegex.test(e.target.value))
      setErrorProPhone(false);
    else setErrorProPhone(true);
    setProPhone(e.target.value);
  };

  const onChangeProNumber = (e) => {
    const proNumberRegex = /^[0-9\b -]{0,13}$/;
    if (!e.target.value || proNumberRegex.test(e.target.value))
      setErrorProNumber(false);
    else setErrorProNumber(true);
    setProNumber(e.target.value);
  };

  const onChangeId = (e) => {
    const IdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || IdRegex.test(e.target.value)) setErrorId(false);
    else setErrorId(true);
    setId(e.target.value);
  };

  const onChangeProId = (e) => {
    const ProIdRegex = /^[A-Za-z0-9+]{5,}$/;
    if (!e.target.value || ProIdRegex.test(e.target.value))
      setErrorProId(false);
    else setErrorProId(true);
    setProId(e.target.value);
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setErrorPassword(false);
    else setErrorPassword(true);

    if (!confirmPassword || e.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };

  const onChangeProPassword = (e) => {
    const ProPasswordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!e.target.value || ProPasswordRegex.test(e.target.value))
      setErrorProPassword(false);
    else setErrorProPassword(true);

    if (!confirmProPassword || e.target.value === confirmPassword)
      setConfirmProPasswordError(false);
    else setConfirmProPasswordError(true);
    setProPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    if (Password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  const onChangeConfirmProPassword = (e) => {
    if (proPassword === e.target.value) setConfirmProPasswordError(false);
    else setConfirmProPasswordError(true);
    setConfirmProPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    const emailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value))
      setErrorEmail(false);
    else setErrorEmail(true);
    setEmail(e.target.value);
  };

  const onChangeProEmail = (e) => {
    const ProEmailRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || ProEmailRegex.test(e.target.value))
      setErrorProEmail(false);
    else setErrorProEmail(true);
    setProEmail(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
    setTermError(false);
  };

  const checkId = $("#Id").val();
  const checkPassword = $("#Password").val();
  const checkName = $("#name").val();
  const checkNickName = $("#nickName").val();
  const checkEmail = $("#email").val();
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

    if (!checkNickName) {
      alert("닉네임을 입력해주세요");
      $("#nickname").val("");
      $("#nickname").focus();
      return false;
    }
    $("#nickname").removeClass("borderErr");

    if (!checkPassword) {
      alert("비밀번호를 입력해주세요");
      $("#Password").val("");
      $("#Password").focus();
      return false;
    }
    $("#Password").removeClass("borderErr");

    if (confirmPassword !== Password) {
      alert("비밀번호를 확인해주세요");
      $("#confirmPassword").val("");
      $("#confirmPassword").focus();
      return false;
    }
    $("#confirmPassword").removeClass("borderErr");

    if (!checkEmail) {
      alert("이메일을 입력해주세요");
      $("#email").val("");
      $("#email").focus();
      return false;
    }
    $("#email").removeClass("borderErr");

    if (!checkPhoneNumber) {
      alert("휴대폰 번호를 입력해주세요");
      $("#phoneNumber").val("");
      $("#phoneNumber").focus();
      return false;
    }
    $("#phoneNumber").removeClass("borderErr");
  };

  const idKeyPress = (e) => {
    $("#Id").removeClass("borderErr");
  };

  const passwordKeyPress = (e) => {
    $("#Password").removeClass("borderErr");
  };

  const confirmPasswordKeyPress = (e) => {
    $("#confirmPassword").removeClass("borderErr");
  };
  const nameKeyPress = (e) => {
    $("#name").removeClass("borderErr");
  };

  const nickNameKeyPress = (e) => {
    $("#nickname").removeClass("borderErr");
  };

  const emailKeyPress = (e) => {
    $("#email").removeClass("borderErr");
  };

  const phoneNumberKeyPress = (e) => {
    $("#phoneNumber").removeClass("borderErr");
  };

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (ageCheck === false) {
      setAgeCheck(true);
    } else {
      setAgeCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (ageCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        height: "40vh",
        marginTop: "50px",
      }}
      class="SignUp"
    >
      <form onSubmit={onSubmitHandler}>
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="일반회원가입">
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
              회원가입{" "}
            </p>
            <br />
            <br />
            <div className="profile">
              <div className="avatar stagger-item">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                  style={{
                    width: "180px",
                    height: "180px",
                  }}
                  alt="Circle Image"
                  className="img-raised rounded-circle img-fluid"
                />
                <button
                  style={{
                    width: "180px",
                    height: "30px",
                    fontSize: "14px",
                    padding: "13px 30px",
                    cursor: "pointer",
                    backgroundColor: "darkslategrey",
                    color: "white",
                    lineHeight: "1px",
                    marginTop: "20px",
                    marginBottom: "12px",
                    borderRadius: "3px",
                    borderStyle: "none",
                  }}
                  type="submit"
                  className="profile_button"
                >
                  프로필 업로드
                </button>
              </div>
            </div>

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
              />{" "}
              {errorId && (
                <div
                  class="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  아이디는 숫자를 포함하여 최소 5자 이상
                </div>
              )}
              <button
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
                class="loginregister_button"
                hidden={show}
              >
                아이디 중복확인
              </button>
              {show && <Result data={value} />}
            </div>
            <div>
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
              />
            </div>

            <div>
              <label htmlFor="user-nickname">닉네임</label>
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
                id="nickName"
                name="user-nickname"
                type="text"
                placeholder="닉네임"
                value={nickname}
                onKeyPress={nickNameKeyPress}
                onChange={onNicknameHandler}
                className="loginregister_input"
              />
            </div>

            <div>
              <label htmlFor="user-password">비밀번호</label>
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
                  marginBottom: "10px",
                }}
                id="Password"
                name="user-password"
                type="password"
                placeholder="비밀번호"
                value={Password}
                onKeyPress={passwordKeyPress}
                onChange={onChangePassword}
                class="loginregister_input"
              />
              {errorPassword && (
                <div
                  class="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  비밀번호는 숫자와 문자를 포함하여 최소 8자 이상{" "}
                </div>
              )}{" "}
            </div>

            <div>
              <label htmlFor="confirmPassword">비밀번호 확인</label>
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
                  marginBottom: "5px",
                }}
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                onKeyPress={confirmPasswordKeyPress}
                id={confirmPassword}
                onChange={onChangeConfirmPassword}
                class="loginregister_input"
              />
              {confirmPasswordError && (
                <div
                  class="invalid-input"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="gender"
                style={{
                  marginBottom: "10px",
                  marginTop: "10px",
                }}
              >
                성별
              </label>
              <select className="form-control" id="gender">
                <option style={{ color: "gray" }} value="M">
                  {" "}
                  남
                </option>
                <option style={{ color: "gray" }} value="F">
                  여
                </option>
              </select>
            </div>

            <div>
              <label
                htmlFor="user-email"
                style={{
                  marginTop: "15px",
                }}
              >
                이메일
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
                }}
                id="email"
                name="user-email"
                type="text"
                placeholder="이메일"
                value={email}
                onKeyPress={emailKeyPress}
                onChange={onChangeEmail}
                className="loginregister_input"
              />
              {errorEmail && (
                <div
                  class="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  올바른 형식이 아닙니다.
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
                  class="invalid-input"
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
            <details>
              <summary
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                일반회원 약관동의
              </summary>
              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="all-check"
                  checked={allCheck}
                  onChange={allBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="all-check">
                  전체동의
                </label>
              </div>

              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="check1"
                  checked={ageCheck}
                  onChange={ageBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check1">
                  만 14세 이상입니다{" "}
                  <span style={{ color: "deepskyblue" }} className="stylesblue">
                    (필수)
                  </span>
                </label>
              </div>
              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="check2"
                  checked={useCheck}
                  onChange={useBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check2">
                  이용약관{" "}
                  <span style={{ color: "deepskyblue" }} className="stylesblue">
                    (필수)
                  </span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="check3"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check3">
                  마케팅 동의{" "}
                  <span style={{ color: "gray" }} className="stylesgray">
                    (선택)
                  </span>
                </label>
              </div>
            </details>

            <div>
              <input
                style={{
                  width: "420px",
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
                type="submit"
                className="loginregister_button"
                value="회원가입"
              />
            </div>
          </Tab>

          <Tab eventKey="second" title="사업자회원가입">
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
              사업자 회원가입{" "}
            </p>
            <br />
            <br />

            <div>
              <label
                htmlFor="pro-id"
                style={{
                  marginTop: "20px",
                }}
              >
                아이디
              </label>
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
                }}
                name="pro-id"
                type="id"
                placeholder="아이디"
                value={proId}
                onChange={onChangeProId}
                class="loginregister_input"
              />{" "}
              {errorProId && (
                <div
                  class="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  아이디는 숫자를 포함하여 최소 5자 이상
                </div>
              )}
              <button
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
              >
                아이디 중복확인
              </button>
            </div>

            <div>
              <label htmlFor="pro-name">상호명</label>
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
                name="pro-name"
                type="text"
                placeholder="이름"
                value={proName}
                onChange={onProNameHandler}
                className="loginregister_input"
              />
            </div>

            <div>
              <label htmlFor="pro-password">비밀번호</label>
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
                  marginBottom: "10px",
                }}
                name="pro-password"
                type="password"
                placeholder="비밀번호"
                value={proPassword}
                onChange={onChangeProPassword}
                className="loginregister_input"
              />
              {errorProPassword && (
                <div
                  className="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  비밀번호는 숫자와 문자를 포함하여 최소 8자 이상{" "}
                </div>
              )}{" "}
            </div>

            <div>
              <label htmlFor="confirmProPassword">비밀번호 확인</label>
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
                  marginBottom: "5px",
                }}
                name="confirmProPassword"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmProPassword}
                onChange={onChangeConfirmProPassword}
                className="loginregister_input"
              />
              {confirmProPasswordError && (
                <div
                  className="invalid-input"
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  {" "}
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="pro-phone"
                style={{
                  marginTop: "15px",
                }}
              >
                사업자 번호
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
                  marginBottom: "10px",
                }}
                name="pro-phone"
                type="text"
                placeholder="-를 제외하고 숫자만 입력하세요"
                value={proNumber}
                onChange={onChangeProNumber}
                className="loginregister_input"
              />{" "}
              {errorProNumber && (
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
              <label
                htmlFor="pro-email"
                style={{
                  marginTop: "15px",
                }}
              >
                이메일
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
                }}
                name="pro-email"
                type="text"
                placeholder="이메일"
                value={proEmail}
                onChange={onChangeProEmail}
                className="loginregister_input"
              />
              {errorProEmail && (
                <div
                  className="invalid-input"
                  style={{
                    color: "deepskyblue",
                    fontSize: "12px",
                    marginBottom: "10px",
                  }}
                >
                  올바른 형식이 아닙니다.
                </div>
              )}
            </div>

            <div>
              <label
                htmlFor="pro-phone"
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
                name="pro-phone"
                type="text"
                placeholder="-를 제외하고 숫자만 입력하세요"
                value={proPhone}
                onChange={onChangeProPhone}
                className="loginregister_input"
              />
              {errorProPhone && (
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

            <details>
              <summary
                style={{
                  cursor: "pointer",
                  marginBottom: "10px",
                }}
              >
                사업자회원 약관동의
              </summary>
              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="all-check"
                  checked={allCheck}
                  onChange={allBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="all-check">
                  전체동의
                </label>
              </div>

              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="check1"
                  checked={ageCheck}
                  onChange={ageBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check1">
                  만 14세 이상입니다{" "}
                  <span style={{ color: "deepskyblue" }} className="stylesblue">
                    (필수)
                  </span>
                </label>
              </div>
              <div>
                <input
                  style={{
                    marginBottom: "5px",
                  }}
                  type="checkbox"
                  id="check2"
                  checked={useCheck}
                  onChange={useBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check2">
                  이용약관{" "}
                  <span style={{ color: "deepskyblue" }} className="stylesblue">
                    (필수)
                  </span>
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="check3"
                  checked={marketingCheck}
                  onChange={marketingBtnEvent}
                />
                <label style={{ fontSize: "14px" }} htmlFor="check3">
                  마케팅 동의{" "}
                  <span style={{ color: "gray" }} className="stylesgray">
                    (선택)
                  </span>
                </label>
              </div>
            </details>
            <div>
              <button
                style={{
                  width: "420px",
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
                type="submit"
                className="loginregister_button"
              >
                회원가입
              </button>
            </div>
          </Tab>
        </Tabs>
      </form>
    </div>
  );
}

export default SignUp;
