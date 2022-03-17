import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Figure, Row, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import "../css/main/animation.css";
import "../css/MyPage_MemInfoCss.css";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
// import IMemberId from "../interfaces/IMemberId";
// import MemberIdService from '../service/MemberIdService';
import UserService from '../service/UserService';
import IUser from '../interfaces/IUser';
import IBusiness from '../interfaces/IBusiness';
import BusinessSevice from '../service/BusinessService';
import ProfileImageService from '../service/ProfileImageService';
import IProfileImage from "../interfaces/IProfileImage";



function CeoModify() {
  const {
    handleSubmit,
    register,
    getValues,
    setValue
  } = useForm<IBusiness, IProfileImage>();

  const [businessId, setBusinessId] = useState<IBusiness["business_id"]>("");
  const [updateBusiness, setUpdateBusiness] = useState<IBusiness>();
  const [normalProfileId, setNormalFileId] = useState<IProfileImage["profile_image_id"]>();
  const [normalProfile, setNormalProfile] = useState<IProfileImage>();



  async function getBeforeBusinessInfo() {
    setUpdateBusiness(await BusinessSevice.getBusinessById(businessId).then(res => res.data));
  }

  async function updateImage() {
    if (normalProfileId !== undefined) {
      setNormalProfile(await ProfileImageService.getProfileImageById(normalProfileId).then(res => res.data));
    }
  }

  async function deleteImage() {
    if (normalProfileId !== undefined) {
      await ProfileImageService.deleteProfileImage(normalProfileId).then(res => res.data);
    }
  }


  useEffect(() => {
    getBeforeBusinessInfo();
    updateImage();
    setValue("business_name", "business_name");
    setValue("business_number", "business_number");
    setValue("business_password", "business_password");
    setValue("business_phone", "business_phone");
    setValue("business_name", "business_name");
    setValue("profile_image_id", "profile_image_id");
  })

  const onValid: any = async ({
    business_name,
    business_number,
    business_password,
    business_phone,
    business_email
  }: IBusiness, {
    profile_image_file,
    profile_image_name
  }: IProfileImage) => {
    if (updateBusiness !== undefined) {
      let updateCeo: IBusiness = {
        business_id: updateBusiness.business_id,
        business_name,
        business_number,
        business_password,
        business_phone,
        business_email,
        business_follow_number: updateBusiness.business_follow_number,
        business_follower_number: updateBusiness.business_follower_number,
        business_is_ad: updateBusiness.business_is_ad,
        business_is_location: updateBusiness.business_is_location,
        business_profile: updateBusiness.business_profile,
        business_signup_date: updateBusiness.business_signup_date,
        business_update_date: updateBusiness.business_update_date
      }

      await BusinessSevice.updateBusiness(updateCeo, businessId).then(res => res.data);
    }

    if (normalProfileId !== undefined) {
      if (normalProfile !== undefined) {
        let updateProfile: IProfileImage = {
          profile_image_file,
          profile_image_id: normalProfile.profile_image_id,
          profile_image_name
        }
        await ProfileImageService.updateProfileImage(updateProfile, normalProfileId).then(res => res.data);
      }
    }
  }



  const assignRequest = () => {
    alert("입력하신 전화번호로 인증요청을 보냈습니다");
  }

  const assignEmail = () => {
    alert("입력하신 이메일로 인증메일을 보냈습니다.");
  }

    return (
        <>
            <Form className="aa pl-5" onSubmit={handleSubmit(onValid)}>
                <Row className="my-5">
                    <Col>
                        <div
                            style={{width: "170px", height: "200px", margin: "3vh 0 0 0", border: "1px solid #dbdbdb"}}>
                            <Figure style={{width: "170px", height: "200px"}}>
                                <Figure.Image
                                    width={170}
                                    height={200}
                                    alt="프로필 사진"
                                />
                            </Figure>
                        </div>
                        <div style={{margin: "1vh 0"}}>
                            <label className="btn btn-white" htmlFor="ppimage" style={{
                                overflow: "hidden",
                                border: "1px solid #dbdbdb",
                                fontWeight: "bold",
                                padding: ".3vw .75vw",
                                borderRadius: "5px"
                            }}>
                                프로필 사진 업로드<input type="file" style={{display: "none"}} id="ppimage" accept='image/*'
                                                 {...register("profile_image_id")}/>
                            </label>

                            <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제<input type="reset" style={{display: "none"}} onClick={deleteImage}/>
                                </label>
                        </div>

                        <Form.Group style={{marginTop: "1vh"}}>
                            <Form.Label>상호명</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text" name="business_name" id="business_name" {...register("business_name",{required:"상호명을 입력하세요"})}/>

                            </div>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="business_password" id="business_password" {...register("business_password",{required:"비밀번호를 입력하세요",pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,message:" 8자리 이상 문자,숫자,특수문자를 섞어서 입력하세요."}})}/>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" placeholder="Password check" name="passwordCheck"/>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label>사업자 번호</Form.Label>
                            <Form.Control type="text"  name="business_number" id="business_number" {...register("business_number",{required:"사업자 번호를 입력하세요"})}/>
                        </Form.Group>


                        <Form.Group className="my-3">
                            <Form.Label>전화번호</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text" name="business_phone" id="business_phone" {...register("business_phone",{required:"전화번호를 입력하세요"})}/>
                                <Button style={{width: "180px", textAlign: "center"}}
                                        onClick={assignRequest}>인증요청</Button>
                            </div>
                        </Form.Group>

                        <Form.Group className="my-3">
                            <Form.Label>이메일</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="email" name="business_email" id="business_email" {...register("business_email",{required:"사업자이메일을 입력하세요",pattern:{value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,message:"이메일 형식이 아닙니다."}})} />
                                <Button style={{width: "180px", textAlign: "center"}}
                                        onClick={assignEmail}>인증요청</Button>
                            </div>
                        </Form.Group>

                    </Col>
                </Row>
                 {/*  작성자: 황인성  */}
                {/*  최종수정 날짜 2022.3.10  */}
                <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                    <Button variant="white" className="mypage_btn" type="submit" >
                        <span>회원 정보 수정</span>
                    </Button>
                </div>
                {/*    ----------------------------    */}

  return (
    <>
      <Form className="aa pl-5" onSubmit={handleSubmit(onValid)}>
        <Row className="my-5">
          <Col>
            <div
              style={{ width: "170px", height: "200px", margin: "3vh 0 0 0", border: "1px solid #dbdbdb" }}>
              <Figure style={{ width: "170px", height: "200px" }}>
                <Figure.Image
                  width={170}
                  height={200}
                  alt="프로필 사진"
                />
              </Figure>
            </div>
            <div style={{ margin: "1vh 0" }}>
              <label className="btn btn-white" htmlFor="ppimage" style={{
                overflow: "hidden",
                border: "1px solid #dbdbdb",
                fontWeight: "bold",
                padding: ".3vw .75vw",
                borderRadius: "5px"
              }}>
                프로필 사진 업로드<input type="file" style={{ display: "none" }} id="ppimage" accept='image/*'
                  {...register("profile_image_id")} />
              </label>

              <label className="btn btn-white" htmlFor="ppimage" style={{
                overflow: "hidden",
                border: "1px solid #dbdbdb",
                fontWeight: "bold",
                padding: ".3vw .75vw",
                borderRadius: "5px",
                marginLeft: "1vw"
              }}>
                프로필 사진 삭제<input type="reset" style={{ display: "none" }} onClick={deleteImage} />
              </label>
            </div>

            <Form.Group controlId="formGridEmail" style={{ marginTop: "1vh" }}>
              <Form.Label>상호명</Form.Label>
              <div style={{ width: "100%", display: "flex" }}>
                <Form.Control type="text" name="business_name" id="business_name" {...register("business_name", { required: "상호명을 입력하세요" })} />

              </div>
            </Form.Group>

            <Form.Group className="my-3" controlId="formGridPassword">
              <Form.Label>비밀번호</Form.Label>
              <Form.Control type="password" name="business_password" id="business_password" {...register("business_password", { required: "비밀번호를 입력하세요", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: " 8자리 이상 문자,숫자,특수문자를 섞어서 입력하세요." } })} />
            </Form.Group>

            <Form.Group className="my-3" controlId="formGridPassword">
              <Form.Label>비밀번호 확인</Form.Label>
              <Form.Control type="password" placeholder="Password check" name="passwordCheck" />
            </Form.Group>

            <Form.Group className="my-3" controlId="formGridPassword">
              <Form.Label>사업자 번호</Form.Label>
              <Form.Control type="text" name="business_number" id="business_number" {...register("business_number", { required: "사업자 번호를 입력하세요" })} />
            </Form.Group>


            <Form.Group className="my-3">
              <Form.Label>전화번호</Form.Label>
              <div style={{ width: "100%", display: "flex" }}>
                <Form.Control type="text" name="business_phone" id="business_phone" {...register("business_phone", { required: "전화번호를 입력하세요" })} />
                <Button style={{ width: "180px", textAlign: "center" }}
                  onClick={assignRequest}>인증요청</Button>
              </div>
            </Form.Group>

            <Form.Group className="my-3">
              <Form.Label>이메일</Form.Label>
              <div style={{ width: "100%", display: "flex" }}>
                <Form.Control type="email" name="business_email" id="business_email" {...register("business_email", { required: "사업자이메일을 입력하세요", pattern: { value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/, message: "이메일 형식이 아닙니다." } })} />
                <Button style={{ width: "180px", textAlign: "center" }}
                  onClick={assignEmail}>인증요청</Button>
              </div>
            </Form.Group>

          </Col>
        </Row>
        {/*  작성자: 황인성  */}
        {/*  최종수정 날짜 2022.3.10  */}
        <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
          <Button variant="white" className="mypage_btn" type="submit" >
            <span>회원 정보 수정</span>
          </Button>
        </div>
        {/*    ----------------------------    */}

      </Form>
    </>
  );
}


