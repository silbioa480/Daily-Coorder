import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import "../css/main/animation.css";
import IAd from '../interfaces/IAd';
import IAdImage from '../interfaces/IAdImage';
import AdService from '../service/AdService';
import AdImageService from '../service/AdImageService';
import IBusiness from '../interfaces/IBusiness';
import { useForm } from "react-hook-form";
import { useEffect, useState } from 'react';



function MyPage_AdProvePage() {
    const {
        register,
        handleSubmit
    }=useForm<IAd>();

    const [Ad,setAd]=useState<IAd[]>([]);

    async function allsearchAd(){
        setAd(await AdService.getAds().then(res=>res.data));
    }

    useEffect(()=>{
        allsearchAd();
    })

    const onValid = async({
        ad_is_prove
    }:IAd) =>{
        Ad.map(async (ad)=>{
            ad.ad_is_prove=ad_is_prove;
            await AdService.updateAd(ad,ad.ad_id).then(res=>res.data);
        })
    }
    return (

        <>
            <div onSubmit={handleSubmit(onValid)}>
                <Table striped bordered hover style={{
                    width: "50vw",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%,-50%)"
                }}>
                    <thead className="aa">
                    <tr style={{textAlign: "center"}}>
                        <th>
                            승인체크
                        </th>
                        <th>
                            승인대기 광고번호
                        </th>
                        <th>
                            승인대기 광고명
                        </th>
                        <th>
                            승인대기 광고내용
                        </th>

                        <th>
                            광고 신청자
                        </th>

                        <th>
                            광고 유효기간
                        </th>
                        <th>
                            광고 URL
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bb">
                        {Ad.map((ad)=>{
                             <tr>
                                <td>
                                    <Form.Check aria-label="option 1" id="proveCheck" {...register("ad_is_prove",{required : false})}/>
                                </td>
                                <td>
                                    {ad.ad_id}
                                </td>
                                <td>
                                    {ad.ad_title}
                                </td>
                                <td>
                                    {ad.ad_explain}
                                </td>

                                <td>
                                    {ad.business_id}
                                </td>
                                <td>
                                    {ad.ad_expire}
                                </td>
                                <td>
                                    {ad.ad_url}
                                </td>
                              
                            </tr>
                        })}
                    </tbody>

                </Table>
                <div className="bb"
                     style={{
                         position: "absolute",
                         left: "50%",
                         bottom: "25%",
                         transform: "translateX(-50%)",
                         marginLeft: "-70px"
                     }}>
                    <Button type="submit">광고 등록 승인</Button>
                </div>
            </div>
        </>
    );
}

export default MyPage_AdProvePage;