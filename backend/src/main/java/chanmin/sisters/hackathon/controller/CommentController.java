package chanmin.sisters.hackathon.controller;


import chanmin.sisters.hackathon.entity.Board;
import chanmin.sisters.hackathon.entity.Comment;
import chanmin.sisters.hackathon.service.BoardService;
import chanmin.sisters.hackathon.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    private final BoardService boardService;

    @GetMapping("/board/{boardId}")
    public List<Comment> getCommentsByBoard(@PathVariable Long boardId) {
        Board board = boardService.getBoardById(boardId);
        return commentService.getCommentsByBoard(board);
    }

    @PostMapping
    public ResponseEntity<Comment> createComment(@RequestBody Comment comment) {
        return ResponseEntity.ok(commentService.createComment(comment));
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
        commentService.deleteComment(commentId);
        return ResponseEntity.noContent().build();
    }
}