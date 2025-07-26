package chanmin.sisters.hackathon.global;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.Statement;

@Component
@RequiredArgsConstructor
public class SqlRunner implements CommandLineRunner {

    private final DataSource dataSource;

    @Override
    public void run(String... args) throws Exception {
        executeSqlFile("sql/benefit.sql");
        executeSqlFile("sql/doctors.sql");
        executeSqlFile("sql/info.sql");
        executeSqlFile("sql/news.sql");
        executeSqlFile("sql/disease.sql");
    }

    private void executeSqlFile(String path) throws Exception {
        try (
                Connection conn = dataSource.getConnection();
                Statement stmt = conn.createStatement()
        ) {
            Resource resource = new ClassPathResource(path);
            String sql = new String(resource.getInputStream().readAllBytes());
            for (String query : sql.split(";")) {
                if (!query.strip().isEmpty()) {
                    stmt.execute(query);
                }
            }
        }
    }
}
