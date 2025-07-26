import api from "./axios";

export interface DiseaseInformationData {
    info_id: number;
    img: string;
    title: string;
    content: string;
    author: string;
    date: string;
}

export const fetchDiseaseById = async (infoId: number): Promise<DiseaseInformationData> => {
    const response = await api.get<DiseaseInformationData>(`/info/${infoId}`);
    return response.data;
};
