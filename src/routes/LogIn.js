
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import $ from 'jquery';

import facebooklogo from '../img/login/facebooklogo.png';
import kakaologo from '../img/login/kakaologo.png';
import googlelogo from '../img/login/googlelogo.png';
import naverlogo from '../img/login/naverlogo.png';



function LogIn() {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");
    // const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    // const [inputs, setInputs] = useState({
    //     Id:"",
    //     Password: "",
    // });

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {
        setPassword(e.currentTarget.value);
    };

    // const handleChange = event=> {
    //     const name = event.target.name;
    //     const value = event.target.value;
    //     setInputs(values=>({...values, [name]:value}))
    // }

    const checkId = $('#Id').val();
    const checkPassword = $('#Password').val();

    const submitClick = (e) => {

        if(checkId === "") {
            $('#Id').addClass('borderErr');
            alert("아이디를 입력해주세요");
            return false;
        }
        $('#Id').removeClass('borderErr');

        if(checkPassword === "") {
            $('#Password').addClass('borderErr');
            alert("비밀번호를 입력해주세요")
            return false;
        }
        $('#Password').removeClass('borderErr');

    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
    };

    const idKeyPress = (e) => {
        $('#Id').removeClass('borderErr');
    };

    const passwordKeyPress = (e) => {
        $('#Password').removeClass('borderErr');
    };

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '40vh'
        }}>
            <form onSubmit={onSubmitHandler}>
                <p style={{marginTop: "300px", display: "flex", flexDirection: "column", fontSize: "25px"}}>로그인</p>
                <br/><br/>
                <label>아이디</label>
                <input style={{marginTop: "15px", borderRadius: "2px", width:"100%", height:"40px",
                    border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
                }} type="id"  value={Id} placeholder="아이디를 입력해주세요." onKeyPress={idKeyPress} onChange={onIdHandler}/>
                <br/><br/>
                <label>비밀번호</label>
                <input style={{
                    marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
                    border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
                }} type="password" value={Password} placeholder="비밀번호를 입력해주세요." onKeyPress={passwordKeyPress} onChange={onPasswordHanlder}/>
                <br/>

                <div style={{
                    display: "flex", justifyContent: "space-between", alignItems: "center"
                }} className="loginMid">
                    <label className="autoLogin" htmlFor="hint">
                        {" "}
                        <input type="checkbox" id="hint"/> 로그인 유지하기
                    </label>
                    <div style={{
                        fontSize: "12px", color: "#8d8d8d", lineHeight: 3
                    }} className="searchinfo"><Link to="#">아이디 / 비밀번호 찾기</Link></div>
                </div>

                <button style={{
                    width: "350px", height: "40px", fontSize: "14px", padding: "13px 30px", cursor:"pointer", backgroundColor: "black",
                    color:"white", lineHeight: "1px", marginTop: "20px", marginBottom: "12px", borderRadius: "3px", borderStyle:"none"
                }} className="btn_login"  type="submit" onClick={(e) => submitClick('login',e)}>로그인</button>


                <div style={{
                    marginBottom: "30px"
                }} className="socialBox">
                    <div style={{ backgroundColor: "white", borderColor: "black", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="google">
                        <img style={{
                            width: "24px", height: "25px"
                        }} className="googleLogo" src={googlelogo} />
                        <button style={{
                            width: "300px", fontSize: "15px", textAlign: "center", display:"inline-block", boxSizing:"border-box"
                        }} type="submit" className="facebookText btn" value='로그인'>구글 계정으로 신규가입</button>
                    </div>
                    <div style={{ backgroundColor: "#00c300", borderColor: "#00c300", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="naver">
                        <img style={{
                            width: "24px", height: "25px"
                        }} className="naverLogo" src={naverlogo} />
                        <button style={{
                            width: "300px", fontSize: "15px", textAlign: "center", display:"inline-block", boxSizing:"border-box"
                        }} type="submit" className="naverText btn" value='로그인'>네이버 계정으로 신규가입</button>
                    </div>
                    <div style={{ backgroundColor: "#feec34", borderColor: "#feec34", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="kakao">
                        <img src={kakaologo}
                             style={{
                            width: "24px", height: "25px"
                        }} className="kakaoLogo" />
                        <button style={{
                            width: "300px", fontSize: "15px", textAlign: "center", display:"inline-block", boxSizing:"border-box"
                        }} type="submit" className="kakaoText btn" value='로그인'>카카오 계정으로 신규가입</button>
                    </div>
                    <div style={{ backgroundColor: "#3a559f", borderColor: "#3a559f", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="facebook">
                        <img style={{
                            width: "24px", height: "25px"
                        }} className="facebookLogo" src={facebooklogo} />
                        <button style={{
                            width: "300px", fontSize: "15px", textAlign: "center", display:"inline-block", boxSizing:"border-box"
                        }} type="submit" className="facebookText btn" value='로그인'>페이스북 계정으로 신규가입</button>
                    </div>


                </div>


                <div style={{
                    textAlign: "center", fontSize: "10px"
                }} className="loginEnd">
                    <div style={{ color: "#bcbcbc", fontSize: "15px", marginBottom:"35px",
                         cursor: "pointer"
                    }} className="loginLine">
                        회원이 아니신가요? <Link to="/signup">회원가입</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default LogIn;