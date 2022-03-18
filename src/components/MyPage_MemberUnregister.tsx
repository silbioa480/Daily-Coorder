import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
import MyPage_MemberInformation from './MyPage_MemberInformation';
import "../css/main/animation.css";
import IUser from '../interfaces/IUser';
import IBusiness from '../interfaces/IBusiness';
import IMemberId from '../interfaces/IMemberId';
import UserService from '../service/UserService';
import BusinessSevice from '../service/BusinessService';
import MemberIdService from '../service/MemberIdService';
import { memberAtom, isLoginAtom } from '../atom';
import { useRecoilValue } from 'recoil';
import { useSetRecoilState } from "recoil";

function MyPage_MemberUnregister() {
  const isLogin = useRecoilValue(isLoginAtom);
  const memberId = useRecoilValue(memberAtom);
  
  const [userInfo,setUserInfo]=useState<IUser>();
  const [businessInfo,setBusinessInfo]=useState<IBusiness>();
  const [memberInfo,setMemberInfo]=useState<IMemberId>();
  const [show, setShow] = useState(false);
  const setIsLogin = useSetRecoilState(isLoginAtom);

  async function getPeople(){
      if(memberId !== undefined){
          setUserInfo(await UserService.getUserById(memberId.member_id).then(res=>res.data));
          setMemberInfo(await MemberIdService.getIdById(memberId.member_id).then(res=>res.data));
      }
  }

  async function getBusiness() {
    setBusinessInfo(await BusinessSevice.getBusinessById(memberId.member_id).then(res => res.data));
  }

  async function handleUnregister(){
            
    if(memberId.is_business === true){
        await BusinessSevice.deleteBusiness(memberId.member_id).then(res=>res.data);
    }else{
        await UserService.deleteUser(memberId.member_id).then(res=>res.data);
    }
    await MemberIdService.deleteId(memberId.member_id);
           
    setIsLogin(false);
  }

  const handleShow = () => {
    setShow(true);
  }
  const handleClose = () => {
    setShow(false);
  }

  return (
    <>
      <div className="aa" style={{ width: "60%", margin: "4em auto", height: "900px" }}>
        <MyPage_MemberInformation />

        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "1vw" }}>
          <div className="d-grid gap-2">
            <button className='mypage_btn' onClick={handleShow}>
              회원 탈퇴
            </button>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>회원탈퇴 확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>회원탈퇴를 정말 하시겠습니까?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            이전
          </Button>
          <Button variant="primary" onClick={handleUnregister}>
            <Link to="/">회원 탈퇴</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyPage_MemberUnregister;