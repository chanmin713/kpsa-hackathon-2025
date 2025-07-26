package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "info")
public class Info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long info_id;

    private String img;
    private String title;

    @Column(columnDefinition = "TEXT") // 긴 본문 내용
    private String content;

    private String author;
    private LocalDateTime date;
}
