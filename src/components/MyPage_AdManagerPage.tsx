import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import "../css/main/animation.css";

function MyPage_AdManagerPage() {
  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "250px", marginBottom: "250px" }}>
      <Table striped bordered hover style={{
        width: "50vw",
        backgroundColor: "white",
        boxShadow: "0px 10px 29px 0px #e0e0e0"
      }}>
        <thead className="aa">
          <tr>
            <th>번호</th>
            <th>광고 내용</th>
            <th>광고명</th>
            <th>사업자 이름</th>
          </tr>
        </thead>
        <tbody className="bb">
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
    </div>
  );
}

export default MyPage_AdManagerPage;