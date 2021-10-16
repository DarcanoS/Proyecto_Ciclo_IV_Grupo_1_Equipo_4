package com.mintic.microservice.controllers;

import com.mintic.microservice.models.EstudiantesModel;
import com.mintic.microservice.models.InvestigadoresModel;
import com.mintic.microservice.models.ProyectosModel;
import com.mintic.microservice.repositories.EstudianteRepository;
import com.mintic.microservice.repositories.InvestigadorRepository;
import com.mintic.microservice.repositories.ProyectoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
public class ProyectoController {
    private final ProyectoRepository proyectoRepository;
    private final EstudianteRepository estudianteRepository;
    private final InvestigadorRepository investigadorRepository;

    public ProyectoController(ProyectoRepository proyectoRepository,
                              EstudianteRepository estudianteRepository,
                              InvestigadorRepository investigadorRepository) {
        this.proyectoRepository = proyectoRepository;
        this.estudianteRepository = estudianteRepository;
        this.investigadorRepository = investigadorRepository;
    }

    @GetMapping("/proyecto/all")
    List<ProyectosModel> getAllProyectos(){
        return proyectoRepository.findAll();
    }

    @GetMapping("/proyecto/{proyectoId}")
    ProyectosModel findProyecto(@PathVariable String proyectoId){
        return proyectoRepository.findById(proyectoId).get();
    }

    @PostMapping("/proyecto/add")
    ProyectosModel addProyecto(@RequestBody ProyectosModel proyecto){

        return proyectoRepository.save(proyecto);

    }

    @GetMapping("/proyecto/estudiante/{estudianteId}")
    ArrayList<ProyectosModel> getProyectosDeEstudiante(@PathVariable String estudianteId){
        Optional<EstudiantesModel> estudiante = estudianteRepository.findById(estudianteId);
        ArrayList<ProyectosModel> proyectos = new ArrayList<ProyectosModel>();

        ArrayList<String> idsProyectos = estudiante.get().getProyectosId();


        for (int i = 0; i < idsProyectos.size(); i++) {
            proyectos.add(proyectoRepository.findById(idsProyectos.get(i)).get());
        }

        return proyectos;
    }

    @GetMapping("/proyecto/investigador/{investigadorId}")
    ArrayList<ProyectosModel> getProyectosDeInvestigador(@PathVariable String investigadorId){
        Optional<InvestigadoresModel> investigador = investigadorRepository.findById(investigadorId);
        ArrayList<ProyectosModel> proyectos = new ArrayList<ProyectosModel>();

        for (int i = 0; i < investigador.get().getProyectos().size(); i++) {
            ProyectosModel proyectoSelect = proyectoRepository.findById(investigador.get().getProyectos().get(i).get("idProyecto")).get();
            proyectos.add(proyectoSelect);
        }

        return proyectos;

    }
}
