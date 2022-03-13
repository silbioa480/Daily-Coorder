import Banner from "../components/main/Banner";
import Mainfollow from "../components/main/Mainfollow";
import MainWeather from "../components/main/MainWeather";
import MainAnother from "../components/main/MainAnother";
import MainNewBrand from "../components/main/MainNewBrand";
import {useParams} from "react-router-dom";


interface IParams {
    to_user_id: string;
    from_user_id: string;
}

function followers() {
    let params: IParams = useParams();
    let to_user_id: string = params.to_user_id;
    let from_user_id: string = params.from_user_id;
}


function Main() {
    return (
        <>
            <Mainfollow/>
            <MainWeather/>
            <Banner/>
            <MainNewBrand/>
            <MainAnother/>
        </>
    );
}

export default Main;
