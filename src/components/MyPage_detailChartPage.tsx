// import Pie_chart from "./Pie_chart";
import ClothesDetailCss from "../css/MyPage_detailPageCss";
import { Image } from "react-bootstrap";

import IBoard from "../interfaces/IBoard";
import IBoardImage from "../interfaces/IBoardImage";
import BoardService from "../service/BoardService";
import BoardImageService from "../service/BoardImageService";
import IBusiness from "../interfaces/IBusiness";
import ITag from "../interfaces/ITag";
import TagService from "../service/TagService";
import { useState , useEffect} from "react";

function MyPage_detailChartPage(){
    const [businessId,setBusinessId]=useState<IBusiness["business_id"]>("");
    const [boardId,setBoardId]=useState<IBoard["board_id"]>();
    const [boardPoster,setBoardPoster]=useState<IBoard["board_poster"]>();
    const [detailBoard,setDetailBoard]=useState<IBoard>();
    const [getTag,setGetTag]=useState<string[]>([]);
    //해당 게시물을 가져와서  그 게시물에 대한 정보를 표시
    async function getDetailBoard(){
            if(businessId !== undefined && boardId !== undefined && boardPoster !== undefined && businessId == boardPoster){
                setDetailBoard(await BoardService.getBoardById(boardId).then(res=>res.data));
            }
    }

    async function getMyTag(){
         if(boardId !== undefined){
            setGetTag(await TagService.getTageNamesByBoardId(boardId).then(res=>res.data));
         }
    }

    useEffect(()=>{
        getDetailBoard();
        getMyTag();
    },[]);

    function tagNameRepeat(){
        for(let index=0; index < getTag.length;index ++){
            return (
                <>{getTag[index]}</>
            );
        }
    }
    
    return(
        <>
            <ClothesDetailCss />
            <div className="detailContainer">

                    <div className="dataContainer">
                            <div className="dataimage" style={{border:"1px solid black",borderRadius:"20px"}}>
                                <Image src="detailBoard.board_img" alt="의류 관련 사진"/>
                            </div>
                            <div className="datadescri">
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    {detailBoard?.board_title}
                                </div>
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    {detailBoard?.board_poster}
                                </div >
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                        {tagNameRepeat}
                                    </div>
                                <div style={{width:"100%",height:"150px",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black",borderRadius:"20px"}}>
                                    {detailBoard?.board_content}
                                </div>
                            </div>
                    </div>
                    {/* <div className="chartContainer">
                        <Pie_chart />
                    </div>  */}
            </div>
        </>
    );
}

export default MyPage_detailChartPage;