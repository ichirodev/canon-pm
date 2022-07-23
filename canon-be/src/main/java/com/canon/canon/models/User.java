package com.canon.canon.models;

import com.jayway.jsonpath.Criteria;
import lombok.Data;
import lombok.Generated;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.query.Update;

import javax.management.Query;
import java.util.List;

@Data
@Document
public class User {
    @Indexed(unique = true) private String username;
    private String password;
    @Indexed(unique = true) private String email;
    private String name;
    private List<ObjectId> secrets;
    private List<String> tokens;

    public User(String username, String email, String password) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
}
