package com.mintic.microservice.models;

import org.springframework.data.annotation.Id;

public class CredencialesModel {

    @Id
    private String credencialId;

    private String usuario;
    private String clave;

    public CredencialesModel(String credencialId, String usuario, String clave) {
        this.credencialId = credencialId;
        this.usuario = usuario;
        this.clave = clave;
    }

    public String getCredencialId() {
        return credencialId;
    }

    public void setCredencialId(String credencialId) {
        this.credencialId = credencialId;
    }

    public String getUsuario() {
        return usuario;
    }

    public void setUsuario(String usuario) {
        this.usuario = usuario;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }
}
