import type { CommentInfo, PostInfo } from "../types/posts";

export const postList: PostInfo[] = [
  {
    boardId: 1,
    user: {
      user_id: 1,
      username: '최고의어린이',
      diseaseId: 1,
      user_coin: 1000
    },
    content: "우리집 어린이가 어린이집에서 과자 만들기 체험을 하고 왔어요.\n엄마한테 주겠다고 고사리같은 손으로 들고 오는 게 왜 이리 예쁜지..^^\n꼬맹이 다 컸다?",
    replies: 30,
    likes: 98,
    isReplied: true,
    isLiked: false,
    title: "기특한 일이 있었어요"
  },
  {
    boardId: 2,
    user: {
      user_id: 2,
      username: '피크닉을 하자',
      diseaseId: 1,
      user_coin: 1000
    },
    content: "오늘로 473일 연속 피크닉!\n오늘은 가스버너를 챙겨와서 짜글이를 끓였어요",
    replies: 473,
    likes: 666,
    isReplied: false,
    isLiked: true,
    title: "매일매일 피크닉 챌린지 473"
  },
  {
    boardId: 3,
    user: {
      user_id: 3,
      username: '매일 3시 45분에 우는 사람',
      diseaseId: 1,
      user_coin: 1000
    },
    content: "흑흑\n흑흑흑\n흑흑흑흑흑",
    replies: 1,
    likes: 0,
    isReplied: false,
    isLiked: false,
    title: "흑"
  },
  {
    boardId: 4,
    user: {
      user_id: 4,
      username: '소확행러',
      diseaseId: 2,
      user_coin: 500
    },
    content: "오늘은 편의점에서 1+1 커피를 샀어요.\n햇살 좋은 벤치에서 혼자 마시는 커피 한 잔, 이게 행복이죠.",
    replies: 12,
    likes: 84,
    isReplied: true,
    isLiked: true,
    title: "작지만 확실한 행복"
  },
  {
    boardId: 5,
    user: {
      user_id: 5,
      username: '아기상어엄마',
      diseaseId: 3,
      user_coin: 200
    },
    content: "아기가 요즘 아기상어 노래에 빠졌어요~\n하루 종일 '뚜루루뚜루~' 흥얼대는 모습이 너무 귀여워요ㅎㅎ",
    replies: 45,
    likes: 152,
    isReplied: true,
    isLiked: false,
    title: "아기상어 중독!"
  },
  {
    boardId: 6,
    user: {
      user_id: 6,
      username: '은근한행복',
      diseaseId: 1,
      user_coin: 800
    },
    content: "비 오는 날 창문 열어두고 듣는 빗소리에 차 한 잔.\n그냥 그게 참 좋네요.",
    replies: 9,
    likes: 61,
    isReplied: false,
    isLiked: true,
    title: "빗소리와 차"
  }
];

export const commentList: CommentInfo[] = [
  {
    boardId: 1,
    commentId: 1,
    content: "헐~~ 지존 짱이네요",
    user: {
      user_id: 4,
      username: '소확행러',
      diseaseId: 2,
      user_coin: 500
    }
  },
  {
    boardId: 2,
    commentId: 2,
    content: "기분 좋은 글이네요. 장미 한 송이 두고 갑니다. 총총\n@>----",
    user: {
      user_id: 6,
      username: '은근한행복',
      diseaseId: 1,
      user_coin: 800
    }
  }
]