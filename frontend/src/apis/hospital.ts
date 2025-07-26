import api from "./axios";
import type { User } from "../types/user";

export interface HospitalRecordData {
    hr_id: number;
    user: User;
    datetime: string;
    location: string;
    symptom: string;
    memo: string;
}

export const fetchHRById = async (hr_id: number): Promise<HospitalRecordData> => {
    const response = await api.get<HospitalRecordData>(`/hr/${hr_id}`);
    return response.data;
};
