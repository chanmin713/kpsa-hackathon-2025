package chanmin.sisters.hackathon.repository;

import chanmin.sisters.hackathon.entity.Board;
import chanmin.sisters.hackathon.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
    List<Board> findByCategory(Category category);
}
