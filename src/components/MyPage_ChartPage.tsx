
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function CardStyle(){
    const [hashtag,setHashtag]=useState("");
    
    const [hide,setHide]=useState(true);
   
    const HandleClick=()=>{
        setHide(false);    
    }

    return (
            <>
                {hide && <Card style={{ width: '18rem',height:"400px" }}>
                        <Card.Img variant="top" src="holder.js/100px180" alt="clothes image" style={{marginTop:"3vh"}} />
                        <Card.Body >
                            <Card.Title style={{textAlign:"center",margin:"3vh 0"}}>의류 타이틀</Card.Title>
                            <Card.Text style={{textAlign:"center",marginBottom:"3vh"}}>
                                    의류 관련내용
                            </Card.Text>
                            <Card.Text style={{textAlign:"center",marginBottom:"3vh"}}>
                                {hashtag}해시태그
                            </Card.Text>
                            <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                                <Button onClick={HandleClick} style={{textAlign:"center"}}>
                                        <Link to="/member/MyPage_ChartPage/MyPage_detailChartPage" style={{color:"white"}}>
                                            상세 차트 표시
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
               
               
               <Container style={{display:"flex",justifyContent:"space-around",height:"auto"}} className="bg-primary">
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