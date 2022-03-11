import axios, { AxiosResponse } from "axios";
import IFollow from "../interfaces/IFollow";

const FOLLOW_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/follow";

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
