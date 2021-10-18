package com.mintic.microservice.controllers;

import com.mintic.microservice.models.Estudiantes;
import com.mintic.microservice.repositories.EstudianteRepository;
import com.mintic.microservice.repositories.ProyectoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
public class EstudianteController {
    private final EstudianteRepository estudianteRepository;
    private final ProyectoRepository proyectoRepository;

    public EstudianteController(EstudianteRepository estudianteRepository, ProyectoRepository proyectoRepository) {
        this.estudianteRepository = estudianteRepository;
        this.proyectoRepository = proyectoRepository;
    }

    //Retorna todos los estudiantes en la DB
    @GetMapping("/estudiante/all")
    List<Estudiantes> getAllEstudiantes(){
        return estudianteRepository.findAll();
    }

    //retorna un estudiante en especifico
    @GetMapping("/estudiante/{estudianteId}")
    Estudiantes getEstudiante(@PathVariable String estudianteId){
        return estudianteRepository.findById(estudianteId).get();
    }

    //Agrega o modifica un estudiante en la DB
    @PostMapping("/estudiante/add")
    Estudiantes addEstudiante(@RequestBody Estudiantes estudiante){
        estudiante.setFechaIngreso(new Date());
        return estudianteRepository.save(estudiante);
    }

    //Retorna todos los estudiates de cierto proyecto
    @GetMapping("/estudiante/proyecto/{proyectosId}")
    List<Estudiantes> getEstudiantesDeProyecto(@PathVariable String proyectosId){
        List<Estudiantes> estudiantesDeProyecto = estudianteRepository.findByProyectosId(proyectosId);
        return estudiantesDeProyecto;
    }


}
