package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.Board;
import chanmin.sisters.hackathon.entity.Likes;
import chanmin.sisters.hackathon.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikesRepository extends JpaRepository<Likes, Long> {
    Optional<Likes> findByUserAndBoard(User user, Board board);
    Long countByBoard(Board board);
}
