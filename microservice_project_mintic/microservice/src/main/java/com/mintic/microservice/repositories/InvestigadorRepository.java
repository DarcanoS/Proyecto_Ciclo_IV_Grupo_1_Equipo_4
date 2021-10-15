package com.mintic.microservice.repositories;

import com.mintic.microservice.models.InvestigadoresModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.HashMap;
import java.util.List;

public interface InvestigadorRepository extends MongoRepository<InvestigadoresModel , String> {

    List<InvestigadoresModel> findByProyectos(HashMap<String,String> proyectos);

}
