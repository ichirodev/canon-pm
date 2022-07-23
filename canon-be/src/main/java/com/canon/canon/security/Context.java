package com.canon.canon.security;

import lombok.Data;
import org.bson.types.ObjectId;

@Data
public class Context {
    private ObjectId userId;
    private String token;

    public Context(String userId, String token) {
        this.token = token;
        this.userId = new ObjectId(userId);
    }
}
