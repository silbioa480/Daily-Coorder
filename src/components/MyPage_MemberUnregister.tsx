import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';
import MyPage_MemberInformation from './MyPage_MemberInformation';
import "../css/main/animation.css";
import IUser from '../interfaces/IUser';
import IBusiness from '../interfaces/IBusiness';
import IMemberId from '../interfaces/IMemberId';
import UserService from '../service/UserService';
import BusinessSevice from '../service/BusinessService';
import MemberIdService from '../service/MemberIdService';



function MyPage_MemberUnregister() {

    const [memberId,setMemberId]=useState<IMemberId["member_id"]>("");
    const [isPeolple,setIsPeople]=useState<IMemberId>();
    const [userInfo,setUserInfo]=useState<IUser>();
    const [businessInfo,setBusinessInfo]=useState<IBusiness>();
    const [show, setShow] = useState(false);

    async function getPeople(){
        if(memberId !== undefined){
            setIsPeople(await MemberIdService.getIdById(memberId).then(res=>res.data));
            setUserInfo(await UserService.getUserById(memberId).then(res=>res.data));
            
        }
    }

    async function getBusiness(){
        setBusinessInfo(await BusinessSevice.getBusinessById(memberId).then(res=>res.data));
    }
 
    async function handleUnregister(){
        if(isPeolple !== undefined){
            if(isPeolple.is_business === true){
                await BusinessSevice.deleteBusiness(memberId).then(res=>res.data);
            }else{
                await UserService.deleteUser(memberId).then(res=>res.data);
            }
        }
   }

    useEffect(()=>{
        getPeople();
        if(isPeolple !== undefined){
            if(isPeolple.is_business === true){
                getBusiness();
            }
        }
        
    });




   const handleShow=()=>{
       setShow(true);
   }
    const handleClose = () => {
        setShow(false);
    }
    return (
        <>
            <div className="aa" style={{width: "60%", margin: "4em auto", height: "750px"}}>
                <MyPage_MemberInformation />

                <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "1vw"}}>
                    <div className="d-grid gap-2">
                        <Button variant="white" onClick={handleShow} style={{
                            padding: ".3vw 2vw",
                            borderRadius: "20px",
                            fontWeight: "bold",
                            border: "3px solid #dbdbdb"
                        }}>
                            회원 탈퇴
                        </Button>
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
                </div>
            </div>


        </>
    );
}

export default MyPage_MemberUnregister;