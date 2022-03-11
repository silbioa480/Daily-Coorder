import axios, { AxiosResponse } from "axios";
import ITag from "../interfaces/ITag";

const TAG_API_BASE_URL = "https://daily-coorder-backend.herokuapp.com/api/tag";

class TagService {
  getTags() {
    return axios.get<ITag[]>(TAG_API_BASE_URL);
  }

  createTag(tag: ITag) {
    return axios.post(TAG_API_BASE_URL, tag);
  }

  getTagById(tag_id: ITag["tag_id"]): Promise<AxiosResponse<ITag>> {
    return axios.get(TAG_API_BASE_URL + "/" + tag_id);
  }

  getBoardIdByTagName(
    tag_name: ITag["tag_name"]
  ): Promise<AxiosResponse<number[]>> {
    return axios.get(TAG_API_BASE_URL + "/tag_name/" + tag_name);
  }

  updateTag(tag: ITag, tag_id: ITag["tag_id"]): Promise<AxiosResponse<ITag>> {
    return axios.put(TAG_API_BASE_URL + "/" + tag_id, tag);
  }

  deleteTag(tag_id: ITag["tag_id"]) {
    return axios.delete(TAG_API_BASE_URL + "/" + tag_id);
  }
}

export default new TagService();
