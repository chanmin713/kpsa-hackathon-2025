import React, { useState } from 'react';
import { Send, Smile } from 'lucide-react';
import type { CommentPost, PostInfo } from '../../../types/posts';
import { useAuthStore } from '../../../storages/useAuthStorage';
import { sendComment } from '../../../apis/board';

interface ChatInputProps {
  post: PostInfo | null;
  refreshComment: () => void;
}

export default function ChatInput({ post, refreshComment }: ChatInputProps) {
  const [message, setMessage] = useState<string>('');
  const { user } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    if (message.trim() && post && user) {
      const chat: CommentPost = {
        board: {
          board_id: post.board_id
        },
        user: {
          user_id: user.user_id
        },
        content: message.trim()
      }
      await sendComment(chat);
      setMessage('');
      refreshComment();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const target = e.target;
    target.style.height = 'auto';
    target.style.height = Math.min(target.scrollHeight, 128) + 'px';
    setMessage(target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col">
      {/* 입력창 영역 */}
      <div className="bg-white">
        <div className="flex items-end gap-3">
          {/* 텍스트 입력 영역 */}
          <div className="flex-1 relative">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              onInput={handleInput}
              placeholder="메시지를 입력하세요..."
              className="w-full resize-none border-0 outline-none bg-transparent text-gray-800 placeholder-gray-400 min-h-[24px] max-h-32 overflow-y-auto leading-6"
              rows={1}
              style={{
                height: 'auto',
                minHeight: '24px',
                maxHeight: '128px',
              }}
            />
          </div>

          {/* 이모지 버튼 */}
          <button
            type="button"
            className="flex-shrink-0 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Smile size={20} />
          </button>

          {/* 전송 버튼 */}
          <button
            type="submit"
            disabled={!message.trim()}
            className={`flex-shrink-0 p-2 rounded-lg transition-all ${
              message.trim()
                ? 'bg-main text-white hover:bg-hover shadow-md'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </form>
  );
}
