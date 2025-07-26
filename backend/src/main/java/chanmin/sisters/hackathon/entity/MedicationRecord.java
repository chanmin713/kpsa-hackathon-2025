package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "medicationrecord")
public class MedicationRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mr_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne
    @JoinColumn(name = "cycle_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Cycle cycle;

    private LocalDateTime mr_time; // 처방 일시
    private String mr_hospital; // 처방 병원

    @Column(columnDefinition = "TEXT") // 긴 본문 내용
    private String memo;


}
