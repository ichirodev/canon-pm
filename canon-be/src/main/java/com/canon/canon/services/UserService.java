package com.canon.canon.services;

import com.canon.canon.models.Response;
import com.canon.canon.models.Salt;
import com.canon.canon.models.User;
import com.canon.canon.repositories.SaltRepository;
import com.canon.canon.repositories.UserRepository;
import com.canon.canon.security.Context;
import com.canon.canon.security.Encryption;
import jdk.jshell.spi.ExecutionControl;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.crypto.SecretKey;
import java.util.Objects;
import java.util.Optional;

@AllArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final SaltRepository saltRepository;
    private final MongoOperations mongoOperations;
    private final MongoTemplate mongoTemplate;
    @Transactional
    public Response registerNewUser(String username, String email, String password) {
        if (userRepository.existsUserByEmail(email)) {
            return Response.ResponseError(101,
                    "Error: Credentials are already in use",
                    "Entered email is already registered on the system",
                    "Entered email: " + email
            );
        }

        if (userRepository.existsUserByUsername(username)) {
            return Response.ResponseError(102,
                    "Error: Credentials are already in use",
                    "Entered username is already registered on the system",
                    "Entered username: " + username
            );
        }

        try {
            var salt = Encryption.generateSalt();
            var newSalt = new Salt(username, salt);
            var newUser = new User(username, email, Encryption.encrypt(password, salt));
            userRepository.insert(newUser);
            saltRepository.insert(newSalt);
            return new Response("Success: User registered!", "We are redirecting you to the log-in page!");
        } catch (Exception e) {
            return Response.ResponseError(301,
                    "Error: Unable to create the user",
                    "Something happened when trying to insert the new user to the database",
                    "Exception message: " + e.getMessage());
        }
    }

    public void login() throws Exception {
        throw new Exception();
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
            user.setPassword(null);
            return Optional.ofNullable(user);
        }
        return null;
    }

}
