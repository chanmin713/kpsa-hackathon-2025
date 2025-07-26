package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

@Entity
@Setter
@Getter
@Table(name = "cycle")
public class Cycle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long cycle_id;

    private String cycle_string; // 복용주기 일단 string

    @ManyToOne
    @JoinColumn(name = "medi_id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Medication medicine;

}
