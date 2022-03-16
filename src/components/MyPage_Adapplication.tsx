import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import AdApplicationCss from '../css/MyPage_AdapplicationCss';
import {Button, Form, FormControl} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import "../css/main/animation.css";
import IAdImage from "../interfaces/IAdImage";
import IAd from "../interfaces/IAd";
import AdService from "../service/AdService";
import AdImageService from "../service/AdImageService";
import IBusiness from '../interfaces/IBusiness';
import BusinessSevice from '../service/BusinessService';
import { useForm } from "react-hook-form";


function MyPage_Adapplication() {
    const {
        register,
        handleSubmit
    }=useForm<IAd>();

    const [businessId,setBusinessId]=useState<IBusiness["business_id"]>("");


   useEffect(()=>{

   })

   const onValid = async({
        ad_title,
        ad_url,
        ad_expire,
        ad_explain,
        ad_image
   }:IAd)=>{
        let count = 0;
        let newAd : IAd={
            ad_title,
            ad_url,
            ad_expire,
            ad_explain,
            ad_image,
            ad_is_prove:false,
            ad_register_date:new Date(),
            ad_id:++count,
            business_id:businessId
        }

        await AdService.createAd(newAd).then(res=>res.data);
   }

    const [imgfiles, setImgFiles] = useState('');

    const onloadfile = (event: any) => {
        const file = event.target.files;
        setImgFiles(URL.createObjectURL(file[0]));
    }

   

    return (
        <>
            <AdApplicationCss/>
            <div style={{textAlign: 'center'}}>
                <div className="aa AdContainer" style={{width: "70%", display: "inline-block"}}>
                    <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
                        <p style={{fontWeight: "bold", fontSize: "2vw"}}>광고 신청란</p>
                    </div>
                    <div className="TitleSpace">
                        <Form.Label
                            style={{textAlign: "center", marginTop: "1vw", fontWeight: "bold", fontSize: "1.5vw"}}>광고
                            제목</Form.Label>
                        <Form.Control type="text" style={{marginTop: "1vw"}} {...register("ad_title",{required:"광고제목을 입력하세요"})}/>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="AdImg">
                            <Image src={imgfiles} thumbnail style={{height: "100%"}} alt="Ad image"/>
                            <label className="btn btn-white bg-white" htmlFor="adimage"
                                   style={{color: "black", fontWeight: "bold", fontSize: "1vw", borderRadius: "20px"}}>
                                광고 이미지 선택<Form.Control type="file" style={{display: "none"}} {...register("ad_image",{})}
                                                       id="adimage" accept="image/*" />
                            </label>
                        </div>
                        <div style={{
                            marginLeft: "1vw",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between"
                        }}>
                            <div className="Adurl">
                                <Form.Label style={{fontWeight: "bold", fontSize: "1.3vw"}}>URL</Form.Label>
                                <Form.Control type="url"
                                              style={{width: "300px", marginTop: "1vw"}} {...register("ad_url",{required:"URL를 입력하세요"})}/>
                            </div>

                            <div className="Adurl">
                                <Form.Label style={{fontWeight: "bold", fontSize: "1.3vw"}}>신청자</Form.Label>
                                <Form.Control type="text"
                                              style={{width: "300px", marginTop: "1vw"}} {...register("business_id",{required:"신청자 본인 아이디를 입력하세요"})}/>
                            </div>

                            <div className="Adurl">
                                <Form.Label style={{fontWeight: "bold", fontSize: "1.3vw"}}>광고 기간</Form.Label>
                                <Form.Control type="date"
                                              style={{width: "300px", marginTop: "1vw"}} {...register("ad_expire",{required:"광고 기간을 설정하세요"})}/>
                            </div>

                        </div>
                    </div>

                    <div className="Addescription">
                        <Form.Label style={{textAlign: "center", fontWeight: "bold", fontSize: "1.5vw"}}>광고 내용
                            설명</Form.Label>
                        <FormControl as="textarea" aria-label="내용 설명"
                                     style={{marginTop: "1vw"}} {...register("ad_explain",{required:"광고 내용을 입력하세요"})}/>
                    </div>
                    <div className="buttonspace">
                        <Button type="submit" onSubmit={handleSubmit(onValid)}>광고 등록 신청</Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyPage_Adapplication;

