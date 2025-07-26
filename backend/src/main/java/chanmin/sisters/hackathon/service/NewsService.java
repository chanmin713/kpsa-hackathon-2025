package chanmin.sisters.hackathon.service;

import chanmin.sisters.hackathon.entity.News;
import chanmin.sisters.hackathon.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    public List<News> getAllNews() {
        return newsRepository.findAll();
    }

    public News getNewsById(Long id) {
        return newsRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("해당 뉴스가 존재하지 않습니다. id=" + id));
    }

    public News createNews(News news) {
        return newsRepository.save(news);
    }

    public News updateNews(Long id, News updatedNews) {
        News news = getNewsById(id);
        news.setTitle(updatedNews.getTitle());
        news.setContent(updatedNews.getContent());
        news.setImage_url(updatedNews.getImage_url());
        news.setCompany(updatedNews.getCompany());
        news.setReporter(updatedNews.getReporter());
        news.setTime(updatedNews.getTime());
        return newsRepository.save(news);
    }

    public void deleteNews(Long id) {
        newsRepository.deleteById(id);
    }
}