import api from "./axios";
import type { User, Disease } from "../types/user";

export interface SymptomData {
    sr_id: number;
    user: User;
    start_time: string;
    symptoms: string;
    memo: string;
}

export const fetchSRById = async (sr_id: number): Promise<SymptomData> => {
    const response = await api.get<SymptomData>(`/sr/${sr_id}`);
    return response.data;
};
