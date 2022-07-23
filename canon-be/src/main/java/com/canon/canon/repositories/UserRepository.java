package com.canon.canon.repositories;

import com.canon.canon.models.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, ObjectId> {
    public Boolean existsUserByEmail(String email);
    public Boolean existsUserByUsername(String username);
}
