import api from "./axios";

export interface NewsDetailData {
    news_id: number;
    img: string;
    title: string;
    content: string;
    company: string;
    author: string;
    date: string;
}

export const fetchNewsById = async (newsId: number): Promise<NewsDetailData> => {
    const response = await api.get<NewsDetailData>(`/news/${newsId}`);
    return response.data;
};
