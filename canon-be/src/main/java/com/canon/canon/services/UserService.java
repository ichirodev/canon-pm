package com.canon.canon.services;

import com.canon.canon.models.Response;
import com.canon.canon.models.User;
import com.canon.canon.repositories.UserRepository;
import com.canon.canon.security.Context;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final MongoOperations mongoOperations;
    private final MongoTemplate mongoTemplate;
    public Response registerNewUser(String username, String email, String password) {
        if (userRepository.existsUserByEmail(email)) {
            return new Response("Error", "Email is already in use");
        }

        if (userRepository.existsUserByUsername(username)) {
            return new Response("Error", "Username already in use");
        }

        var newUser = new User(username, email, password);
        userRepository.insert(newUser);

        return new Response("Done", "New user registered");
    }

    public Response modifyNameExistingUser(Context context, String name) {
        var user = getUserByContext(context);
        if (Objects.isNull(user)) {
            return new Response("Invalid Operation", "No account created or valid token");
        }

        var query = new Query();
        query.addCriteria(Criteria.where("_id").is(context.getUserId()));

        var updateDefinition = new Update().set("name", name);
        mongoOperations.updateFirst(query, updateDefinition, User.class);

        return new Response("Done", "Name changed correctly");
    }

    private Optional<User> getUserByContext(Context context) {
        var user = mongoOperations.findById(context.getUserId(), User.class);
        if (user.getTokens().contains(context.getToken())) {
            return Optional.ofNullable(user);
        }
        return null;
    }


}
