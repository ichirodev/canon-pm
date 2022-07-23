package com.canon.canon.models;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

@Data
public class Secret {
    private ObjectId ownerId;
    private String name;
    private String primaryEmail;
    private String secondaryEmail;
    private String phoneNumber;
    private String password;
    private String category;
    private String icon;

    public Secret(ObjectId ownerId, String name, String primaryEmail, String secondaryEmail, String phoneNumber, String password, String category, String icon) {
        this.ownerId = ownerId;
        this.name = name;
        this.primaryEmail = primaryEmail;
        this.secondaryEmail = secondaryEmail;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.category = category;
        this.icon = icon;
    }
}
