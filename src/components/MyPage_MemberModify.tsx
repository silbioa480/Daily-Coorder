import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Figure, Row,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import ModifyCss from '../css/MyPage_ModifyCss';
import Modal from 'react-bootstrap/Modal';
import React, {useState} from 'react';
import "../css/main/animation.css";
import "../css/MyPage_MemInfoCss.css";
import { useForm } from "react-hook-form";
import { useEffect } from 'react';
import IMemberId from "../interfaces/IMemberId";
import MemberIdService from '../service/MemberIdService';
import UserService from '../service/UserService';
import IUser from '../interfaces/IUser';
import IBusiness from '../interfaces/IBusiness';
import BusinessSevice from '../service/BusinessService';
import { setConstantValue } from 'typescript';

function CeoModify() {
    const {
        handleSubmit,
        register,
        getValues,
    }=useForm<IBusiness>();

    const [imgfile, setImgFile] = useState('');
    const [businessId,setBusinessId]=useState<IBusiness["business_id"]>("");
    const [memberList,setMemberList]=useState<IMemberId[]>([]);
    const [updateBusiness,setUpdateBusiness]=useState<IBusiness>();

    async function allMemberList(){
        setMemberList(await MemberIdService.getIds().then(res=>res.data));
    }

   async function getBeforeBusinessInfo(){
       setUpdateBusiness(await BusinessSevice.getBusinessById(businessId).then(res=>res.data));
   }

    const onloadfile = (event: any) => {
        const file = event?.target.files;
        setImgFile(URL.createObjectURL(file[0]));
    }
    useEffect(()=>{
        getBeforeBusinessInfo();
        allMemberList();
        setValue("business_name","business_name");
        setValue("business_number","business_number");
        setValue("business_password","business_password");
        setValue("business_phone","business_phone");
        setValue("business_name","business_name");
    })

    const onValid=async({
        business_name,
        business_number,
        business_password,
        business_phone,
        business_email
    }:IBusiness)=>{
        if(updateBusiness !== undefined){
            let updateCeo : IBusiness ={
                business_id:updateBusiness.business_id,
                business_name,
                business_number,
                business_password,
                business_phone,
                business_email,
                business_follow_number:updateBusiness.business_follow_number,
                business_follower_number:updateBusiness.business_follower_number,
                business_is_ad:updateBusiness.business_is_ad,
                business_is_location:updateBusiness.business_is_location,
                business_profile:updateBusiness.business_profile,
                business_signup_date:updateBusiness.business_signup_date,
                business_update_date:updateBusiness.business_update_date
            }

            await BusinessSevice.updateBusiness(updateCeo,businessId).then(res=>res.data);
        }
    }

function CeoModify() {
  const [imgfile, setImgFile] = useState('');

  const [ceoinfo, setCeoinfo] = useState({
    id: "",
    password: "",
    ceonumber: "",

  const compareNickName = (event: any) => {
    if (userInfo.nickname == userNickname) {
      alert("이미존재하는 닉네임입니다.");
    } else {
      alert("사용가능한 닉네임입니다.");
    }



    const deleteImage=()=>{
        setImgFile('');
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
                                    src={imgfile}
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
                                                 onChange={onloadfile}/>
                            </label>

                            <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제<input type="reset" onClick={deleteImage}/>
                                </label>
                        </div>

                        <Form.Group controlId="formGridEmail" style={{marginTop: "1vh"}}>
                            <Form.Label>상호명</Form.Label>
                            <div style={{width: "100%", display: "flex"}}>
                                <Form.Control type="text" name="business_name" id="business_name" {...register("business_name",{required:"상호명을 입력하세요"})}/>

                            </div>
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
                            <Form.Label>비밀번호</Form.Label>
                            <Form.Control type="password" name="business_password" id="business_password" {...register("business_password",{required:"비밀번호를 입력하세요"})}/>
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
                            <Form.Label>비밀번호 확인</Form.Label>
                            <Form.Control type="password" placeholder="Password check" name="passwordCheck"/>
                        </Form.Group>

                        <Form.Group className="my-3" controlId="formGridPassword">
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
                                <Form.Control type="email" name="business_email" id="" />
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

            </Form>
        </>
    );
}


function MyPage_MemberModify() {
    const {
        setValue,
        register,
        handleSubmit
    } =useForm<IUser>();
    
    const [show,setShow]=useState(true);
    const [isCeo,setIsCeo]=useState(false);
    const [isUser,setIsUser]=useState(true);
    const [userId,setUserId]=useState<IUser["user_id"]>("");
    const [memberList,setMemberList]=useState<IMemberId[]>([]);
    const [updateUserInfo,setUpdateUser]=useState<IUser>();

    async function updateInfo(){
        setUpdateUser(await UserService.getUserById(userId).then(res=>res.data));
    }


    async function allMemberList(){
        setMemberList(await MemberIdService.getIds().then(res=>res.data));
    }

    useEffect(()=>{
        allMemberList();
        updateInfo();
    })

    const onValid =async({
        user_password,
        user_birth,
        user_email,
        user_height,
        user_nickname,
        user_phone,
        user_weights
    }:IUser)=>{
        if(updateUserInfo !== undefined){
            let updateUsers : IUser= {
                user_id:updateUserInfo.user_id,
                user_password,
                user_birth,
                user_email,
                user_height,
                user_nickname,
                user_phone,
                user_weights,
                user_follow_number:updateUserInfo?.user_follow_number,
                user_follower_number:updateUserInfo.user_follower_number,
                user_is_ad:updateUserInfo.user_is_ad,
                user_is_admin:updateUserInfo.user_is_admin,
                user_is_location:updateUserInfo.user_is_location,
                user_gender:updateUserInfo.user_gender,
                user_name:updateUserInfo.user_name,
                user_profile:updateUserInfo.user_profile,
                user_signup_date:updateUserInfo.user_signup_date,
                user_update_date:updateUserInfo.user_update_date
            }

            await UserService.updateUser(updateUsers,userId).then(res=>res.data);
        }

    }

    const compareId=()=>{
        if(updateUserInfo !== undefined){
           if(updateUserInfo.user_is_ad === true){
               setIsUser(false);
               setIsCeo(true);
           }else{
            setIsUser(true);
            setIsCeo(false);
           }
        }
    }

              <Form.Group className="my-3">
                <Form.Label>생년월일</Form.Label>
                <Form.Control type="date" placeholder="생년월일 6자리입력" name="birth" />
              </Form.Group>

    const assignEmail = () => {
        alert("입력하신 이메일로 인증메일을 보냈습니다.");
    }
   
    const handleModal=()=>{
        setShow(false);
    }
    return (
        <>
            <ModifyCss/>
            <div className="aa memberOrceo">
                <div style={{padding: "1vw 2vw", borderRight: "1px solid #dbdbdb", cursor: "pointer"}}
                     onClick={compareId}>
                    일반 회원 정보
                </div>
                <div style={{padding: "1vw 2vw", cursor: "pointer"}} onClick={compareId}>
                    사업자 회원 정보
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
                                                    />
                                </label>

                                <label className="btn btn-white" htmlFor="ppimage" style={{
                                    overflow: "hidden",
                                    border: "1px solid #dbdbdb",
                                    fontWeight: "bold",
                                    padding: ".3vw .75vw",
                                    borderRadius: "5px",
                                    marginLeft:"1vw"
                                }}>
                                    프로필 사진 삭제
                                </label>
                            </div>


                            


                            <Form.Group controlId="formGridEmail" style={{marginTop: "1vh"}}>
                                <Form.Label>닉네임</Form.Label>
                                <div style={{width: "100%", display: "flex"}}>
                                    <Form.Control type="text" name="nickname" id="user_nickname" {...register("user_nickname",{required : "닉네임을 입력하세요"})}
                                                 />
                                    <Button style={{width: "180px", textAlign: "center"}} >닉네임중복
                                        확인</Button>
                                </div>
                            </Form.Group>



                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호</Form.Label>
                                <Form.Control type="password" name="password" id="user_password" {...register("user_password",{required:"비밀번호를 입력하세요"})}
                                              />
                            </Form.Group>

                            <Form.Group className="my-3" controlId="formGridPassword">
                                <Form.Label>비밀번호 확인</Form.Label>
                                <Form.Control type="password" placeholder="Password check" name="passwordCheck"
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
                                    <Form.Control type="email" name="email" id="user_email" {...register("user_email",{required :"이메일을 입력하세요"})}
                                                  />
                                    <Button style={{width: "180px", textAlign: "center"}}
                                            onClick={assignEmail}>인증요청</Button>
                                </div>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail" style={{marginTop: "3vh",boxSizing:"border-box"}}>
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
                            <Button variant="white" className="mypage_btn">
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
                    <Button variant="secondary" onClick={handleModal}>
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