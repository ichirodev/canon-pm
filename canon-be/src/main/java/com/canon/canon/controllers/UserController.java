package com.canon.canon.controllers;

import com.canon.canon.models.Response;
import com.canon.canon.security.Context;
import com.canon.canon.services.UserService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Objects;

@RestController
@RequestMapping("api/v1/users")
@AllArgsConstructor
public class UserController {
    private final UserService userService;

    @PutMapping(path="/register")
    public Response registerNewUser(@RequestParam(name="username") String username,
                                    @RequestParam(name="email") String email,
                                    @RequestParam(name="password") String password) {
        var response = userService.registerNewUser(username, email, password);
        return response;
    }

    /*
    @GetMapping(path="/login")
    public Response login(@RequestParam(name="username") String username,
                          @RequestParam(name="email") String email,
                          @RequestParam(name="password", required = true) String password) {
        if (Objects.nonNull(username)) {
            return userService.loginWithUsername(username, password);
        }

        if (Objects.nonNull(email)) {
            return userService.loginWithEmail(email, password);
        }

        return new Response("Error", "Invalid credentials");
    }
    */

    @PutMapping(path="/modifyName")
    public Response modifyNameExistentUser(@RequestHeader("id") String id,
                                           @RequestHeader("token") String token,
                                           @RequestParam("name") String name) {
        var context = new Context(id, token);
        var response = userService.modifyNameExistingUser(context, name);
        return response;
    }
}
