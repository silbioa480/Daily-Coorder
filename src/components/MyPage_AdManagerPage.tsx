import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

function MyPage_AdManagerPage(){
    return (
        <>
    <Table striped bordered hover style={{width:"50vw",position:"absolute" , top:"50%",left:"50%", transform:"translate(-50%,-50%)"}}>
        <thead>
            <tr>
            <th>번호</th>
            <th>광고 내용</th>
            <th>광고명</th>
            <th>사업자 이름</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </Table>
        </>
    );
}

export default MyPage_AdManagerPage;