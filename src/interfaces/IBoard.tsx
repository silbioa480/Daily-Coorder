interface IBoard {
  board_id?: number;
  board_poster: string;
  board_img: File;
  board_title?: string;
  board_text?: string;
  board_url?: string;
  board_like_number: number;
  board_view: number;
  board_post_date: Date;
  board_update_date?: Date;
}

export default IBoard;
