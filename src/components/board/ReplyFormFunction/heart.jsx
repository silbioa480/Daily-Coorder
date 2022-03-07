import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

function Heart() {
  const [color, setColor] = useState("");
  const heartClick = () => {
    color === "" ? setColor("red") : setColor("");
  };
  return <AiFillHeart onClick={heartClick} style={{ color: color }} />;
}
export default Heart;
