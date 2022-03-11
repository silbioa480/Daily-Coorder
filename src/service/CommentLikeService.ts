import axios, { AxiosResponse } from "axios";
import ICommentLike from "../interfaces/ICommentLike";

const COMMENT_LIKE_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/comment_like";

class CommentLikeService {
  getCommentLikes() {
    return axios.get<ICommentLike[]>(COMMENT_LIKE_API_BASE_URL);
  }

  createCommentLike(comment_like: ICommentLike) {
    return axios.post(COMMENT_LIKE_API_BASE_URL, comment_like);
  }

  getCommentLikeById(
    comment_like_id: ICommentLike["comment_like_id"]
  ): Promise<AxiosResponse<ICommentLike>> {
    return axios.get(COMMENT_LIKE_API_BASE_URL + "/" + comment_like_id);
  }

  updateCommentLike(
    comment_like: ICommentLike,
    comment_like_id: ICommentLike["comment_like_id"]
  ): Promise<AxiosResponse<ICommentLike>> {
    return axios.put(
      COMMENT_LIKE_API_BASE_URL + "/" + comment_like_id,
      comment_like
    );
  }

  deleteCommentLike(comment_like_id: ICommentLike["comment_like_id"]) {
    return axios.delete(COMMENT_LIKE_API_BASE_URL + "/" + comment_like_id);
  }
}

export default new CommentLikeService();
