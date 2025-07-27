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

export type PostPost = {
  user: {
    user_id: number;
  }
  category: category;
  title: string;
  content: string;
}

export type CommentInfo = {
  comment_id: number;
  content: string;
  user: User;
  board: PostInfo;
}

export type CommentPost = {
  content: string;
  user: {
    user_id: number;
  }
  board: {
    board_id: number;
  }
}