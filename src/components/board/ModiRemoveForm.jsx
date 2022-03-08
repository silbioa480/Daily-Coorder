import "../../css/board/modiRemoveForm.css";
import { FiMoreHorizontal } from "react-icons/fi";

import { useEffect, useRef, useState } from "react";
//다른데 클릭하면 꺼짐
const useClickOutside = (handler) => {
  const domNode = useRef();
  useEffect(() => {
    const maybeHandler = (e) => {
      if (!domNode.current.contains(e.target)) {
        handler();
      }
    };
    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.addEventListener("mousedown", maybeHandler);
    };
  });
  return domNode;
};

//...눌렀을떄 나오는 수정 삭제 폼
function ModiRemoveForm({ comments, removeComment, modification, index }) {
  const [isActive, setIsActive] = useState(false);

  const domNode = useClickOutside(() => {
    setIsActive(false);
  });

  return (
    <>
      <FiMoreHorizontal onClick={(e) => setIsActive(!isActive)} />
      {isActive && (
        <div ref={domNode} className="modification_remove">
          <button
            className="modification_btn"
            onClick={() => modification(comments.content)}
          >
            수정
          </button>

          <button
            className="remove_btn"
            onClick={() => removeComment(comments.id)}
          >
            삭제
          </button>
        </div>
      )}
    </>
  );
}

export default ModiRemoveForm;
