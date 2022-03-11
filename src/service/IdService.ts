import axios, { AxiosResponse } from "axios";
import IId from "../interfaces/IId";

const ID_API_BASE_URL = "https://daily-coorder-backend.herokuapp.com/api/id";

class IdService {
  getIds() {
    return axios.get<IId[]>(ID_API_BASE_URL);
  }

  createId(id: IId) {
    return axios.post(ID_API_BASE_URL, id);
  }

  getIdById(id: IId["id"]): Promise<AxiosResponse<IId>> {
    return axios.get(ID_API_BASE_URL + "/" + id);
  }

  updateId(id: IId, id_id: IId["id"]): Promise<AxiosResponse<IId>> {
    return axios.put(ID_API_BASE_URL + "/" + id_id, id);
  }

  deleteId(id: IId["id"]) {
    return axios.delete(ID_API_BASE_URL + "/" + id);
  }
}

export default new IdService();
