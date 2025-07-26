import api from "./axios";

export interface DoctorData {
    doctor_id: number;
    img: string;
    title: string;
    content: string;
    hospital: string;
}

export const fetchDoctorById = async (doctorId: number): Promise<DoctorData> => {
    const response = await api.get<DoctorData>(`/doctors/${doctorId}`);
    return response.data;
};
