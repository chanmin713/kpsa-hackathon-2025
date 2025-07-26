export type User = {
  user_id: number;
  username: string;
  start_date: string | null;
  end_date: string | null;
  user_coin: number;
  disease: Disease | null;
}

export type Disease = {
  disease_id: number;
  disease_name_kr: string;
  disease_name_en: string;
}