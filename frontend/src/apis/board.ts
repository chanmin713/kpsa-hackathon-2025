import type { category, CommentInfo, CommentPost, PostInfo } from "../types/posts";
import api from "./axios";

export const boardsByCategory = async (category: category): Promise<PostInfo[]> => {
    const response = await api.get<PostInfo[]>(`/boards/category/${category}`);
    return response.data;
};

export const boardById = async (id: number): Promise<PostInfo> => {
    const response = await api.get<PostInfo>(`/boards/${id}`);
    return response.data;
};

export const postBoard = async (post: PostInfo): Promise<PostInfo> => {
    const response = await api.post<PostInfo>(`/boards`, post);
    return response.data;
};

export const sendLike = async (userId: number, boardId: number): Promise<PostInfo> => {
    const response = await api.post<PostInfo>(`/likes/${userId}/${boardId}`);
    return response.data;
};

export const getLikeCount = async (boardId: number): Promise<number> => {
    const response = await api.get<number>(`/likes/count/${boardId}`);
    return response.data;
};

export const sendComment = async (comment: CommentPost): Promise<PostInfo> => {
    const response = await api.post<PostInfo>(`/comments`, comment);
    return response.data;
};

export const getCommentsById = async (id: number): Promise<CommentInfo[]> => {
    const response = await api.get<CommentInfo[]>(`/comments/board/${id}`);
    return response.data;
};