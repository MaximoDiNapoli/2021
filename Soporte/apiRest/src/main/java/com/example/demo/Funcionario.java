package com.example.demo;

public class Funcionario {
    String cuil;
    Integer año;
    Integer mes;
    String apellido_y_nombre;
    String reaparticion;
    Integer asignacionPorCargo;
    Integer aguinaldo;
    Integer totalSalarioBruto;
    String observaciones;

    public Funcionario(String cuil, Integer año, Integer mes, String apellido_y_nombre, String reaparticion, Integer asignacionPorCargo, Integer aguinaldo, Integer totalSalarioBruto, String observaciones) {
        this.cuil = cuil;
        this.año = año;
        this.mes = mes;
        this.apellido_y_nombre = apellido_y_nombre;
        this.reaparticion = reaparticion;
        this.asignacionPorCargo = asignacionPorCargo;
        this.aguinaldo = aguinaldo;
        this.totalSalarioBruto = totalSalarioBruto;
        this.observaciones = observaciones;
    }

    public String getCuil() {
        return cuil;
    }

    public void setCuil(String cuil) {
        this.cuil = cuil;
    }

    public Integer getAño() {
        return año;
    }

    public void setAño(Integer año) {
        this.año = año;
    }

    public Integer getMes() {
        return mes;
    }

    public void setMes(Integer mes) {
        this.mes = mes;
    }

    public String getApellido_y_nombre() {
        return apellido_y_nombre;
    }

    public void setApellido_y_nombre(String apellido_y_nombre) {
        this.apellido_y_nombre = apellido_y_nombre;
    }

    public String getReaparticion() {
        return reaparticion;
    }

    public void setReaparticion(String reaparticion) {
        this.reaparticion = reaparticion;
    }

    public Integer getAsignacionPorCargo() {
        return asignacionPorCargo;
    }

    public void setAsignacionPorCargo(Integer asignacionPorCargo) {
        this.asignacionPorCargo = asignacionPorCargo;
    }

    public Integer getAguinaldo() {
        return aguinaldo;
    }

    public void setAguinaldo(Integer aguinaldo) {
        this.aguinaldo = aguinaldo;
    }

    public Integer getTotalSalarioBruto() {
        return totalSalarioBruto;
    }

    public void setTotalSalarioBruto(Integer totalSalarioBruto) {
        this.totalSalarioBruto = totalSalarioBruto;
    }

    public String getObservaciones() {
        return observaciones;
    }

    public void setObservaciones(String observaciones) {
        this.observaciones = observaciones;
    }
}