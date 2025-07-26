package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long news_id;

    private String img;
    private String title;

    @Column(columnDefinition = "TEXT") // 긴 본문 내용
    private String content;

    private String company;
    private String author;
    private LocalDate date;
}
