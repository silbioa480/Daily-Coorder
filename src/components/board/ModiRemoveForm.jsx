import "../../css/board/modiRemoveForm.css";
//...눌렀을떄 나오는 수정 삭제 폼
function ModiRemoveForm(id) {
  const deleteComment = (id) => {};
  return (
    <>
      <div className="modification_remove">
        <button className="modification_btn">수정</button>

        <button className="remove_btn">삭제</button>
      </div>
    </>
  );
}

export default ModiRemoveForm;
