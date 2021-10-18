package com.mintic.microservice.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.Date;

public class Estudiantes {

    @Id
    private String estudianteId;

    private String nombreEstudiante;
    private String carrera;
    private String celular;
    private Date fechaIngreso;
    private String cedula;
    private ArrayList<String> proyectosId;
    private String credencialeId;

    public Estudiantes(String estudianteId, String nombreEstudiante, String carrera, String celular, Date fechaIngreso, String cedula, ArrayList<String> proyectosId, String credencialeId) {
        this.estudianteId = estudianteId;
        this.nombreEstudiante = nombreEstudiante;
        this.carrera = carrera;
        this.celular = celular;
        this.fechaIngreso = fechaIngreso;
        this.cedula = cedula;
        this.proyectosId = proyectosId;
        this.credencialeId = credencialeId;
    }

    public String getEstudianteId() {
        return estudianteId;
    }

    public void setEstudianteId(String estudianteId) {
        this.estudianteId = estudianteId;
    }

    public String getNombreEstudiante() {
        return nombreEstudiante;
    }

    public void setNombreEstudiante(String nombreEstudiante) {
        this.nombreEstudiante = nombreEstudiante;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public String getCelular() {
        return celular;
    }

    public void setCelular(String celular) {
        this.celular = celular;
    }

    public Date getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(Date fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getCedula() {
        return cedula;
    }

    public void setCedula(String cedula) {
        this.cedula = cedula;
    }

    public ArrayList<String> getProyectosId() {
        return proyectosId;
    }

    public void setProyectosId(ArrayList<String> proyectosId) {
        this.proyectosId = proyectosId;
    }

    public String getCredencialeId() {
        return credencialeId;
    }

    public void setCredencialeId(String credencialeId) {
        this.credencialeId = credencialeId;
    }
}
