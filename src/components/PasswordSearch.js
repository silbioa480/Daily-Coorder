import { Link } from "react-router-dom";
import React, { useState } from "react";
import $ from "jquery";
import PopUp from "./PopUp";
import "../css/Search.css";

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
        title: "???????????? ?????? ??????????????????",
        message: "???????????? ??????????????????!!",
      });
      return;
    }

    if (validCheckName("")) {
      setPopup({
        open: true,
        title: "???????????? ?????? ??????????????????",
        message: "????????? ??????????????????!!",
      });
      return;
    }

    if (validCheckPhoneNumber("")) {
      setPopup({
        open: true,
        title: "???????????? ?????? ??????????????????",
        message: "????????? ????????? ??????????????????!!",
      });
      return;
    }

    if (!validation5()) {
      setPopup({
        open: true,
        title: "???????????? ?????? ??????????????????",
        message: "????????? ???????????? ?????????!!",
      });
      return;
    } else {
    }
    setPopup({
      open: true,
      title: "???????????? ?????? ??????!!",
      message: "???????????? ??????????????? '????????????' ?????????!!",
      callback: function () { },
    });
    if (validation5()) return;
  };

  return (
    <div className="signup_container">
      <div className="search_signup">
        <PopUp
          open={popup.open}
          setPopup={setPopup}
          message={popup.message}
          title={popup.title}
          callback={popup.callback}
        />
        <form onSubmit={onSubmitHandler}>
          <p className="search_upper_font"> ???????????? ?????? </p>
          <br />
          <br />
          <div className="blue-line-out">
            <div className="blue-line-in"></div>
          </div>
          <div className="yellow-line-out">
            <div className="yellow-line-in"></div>
          </div>

          <div>
            <label htmlFor="user-id" className="search_font">
              ?????????
            </label>
            <input
              className="search_inputs"
              id="Id"
              name="user-id"
              type="id"
              placeholder="?????????"
              value={Id}
              onChange={onChangeId}
            />
            <label htmlFor="user-name" className="search_font">
              ??????
            </label>
            <input
              className="search_inputs"
              id="name"
              name="user-name"
              type="text"
              placeholder="??????"
              value={name}
              onChange={onNameHandler}
            />{" "}
          </div>
          <div>
            <label htmlFor="user-phone" className="search_font">
              ????????? ??????
            </label>
            <input
              className="search_inputs"
              id="phoneNumber"
              name="user-phone"
              type="text"
              placeholder="-??? ???????????? ????????? ???????????????"
              value={phoneNumber}
              onChange={onChangePhoneNumber}
            />
            {errorPhoneNumber && (
              <div className="search_input_valid">????????? ???????????????</div>
            )}
          </div>
          <div className="common_button_box">
            <input
              className="common_button"
              type="submit"
              value="???????????? ??????"
            />
          </div>
          <div className="search_search">
            <Link to="/login/IdSearch">????????? ??????</Link> ||
            <Link to="/signup"> ???????????? </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PasswordSearch;
