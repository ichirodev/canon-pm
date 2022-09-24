package com.canon.cpm.Models;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Secret {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private @Getter Long id;
    private @Getter @Setter Long ownerId;
    private @Getter @Setter String name;
    private @Getter @Setter String description;
    private @Getter @Setter String login1;
    private @Getter @Setter String password1;
    private @Getter @Setter String login2;
    private @Getter @Setter String password2;
    private @Getter @Setter String recoveryMethod;
    private @Getter @Setter String icon;
    private @Getter @Setter Integer category;
}