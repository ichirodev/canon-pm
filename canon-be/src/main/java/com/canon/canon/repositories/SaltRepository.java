package com.canon.canon.repositories;

import com.canon.canon.models.Salt;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SaltRepository extends MongoRepository<Salt, ObjectId> {
}
