package com.canon.cpm.Controllers;

import com.canon.cpm.Models.Secret;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@RestController
public class SecretController {

    @PostMapping("/new")
    public String newSecret(
            @RequestParam String name,
            @RequestParam Optional<String> description,
            @RequestParam Optional<String> login_a,
            @RequestParam Optional<String> pswd_a,
            @RequestParam Optional<String> login_b,
            @RequestParam Optional<String> pswd_b,
            @RequestParam Optional<String> recoveryMethod,
            @RequestParam Optional<String> icon,
            @RequestParam Optional<Integer> category
    ) {
        var secret = new Secret();

        return "new";
    }

    public Secret setOptionalFields(
            Secret secret,
            List<Optional<Object>> optionalList,
            List<String> optionalNameList
    ) {
        optionalList.forEach(object -> {
            if (obj)
        });

        return secret;
    }
}