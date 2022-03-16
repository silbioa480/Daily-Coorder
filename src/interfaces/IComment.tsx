interface IComment {
  comment_id?: number;
  board_id: number;
  comment_poster: string;
  comment_text: string;
  comment_like_number: number;
  comment_post_date: Date;
  comment_update_date?: Date;
}

export default IComment;
