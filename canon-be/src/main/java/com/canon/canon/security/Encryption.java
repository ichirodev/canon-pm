package com.canon.canon.security;

import org.springframework.security.crypto.bcrypt.BCrypt;

import java.security.SecureRandom;

public class Encryption {
    public static Boolean verify(String x, String y) {
        return BCrypt.checkpw(x, y);
    }
    public static String generateSalt() {
        var rand = new SecureRandom();
        return BCrypt.gensalt(11) + String.valueOf(rand.nextLong());
    }
    public static String encrypt(String x, String salt) {
        return BCrypt.hashpw(x, salt);
    }
}
