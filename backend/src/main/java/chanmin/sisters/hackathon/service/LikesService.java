package chanmin.sisters.hackathon.service;


import chanmin.sisters.hackathon.entity.Board;
import chanmin.sisters.hackathon.entity.Likes;
import chanmin.sisters.hackathon.entity.User;
import chanmin.sisters.hackathon.repository.LikesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class LikesService {

    private final LikesRepository likesRepository;

    public boolean toggleLike(User user, Board board) {
        return likesRepository.findByUserAndBoard(user, board)
                .map(existing -> {
                    likesRepository.delete(existing);
                    return false; // 취소
                })
                .orElseGet(() -> {
                    Likes like = new Likes();
                    like.setUser(user);
                    like.setBoard(board);
                    likesRepository.save(like);
                    return true; // 좋아요 생성
                });
    }

    public Long countLikes(Board board) {
        return likesRepository.countByBoard(board);
    }
}