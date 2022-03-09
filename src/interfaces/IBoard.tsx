interface IBoard {
  board_id: number;
  board_poster: string;
  // board_img: Image;
  board_text: string;
  board_date: Date;
  board_tag: string[];
  board_comment: string[];
  board_like: number;
  board_view: number;
}

export default IBoard;
