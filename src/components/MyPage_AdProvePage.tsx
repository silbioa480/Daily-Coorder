import MyPage_AdManagerPage from "./MyPage_AdManagerPage";
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
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
                </div>
        </>
    );
}

export default MyPage_AdProvePage;