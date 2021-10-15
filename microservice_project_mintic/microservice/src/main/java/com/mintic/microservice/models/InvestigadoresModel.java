package com.mintic.microservice.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class InvestigadoresModel {

    @Id
    private String investigadorId;

    private String credencialId;
    private ArrayList<HashMap<String,String>> proyectos;

    public InvestigadoresModel(String investigadorId, String credencialId, ArrayList<HashMap<String, String>> proyectos) {
        this.investigadorId = investigadorId;
        this.credencialId = credencialId;
        this.proyectos = proyectos;
    }

    public String getInvestigadorId() {
        return investigadorId;
    }

    public void setInvestigadorId(String investigadorId) {
        this.investigadorId = investigadorId;
    }

    public String getCredencialId() {
        return credencialId;
    }

    public void setCredencialId(String credencialId) {
        this.credencialId = credencialId;
    }

    public List<HashMap<String, String>> getProyectos() {
        return proyectos;
    }

    public void setProyectos(ArrayList<HashMap<String, String>> proyectos) {
        this.proyectos = proyectos;
    }
}
