import type { User } from "./user";

export type PostInfo = {
  boardId: number;
  user: User;
  title: string;
  content: string;
  replies: number;
  likes: number;
  isReplied: boolean;
  isLiked: boolean; 
}

export type CommentInfo = {
  boardId: number;
  commentId: number;
  content: string;
  user: User;
}