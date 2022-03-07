import { Circle, CButton } from "../css/Board_Posts";
import similar from "../img/similar.png";

//유저정보
function UserInformation() {
  return (
    <>
      <div className="infor" style={{ display: "flex" }}>
        <div style={{ width: "300px", display: "flex" }}>
          <div>
            <a href="#">
              <Circle src={similar} style={{ marginLeft: "20px" }}></Circle>
            </a>
          </div>
          <div style={{ margin: "auto 0", marginLeft: "7px" }}>
            <a href="#">
              <p>닉네임</p>
            </a>
            <p>팔로워 x명</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserInformation;
