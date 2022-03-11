import axios, { AxiosResponse } from "axios";
import IMemberId from "../interfaces/IMemberId";

const MEMBER_ID_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/member_id";

class MemberIdService {
  getIds() {
    return axios.get<IMemberId[]>(MEMBER_ID_API_BASE_URL);
  }

  createId(member_id: IMemberId) {
    return axios.post(MEMBER_ID_API_BASE_URL, member_id);
  }

  getIdById(
    member_id: IMemberId["member_id"]
  ): Promise<AxiosResponse<IMemberId>> {
    return axios.get(MEMBER_ID_API_BASE_URL + "/" + member_id);
  }

  updateId(
    member_id: IMemberId,
    member_id_member_id: IMemberId["member_id"]
  ): Promise<AxiosResponse<IMemberId>> {
    return axios.put(
      MEMBER_ID_API_BASE_URL + "/" + member_id_member_id,
      member_id
    );
  }

  deleteId(member_id: IMemberId["member_id"]) {
    return axios.delete(MEMBER_ID_API_BASE_URL + "/" + member_id);
  }
}

export default new MemberIdService();
