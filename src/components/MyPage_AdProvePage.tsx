import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import {Button} from "react-bootstrap";
import "../css/main/animation.css";

function MyPage_AdProvePage() {
    return (

        <>
            <div>
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
                            승인대기 광고명
                        </th>
                        <th>
                            승인대기 광고내용
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bb">
                    <tr>
                        <td>
                            <Form.Check aria-label="option 1"/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check aria-label="option 2"/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check aria-label="option 3"/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check aria-label="option 4"/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
                    <tr>
                        <td>
                            <Form.Check aria-label="option 5"/>
                        </td>
                        <td>

                        </td>
                        <td>

                        </td>
                    </tr>
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
                    <Button>광고 등록 승인</Button>
                </div>
            </div>
        </>
    );
}

export default MyPage_AdProvePage;