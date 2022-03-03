import MyPage_AdManagerPage from "./MyPage_AdManagerPage";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
function MyPage_AdProvePage(){
    return (

        <>
                <div>
                    <Table striped bordered hover style={{width:"70vw",position:"absolute" , top:"50%",left:"50%", transform:"translate(-50%,-50%)"}}>
                            <thead>
                                <tr style={{textAlign:"center"}}>
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
                            <tbody>
                                <tr>
                                    <td>
                                        <Form.Check aria-label="option 1" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Check aria-label="option 2" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Check aria-label="option 3" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Check aria-label="option 4" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <Form.Check aria-label="option 5" />
                                    </td>
                                    <td>

                                    </td>
                                    <td>

                                    </td>
                                </tr>
                            </tbody>

                    </Table>
                    <div style={{position:"absolute",left:"50%",bottom:"25%",transform:"translateX(-50%)"}}>
                        <Button>광고 등록 승인</Button>
                    </div>
                </div>
        </>
    );
}

export default MyPage_AdProvePage;