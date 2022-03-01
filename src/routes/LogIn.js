
import {useState} from "react";
import { Link } from "react-router-dom";

function LogIn() {

    const [Id, setId] = useState("");
    const [Password, setPassword] = useState("");

    const onIdHandler = (e) => {
        setId(e.currentTarget.value);
    };
    const onPasswordHanlder = (e) => {

        setPassword(e.currentTarget.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();

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
                }} type="id"  value={Id} placeholder="아이디를 입력해주세요." onChange={onIdHandler}/>
                <br/><br/>
                <label>비밀번호</label>
                <input style={{
                    marginTop: "15px", borderRadius: "2px", width: "100%", height: "40px",
                    border: "1px solid #e5e5e5", padding: "9px 12px", outline: "none", boxSizing: "border-box"
                }} type="password" value={Password} placeholder="비밀번호를 입력해주세요." onChange={onPasswordHanlder}/>
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
                    }} className="autoLogin"><Link to="#">아이디 / 비밀번호 찾기</Link></div>
                </div>

                <button style={{
                    width: "350px", height: "40px", fontSize: "14px", padding: "13px 30px", cursor:"pointer", backgroundColor: "black",
                    color:"white", lineHeight: "1px", marginTop: "20px", marginBottom: "12px", borderRadius: "3px", borderStyle:"none"
                }} type="submit" className="btn" value='로그인'>로그인</button>
                <br/>

                <div style={{
                    marginBottom: "30px"
                }} className="socialBox">
                    <div style={{ backgroundColor: "#feec34", borderColor: "#feec34", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="kakao">
                        <img style={{
                            width: "24px", height: "25px"
                        }} className="kakaoLogo" src="#"/>
                        <button style={{
                            width: "300px", fontSize: "15px", textAlign: "center", display:"inline-block", boxSizing:"border-box"
                        }} type="submit" className="kakaoText btn" value='로그인'>카카오 계정으로 신규가입</button>
                    </div>
                    <div style={{ backgroundColor: "#21538a", borderColor: "#21538a", height: "40px", display: "flex",
                        alignItems: "center", justifyContent: "center", boxSizing: "border-box", marginBottom: '10px', borderRadius:"3px"
                    }} className="facebook">
                        <img style={{
                            width: "24px", height: "25px"
                        }} className="facebookLogo" src="#" />
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