import {useEffect, useState} from "react";
import "../../css/board/followButton.css";
import IFollow from "../../interfaces/IFollow";
import FollowService from "../../service/FollowService";
import {CButton} from "../../css/Board_Posts";
import IUser from "../../interfaces/IUser";

interface IProps {
    user: IUser;
    likeln: Function;
    likeDe: Function;
    like: number;
}

//팔로우버튼
//userinformation도들어있음
function FollowButton(props: IProps) {
    let user = props.user;
    const [backgroundcolor, setBackgroundcolor] = useState("lightgray");
    const [color, setColor] = useState("black");
    const [content, setContent] = useState("팔로우");

    const [follow, setFollow] = useState<IFollow>({
        follow_id: 0,
        from_user_id: "",
        to_user_id: ""
    });


    // 1 세션으로 로그인된 나의 아이디를 확인 (로그인 안했다면 랜덤 데이터)
    //팔로우 버튼을 누르면 팔로워테이블에 내아이디 상대방아이디 생성 (post create)
    async function createFollow() {
        setFollow(await FollowService.createFollow(follow).then(res => res.data));
    }

    //팔로우된 상태에서 버튼을 누르면 테이블delete
    async function deleteFollow() {
        await FollowService.deleteFollow(follow.follow_id).then(res => {
            console.log(res.data);
            if (res.data.delete === true) {
                follow.follow_id = 0;
            }
        });
    }

    async function selectFollow() {
        await FollowService.getCheckFollow("2", user?.user_id as IUser["user_id"]).then(res => {
            // await FollowService.getCheckFollow("2", "1").then(res => {
            console.log(res.data);
            if (res.data === null) {
                follow.follow_id = 0;
            } else {
                setFollow(res.data);
            }
        });
    }

    useEffect(() => {
        selectFollow().then(() => {
            console.log("팔로우아이디:" + follow.follow_id);
            if (follow.follow_id === 0) {
                setBackgroundcolor("lightgray");
                setColor("black");
                setContent("팔로우");
            } else {
                setBackgroundcolor("black");
                setColor("white");
                setContent("팔로잉");
            }
        })
    }, [user])

    const onClick = () => {
        backgroundcolor === "lightgray"
            ? setBackgroundcolor("black")
            : setBackgroundcolor("lightgray");

        color === "black" ? setColor("white") : setColor("black");
        content === "팔로우" ? setContent("팔로잉") : setContent("팔로우");

        // 팔로우테이블에 from_user_id와 to_user_id가 순서에맞게(?) 없으면 create 있으면 delete
        // if (follow.follow_id === 0) {
        //     createFollow();
        // } else {
        //     deleteFollow();
        // }
        // setIsShow(!isShow);
        // createFollow();
        if (props.like === 0) {
            props.likeln();
        } else {
            props.likeDe();
        }

    };
    return (
        <>
            <div>
                <CButton color={backgroundcolor} value={color} onClick={onClick}>
                    {content}
                </CButton>
            </div>
        </>
    )

}

export default FollowButton;
