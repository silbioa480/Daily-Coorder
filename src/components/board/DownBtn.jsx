import { BsDownload, BsBookmarks } from "react-icons/bs";
import { FiMoreHorizontal, FiX } from "react-icons/fi";
import { useState } from "react";
import "../../css/board/downBtn.css";

function DownBtn() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-btn" onClick={(e) => setIsActive(!isActive)}>
        <FiMoreHorizontal />
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">
            <BsDownload style={{ marginRight: "10px" }} />
            이미지 다운로드
          </div>
          <div className="dropdown-item">
            <BsBookmarks style={{ marginRight: "10px" }} />
            게시물 저장
          </div>
          <div className="dropdown-item">
            <FiX style={{ marginRight: "10px" }} />
            게시물 숨기기
          </div>
        </div>
      )}
    </div>
  );
}
export default DownBtn;
