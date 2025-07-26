import type { User } from "../types/user";
import api from "./axios";

export const fetchUserByUsername = async (username: string): Promise<User> => {
    const response = await api.get<User>(`/user/info?username=${username}`);
    return response.data;
};

export const signup = async (username: string): Promise<User> => {
    const response = await api.get<User>(`/user/info?username=${username}`);
    return response.data;
};

export const login = async (username: string): Promise<User> => {
    const response = await api.get<User>(`/user/info?username=${username}`);
    return response.data;
};