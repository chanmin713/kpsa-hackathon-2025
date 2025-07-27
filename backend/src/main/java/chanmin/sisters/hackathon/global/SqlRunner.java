package chanmin.sisters.hackathon.global;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Component;

import javax.sql.DataSource;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

@Component
@RequiredArgsConstructor
public class SqlRunner implements CommandLineRunner {

    private final DataSource dataSource;

    @Override
    public void run(String... args) throws Exception {
        executeSqlIfTableEmpty("benefit", "sql/benefit.sql");
        executeSqlIfTableEmpty("doctors", "sql/doctors.sql");
        executeSqlIfTableEmpty("info", "sql/info.sql");
        executeSqlIfTableEmpty("news", "sql/news.sql");
        executeSqlIfTableEmpty("disease", "sql/disease.sql");
        executeSqlIfTableEmpty("medication", "sql/medication.sql");
        executeSqlIfTableEmpty("board", "sql/dummy_board_and_comment_data.sql");
    }

    private void executeSqlIfTableEmpty(String tableName, String sqlFilePath) throws Exception {
        try (Connection conn = dataSource.getConnection()) {
            if (isTableEmpty(conn, tableName)) {
                executeSqlFile(conn, sqlFilePath);
            } else {
                System.out.println("🔹 Table '" + tableName + "' already has data. Skipping SQL file: " + sqlFilePath);
            }
        }
    }

    private boolean isTableEmpty(Connection conn, String tableName) throws Exception {
        String query = "SELECT COUNT(*) FROM " + tableName;
        try (PreparedStatement pstmt = conn.prepareStatement(query);
             ResultSet rs = pstmt.executeQuery()) {
            if (rs.next()) {
                return rs.getInt(1) == 0;
            }
            return true; // fallback
        }
    }

    private void executeSqlFile(Connection conn, String path) throws Exception {
        try (Statement stmt = conn.createStatement()) {
            Resource resource = new ClassPathResource(path);
            String sql = new String(resource.getInputStream().readAllBytes());
            for (String query : sql.split(";")) {
                if (!query.strip().isEmpty()) {
                    stmt.execute(query);
                }
            }
            System.out.println("✅ Executed SQL file: " + path);
        }
    }
}