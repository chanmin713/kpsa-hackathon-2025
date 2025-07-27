export interface Medicine {
  medi_id: number;
  name: string;
  explaination: string;
  schedule: string;
}

export const medicines: Medicine[] = [
  {
    medi_id: 1,
    name: "타이레놀",
    explaination: "통증 완화 및 해열제",
    schedule: "매일 식후 30분",
  },
  {
    medi_id: 2,
    name: "베이글",
    explaination: "소화 촉진제",
    schedule: "매일 오후 12:00",
  },
  // 필요한 약 더 추가
];
