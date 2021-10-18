package com.mintic.microservice.repositories;

import com.mintic.microservice.models.Estudiantes;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EstudianteRepository extends MongoRepository <Estudiantes, String> {

    List<Estudiantes> findByProyectosId (String proyectosId);

}
