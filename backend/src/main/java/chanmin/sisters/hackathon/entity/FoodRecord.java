package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "foodrecord")
public class FoodRecord {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long food_id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String food_name;
    private int food_kcal;
    private LocalDateTime food_date;
}
