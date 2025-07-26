import type { PostInfo } from "../types/posts";

export const postList: PostInfo[] = [
  {
    boardId: 1,
    user: {
      userId: 1,
      loginId: '최고의어린이',
      diseaseId: 1,
      coin: 1000
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
      userId: 2,
      loginId: '피크닉을 하자',
      diseaseId: 1,
      coin: 1000
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
      userId: 3,
      loginId: '매일 3시 45분에 우는 사람',
      diseaseId: 1,
      coin: 1000
    },
    content: "흑흑\n흑흑흑\n흑흑흑흑흑",
    replies: 1,
    likes: 0,
    isReplied: false,
    isLiked: false,
    title: "흑"
  }
]