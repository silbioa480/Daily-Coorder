import axios, { AxiosResponse } from "axios";
import IBoardImage from "../interfaces/IBoardImage";

const BOARD_IMAGE_API_BASE_URL =
  "https://daily-coorder-backend.herokuapp.com/api/board_image";

class BoardImageService {
  getBoardImages() {
    return axios.get<IBoardImage[]>(BOARD_IMAGE_API_BASE_URL);
  }

  createBoardImage(board_image: IBoardImage) {
    return axios.post(BOARD_IMAGE_API_BASE_URL, board_image);
  }

  getBoardImageById(
    board_image_id: IBoardImage["board_image_id"]
  ): Promise<AxiosResponse<IBoardImage>> {
    return axios.get(BOARD_IMAGE_API_BASE_URL + "/" + board_image_id);
  }

  updateBoardImage(
    board_image: IBoardImage,
    board_image_id: IBoardImage["board_image_id"]
  ): Promise<AxiosResponse<IBoardImage>> {
    return axios.put(
      BOARD_IMAGE_API_BASE_URL + "/" + board_image_id,
      board_image
    );
  }

  deleteBoardImage(board_image_id: IBoardImage["board_image_id"]) {
    return axios.delete(BOARD_IMAGE_API_BASE_URL + "/" + board_image_id);
  }
}

export default new BoardImageService();
