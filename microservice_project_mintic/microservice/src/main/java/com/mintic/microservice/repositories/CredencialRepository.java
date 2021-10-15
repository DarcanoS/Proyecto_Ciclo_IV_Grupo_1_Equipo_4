package com.mintic.microservice.repositories;

import com.mintic.microservice.models.CredencialesModel;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface CredencialRepository extends MongoRepository<CredencialesModel, String> {
}
