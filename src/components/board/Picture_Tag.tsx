import {Square} from "../../css/Board_Posts";
import "../../css/board/pictureQr.css";
import IBoard from "../../interfaces/IBoard";
import {useEffect, useState} from "react";
import TagService from "../../service/TagService";

interface IProps {
    board: IBoard;
}

//게시물 사진의 태그들
// function Picture_Tag(props: IProps) {
//     let board = props.board;
//     const [tag, setTag] = useState<ITag[]>([]);
//
//
//     //게시물번호(board_id)를 이용해 tag_name 을 가져와야함
//     async function getTag() {
//         let tags = await TagService.getTageNamesByBoardId(board.board_id).then(res => res.data)
//         setTag([...tag])
//     }
//
//     useEffect(() => {
//         getTag();
//     })
//
//     const boardTag = tag.map((data) => {
//         return <div>
//             <Square style={{marginTop: "10px"}}>{data.tag_name} key={data.board_id}</Square>
//         </div>
//     })
//
//     return (
//         <>
//             <div className="tag">
//                 {boardTag}
//             </div>
//         </>
//     );
// }

function Picture_Tag(props: IProps) {
    let board = props.board;
    const [tag, setTag] = useState<string[]>([]);


    //게시물번호(board_id)를 이용해 tag_name 을 가져와야함
    async function getTag() {
        setTag(
            await TagService.getTageNamesByBoardId(board.board_id).then(res => res.data)
        );
    }

    useEffect(() => {
        getTag();
    }, [board])


    const boardTag = tag.map((data) => {
        return <div>
            <Square style={{marginTop: "10px"}} key={data}>  {data}   </Square>
        </div>
    })

    return (
        <>
            <div className="tag">
                {boardTag}
            </div>
        </>
    );
}

export default Picture_Tag;
