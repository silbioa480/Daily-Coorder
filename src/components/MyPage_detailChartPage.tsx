import Pie_chart from "./Pie_chart";
import ClothesDetailCss from "../css/MyPage_detailPageCss";
import { Image } from "react-bootstrap";

function MyPage_detailChartPage(){
    return(
        <>
            <ClothesDetailCss />
            <div className="detailContainer">

                    <div className="dataContainer">
                            <div className="dataimage" style={{border:"1px solid black",borderRadius:"20px"}}>
                                <Image src="" alt="의류 관련 사진"/>
                            </div>
                            <div className="datadescri">
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    의류 관련 타이틀
                                </div>
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    의류 관련 업로드한사람
                                </div >
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>의류 관련 태그</div>
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    의류 관련 내용
                                </div>
                            </div>
                    </div>
                    <div className="chartContainer">
                        <Pie_chart /><span></span>
                    </div> 
            </div>
        </>
    );
}

export default MyPage_detailChartPage;