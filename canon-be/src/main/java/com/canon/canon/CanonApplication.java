package com.canon.canon;

import com.canon.canon.models.Secret;
import com.canon.canon.models.User;
import com.canon.canon.repositories.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;

@SpringBootApplication
public class CanonApplication {

	public static void main(String[] args) {
		SpringApplication.run(CanonApplication.class, args);
	}
}
