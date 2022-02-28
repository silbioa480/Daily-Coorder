import Pie_chart from '../components/Pie_chart';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import CloseButton from 'react-bootstrap/CloseButton';


function MyPage_ChartPage(){
    const [show,setShow]=useState(false);
    const [hide,setHide]=useState(true);
    const [close,setClose]=useState(false);
    const HandleClick=()=>{
        setShow(true);
        setHide(false);
        setClose(true);
    }

    const handleClose=()=>{
        setClose(false);
        if(close==false){
            
        }
    }
    return (
        <>
               
               
               <Container style={{display:"flex"}}>
                {<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {hide && <Button onClick={HandleClick}>상세 차트 표시</Button>}
                            {show && <Pie_chart  />}
                            {close && <CloseButton onClick={handleClose}/>}
                        </Card.Body>
                    </Card>}


                    {<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {hide && <Button onClick={HandleClick}>상세 차트 표시</Button>}
                            {show && <Pie_chart />}
                            {close && <CloseButton onClick={handleClose}/>}
                        </Card.Body>
                    </Card>}

                    {<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {hide && <Button onClick={HandleClick}>상세 차트 표시</Button>}
                            {show && <Pie_chart />}
                            {close && <CloseButton onClick={handleClose}/>}
                        </Card.Body>
                    </Card>}
                 

                    {<Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            {hide && <Button onClick={HandleClick}>상세 차트 표시</Button>}
                            {show && <Pie_chart />}
                            {close && <CloseButton onClick={handleClose}/>}
                        </Card.Body>
                    </Card>}
                    
               </Container>

                
        </>
    );
}

export default MyPage_ChartPage;