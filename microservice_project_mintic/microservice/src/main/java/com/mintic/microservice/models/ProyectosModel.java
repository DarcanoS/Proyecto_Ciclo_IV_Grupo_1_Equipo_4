package com.mintic.microservice.models;

import org.springframework.data.annotation.Id;

import java.util.ArrayList;
import java.util.Date;

public class ProyectosModel {

    @Id
    private String proyectoId;

    private String nombreProyecto;
    private String descripcion;
    private String estado;
    private String obGeneral;
    private String obEspecificos;
    private String presupuesto;
    private String investigadorId;
    private Date fechaInicio;
    private Date fechaFinal;
    private ArrayList<String> avances;

    public ProyectosModel(String proyectoId, String nombreProyecto, String descripcion, String estado, String obGeneral, String obEspecificos, String presupuesto, String investigadorId, Date fechaInicio, Date fechaFinal, ArrayList<String> avances) {
        this.proyectoId = proyectoId;
        this.nombreProyecto = nombreProyecto;
        this.descripcion = descripcion;
        this.estado = estado;
        this.obGeneral = obGeneral;
        this.obEspecificos = obEspecificos;
        this.presupuesto = presupuesto;
        this.investigadorId = investigadorId;
        this.fechaInicio = fechaInicio;
        this.fechaFinal = fechaFinal;
        this.avances = avances;
    }

    public String getProyectoId() {
        return proyectoId;
    }

    public void setProyectoId(String proyectoId) {
        this.proyectoId = proyectoId;
    }

    public String getNombreProyecto() {
        return nombreProyecto;
    }

    public void setNombreProyecto(String nombreProyecto) {
        this.nombreProyecto = nombreProyecto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getObGeneral() {
        return obGeneral;
    }

    public void setObGeneral(String obGeneral) {
        this.obGeneral = obGeneral;
    }

    public String getObEspecificos() {
        return obEspecificos;
    }

    public void setObEspecificos(String obEspecificos) {
        this.obEspecificos = obEspecificos;
    }

    public String getPresupuesto() {
        return presupuesto;
    }

    public void setPresupuesto(String presupuesto) {
        this.presupuesto = presupuesto;
    }

    public String getInvestigadorId() {
        return investigadorId;
    }

    public void setInvestigadorId(String investigadorId) {
        this.investigadorId = investigadorId;
    }

    public Date getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(Date fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public Date getFechaFinal() {
        return fechaFinal;
    }

    public void setFechaFinal(Date fechaFinal) {
        this.fechaFinal = fechaFinal;
    }

    public ArrayList<String> getAvances() {
        return avances;
    }

    public void setAvances(ArrayList<String> avances) {
        this.avances = avances;
    }
}
