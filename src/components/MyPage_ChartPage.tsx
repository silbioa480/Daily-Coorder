
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function CardStyle(){
    const [hashtag,setHashtag]=useState("");
    
    const [hide,setHide]=useState(true);
    const [isHover,setIsHover]=useState(false);
   
    const HandleClick=()=>{
        setHide(false);    
    }

    const HandleEnter=()=>{
        setIsHover(true);
    }

    const HandleLeave=()=>{
        setIsHover(false);
    }

    return (
            <>
                {hide && <Card style={{ width: '18rem',height:"400px" ,borderRadius:"20px"}}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="clothes image" style={{marginTop:"3vh"}} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center",margin:"3vh 0"}}>의류 타이틀</Card.Title>
                            <Card.Text style={{textAlign:"center",margin:"3vh 0"}}>
                                    의류 관련내용
                            </Card.Text>
                            <Card.Text style={{textAlign:"center",margin:"3vh 0"}}>
                                {hashtag}해시태그
                            </Card.Text>
                            <div style={{width:"100%",display:"flex",justifyContent:"center",marginTop:"3vw"}}>
                                 <Button onClick={HandleClick} style={{textAlign:"center",border:"3px solid black",borderRadius:"20px",padding:".5em 2em"}} className="bg-white" onMouseEnter={HandleEnter} onMouseLeave={HandleLeave}>
                                        <Link to="/member/MyPage_ChartPage/MyPage_detailChartPage" style={{color:"black",fontWeight:"bold"}}>
                                            More
                                        </Link>
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>}
            </>

    );
}


function MyPage_ChartPage(){
    const [clothesCard,setClothesCard]=useState(["sadf","sadf","sdef","asdf"]);
    return (
        <>
               
               
               <Container style={{display:"flex",justifyContent:"space-around",height:"auto"}}>
                        {clothesCard.map(()=>{
                            return (
                                <CardStyle />
                            );
                        })}
               </Container>

                
        </>
    );
}

export default MyPage_ChartPage;