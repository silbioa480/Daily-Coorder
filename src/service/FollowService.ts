import axios, {AxiosResponse} from "axios";
import IFollow from "../interfaces/IFollow";
import IUser from "../interfaces/IUser";
import ILikeTag from "../interfaces/ITagLike";

const FOLLOW_API_BASE_URL =
    "http://localhost:8080/api/follow";

class FollowService {
    getFollows() {
        return axios.get<IFollow[]>(FOLLOW_API_BASE_URL);
    }

    createFollow(follow: IFollow) {
        return axios.post(FOLLOW_API_BASE_URL, follow);
    }

    getFollowById(
        follow_id: IFollow["follow_id"]
    ): Promise<AxiosResponse<IFollow>> {
        return axios.get(FOLLOW_API_BASE_URL + "/" + follow_id);
    }

    getFollowerByUserId(
        userId: IFollow["from_user_id"]
    ): Promise<AxiosResponse<IUser["user_id"][]>> {
        return axios.get(FOLLOW_API_BASE_URL + "/follower/" + userId);
    }

    getCheckFollow(
        fromUserId: IFollow["from_user_id"],
        toUserId: IFollow["to_user_id"]
    ): Promise<AxiosResponse<IFollow>> {
        console.log(fromUserId + ":" + toUserId);
        let url = FOLLOW_API_BASE_URL + "/follower/" + fromUserId + "/" + toUserId;
        return axios.get(url);
    }

    updateFollow(
        follow: IFollow,
        follow_id: IFollow["follow_id"]
    ): Promise<AxiosResponse<IFollow>> {
        return axios.put(FOLLOW_API_BASE_URL + "/" + follow_id, follow);
    }

    deleteFollow(follow_id: IFollow["follow_id"]) {
        return axios.delete(FOLLOW_API_BASE_URL + "/" + follow_id);
    }
}

export default new FollowService();
