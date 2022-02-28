import React, {useCallback, useRef, useState} from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";
// import { Avatar } from 'antd';

const ErrorMessage = styled.div`
`;

function SignUp() {
  const [name, setName] = useState("")
  const [Id, setId] = useState("");
  const [checkId, setCheckId] = useState("")
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState(false);
  const [nickname, setNickname] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = useCallback((e) => {
    setConfirmPassword(e.currentTarget.value);
    setErrorPassword(e.currentTarget.value !== Password);
  }, [Password]);

  const [term, setTerm] = useState('');
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  // const [Image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")
  // const fileInput = useRef(null)


  // const onPasswordSubmit = (event) => {
  //   event.preventDefault()
  //   if(Password !== confirmPassword) {
  //     return alert('비밀번호가 일치하지 않습니다.')
  //   }
  // }

  // const onIdSubmit = (event) => {
  //   event.preventDefault()
  //   if(Id == checkId) {
  //     return alert('이미 사용중인 아이디입니다.')
  //   }
  // }
  //
  // const onEmailSubmit = (event) => {
  //   event.preventDefault()
  //   if(email == checkEmail) {
  //     return alert('이미 사용중인 이메일입니다.')
  //   }
  // }
  // const onSubmitHandler = (e) => {
  //   e.preventDefault();
  //
  // };

  const onSubmit = useCallback(() => {
    if (Password !== confirmPassword) {
      return setErrorPassword(true)
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(Id, nickname, Password)
  }, [Password, confirmPassword, term]);

  return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '40vh'
      }} class="SignUp">
        <form onSubmit={onSubmit}>
          <p style={{marginTop: "500px", display: "flex", flexDirection: "column", fontSize: "25px"}}> 회원가입 </p>
          <br/><br/>

                  <div className="profile">
                    <div className="avatar stagger-item">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{
                        width: "180px", height: "180px"
                      }}alt="Circle Image" className="img-raised rounded-circle img-fluid"/>
                      <button style={{ width: "180px", height: "30px",fontSize: "14px", padding: "13px 30px", cursor: "pointer",
                        backgroundColor: "darkslategrey", color: "white", lineHeight: "1px", marginTop: "20px", marginBottom: "12px",borderRadius: "3px",
                        borderStyle: "none"
                      }} type="submit" className="profile_button">프로필 업로드
                      </button>
                    </div>
                  </div>

          <div>
            <label htmlFor="user-id" style={{
              marginTop: "20px"
            }}>아이디</label>
            <input style={{marginTop: "10px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="user-id" type="id" placeholder="아이디" value={Id} onChange={onIdHandler} class="loginregister_input"/>
            <button style={{
              width: "100%", height: "30px", fontSize: "14px", padding: "13px 30px", cursor:"pointer", backgroundColor: "darkslategrey",
              color:"white", lineHeight: "1px", borderRadius: "3px", borderStyle:"none", marginBottom:"10px"
            }} type="submit" class="loginregister_button" onSubmit={onSubmit}>아이디 중복확인</button>
          </div>

          <div><label htmlFor="user-nickname">닉네임</label>
            <input style={{
            marginTop: "10px", borderRadius: "2px", width: "100%", height: "40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box", marginBottom:"10px"
          }} name="user-nickname" type="text" placeholder="닉네임" value={nickname} onChange={onNameHandler} className="loginregister_input"/></div>

          <div><label htmlFor="user-password">비밀번호</label>
            <input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box", marginBottom:"10px"
          }} name="user-password" type="password" placeholder="비밀번호" value={Password} onChange={onPasswordHandler} class="loginregister_input"/></div>
          
          <div><label htmlFor="confirmPassword">비밀번호 확인</label>
            <input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box", marginBottom:"5px"
          }} name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister_input"/>
            {errorPassword && <ErrorMessage style={{
              color: "red", fontSize: "12px", marginBottom:"10px"
            }}>비밀번호가 일치하지 않습니다.</ErrorMessage>}
          </div>

          <div><label htmlFor="user-email" style={{
            marginTop: "15px"
          }}>이메일</label>
            <input style={{
            marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box", marginBottom:"10px"
          }} name="user-email" type="text" placeholder="이메일" value={email} onChange={onNameHandler} className="loginregister_input"/></div>

          <div>
            <input type="checkbox" name="user-term" checked={term} onChange={onChangeTerm}/>아래 약관에 모두 동의합니다.

            {termError && <ErrorMessage  style={{
              color: "red", fontSize: "12px", marginBottom:"10px"
            }}>약관에 동의하셔야 합니다.</ErrorMessage>}
          </div>

          <div><button style={{
            width: "420px", height: "40px", fontSize: "14px", padding: "13px 30px", cursor:"pointer", backgroundColor: "black",
            color:"white", lineHeight: "1px", marginTop: "20px", marginBottom: "12px", borderRadius: "3px", borderStyle:"none"
          }} type="submit" class="loginregister_button">회원가입</button></div>
        </form>
      </div>
  );
}
export default SignUp;