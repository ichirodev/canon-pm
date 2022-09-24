package com.canon.cpm.Repositories;

import com.canon.cpm.Models.Secret;
import org.springframework.data.repository.CrudRepository;

public interface SecretRepository extends CrudRepository<Secret, Long> {
}
