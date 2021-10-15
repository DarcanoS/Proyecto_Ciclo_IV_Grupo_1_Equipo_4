package com.mintic.microservice.repositories;

import com.mintic.microservice.models.EstudiantesModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.ArrayList;
import java.util.List;

public interface EstudianteRepository extends MongoRepository <EstudiantesModel, String> {

    List<EstudiantesModel> findByProyectosId (String proyectosId);

}
