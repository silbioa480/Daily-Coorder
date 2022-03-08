import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";
import PopUp from "./PopUp";
import "../css/Search.css";

function IdSearch() {
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorName, setErrorName] = useState(false);

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
  const validation4 = () => {
    if (!name) setErrorName(true);
    if (!phoneNumber) setErrorPhoneNumber(true);

    if (name && phoneNumber) return true;
    else return false;
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

    if (validCheckName("")) {
      setPopup({
        open: true,
        title: "아이디 찾기 실패ㅠㅠㅠㅠ",
        message: "이름을 입력해주세요!!",
      });
      return;
    }

    if (validCheckPhoneNumber("")) {
      setPopup({
        open: true,
        title: "아이디 찾기 실패ㅠㅠㅠㅠ",
        message: "휴대폰 번호를 입력해주세요!!",
      });
      return;
    }

    if (!validation4()) {
      setPopup({
        open: true,
        title: "아이디 찾기 실패ㅠㅠㅠㅠ",
        message: "정보가 일치하지 않아요!!",
      });
      return;
    } else {
    }
    setPopup({
      open: true,
      title: "아이디 찾기 성공!!",
      message: "회원님의 아이디는 '0000' 입니다!!",
      callback: function () {},
    });
    if (validation4()) return;
  };

  return (
    <>
      <div className="search_signup">
        <PopUp
          open={popup.open}
          setPopup={setPopup}
          message={popup.message}
          title={popup.title}
          callback={popup.callback}
        />
        <form onSubmit={onSubmitHandler}>
          <p className="search_upper_font"> 아이디 찾기 </p>
          <br />
          <br />
          <div className="blue-line-out">
            <div className="blue-line-in"></div>
          </div>
          <div className="yellow-line-out">
            <div className="yellow-line-in"></div>
          </div>
          <div>
            <label htmlFor="user-name" className="search_font">
              이름
            </label>
            <input
              className="search_inputs"
              id="name"
              name="user-name"
              type="text"
              placeholder="이름"
              value={name}
              onChange={onNameHandler}
            />{" "}
          </div>
          <div>
            <label className="search_font" htmlFor="user-phone">
              휴대폰 번호
            </label>
            <input
              className="search_inputs"
              id="phoneNumber"
              name="user-phone"
              type="text"
              placeholder="-를 제외하고 숫자만 입력하세요"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
            />
            {errorPhoneNumber && (
              <div className="search_input_valid">숫자만 입력하세요</div>
            )}
          </div>
          <div>
            <input
              type="submit"
              className="search_button"
              value="아이디 찾기"
            />
          </div>
          <div className="search_search">
            <Link to="/login/PasswordSearch">비밀번호 찾기</Link> ||
            <Link to="/signup"> 회원가입 </Link>
          </div>
        </form>
      </div>
    </>
  );
}

//
export default IdSearch;
