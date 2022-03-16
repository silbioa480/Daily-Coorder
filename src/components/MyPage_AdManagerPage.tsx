import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import "../css/main/animation.css";
import IAd from "../interfaces/IAd";
import IAdImage from "../interfaces/IAdImage";
import AdService from "../service/AdService";
import AdImageService from "../service/AdImageService";
import { useEffect, useState } from 'react';

function MyPage_AdManagerPage() {
    const [Ad,setAd]=useState<IAd[]>([]);
    const [Adimage,setAdimage]=useState<IAdImage[]>([]);

    async function allgetAd(){
        setAd(await AdService.getAds().then(res=>res.data));
    }

    async function allgetImage(){
        setAdimage(await AdImageService.getAdImages().then(res=>res.data));
    }

    useEffect(()=>{
        allgetAd();
        allgetImage();
    })

    return (
        <>
            <Table striped bordered hover style={{
                width: "50vw",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)"
            }}>
                <thead className="aa">
                <tr>
                    <th>광고 번호</th>
                    <th>사업자 이름</th>
                    <th>광고 제목</th>
                    <th>광고 내용</th>
                    <th>광고 url</th>
                    <th>광고 기간</th>
                </tr>
                </thead>
                <tbody className="bb">
                    {Ad.map((ad)=>{
                        if(ad.ad_is_prove === true){
                            return (
                                <tr>  
                                    <td>{ad.ad_id}</td>
                                    <td>{ad.business_id}</td>
                                    <td>{ad.ad_title}</td>
                                    <td>{ad.ad_explain}</td>
                                    <td>{ad.ad_url}</td>
                                    <td>{ad.ad_expire}</td>
                                </tr>
                            );
                        }
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default MyPage_AdManagerPage;