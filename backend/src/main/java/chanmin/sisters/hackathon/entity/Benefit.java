package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Setter
@Getter
@Table(name = "benefit")
public class Benefit {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long benefit_id;

    private String title;
    private String boundary;
    private String disease;
    private String place;
}
