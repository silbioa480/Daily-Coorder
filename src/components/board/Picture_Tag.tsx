import { Square } from "../../css/Board_Posts";
import "../../css/board/pictureQr.css";
//게시물 사진의 태그들
function Picture_Tag() {
  return (
    <>
      <div className="tag">
        <Square style={{ marginTop: "10px" }}>20대</Square>
        <Square style={{ marginTop: "10px" }}>여성</Square>
        <Square style={{ marginTop: "10px" }}>핫</Square>
      </div>
    </>
  );
}

export default Picture_Tag;
