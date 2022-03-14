import axios, {AxiosResponse} from "axios";
import ITagLike from "../interfaces/ITagLike";


const FOLLOW_API_BASE_URL =
    "https://daily-coorder-backend.herokuapp.com/api/tag_like";

class TagLikeService {
    getTagNameByMemberId(
        member_id: ITagLike["member_id"]
    ): Promise<AxiosResponse<ITagLike["tag_name"][]>> {
        return axios.get(FOLLOW_API_BASE_URL + "/member_id/" + member_id);
    }


}

export default new TagLikeService();