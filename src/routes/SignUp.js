import React, {useState} from 'react'


function SignUp() {
  const [name, setName] = useState("")
  const [Id, setId] = useState("");
  const [checkId, setCheckId] = useState("")
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [checkEmail, setCheckEmail] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onIdHandler = (event) => {
    setId(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value)
  }


  const onPasswordSubmit = (event) => {
    event.preventDefault()
    if(Password !== confirmPassword) {
      return alert('비밀번호가 일치하지 않습니다.')
    }
  }

  const onIdSubmit = (event) => {
    event.preventDefault()
    if(Id == checkId) {
      return alert('이미 사용중인 아이디입니다.')
    }
  }

  const onEmailSubmit = (event) => {
    event.preventDefault()
    if(email == checkEmail) {
      return alert('이미 사용중인 이메일입니다.')
    }
  }


  return (
      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        width: '100%', height: '40vh'
      }} class="SignUp">
        <form>
          <p style={{display: "flex", flexDirection: "column", fontSize: "25px"}}> 회원가입 </p>
          <br/><br/>



          <div><input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="id" type="id" placeholder="아이디" value={Id} onChange={onIdHandler} class="loginregister_input"/></div>

          <div><input style={{
            marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="name" type="text" placeholder="닉네임" value={name} onChange={onNameHandler} className="loginregister_input"/></div>

          <div><input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="password" type="password" placeholder="비밀번호" value={Password} onChange={onPasswordHandler} class="loginregister_input"/></div>
          <div><input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} class="loginregister_input"/></div>

          <div><input style={{
            marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
            border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
          }} name="email" type="text" placeholder="이메일" value={email} onChange={onNameHandler} className="loginregister_input"/></div>

          <div><button style={{
            width: "350px", height: "40px", fontSize: "14px", padding: "13px 30px", cursor:"pointer", backgroundColor: "black",
            color:"white", lineHeight: "1px", marginTop: "20px", marginBottom: "12px", borderRadius: "3px", borderStyle:"none"
          }} type="submit" class="loginregister_button">회원가입</button></div>
        </form>
      </div>
  );
}
export default SignUp;