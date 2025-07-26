import api from "./axios";

export interface BenefitDetailData {
    benefit_id: number;
    title: string;
    boundary: string;
    disease: string;
    place: string;
}

export const fetchBenefitById = async (benefitId: number): Promise<BenefitDetailData> => {
    const response = await api.get<BenefitDetailData>(`/benefits/${benefitId}`);
    return response.data;
};
