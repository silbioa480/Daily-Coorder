import "../css/Board_Similar.css";
import similar from "../img/similar.png";
import { Circle } from "../css/Board_Posts";

// function Similar_Pin() {
//   return (
//     <div className="aaa">
//       <div className="similar">
//         <div className="similar_img">
//           <a href="#">
//             <img src={similar} alt=""></img>
//           </a>
//         </div>
//         <a href="#">
//           <div className="by">
//             <Circle src={similar}></Circle>
//             <div className="nickname">
//               <div>인용식</div>
//             </div>
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// }
// //유사한핀 반복문
// function Board_Similar_Repeat() {
//   let array = [];
//   for (let i = 0; i < 4; i++) {
//     array.push(<Similar_Pin />);
//   }
//   return array;
// }

// function Board_Similar() {
//   return <Board_Similar_Repeat />;
// }

//유사한 핀 더보기 map으로 반복
function Board_Similar() {
  const repeat = [
    {
      id: 1,
      title: "similar.png",
      name: "인용식1",
    },
    {
      id: 2,
      title: "similar.png",
      name: "인용식2",
    },
    {
      id: 3,
      title: "similar.png",
      name: "인용식3",
    },
  ];
  const renderRepeat = repeat.map((rep) => {
    return (
      <div className="aaa" key={rep.id}>
        <div className="similar">
          <div className="similar_img">
            <a href="#">
              <img src={require("../img/" + rep.title)} alt="" />
            </a>
          </div>
          <a href="#">
            <div className="by">
              <Circle src={similar}></Circle>
              <div className="nickname">
                <div>{rep.name}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  });
  return <div>{renderRepeat}</div>;
}
export default Board_Similar;
