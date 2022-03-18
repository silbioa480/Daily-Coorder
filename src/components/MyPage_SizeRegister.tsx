import {useEffect, useState} from "react";
import {Button, Container, Modal} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../css/main/animation.css";
import IUser from "../interfaces/IUser";
import UserService from "../service/UserService";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
function AlertResister() {
    const [close, setClose] = useState(false);
    

    const handleClose = () => {
        setClose(true);
    }
    return (
        <>
            { close && <Modal onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>체형 수정 확인</Modal.Title>
                </Modal.Header>
                <Modal.Body>체형정보를 정말 수정하시겠습니까?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        이전
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        <Link to="/member/MyPage_MemberInformation">
                            수정 하기
                        </Link>
                    </Button>
                </Modal.Footer>
            </Modal>}
        </>
    );
}




function MyPage_SizeRegister() {
    const {
      register,
      handleSubmit
    }=useForm<IUser>();
    const [show, setShow] = useState(false);
    const [userId,setUserId]=useState<IUser["user_id"]>("");
    const [userInfo,setUserInfo]=useState<IUser>();

    async function getUser(){
        if(userId !== undefined){
          setUserInfo(await UserService.getUserById(userId).then(res=>res.data));
        }
    }

    useEffect(()=>{
        getUser();
    },[]);
  
    const onValid=async({
        user_weights,
        user_height
    } : IUser)=>{
        if(userInfo !== undefined){
          let body : IUser = {
              user_weights,
              user_height,
              user_id:userId,
              user_password:userInfo.user_password,
              user_email:userInfo.user_email,
              user_birth:userInfo.user_birth,
              user_is_ad:userInfo.user_is_ad,
              user_is_admin:userInfo.user_is_admin,
              user_follow_number:userInfo.user_follow_number,
              user_follower_number:userInfo.user_follower_number,
              user_gender:userInfo.user_gender,
              user_is_location:userInfo.user_is_location,
              user_name:userInfo.user_name,
              user_nickname:userInfo.user_nickname,
              user_phone:userInfo.user_phone,
              user_profile:userInfo.user_profile,
              user_update_date:userInfo.user_update_date,
              user_signup_date:userInfo.user_signup_date
          }

          await UserService.updateUser(body,userId).then(res=>res.data);
        }

    }
    
    const handleResister = () => {
        setShow(true);
    }
    return (

    <div style={{ display: "flex", justifyContent: "center" }}>
      <Container className="aa" style={{
        backgroundColor: "white",
        borderRadius: "20px", boxShadow: "0px 10px 29px 0px #e0e0e0", paddingBottom: "10px",
        width: "500px"
      }}>
        <div style={{ paddingTop: "3em" }}>
          <div>
            <label style={{
              margin: "1vh 0",
              padding: "1vw",
              textAlign: "center",
              width: "140px",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>
              아이디
            </label>
            <p style={{
              marginLeft: "1vw",
              display: "inline-block",
              width: "140px"
            }}>{userInfo?.user_id}</p>
          </div>
        </div>
        <div style={{ paddingTop: "3em" }}>
          <div>
            <label style={{
              margin: "1vh 0",
              padding: "1vw",
              textAlign: "center",
              width: "140px",
              fontWeight: "bold",
              fontSize: "1vw"
            }}>
              닉네임
            </label>
            <p style={{
              marginLeft: "1vw",
              display: "inline-block",
              width: "140px",
              backgroundColor: "green"
            }}>{userInfo?.user_nickname}</p>
          </div>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", padding: "3em 2em" }}>
          <label style={{ fontSize: "1.5vw" }}>체형</label>
        </div>
        <div style={{}}>
              <Form onSubmit={handleSubmit(onValid)}>
                  <div style={{ display: "flex", alignItems: "center", paddingBottom: "20px" }}>
                    <label style={{
                      paddingLeft: "50px",
                      paddingRight: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1vw"
                    }}>weight</label>
                    <Form.Control type="text" placeholder="weight" id="weight" name="weight"
                      style={{ width: "250px" }} {...register("user_weights",{required : "몸무게를 입력하세요"})}/>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{
                      paddingLeft: "50px",
                      paddingRight: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1vw"
                    }}>height</label>
                    <Form.Control type="text" placeholder="height" id="height" name="height"
                      style={{ width: "250px" }} {...register("user_height",{required:"키를 입력하세요"})}/>
                  </div>
              </Form>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "3.5em 0" }}>
          <Button type="submit" onClick={handleResister}>
              체형 등록 하기
          </Button>
        </div>
      </Container>

      {show && <AlertResister />}
    </div>
  );
}

export default MyPage_SizeRegister;