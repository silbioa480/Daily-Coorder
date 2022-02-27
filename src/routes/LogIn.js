
import {useState} from "react";

function Login() {

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
            <form
                onSubmit={onSubmitHandler}
                style={{ display: "flex", flexDirection: "column" }}>
                <h1>회원 로그인</h1>
                <br/><br/>
                <label>아이디</label>
                <input type="id" value={Id} placeholder="아이디를 입력해주세요." onChange={onIdHandler} />
                <br />
                <label>비밀번호</label>
                <input type="password" value={Password} placeholder="비밀번호를 입력해주세요." onChange={onPasswordHanlder} />
                <br />
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                        <label className="custom-control-label" htmlFor="customCheck1">아이디 저장</label>

                    </div>
                </div>
                <br/>


                <button type="submit" className="btn btn-dark btn-sm btn-block" value='로그인'>로그인</button>
                <br/>
                <p className="forgot-id text-right">
                     <a href="#">아이디 찾기</a> <a href="#">비밀번호 찾기</a>
                </p>


            </form>
        </div>
    )
}




export default Login;