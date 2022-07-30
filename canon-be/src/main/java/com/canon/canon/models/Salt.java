package com.canon.canon.models;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.crypto.SecretKey;

@Data
@Document
public class Salt {
    String username, salt;

    public Salt(String username, String salt) {
        this.username = username;
        this.salt = salt;
    }
}
