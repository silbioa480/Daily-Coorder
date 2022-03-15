import axios, {AxiosResponse} from "axios";
import IBoardLike from "../interfaces/IBoardLike";

const BOARD_LIKE_API_BASE_URL =
    "https://daily-coorder-backend.herokuapp.com/api/board_like";

class BoardLikeService {
    getBoardLikes() {
        return axios.get<IBoardLike[]>(BOARD_LIKE_API_BASE_URL);
    }

    createBoardLike(board_like: IBoardLike) {
        return axios.post(BOARD_LIKE_API_BASE_URL, board_like);
    }

    getBoardLikeById(
        board_like_id: IBoardLike["board_like_id"]
    ): Promise<AxiosResponse<IBoardLike>> {
        return axios.get(BOARD_LIKE_API_BASE_URL + "/" + board_like_id);
    }

    getCheckLike(board_id: IBoardLike["board_id"],
                 board_like_user_id: IBoardLike["board_like_user_id"]
    ): Promise<AxiosResponse<IBoardLike>> {
        return axios.get(BOARD_LIKE_API_BASE_URL + "/" + board_id + "/" + board_like_user_id);
    }

    updateBoardLike(
        board_like: IBoardLike,
        board_like_id: IBoardLike["board_like_id"]
    ): Promise<AxiosResponse<IBoardLike>> {
        return axios.put(BOARD_LIKE_API_BASE_URL + "/" + board_like_id, board_like);
    }

    deleteBoardLike(board_like_id: IBoardLike["board_like_id"]) {
        return axios.delete(BOARD_LIKE_API_BASE_URL + "/" + board_like_id);
    }
}

export default new BoardLikeService();