function MyPage_MemberModify() {
    const {
        setValue,
        getValues,
        register,
        handleSubmit,
        formState : {
            errors
        },
        watch
    } =useForm<IUser,IProfileImage>();
    
    const [show,setShow]=useState(false);
    const [isCeo,setIsCeo]=useState(false);
    const [isUser,setIsUser]=useState(true);
    const [userId,setUserId]=useState<IUser["user_id"]>("1");
    const [updateUserInfo,setUpdateUser]=useState<IUser>();
    const [allUser,setAllUser]=useState<IUser[]>([]);
    const [normalProfileId,setNormalFileId]=useState<IProfileImage["profile_image_id"]>();
    const [normalProfile,setNormalProfile]=useState<IProfileImage>();

    async function updateInfo(){
        setUpdateUser(await UserService.getUserById(userId).then(res=>res.data));
    }
  }

    async function getAllUser(){
        setAllUser(await UserService.getUsers().then(res=>res.data));
    }

    async function updateImage(){
        if(normalProfileId !== undefined){
            setNormalProfile(await ProfileImageService.getProfileImageById(normalProfileId).then(res=>res.data));
        }
    }

  

    async function deleteImage(){
        if(normalProfileId!==undefined){
            await ProfileImageService.deleteProfileImage(normalProfileId).then(res=>res.data);
        }
    }

    useEffect(()=>{
        getAllUser();

        updateImage();
        updateInfo();
    },[]);

    const onValid : any=async({
        user_password,
        user_birth,
        user_email,
        user_height,
        user_nickname,
        user_phone,
        user_weights,
        user_follow_number: updateUserInfo?.user_follow_number,
        user_follower_number: updateUserInfo.user_follower_number,
        user_is_ad: updateUserInfo.user_is_ad,
        user_is_admin: updateUserInfo.user_is_admin,
        user_is_location: updateUserInfo.user_is_location,
        user_gender: updateUserInfo.user_gender,
        user_name: updateUserInfo.user_name,
        user_profile: updateUserInfo.user_profile,
        user_signup_date: updateUserInfo.user_signup_date,
        user_update_date: updateUserInfo.user_update_date
      }

      await UserService.updateUser(updateUsers, userId).then(res => res.data);
    }

    if (normalProfileId !== undefined) {
      if (normalProfile !== undefined) {
        let updateProfile: IProfileImage = {
          profile_image_file,
          profile_image_id: normalProfile.profile_image_id,
          profile_image_name
        }
        await ProfileImageService.updateProfileImage(updateProfile, normalProfileId).then(res => res.data);
      }
    }
  }

  

  }

    const compareNickname=()=>{
        if(updateUserInfo !== undefined){
            const newNickname=watch("user_nickname");
            console.log(newNickname);
            if(updateUserInfo.user_nickname === newNickname){
                alert("이미 존재하는 닉네임 이거나 사용불가능한 닉네임입니다");
            }else{
                alert("사용가능한 닉네임입니다.");
            }
        }
    }

    const assignRequest = () => {
        alert("입력하신 전화번호로 인증요청을 보냈습니다");
    }
  }

  const assignRequest = () => {
    alert("입력하신 전화번호로 인증요청을 보냈습니다");
  }

  const assignEmail = () => {
    alert("입력하신 이메일로 인증메일을 보냈습니다.");
  }

  const openModal = () => {
    setShow(true);
  }

  const closeModal = () => {
    setShow(false);
  }
  return (
    <>
      <ModifyCss />
      <div className="aa memberOrceo">
        <div style={{ padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer" }}
          onClick={compareId}>
          일반 회원 정보
        </div>
        <div style={{ padding: "1vw 2vw", cursor: "pointer" }} onClick={compareId}>
          사업자 회원 정보
        </div>
      </div>
      <div className="aa containerCss" style={{
        borderRadius: "20px",
        boxShadow: "0px 10px 29px 0px #e0e0e0",
        marginTop: "50px",
        paddingRight: "50px",
        paddingLeft: "50px"
      }}>
        {isUser && <Form className="pl-5" onSubmit={handleSubmit(onValid)}>
          <Row className="my-5">
            <Col>
              <div style={{
                width: "170px",
                height: "200px",
                margin: "3vh 0 0 0",
                border: "1px solid #dbdbdb"
              }}>
                <Figure style={{ width: "170px", height: "200px" }}>
                  <Figure.Image
                    width={170}
                    height={200}
                    alt="프로필 사진"

                  />
                </Figure>
              </div>
              <div style={{ margin: "1vh 0", display: "flex" }}>
                <label className="btn btn-white" htmlFor="ppimage" style={{
                  overflow: "hidden",
                  border: "1px solid #dbdbdb",
                  fontWeight: "bold",
                  padding: ".3vw .75vw",
                  borderRadius: "5px"
                }}>
                  프로필 사진 업로드<input type="file" style={{ display: "none" }} id="ppimage" accept='image/*'
                    {...register("profile_image_id")} />
                </label>

                <label className="btn btn-white" htmlFor="ppimage" style={{
                  overflow: "hidden",
                  border: "1px solid #dbdbdb",
                  fontWeight: "bold",
                  padding: ".3vw .75vw",
                  borderRadius: "5px",
                  marginLeft: "1vw"
                }}>
                  프로필 사진 삭제<input type="reset" style={{ display: "none" }} onClick={deleteImage} />
                </label>
              </div>





              <Form.Group controlId="formGridEmail" style={{ marginTop: "1vh" }}>
                <Form.Label>닉네임</Form.Label>
                <div style={{ width: "100%", display: "flex" }}>
                  <Form.Control type="text" name="nickname" id="user_nickname" {...register("user_nickname", { required: "닉네임을 입력하세요", minLength: 8 })}
                  />
                  <Button style={{ width: "180px", textAlign: "center" }} >닉네임중복
                    확인</Button>
                </div>
              </Form.Group>



              <Form.Group className="my-3" controlId="formGridPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" name="password" id="user_password"
                  {...register("user_password", { required: "비밀번호를 입력하세요", pattern: { value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, message: " 8자리 이상 문자,숫자,특수문자를 섞어서 입력하세요." } })}
                />
              </Form.Group>

              <Form.Group className="my-3" controlId="formGridPassword">
                <Form.Label>비밀번호 확인</Form.Label>
                <Form.Control type="password" placeholder="Password check" name="passwordCheck" {...register({ minLength: 8, maxLength: 12 })}
                />
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>생년월일</Form.Label>
                <Form.Control type="date" name="birth" id="user_birth" {...register("user_birth", { required: "생년월일을 입력하세요" })} />
              </Form.Group>


              <Form.Group className="my-3">
                <Form.Label>전화번호</Form.Label>
                <div style={{ width: "100%", display: "flex" }}>
                  <Form.Control type="text" name="phoneNumber" id="user_phone" {...register("user_phone", { required: "전화번호를 입력하세요" })}
                  />
                  <Button style={{ width: "180px", textAlign: "center" }}
                    onClick={assignRequest}>인증요청</Button>
                </div>
              </Form.Group>

              <Form.Group className="my-3">
                <Form.Label>이메일</Form.Label>
                <div style={{ width: "100%", display: "flex" }}>
                  <Form.Control type="email" name="email" id="user_email" {...register("user_email", { required: "이메일을 입력하세요", pattern: { value: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/, message: "이메일 형식이 아닙니다." } })}
                  />
                  <Button style={{ width: "180px", textAlign: "center" }}
                    onClick={assignEmail}>인증요청</Button>
                </div>
            </div>
            <div className="aa containerCss">
                {isUser && <Form className="pl-5" onSubmit={handleSubmit(onValid)}>
                    <Row className="my-5">
                        <Col>
                            <div style={{
                                width: "170px",
                                height: "200px",
                                margin: "3vh 0 0 0",
                                border: "1px solid #dbdbdb"
                            }}>
                                <Figure style={{width: "170px", height: "200px"}}>
                                    <Figure.Image
                                        width={170}
                                        height={200}
                                        alt="프로필 사진"
                                        {...normalProfile?.profile_image_file}
                                    />
                                </Figure>
                            </div>
                            <div style={{margin: "1vh 0",display:"flex"}}>
                                <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px"
                                }}>
                                    프로필 사진 업로드<input type="file" style={{display: "none"}} id="ppimage" accept='image/*'
                                                    {...register("profile_image_id")}/>
                                </label>

                                <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제<input type="reset" style={{display: "none"}} onClick={deleteImage}/>
                                </label>
                            </div>


                            


                            <Form.Group style={{marginTop: "1vh"}}>
                                <Form.Label>닉네임</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" name="nickname" id="user_nickname" {...register("user_nickname",{required : "닉네임을 입력하세요",minLength:8})}
                                                 />
                                    <Button style={{width: "180px", textAlign: "center"}} onClick={compareNickname}>닉네임중복
                                        확인</Button>
                                </div>
                    
                            </Form.Group>



                            <Form.Group className="my-3">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" name="password" id="user_password"
                                        {...register("user_password",{required:"비밀번호를 입력하세요",pattern:{value:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,message:" 8자리 이상 문자,숫자,특수문자를 섞어서 입력하세요."}})}
                                              />
                                {errors && <h1>{errors?.user_password?.message}</h1>}
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control type="password" placeholder="Password check" name="passwordCheck" id="user_passwordCheck" {...register({minLength:8,maxLength:12})} 
                                              />
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>생년월일</Form.Label>
                                <Form.Control type="date" name="birth" id="user_birth" {...register("user_birth",{required:"생년월일을 입력하세요"})}/>
                            </Form.Group>


                            <Form.Group className="my-3">
                                <Form.Label>전화번호</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" name="phoneNumber" id="user_phone" {...register("user_phone",{required:"전화번호를 입력하세요"})}
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}}
                                            onClick={assignRequest}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group className="my-3">
                                <Form.Label>이메일</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="email" name="email" id="user_email" {...register("user_email",{required :"이메일을 입력하세요",pattern:{value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,message:"이메일 형식이 아닙니다."}})}
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}}
                                            onClick={assignEmail}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group style={{marginTop: "3vh",boxSizing:"border-box"}}>
                                <label style={{margin:"1vw 0"}}>체형</label>
                                <div style={{display:"flex"}}>
                                    <Form.Label style={{width:"20vw",textAlign:"center",marginTop:".6vw"}}>키</Form.Label>
                                    <div style={{width: "100%", display: "flex"}}>
                                        <Form.Control type="text" name="height" id="user_height" {...register("user_height",{required:"키를 입력하세요"})}
                                                   />
                                    
                                    </div>

                                    <Form.Label style={{width:"20vw",textAlign:"center",marginTop:".6vw"}}>몸무게</Form.Label>
                                    <div style={{width: "100%", display: "flex"}}>
                                        <Form.Control type="text" name="weight" id="user_weights" {...register("user_weights",{required:"몸무게를입력하세요"})}
                                                    />
                                    
                                    </div>
                                </div>
                            </Form.Group>

                        </Col>
                    </Row>

                        {/*  작성자: 황인성  */}
                        {/*  최종수정 날짜 2022.3.10  */}
                        <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                            <Button variant="white" className="mypage_btn" onClick={openModal}>
                                <span>회원 정보 수정</span>
                            </Button>
                        </div>
                        {/*    ----------------------------    */}
                </Form>}
                {isCeo && <CeoModify />}

               
            </div>

                  <Form.Label style={{ width: "20vw", textAlign: "center", marginTop: ".6vw" }}>몸무게</Form.Label>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Form.Control type="text" name="weight" id="user_weights" {...register("user_weights", { required: "몸무게를입력하세요" })}
                    />

                  </div>
                </div>
              </Form.Group>

            </Col>
          </Row>

          {/*  작성자: 황인성  */}
          {/*  최종수정 날짜 2022.3.10  */}
          <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            <Button variant="white" className="mypage_btn" onClick={openModal}>
              <span>회원 정보 수정</span>
            </Button>
          </div>
          {/*    ----------------------------    */}
        </Form>}
        {isCeo && <CeoModify />}


      </div>

      <Modal show={show} >
        <Modal.Header closeButton>
          <Modal.Title>정보 수정 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>회원정보를 정말 수정하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            이전
          </Button>
          <Button variant="primary" type="submit">
            <Link to="/member/MyPage_MemberInformation">수정하기</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPage_MemberModify;