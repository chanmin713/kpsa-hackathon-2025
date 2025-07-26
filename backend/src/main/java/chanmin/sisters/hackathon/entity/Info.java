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

    private String image_url;
    private String title;
    private String content;
    private String company;
    private LocalDateTime time;
}
