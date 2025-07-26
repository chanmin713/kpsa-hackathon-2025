package chanmin.sisters.hackathon.controller;

import chanmin.sisters.hackathon.entity.User;
import chanmin.sisters.hackathon.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/user")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<User> signup(@RequestParam String username) {
        return ResponseEntity.ok(userService.signup(username));
    }

    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestParam String username){
        return ResponseEntity.ok(userService.login(username));
    }

    @GetMapping("/info")
    public ResponseEntity<User> getInfo(@RequestParam String username){
        return ResponseEntity.ok(userService.getInfo(username));
    }
}
