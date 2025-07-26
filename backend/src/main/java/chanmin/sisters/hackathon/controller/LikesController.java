package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.Board;
import chanmin.sisters.hackathon.entity.User;
import chanmin.sisters.hackathon.service.BoardService;
import chanmin.sisters.hackathon.service.LikesService;
import chanmin.sisters.hackathon.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/likes")
@RequiredArgsConstructor
public class LikesController {

    private final LikesService likesService;
    private final BoardService boardService;
    private final UserService userService;

    @PostMapping("/{userId}/{boardId}")
    public ResponseEntity<String> toggleLike(@PathVariable Long userId, @PathVariable Long boardId) {
        User user = userService.getInfobyId(userId);
        Board board = boardService.getBoardById(boardId);
        boolean liked = likesService.toggleLike(user, board);
        return ResponseEntity.ok(liked ? "Liked" : "Unliked");
    }

    @GetMapping("/count/{boardId}")
    public ResponseEntity<Long> countLikes(@PathVariable Long boardId) {
        Board board = boardService.getBoardById(boardId);
        return ResponseEntity.ok(likesService.countLikes(board));
    }
}