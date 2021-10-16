package com.mintic.microservice.controllers;

import com.mintic.microservice.models.InvestigadoresModel;
import com.mintic.microservice.repositories.InvestigadorRepository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
public class InvestigadorCrontroller {
    private final InvestigadorRepository investigadorRepository;

    public InvestigadorCrontroller(InvestigadorRepository investigadorRepository) {
        this.investigadorRepository = investigadorRepository;

    }

    @GetMapping("/investigador/all")
    List<InvestigadoresModel> getAllInvestigadores(){
        return investigadorRepository.findAll();
    }

    @GetMapping("/investigador/{investigadorId}")
    InvestigadoresModel getInvestigador(@PathVariable String investigadorId){
        return investigadorRepository.findById(investigadorId).get();
    }

    @PostMapping("/investigador/add")
    InvestigadoresModel addInvestigador(@RequestBody InvestigadoresModel investigadoresModel){
        return investigadorRepository.save(investigadoresModel);
    }

    @GetMapping("/investigador/proyecto/{proyectosId}")
    ArrayList<InvestigadoresModel> getInvestigadoresDeProyecto(@PathVariable String proyectosId){

        ArrayList<InvestigadoresModel> investigadores = new ArrayList<InvestigadoresModel>();
        List<InvestigadoresModel> todos = investigadorRepository.findAll();
        for (InvestigadoresModel todos2: todos ) {
            for (int i = 0; i < todos2.getProyectos().size(); i++) {
                String idsProyectos = todos2.getProyectos().get(i).get("idProyecto");
                if(idsProyectos.equals(proyectosId)){
                    investigadores.add(todos2);
                }
            }
        }
        return investigadores;
    }
}
