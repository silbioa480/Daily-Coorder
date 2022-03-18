import {useEffect, useState} from "react";
import {Button, Container} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import "../css/main/animation.css";
import IUser from "../interfaces/IUser";
import UserService from "../service/UserService";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom';
import { memberAtom , isLoginAtom } from '../atom';
import { useRecoilValue } from 'recoil';







function MyPage_SizeRegister() {
    const {
      register,
      handleSubmit
    }=useForm<IUser>();
    const isLogin = useRecoilValue(isLoginAtom);
    const memberId = useRecoilValue(memberAtom);
  
    const [userId,setUserId]=useState<IUser["user_id"]>(memberId.member_id);
    const [userInfo,setUserInfo]=useState<IUser>();

  async function getUser() {
    if (userId !== undefined) {
      setUserInfo(await UserService.getUserById(userId).then(res => res.data));
    }
  }

    useEffect(()=>{
        getUser();
    },[]);
  
    const onValid=async({
        user_weight,
        user_height
    } : IUser)=>{
        if(userInfo !== undefined){
          let body : IUser = {
              user_weight,
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
        }

  const onValid = async ({
    user_weights,
    user_height
  }: IUser) => {
    if (userInfo !== undefined) {
      let body: IUser = {
        user_weights,
        user_height,
        user_id: userId,
        user_password: userInfo.user_password,
        user_email: userInfo.user_email,
        user_birth: userInfo.user_birth,
        user_is_ad: userInfo.user_is_ad,
        user_is_admin: userInfo.user_is_admin,
        user_follow_number: userInfo.user_follow_number,
        user_follower_number: userInfo.user_follower_number,
        user_gender: userInfo.user_gender,
        user_is_location: userInfo.user_is_location,
        user_name: userInfo.user_name,
        user_nickname: userInfo.user_nickname,
        user_phone: userInfo.user_phone,
        user_profile: userInfo.user_profile,
        user_update_date: userInfo.user_update_date,
        user_signup_date: userInfo.user_signup_date
      }

      await UserService.updateUser(body, userId).then(res => res.data);
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
              width: "140px"
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
                    <Form.Control type="number" placeholder="weight" id="weight" name="weight"
                      style={{ width: "250px" }} {...register("user_weight",{required : "몸무게를 입력하세요"})}/>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <label style={{
                      paddingLeft: "50px",
                      paddingRight: "30px",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1vw"
                    }}>height</label>
                    <Form.Control type="number" placeholder="height" id="height" name="height"
                      style={{ width: "250px" }} {...register("user_height",{required:"키를 입력하세요"})}/>
                  </div>
              </Form>
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "center", margin: "3.5em 0" }}>
          <Button className="btn-dark" type="submit">
                    <Link to="/member/MyPage_MemberInformation" style={{color:"white"}}>
                      체형 수정 하기
                    </Link>
          </Button>
        </div>
      </Container>

      
    </div>
  );
}

export default MyPage_SizeRegister;