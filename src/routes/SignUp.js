import React, { useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';


function SignUp() {
  const [name, setName] = useState("")
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [term, setTerm] = useState('');
  const [proNumber, setProNumber] = useState("");

  // const [checkId, setCheckId] = useState("")
  // const [checkEmail, setCheckEmail] = useState("");
  // const [checkPhoneNumber, setCheckPhoneNumber] = useState("");
  // const [checkProNumber, setCheckProNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errorId, setErrorId] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [termError, setTermError] = useState(false);
  const [errorPhoneNumber, setErrorPhoneNumber] = useState(false);
  const [errorProNumber, setErrorProNumber] = useState(false);

  const [allCheck, setAllCheck] = useState(false);
  const [ageCheck, setAgeCheck] = useState(false);
  const [useCheck, setUseCheck] = useState(false);
  const [marketingCheck, setMarketingCheck] = useState(false);

  const onNicknameHandler = (event) => {
    setNickname(event.currentTarget.value)
  }
  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onChangePhoneNumber = (e) => {
    const phoneNumberRegex = /^[0-9\b -]{0,13}$/;
    if ((!e.target.value || (phoneNumberRegex.test(e.target.value)))) setErrorPhoneNumber(false);
    else setErrorPhoneNumber(true);
    setPhoneNumber(e.target.value);
  };

  const onProNumber = (e) => {
    const proNumberRegex = /^[0-9\b -]{0,13}$/;
    if ((!e.target.value || (proNumberRegex.test(e.target.value)))) setErrorProNumber(false);
    else setErrorProNumber(true);
    setProNumber(e.target.value);
  };

  const onChangeId = (e) => {
    const IdRegex = /^[A-Za-z0-9+]{5,}$/;
    if ((!e.target.value || (IdRegex.test(e.target.value)))) setErrorId(false);
    else setErrorId(true);
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if ((!e.target.value || (passwordRegex.test(e.target.value)))) setErrorPassword(false);
    else setErrorPassword(true);

    if (!confirmPassword || e.target.value === confirmPassword) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
  };
  const onChangeConfirmPassword = (e) => {
    if (Password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
  };

  const onChangeEmail = (e) => {
    const emailRegex = /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (!e.target.value || emailRegex.test(e.target.value)) setErrorEmail(false);
    else setErrorEmail(true);
    setEmail(e.target.value);
  };

  const onChangeTerm = (e) => {
    setTerm(e.target.checked);
    setTermError(false);
  };

  const validation = () => {
    if(!Id) setErrorId(true);
    if(!Password) setErrorPassword(true);
    if(!confirmPassword) setConfirmPasswordError(true);
    if(!name) setErrorEmail(true);
    if(!email) setErrorEmail(true);
    if(!term) setTermError(true);
    if(!phoneNumber) setErrorPhoneNumber(true);
    if(!proNumber) setErrorProNumber(true);

    if(Id && Password && confirmPassword && name && email && term && phoneNumber && proNumber) return true;
    else return false;
  }

  const onSubmit = (e) => {
    if(validation()) return;
  }

  const allBtnEvent =()=>{
    if(allCheck === false) {
      setAllCheck(true);
      setAgeCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    }else {
      setAllCheck(false);
      setAgeCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent =()=>{
    if(ageCheck === false) {
      setAgeCheck(true)
    }else {
      setAgeCheck(false)
    }
  };

  const useBtnEvent =()=>{
    if(useCheck === false) {
      setUseCheck(true)
    }else {
      setUseCheck(false)
    }
  };

  const marketingBtnEvent =()=>{
    if(marketingCheck === false) {
      setMarketingCheck(true)
    }else {
      setMarketingCheck(false)
    }
  };

  useEffect(()=>{
    if(ageCheck===true && useCheck===true && marketingCheck===true){
      setAllCheck(true)
    } else {
      setAllCheck(false)
    }
  }, [ageCheck,useCheck, marketingCheck])

    return (
        <div style={{
          display: 'flex', justifyContent: 'center',
          width: '100%', height: '40vh', marginTop: '50px'
        }} class="SignUp">
          <form onSubmit={onSubmit}>

              <Tabs defaultActiveKey="first">
                <Tab eventKey="first" title="일반회원가입">
                  <p style={{marginTop: "30px", flexDirection: "column", fontSize: "25px", display: 'block', width: 350, padding: 30}}> 회원가입 </p>
                  <br/><br/>
            <div className="profile">
              <div className="avatar stagger-item">
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" style={{
                   width: "180px", height: "180px"
                }} alt="Circle Image" className="img-raised rounded-circle img-fluid"/>
                <button style={{
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
                  borderStyle: "none"
                }} type="submit" className="profile_button">프로필 업로드
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="user-id" style={{
                marginTop: "20px"
              }}>아이디</label>
              <input style={{
                marginTop: "10px", borderRadius: "2px", width: "100%", height: "40px",
                border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
              }} name="user-id" type="id" placeholder="아이디" value={Id} onChange={onChangeId}
                     class="loginregister_input"/> {errorId && <div class="invalid-input" style={{
              color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
            }}> 아이디는 숫자를 포함하여 최소 5자 이상</div>}

              <button style={{
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
                marginBottom: "10px"
              }} type="submit" class="loginregister_button" onSubmit={onSubmit}>아이디 중복확인
              </button>
            </div>

            <div><label htmlFor="user-nickname">닉네임</label>
              <input style={{
                marginTop: "10px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "10px"
              }} name="user-nickname" type="text" placeholder="닉네임" value={nickname} onChange={onNicknameHandler}
                     className="loginregister_input"/></div>

            <div><label htmlFor="user-password">비밀번호</label>
              <input style={{
                marginTop: "15px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "10px"
              }} name="user-password" type="password" placeholder="비밀번호" value={Password} onChange={onChangePassword}
                     class="loginregister_input"/>{errorPassword && <div class="invalid-input" style={{
                color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
              }}>비밀번호는 숫자와 문자를 포함하여 최소 8자 이상 </div>} </div>

            <div><label htmlFor="confirmPassword">비밀번호 확인</label>
              <input style={{
                marginTop: "15px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "5px"
              }} name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword}
                     onChange={onChangeConfirmPassword} class="loginregister_input"/>
              {confirmPasswordError && <div class="invalid-input" style={{
                color: "red", fontSize: "12px", marginBottom: "10px"
              }}> 비밀번호가 일치하지 않습니다.</div>}
            </div>
            
            <div><label htmlFor="gender" style={{
              marginBottom: "10px", marginTop: "10px"
            }}>성별</label>
              <select className="form-control" id="gender">
            <option style={{color:"gray"}} value="M"> 남</option>
              <option style={{color:"gray"}} value="F">여</option>
              </select>
            </div>

            <div><label htmlFor="user-email" style={{
              marginTop: "15px"
            }}>이메일</label>
              <input style={{
                marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
                border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
              }} name="user-email" type="text" placeholder="이메일" value={email} onChange={onChangeEmail}
                     className="loginregister_input"/>
              {errorEmail && <div class="invalid-input" style={{
                color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
              }}>올바른 형식이 아닙니다.</div>}</div>

            <div><label htmlFor="user-phone" style={{
              marginTop: "15px"
            }}>휴대폰 번호</label>
              <input style={{
                marginTop: "15px",
                borderRadius: "2px",
                width: "100%",
                height: "40px",
                border: "1px solid #e5e5e5",
                padding: "9px 12px",
                outline: "none",
                boxSizing: "border-box",
                marginBottom: "20px"
              }} name="user-phone" type="text" placeholder="-를 제외하고 숫자만 입력하세요" value={phoneNumber}
                     onChange={onChangePhoneNumber} className="loginregister_input"/>
              {errorPhoneNumber && <div class="invalid-input" style={{
                color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
              }}>숫자만 입력하세요</div>}</div>
                  <details>
                    <summary style={{
                      cursor: "pointer", marginBottom: "10px"
                    }}>일반회원 약관동의</summary>
             <div>
                <input style={{
                  marginBottom:"5px"
                }} type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
                <label style={{fontSize:"14px"}} htmlFor="all-check">전체동의</label>
             </div>


              <div>
                <input style={{
                  marginBottom:"5px"
                }} type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
                <label style={{fontSize:"14px"}} htmlFor="check1">만 14세 이상입니다 <span style={{color:"deepskyblue"}} className="stylesblue">(필수)</span></label>
              </div>
               <div>
              <input style={{
                marginBottom:"5px"
              }} type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent}/>
              <label style={{fontSize:"14px"}} htmlFor="check2">이용약관 <span style={{color:"deepskyblue"}} className="stylesblue">(필수)</span></label>
              </div>
              <div>
               <input type="checkbox" id="check3" checked={marketingCheck} onChange={marketingBtnEvent}/>
              <label style={{fontSize:"14px"}} htmlFor="check3">마케팅 동의 <span style={{color:"gray"}} className="stylesgray">(선택)</span></label>
              </div>
                  </details>

            <div>
              <button style={{
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
                borderStyle: "none"
              }} type="submit"  class="loginregister_button" >회원가입
              </button>
            </div>
                </Tab>
                
                <Tab eventKey="second" title="사업자회원가입">
                  <p style={{marginTop: "30px", flexDirection: "column", fontSize: "25px", display: 'block', width: 350, padding: 30}}> 사업자 회원가입 </p>
                  <br/><br/>

                  <div>
                    <label htmlFor="user-id" style={{
                      marginTop: "20px"
                    }}>아이디</label>
                    <input style={{
                      marginTop: "10px", borderRadius: "2px", width: "100%", height: "40px",
                      border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
                    }} name="user-id" type="id" placeholder="아이디" value={Id} onChange={onChangeId}
                           class="loginregister_input"/> {errorId && <div class="invalid-input" style={{
                    color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
                  }}> 아이디는 숫자를 포함하여 최소 5자 이상</div>}
                    <button style={{
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
                      marginBottom: "10px"
                    }} type="submit" className="loginregister_button" onSubmit={onSubmit}>아이디 중복확인
                    </button>
                  </div>

                  <div><label htmlFor="user-name">상호명</label>
                    <input style={{
                      marginTop: "10px",
                      borderRadius: "2px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #e5e5e5",
                      padding: "9px 12px",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "10px"
                    }} name="user-name" type="text" placeholder="이름" value={name} onChange={onNameHandler}
                           className="loginregister_input"/></div>

                  <div><label htmlFor="user-password">비밀번호</label>
                    <input style={{
                      marginTop: "15px",
                      borderRadius: "2px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #e5e5e5",
                      padding: "9px 12px",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "10px"
                    }} name="user-password" type="password" placeholder="비밀번호" value={Password}
                           onChange={onChangePassword}
                           className="loginregister_input"/>{errorPassword && <div className="invalid-input" style={{
                      color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
                    }}>비밀번호는 숫자와 문자를 포함하여 최소 8자 이상 </div>} </div>

                  <div><label htmlFor="confirmPassword">비밀번호 확인</label>
                    <input style={{
                      marginTop: "15px",
                      borderRadius: "2px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #e5e5e5",
                      padding: "9px 12px",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "5px"
                    }} name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword}
                           onChange={onChangeConfirmPassword} className="loginregister_input"/>
                    {confirmPasswordError && <div className="invalid-input" style={{
                      color: "red", fontSize: "12px", marginBottom: "10px"
                    }}> 비밀번호가 일치하지 않습니다.</div>}
                  </div>

                  <div>
                    <label htmlFor="user-phone" style={{
                    marginTop: "15px"
                  }}>사업자 번호</label>
                    <input style={{
                      marginTop: "15px",
                      borderRadius: "2px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #e5e5e5",
                      padding: "9px 12px",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "10px"
                    }} name="user-phone" type="text" placeholder="-를 제외하고 숫자만 입력하세요" value={proNumber}
                           onChange={onProNumber} className="loginregister_input"/> {errorProNumber && <div className="invalid-input" style={{
                    color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
                  }}>숫자만 입력하세요</div>}</div>


                  <div><label htmlFor="user-email" style={{
                    marginTop: "15px"
                  }}>이메일</label>
                    <input style={{
                      marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
                      border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
                    }} name="user-email" type="text" placeholder="이메일" value={email} onChange={onChangeEmail}
                           className="loginregister_input"/>
                    {errorEmail && <div className="invalid-input" style={{
                      color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
                    }}>올바른 형식이 아닙니다.</div>}</div>

                  <div><label htmlFor="user-phone" style={{
                    marginTop: "15px"
                  }}>휴대폰 번호</label>
                    <input style={{
                      marginTop: "15px",
                      borderRadius: "2px",
                      width: "100%",
                      height: "40px",
                      border: "1px solid #e5e5e5",
                      padding: "9px 12px",
                      outline: "none",
                      boxSizing: "border-box",
                      marginBottom: "20px"
                    }} name="user-phone" type="text" placeholder="-를 제외하고 숫자만 입력하세요" value={phoneNumber}
                           onChange={onChangePhoneNumber} className="loginregister_input"/>
                    {errorPhoneNumber && <div className="invalid-input" style={{
                      color: "deepskyblue", fontSize: "12px", marginBottom: "10px"
                    }}>숫자만 입력하세요</div>}</div>

                  <details>
                    <summary style={{
                      cursor: "pointer", marginBottom: "10px"
                    }}>사업자회원 약관동의</summary>
                  <div>
                    <input style={{
                      marginBottom: "5px"
                    }} type="checkbox" id="all-check" checked={allCheck} onChange={allBtnEvent}/>
                    <label style={{fontSize: "14px"}} htmlFor="all-check">전체동의</label>
                  </div>

                  <div>
                    <input style={{
                      marginBottom: "5px"
                    }} type="checkbox" id="check1" checked={ageCheck} onChange={ageBtnEvent}/>
                    <label style={{fontSize: "14px"}} htmlFor="check1">만 14세 이상입니다 <span style={{color: "deepskyblue"}}
                                                                                         className="stylesblue">(필수)</span></label>
                  </div>
                  <div>
                    <input style={{
                      marginBottom: "5px"
                    }} type="checkbox" id="check2" checked={useCheck} onChange={useBtnEvent}/>
                    <label style={{fontSize: "14px"}} htmlFor="check2">이용약관 <span style={{color: "deepskyblue"}}
                                                                                  className="stylesblue">(필수)</span></label>
                  </div>
                  <div>
                    <input type="checkbox" id="check3" checked={marketingCheck} onChange={marketingBtnEvent}/>
                    <label style={{fontSize: "14px"}} htmlFor="check3">마케팅 동의 <span style={{color: "gray"}}
                                                                                    className="stylesgray">(선택)</span></label>
                  </div>
                    </details>
                  <div>
                    <button style={{
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
                      borderStyle: "none"
                    }} type="submit" className="loginregister_button">회원가입
                    </button>
                  </div>
                </Tab>
              </Tabs>
          </form>

        </div>

    );

}
export default SignUp;