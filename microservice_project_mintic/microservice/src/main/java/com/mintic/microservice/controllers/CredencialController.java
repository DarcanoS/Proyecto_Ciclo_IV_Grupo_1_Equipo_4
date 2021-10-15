package com.mintic.microservice.controllers;

import com.mintic.microservice.models.CredencialesModel;
import com.mintic.microservice.repositories.CredencialRepository;
import org.springframework.web.bind.annotation.*;

@RestController
public class CredencialController {
    private final CredencialRepository credencialRepository;

    public CredencialController(CredencialRepository credencialRepository) {
        this.credencialRepository = credencialRepository;
    }

    @PostMapping("credencial/add")
    CredencialesModel addCredencial(@RequestBody CredencialesModel credencialesModel){
        return credencialRepository.save(credencialesModel);
    }

}
