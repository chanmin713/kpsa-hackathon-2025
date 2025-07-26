package chanmin.sisters.hackathon.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity
@Setter
@Getter
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;

    @Column(unique = true, nullable = false)
    private String username;

    private int user_coin;

    // streak
    private LocalDateTime start_date;
    private LocalDateTime end_date;

    @ManyToOne
    @JoinColumn(name = "disease_id")
    private Disease disease;

}
