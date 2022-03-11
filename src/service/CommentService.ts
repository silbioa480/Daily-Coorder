import axios, { AxiosResponse } from "axios";
import IComment from "../interfaces/IComment";

const COMMENT_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/comments";

class CommentService {
  getComments() {
    return axios.get<IComment[]>(COMMENT_API_BASE_URL);
  }

  createComment(comment: IComment) {
    return axios.post(COMMENT_API_BASE_URL, comment);
  }

  getCommentById(
    comment_id: IComment["comment_id"]
  ): Promise<AxiosResponse<IComment>> {
    return axios.get(COMMENT_API_BASE_URL + "/" + comment_id);
  }

  updateComment(
    comment: IComment,
    comment_id: IComment["comment_id"]
  ): Promise<AxiosResponse<IComment>> {
    return axios.put(COMMENT_API_BASE_URL + "/" + comment_id, comment);
  }

  deleteComment(comment_id: IComment["comment_id"]) {
    return axios.delete(COMMENT_API_BASE_URL + "/" + comment_id);
  }
}

export default new CommentService();
