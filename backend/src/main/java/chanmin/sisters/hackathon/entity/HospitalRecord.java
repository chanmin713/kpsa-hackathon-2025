package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "hospitalrecord")
public class HospitalRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long hr_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private LocalDateTime datetime;
    private String location;
    private String symptom;
    private String memo;
}
