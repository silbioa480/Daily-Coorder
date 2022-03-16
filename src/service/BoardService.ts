import axios, {AxiosResponse} from "axios";
import IBoard from "../interfaces/IBoard";

const BOARD_API_BASE_URL =
    "http://localhost:8080/api/board";

class BoardService {
    getBoards() {
        return axios.get<IBoard[]>(BOARD_API_BASE_URL);
    }

    createBoard(board: IBoard) {
        return axios.post(BOARD_API_BASE_URL, board);
    }

    getBoardById(board_id: IBoard["board_id"]): Promise<AxiosResponse<IBoard>> {
        return axios.get(BOARD_API_BASE_URL + "/" + board_id);
    }

    getBoardCount(): Promise<AxiosResponse<number>> {
        return axios.get(BOARD_API_BASE_URL + "/board/cnt");
    }

    getBoardPage(startrow: number): Promise<AxiosResponse<IBoard[]>> {
        return axios.get(BOARD_API_BASE_URL + "/page/" + startrow);
    }

    getBoardByUserId(
        board_poster: IBoard["board_poster"]
    ): Promise<AxiosResponse<IBoard[]>> {
        return axios.get(BOARD_API_BASE_URL + "/board_poster/" + board_poster);
    }

    updateBoard(
        board: IBoard,
        board_id: IBoard["board_id"]
    ): Promise<AxiosResponse<IBoard>> {
        return axios.put(BOARD_API_BASE_URL + "/" + board_id, board);
    }

    deleteBoard(board_id: IBoard["board_id"]) {
        return axios.delete(BOARD_API_BASE_URL + "/" + board_id);
    }
}

export default new BoardService();
