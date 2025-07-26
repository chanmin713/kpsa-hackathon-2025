package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "symptomrecord")
public class SymptomRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long sr_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime start_time;
    private String symptoms; // 콤마(,)로 구분

    @Column(columnDefinition = "TEXT") // 긴 본문 내용
    private String memo;
}
