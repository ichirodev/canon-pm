package com.canon.canon.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Data
@Document
public class User {
    @Indexed(unique = true) private String username;
    private String password;
    @Indexed(unique = true) private String email;
    private String name;
    private Boolean confirmedUser;
    private List<ObjectId> secrets;
    private List<String> tokens;

    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }
}
