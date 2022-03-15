import {Button, Card, Container} from 'react-bootstrap';
import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import IBoard from '../interfaces/IBoard';
import BoardService from '../service/BoardService';
import IBusiness from '../interfaces/IBusiness';
import BusinessService from '../service/BusinessService';
import IMemberId from '../interfaces/IMemberId';
import MemberIdService from '../service/MemberIdService';
import ITag from '../interfaces/ITag';
import TagService from '../service/TagService';
import "../css/main/animation.css";


function CardStyle() {
    const [businessId,setBusinessId]=useState<IBusiness["business_id"]>("");
    const [Board,setBoard]=useState<IBoard[]>([]);
    const [Tag,setTag]=useState<ITag[]>([]);
    const [hide,setHide]=useState(false);
    async function getBoard(){}

    async function getTag(){
        setTag(await TagService.getTags().then(res=>res.data));
    }

    useEffect(()=>{
        getBoard();
        getTag();
    })

    const handleClick=()=>{
        setHide(true);
    }
    
    return (
        <>
            {hide && <Card style={{width: '18rem', height: "400px", borderRadius: "20px"}}>
                <Card.Img variant="top" src="holder.js/100px180" alt="clothes image" style={{marginTop: "3vh"}}/>
                <Card.Body>
                    <Card.Title style={{textAlign: "center", margin: "3vh 0"}}>의류 타이틀</Card.Title>
                    <Card.Text style={{textAlign: "center", margin: "3vh 0"}}>
                        의류 관련내용
                    </Card.Text>
                    <Card.Text style={{textAlign: "center", margin: "3vh 0"}}>
                        {Tag.map((tag)=>{
                            return (
                                <>{tag.tag_name}</>
                            );
                        })}
                    </Card.Text>
                    <div style={{width: "100%", display: "flex", justifyContent: "center", marginTop: "3vw"}}>
                        <Button onClick={handleClick} style={{
                            textAlign: "center",
                            border: "3px solid black",
                            borderRadius: "20px",
                            padding: ".5em 2em"
                        }} className="bg-white">
                            <Link to="/member/MyPage_ChartPage/MyPage_detailChartPage"
                                  style={{color: "black", fontWeight: "bold"}}>
                                More
                            </Link>
                        </Button>
                    </div>
                </Card.Body>
            </Card>}
        </>
  const [hashtag, setHashtag] = useState("");

  const [hide, setHide] = useState(true);
  const [isHover, setIsHover] = useState(false);

    const [businessId,setBusinessId]=useState<IBusiness["business_id"]>("");
    const [myBoard,setMyBoard]=useState<IBoard[]>([]);

    async function getMyBoard(){
        myBoard.map(async ()=>{
            let myboards=await BoardService.getBoardByUserId(businessId).then(res=>res.data);
            setMyBoard([...myBoard,...myboards]);
        })
    }

    useEffect(()=>{
        getMyBoard();
    })
    return (
        <>

            <Container style={{display: "flex", justifyContent: "space-around", height: "auto"}}>
                    {myBoard.map(()=>{
                        return (
                            <CardStyle />
                        );
                    })}
            </Container>


    </>
  );
}

export default MyPage_ChartPage;