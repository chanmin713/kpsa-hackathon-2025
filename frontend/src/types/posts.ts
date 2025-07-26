import type { User } from "./user";

export type category = "TOTAL" | "INFO" | "QNA" | "FREE";

export type PostInfo = {
  board_id: number;
  user: User;
  category: category,
  title: string;
  content: string;
  dateTime: string;
}

export type CommentInfo = {
  commentId: number;
  content: string;
  user: User;
  board: PostInfo;
}