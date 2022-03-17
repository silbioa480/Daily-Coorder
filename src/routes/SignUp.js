import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Result } from "antd";
import PopUp from "../components/PopUp";
import "../css/SignUp.css";
import "../css/main/animation.css";
import UserService from "../service/UserService";
import MemberIdService from "../service/MemberIdService";
import BusinessService from "../service/BusinessService";
import ProfileImageService from "../service/ProfileImageService";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { saltKey } from "../atom";
import Swal from "sweetalert2";

function SignUp() {
  //모달관련
  const [popup, setPopup] = useState({
    open: false,
    title: "",
    message: "",
    callback: false,
  });

  const history = new useHistory();

  const salt = useRecoilValue(saltKey);

  //일반회원
  const [fileImage, setFileImage] = useState("/signup/profile.png");
  const [name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [birth, setBirth] = useState("");
  const [imageFile, setImageFile] = useState();

  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorBirth, setErrorBirth] = useState("");

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
  const [totalCheck, setTotalCheck] = useState(false);
  const [personCheck, setPersonCheck] = useState(false);
  const [gpsCheck, setGpsCheck] = useState(false);

  const [inputs, setInputs] = useState({ Id: "" });
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

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };

  const onProNameHandler = (e) => {
    setProName(e.currentTarget.value);
  };
  const saveFileImage = (e) => {
    setImageFile(e.target.files[0]);
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("/signup/profile.png");
  };

  const onChangeBirth = (e) => {
    const birthRegex = /^[0-9+]{6,}$/;
    if (!e.target.value || birthRegex.test(e.target.value))
      setErrorBirth(false);
    else setErrorBirth(true);
    setBirth(e.currentTarget.value);
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

  const onChangeHeight = (e) => {
    setHeight(e.target.value);
  };

  const onChangeWeight = (e) => {
    setWeight(e.target.value);
  };

  /* 여기서부터 약관동의 기능 구현*/
  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
      setTotalCheck(true);
      setPersonCheck(true);
      setGpsCheck(true);
    } else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
      setTotalCheck(false);
      setPersonCheck(false);
      setGpsCheck(false);
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

  const totalBtnEvent = () => {
    if (totalCheck === false) {
      setTotalCheck(true);
    } else {
      setTotalCheck(false);
    }
  };

  const personBtnEvent = () => {
    if (personCheck === false) {
      setPersonCheck(true);
    } else {
      setPersonCheck(false);
    }
  };

  const gpsBtnEvent = () => {
    if (gpsCheck === false) {
      setGpsCheck(true);
    } else {
      setGpsCheck(false);
    }
  };

  useEffect(() => {
    if (
      ageCheck === true &&
      useCheck === true &&
      marketingCheck === true &&
      totalCheck === true &&
      personCheck === true &&
      gpsCheck
    ) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [ageCheck, useCheck, marketingCheck, totalCheck, personCheck, gpsCheck]);

  /* 여기까지 약관동의 기능 구현*/

  //일반회원가입 정규성검사(회원가입 성공/ 실패 모달창에 적용)
  const validation1 = () => {
    if (!Id) setErrorId(true);
    if (!Password) setErrorPassword(true);
    if (!confirmPassword) setConfirmPasswordError(true);
    if (!name) setErrorEmail(true);
    if (!email) setErrorEmail(true);
    if (!phoneNumber) setErrorPhoneNumber(true);
    if (!birth) setErrorBirth(true);
    if (!ageCheck) setAgeCheck(false);
    if (!useCheck) setUseCheck(false);
    if (!personCheck) setPersonCheck(false);
    if (!totalCheck) setTotalCheck(false);

    if (
      Id &&
      Password &&
      confirmPassword &&
      name &&
      email &&
      ageCheck &&
      phoneNumber &&
      useCheck &&
      personCheck &&
      totalCheck &&
      birth
    )
      return true;
    else return false;
  };

  //사업자회원가입 정규성검사(회원가입 성공/ 실패 모달창에 적용)
  const validation2 = () => {
    if (!proId) setErrorProId(true);
    if (!proPassword) setErrorProPassword(true);
    if (!confirmProPassword) setConfirmProPasswordError(true);
    if (!proName) setErrorProName(true);
    if (!proEmail) setErrorProEmail(true);
    if (!phoneNumber) setErrorProPhone(true);
    if (!proNumber) setErrorProNumber(true);
    if (!ageCheck) setAgeCheck(false);
    if (!useCheck) setUseCheck(false);
    if (!personCheck) setPersonCheck(false);
    if (!totalCheck) setTotalCheck(false);

    if (
      proId &&
      proPassword &&
      confirmProPassword &&
      proName &&
      proEmail &&
      phoneNumber &&
      proNumber &&
      ageCheck &&
      useCheck &&
      personCheck &&
      totalCheck
    )
      return true;
    else return false;
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if (!validation1()) {
      setPopup({
        open: true,
        title: "회원가입 실패ㅠㅠ",
        message: "기입사항을 정확하게 기입해주세요!!",
      });
      return;
    }

    let formData = new FormData();
    formData.append("file", imageFile);

    let i = await ProfileImageService.createProfileImage(formData).then(
      (res) => res.data
    );

    let sel = document.getElementById("gender");
    let val = sel.options[sel.selectedIndex].value === "M";

    let CryptoJS = require("crypto-js");
    let hash = CryptoJS.AES.encrypt(Password, salt).toString();

    let user = {
      user_id: Id,
      user_profile: i,
      user_password: hash,
      user_name: name,
      user_nickname: nickname,
      user_phone: phoneNumber,
      user_email: email,
      user_gender: val,
      user_birth: new Date(birth),
      user_weights: weight,
      user_height: height,
      user_follow_number: 0,
      user_follower_number: 0,
      user_is_ad: marketingCheck,
      user_is_location: gpsCheck,
      user_is_admin: false,
      user_signup_date: new Date(),
    };

    await UserService.createUser(user);

    let member = {
      member_id: Id,
      member_password: hash,
      is_business: false,
    };

    await MemberIdService.createId(member);

    setPopup({
      open: true,
      title: "회원가입 성공♡♡",
      message: "회원가입에 성공했습니다!!!!",
      callback: function () {},
    });

    history.push("/login");
  };

  const onProSubmitHandler = async (e) => {
    e.preventDefault();
    if (!validation2()) {
      setPopup({
        open: true,
        title: "회원가입 실패ㅠㅠ",
        message: "기입사항을 정확하게 기입해주세요!!",
      });
      return;
    }

    let formData = new FormData();
    formData.append("file", imageFile);

    let i = await ProfileImageService.createProfileImage(formData).then(
      (res) => res.data
    );

    let CryptoJS = require("crypto-js");
    let hash = CryptoJS.AES.encrypt(Password, salt).toString();

    let pro = {
      business_id: proId,
      business_profile: i,
      business_password: hash,
      business_name: proName,
      business_number: proNumber,
      business_phone: proPhone,
      business_email: proEmail,
      business_follow_number: 0,
      business_follower_number: 0,
      business_is_ad: marketingCheck,
      business_is_location: gpsCheck,
      business_signup_date: new Date(),
    };

    await BusinessService.createBusiness(pro);

    let member = {
      member_id: Id,
      member_password: hash,
      is_business: false,
    };

    await MemberIdService.createId(member);

    await Swal.fire({
      icon: "success",
      title: "회원가입이 완료되었습니다.",
    });

    history.push("/login");
  };

  //아이디 중복확인 샘플 데이터가 없어서 일단 이렇게 만들었음

  const overSubmitHandler = async (e) => {
    e.preventDefault();

    if (Id === "") {
      setPopup({
        open: true,
        title: "실패!",
        message: "아이디를 입력해주세요.",
      });

      return;
    }

    let exist;
    try {
      exist = await MemberIdService.getIdById(Id);
    } catch (err) {}
    if (exist !== undefined) {
      setPopup({
        open: true,
        title: "실패!",
        message: "이미 사용중인 아이디입니다!!",
      });
      return;
    } else {
    }
    setPopup({
      open: true,
      title: "통과 !!",
      message: "사용가능 합니다!",
    });
  };
  return (
    <div className="bb signup">
      <PopUp
        open={popup.open}
        setPopup={setPopup}
        message={popup.message}
        title={popup.title}
        callback={popup.callback}
      />
      <form className="signup_form">
        <Tabs defaultActiveKey="first">
          <Tab eventKey="first" title="일반회원가입" className="signup_tab">
            <p className="signup_upper_font"> 회원가입 </p>

            <div className="blue-line-out">
              <div className="blue-line-in"></div>
            </div>
            <div className="yellow-line-out">
              <div className="yellow-line-in"></div>
            </div>
            <div className="signup_profile">
              <div className="avatar stagger-item">
                <img
                  src={fileImage}
                  alt="sample"
                  className="signup_profile_img rounded-circle"
                />
              </div>
              <div>
                <label type="submit" className="signup_profile_upbtn">
                  프로필등록
                  <input
                    className="signup_profile_upbtn"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={saveFileImage}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="signup_font" htmlFor="user-id">
                아이디
              </label>
              <br />
              <input
                className="signup_id_inputs"
                id="Id"
                name="user-id"
                type="id"
                placeholder="아이디"
                value={Id}
                onChange={onChangeId}
              />{" "}
              {errorId && (
                <div className="signup_input_valid">
                  {" "}
                  아이디는 숫자를 포함하여 최소 5자 이상
                </div>
              )}
              <button
                type="submit"
                className="signup_idchk_btn"
                hidden={show}
                onClick={overSubmitHandler}
              >
                중복확인
              </button>
              {show && <Result data={value} />}
            </div>

            <div>
              <label className="signup_font" htmlFor="user-name">
                이름
              </label>
              <input
                className="signup_inputs"
                id="name"
                name="user-name"
                type="text"
                placeholder="이름"
                value={name}
                onChange={onNameHandler}
              />
            </div>
            <div>
              <label className="signup_font" htmlFor="user-nickname">
                닉네임
              </label>
              <br />
              <input
                className="signup_id_inputs"
                id="nickName"
                name="user-nickname"
                type="text"
                placeholder="닉네임"
                value={nickname}
                onChange={onNicknameHandler}
              />
              <button
                type="submit"
                className="signup_idchk_btn"
                hidden={show}
                onClick={overSubmitHandler}
                style={{ marginLeft: "5px" }}
              >
                중복확인
              </button>
              {show && <Result data={value} />}
            </div>

            <div>
              <label className="signup_font" htmlFor="user-password">
                비밀번호
              </label>
              <input
                className="signup_inputs"
                id="Password"
                name="user-password"
                type="password"
                placeholder="비밀번호"
                value={Password}
                onChange={onChangePassword}
              />
              {errorPassword && (
                <div className="signup_input_valid">
                  비밀번호는 숫자와 문자를 포함하여 최소 8자 이상{" "}
                </div>
              )}{" "}
            </div>

            <div>
              <label className="signup_font" htmlFor="confirmPassword">
                비밀번호 확인
              </label>
              <input
                className="signup_inputs"
                name="confirmPassword"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmPassword}
                id={confirmPassword}
                onChange={onChangeConfirmPassword}
              />
              {confirmPasswordError && (
                <div
                  className="signup_input_valid"
                  style={{
                    color: "red",
                  }}
                >
                  {" "}
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="birth">
                생년월일
              </label>
              <input
                className="signup_inputs"
                id="birth"
                name="birth"
                type="date"
                placeholder="생년월일 6자를 입력해주세요"
                value={birth}
                onChange={onChangeBirth}
              />
              {errorBirth && (
                <div className="signup_input_valid">
                  생년월일 6자를 입력해주세요
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="gender">
                성별
              </label>
              <select className="signup_gender_control" id="gender">
                <option value="M">남</option>
                <option value="F">여</option>
              </select>
            </div>

            <div>
              <label
                className="signup_font"
                htmlFor="user-email"
                style={{
                  marginTop: "15px",
                }}
              >
                이메일
              </label>
              <input
                className="signup_inputs"
                id="email"
                name="user-email"
                type="email"
                placeholder="이메일"
                value={email}
                onChange={onChangeEmail}
              />
              {errorEmail && (
                <div className="signup_input_valid">
                  올바른 형식이 아닙니다.
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="user-phone">
                휴대폰 번호
              </label>
              <input
                className="signup_inputs"
                id="phoneNumber"
                name="user-phone"
                type="text"
                placeholder="-를 제외하고 숫자만 입력하세요"
                value={phoneNumber}
                onChange={onChangePhoneNumber}
                style={{ marginBottom: "15px" }}
              />
              {errorPhoneNumber && (
                <div className="signup_input_valid">숫자만 입력하세요</div>
              )}
            </div>

            <h5
              style={{
                color: "gray",
              }}
            >
              선택항목
            </h5>
            <br />
            <div>
              <label className="signup_size_font" htmlFor="height">
                키
              </label>
              <input
                id="height"
                name="height"
                type="text"
                value={height}
                onChange={onChangeHeight}
                className="signup_size_input"
              />
              cm
              <label
                className="signup_size_font"
                htmlFor="weight"
                style={{
                  marginLeft: "20px",
                  marginTop: "5px",
                }}
              >
                몸무게
              </label>
              <input
                className="signup_size_input"
                id="weight"
                name="weight"
                type="text"
                value={weight}
                onChange={onChangeWeight}
              />
              kg
            </div>
            <div className="blue-line-out">
              <div className="blue-line-in"></div>
            </div>
            <div className="yellow-line-out">
              <div className="yellow-line-in"></div>
            </div>
            <details>
              <summary className="signup_summary">
                일반회원 약관동의{" "}
                <span style={{ color: "gray" }}>(펼쳐보기)</span>
              </summary>
              <div className="term_form">
                <h2 className="term_font">
                  데일리코더(Daily Cooder)
                  <br />
                  서비스 약관에 동의해 주세요!
                </h2>
                <hr style={{ color: "#015bbb" }}></hr>

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
                  <label className="chk_font" htmlFor="all-check">
                    모두 동의합니다!
                  </label>
                  <p className="term_low_font">
                    전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                    개별적으로도 동의를 선택하실 수 있습니다.
                    <br />
                    선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이
                    가능합니다.
                  </p>
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
                    <span className="chk_font_blue">[필수]</span>만 14세
                    이상입니다{" "}
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
                    <span className="chk_font_blue">[필수]</span>
                    데일리코더계정 약관{" "}
                  </label>
                </div>
                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check4"
                    checked={totalCheck}
                    onChange={totalBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check4">
                    <span className="chk_font_blue">[필수]</span>
                    데일리코더 통합서비스 약관{" "}
                  </label>
                </div>
                <p className="term_low_font">
                  본 약관은 데일리코더가 제공하는 서비스에 적용되며, 본 약관에
                  동의함으로써 해당 서비스들을 이용할 수 있습니다.
                </p>

                <div>
                  <input
                    type="checkbox"
                    id="check3"
                    checked={marketingCheck}
                    onChange={marketingBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check3">
                    <span className="chk_font_gray">[선택]</span>
                    광고메세지 수신{" "}
                  </label>
                </div>

                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check5"
                    checked={personCheck}
                    onChange={personBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check5">
                    <span className="chk_font_blue">[필수]</span>
                    개인정보 수집 및 이용 동의{" "}
                  </label>
                </div>

                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check6"
                    checked={gpsCheck}
                    onChange={gpsBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check6">
                    <span className="chk_font_gray">[선택]</span>
                    위치정보 수집 및 이용 동의{" "}
                  </label>
                </div>
              </div>
            </details>

            <div>
              <button
                type="button"
                onClick={onSubmitHandler}
                className="signup_btn"
              >
                <b>회 원 가 입</b>
              </button>
            </div>
          </Tab>

          <Tab
            className="signup_tab"
            eventKey="second"
            title="사업자회원가입"
            onSubmit={onProSubmitHandler}
          >
            <p className="signup_upper_font"> 사업자 회원가입 </p>

            <div className="blue-line-out">
              <div className="blue-line-in"></div>
            </div>
            <div className="yellow-line-out">
              <div className="yellow-line-in"></div>
            </div>
            <div className="signup_profile">
              <div className="avatar stagger-item">
                <img
                  src={fileImage}
                  alt="sample"
                  className="signup_profile_img rounded-circle"
                />
              </div>
              <div>
                <label type="submit" className="signup_profile_upbtn">
                  로고등록
                  <input
                    className="signup_profile_upbtn"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={saveFileImage}
                  />
                </label>
              </div>
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-id">
                아이디
              </label>
              <br />
              <input
                className="signup_id_inputs"
                style={{ width: "70%" }}
                id="proId"
                name="pro-id"
                type="id"
                placeholder="아이디"
                value={proId}
                onChange={onChangeProId}
              />{" "}
              {errorProId && (
                <div className="signup_input_valid">
                  {" "}
                  아이디는 숫자를 포함하여 최소 5자 이상
                </div>
              )}
              <button
                className="signup_idchk_btn"
                style={{ width: "27%" }}
                type="submit"
                onClick={overSubmitHandler}
              >
                중복확인
              </button>
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-name">
                상호명
              </label>
              <input
                className="signup_inputs"
                id="proName"
                name="pro-name"
                type="text"
                placeholder="이름"
                value={proName}
                onChange={onProNameHandler}
              />{" "}
              {errorProName && (
                <div className="signup_input_valid">
                  상호명 형식이 올바르지 않습니다.
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-password">
                비밀번호
              </label>
              <input
                className="signup_inputs"
                id="proPassword"
                name="pro-password"
                type="password"
                placeholder="비밀번호"
                value={proPassword}
                onChange={onChangeProPassword}
              />
              {errorProPassword && (
                <div className="signup_input_valid">
                  비밀번호는 숫자와 문자를 포함하여 최소 8자 이상{" "}
                </div>
              )}{" "}
            </div>

            <div>
              <label className="signup_font" htmlFor="confirmProPassword">
                비밀번호 확인
              </label>
              <input
                className="signup_inputs"
                id="confirmProPassword"
                name="confirmProPassword"
                type="password"
                placeholder="비밀번호 확인"
                value={confirmProPassword}
                onChange={onChangeConfirmProPassword}
              />
              {confirmProPasswordError && (
                <div className="signup_input_valid">
                  {" "}
                  비밀번호가 일치하지 않습니다.
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-phone">
                사업자 번호
              </label>
              <input
                className="signup_inputs"
                id="proNumber"
                name="pro-number"
                type="text"
                placeholder="-를 제외하고 숫자만 입력하세요"
                value={proNumber}
                onChange={onChangeProNumber}
              />{" "}
              {errorProNumber && (
                <div className="signup_input_valid">숫자만 입력하세요</div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-email">
                이메일
              </label>
              <input
                className="signup_inputs"
                id="proEmail"
                name="pro-email"
                type="email"
                placeholder="이메일"
                value={proEmail}
                onChange={onChangeProEmail}
              />
              {errorProEmail && (
                <div className="signup_input_valid">
                  올바른 형식이 아닙니다.
                </div>
              )}
            </div>

            <div>
              <label className="signup_font" htmlFor="pro-phone">
                휴대폰 번호
              </label>
              <input
                className="signup_inputs"
                id="proPhone"
                name="pro-phone"
                type="text"
                placeholder="-를 제외하고 숫자만 입력하세요"
                value={proPhone}
                onChange={onChangeProPhone}
                style={{ marginBottom: "15px" }}
              />
              {errorProPhone && (
                <div className="signup_input_valid">숫자만 입력하세요</div>
              )}
            </div>
            <div className="blue-line-out">
              <div className="blue-line-in"></div>
            </div>
            <div className="yellow-line-out">
              <div className="yellow-line-in"></div>
            </div>

            <details>
              <summary className="signup_summary">
                사업자회원 약관동의{" "}
                <span style={{ color: "gray" }} className="stylesgray">
                  (펼쳐보기)
                </span>
              </summary>
              <div className="term_form">
                <h2 className="term_font">
                  데일리코더(Daily Cooder)
                  <br />
                  서비스 약관에 동의해 주세요!
                </h2>
                <hr />

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
                  <label className="chk_font" htmlFor="all-check">
                    모두 동의합니다!
                  </label>
                  <p className="term_low_font">
                    전체 동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며,
                    개별적으로도 동의를 선택하실 수 있습니다.
                    <br />
                    선택항목에 대한 동의를 거부하시는 경우에도 서비스는 이용이
                    가능합니다.
                  </p>
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
                    <span className="chk_font_blue">[필수]</span>만 14세
                    이상입니다{" "}
                  </label>
                </div>

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
                  <span className="chk_font_blue">[필수]</span>
                  데일리코더계정 약관{" "}
                </label>

                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check4"
                    checked={totalCheck}
                    onChange={totalBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check4">
                    <span className="chk_font_blue">[필수]</span>
                    데일리코더 통합서비스 약관{" "}
                  </label>
                </div>
                <p className="term_low_font">
                  본 약관은 데일리코더가 제공하는 서비스에 적용되며, 본 약관에
                  동의함으로써 해당 서비스들을 이용할 수 있습니다.
                </p>

                <div>
                  <input
                    type="checkbox"
                    id="check3"
                    checked={marketingCheck}
                    onChange={marketingBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check3">
                    <span className="chk_font_gray">[선택]</span>
                    광고메세지 수신{" "}
                  </label>
                </div>

                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check5"
                    checked={personCheck}
                    onChange={personBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check5">
                    <span className="chk_font_blue">[필수]</span>
                    개인정보 수집 및 이용 동의{" "}
                  </label>
                </div>

                <div>
                  <input
                    style={{
                      marginBottom: "5px",
                    }}
                    type="checkbox"
                    id="check6"
                    checked={gpsCheck}
                    onChange={gpsBtnEvent}
                  />
                  <label style={{ fontSize: "14px" }} htmlFor="check6">
                    <span className="chk_font_gray">[선택]</span>
                    위치정보 수집 및 이용 동의{" "}
                  </label>
                </div>
              </div>
            </details>

            <div className="common_button_out">
              <button
                className="common_button"
                type="button"
                onClick={onProSubmitHandler}
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
