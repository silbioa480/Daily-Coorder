import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Col, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


function MyPage_MemberModify(){
    
    return(
        <>
<Form className="pl-5">
  <Row className="my-5">
    <Col xs={5}>
        <Form.Group  controlId="formGridEmail">
            <Form.Label>ID</Form.Label>
            <Form.Control type="email" placeholder="Enter ID" />
        </Form.Group>
    
        <Form.Group className="my-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
   
        <Form.Group className="my-3">
            <Form.Label>Birth</Form.Label>
            <Form.Control type="text" placeholder="Enter Birth" />
        </Form.Group>


        <Form.Group className="my-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control placeholder="Phone Number" />
        </Form.Group>

        <Form.Group className="my-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>
  
        <Form.Group controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
        </Form.Group>


     
    </Col>
  </Row>

  <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
    <Button variant="primary" type="submit">
            회원 정보 수정
    </Button>
  </div>
</Form>
        </>
    );
}

export default MyPage_MemberModify;