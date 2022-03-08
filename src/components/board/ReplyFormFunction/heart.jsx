import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import like_logoW from "../../img/main/like_logoW.png";
import like_icon from "../../img/main/like_icon.png";
function Heart() {
  const [color, setColor] = useState("");
  const heartClick = () => {
    color === "" ? setColor("red") : setColor("");
  };
  return <like_logoW onClick={heartClick} style={{ color: color }} />;
}
export default Heart;
