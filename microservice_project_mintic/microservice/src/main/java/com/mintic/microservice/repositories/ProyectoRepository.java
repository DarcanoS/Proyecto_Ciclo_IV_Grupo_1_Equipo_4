package com.mintic.microservice.repositories;

import com.mintic.microservice.models.ProyectosModel;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProyectoRepository extends MongoRepository<ProyectosModel, String> {

    List<ProyectosModel> findByProyectoId(String proyectoId);
}
