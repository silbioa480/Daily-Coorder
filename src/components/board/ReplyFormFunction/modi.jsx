import { FiMoreHorizontal } from "react-icons/fi";
import { useState } from "react";
import ModiRemoveForm from "../ModiRemoveForm";

function Modi() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <FiMoreHorizontal onClick={(e) => setIsActive(!isActive)} />
      {isActive && <ModiRemoveForm />}
    </>
  );
}
export default Modi;
