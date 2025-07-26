package chanmin.sisters.hackathon.global;


import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.multipart.MultipartFile;

import java.io.ByteArrayInputStream;
import java.io.InputStream;

@Getter
@RequiredArgsConstructor
public class ByteArrayMultipartFile implements MultipartFile {
    private final String fileName;
    private final byte[] content;

    @Override
    public String getName() { return fileName; }

    @Override
    public String getOriginalFilename() { return fileName; }

    @Override
    public String getContentType() { return "image/jpeg"; }

    @Override
    public boolean isEmpty() { return content.length == 0; }

    @Override
    public long getSize() { return content.length; }

    @Override
    public byte[] getBytes() { return content; }

    @Override
    public InputStream getInputStream() { return new ByteArrayInputStream(content); }

    @Override
    public void transferTo(java.io.File dest) { throw new UnsupportedOperationException(); }
}
