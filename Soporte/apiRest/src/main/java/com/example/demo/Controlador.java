package com.example.demo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.*;

@Controller
public class Controlador {



    @Autowired
    private ManejadorDeArchivosCSV archivoCSV;


    public List<Funcionario> obtenerListaDeFuncionarios(){

        List<Funcionario> funcionariosList= new ArrayList<>();
        Iterator<String[]> iterador = archivoCSV.obtenerIterador();

        while (iterador.hasNext()){

            String[] fila = iterador.next();

            String cuil;
            Integer año;
            Integer mes;
            String apellido_y_nombre;
            String reaparticion;
            Integer asignacionPorCargo;
            Integer aguinaldo;
            Integer totalSalarioBruto;
            String observaciones;
            //a

            cuil = fila[0];
            año = Integer.parseInt(fila[1]);
            mes = Integer.parseInt(fila[2]);
            apellido_y_nombre = fila[3];
            reaparticion = fila[4];
            asignacionPorCargo = Integer.parseInt(fila[5]);
            aguinaldo = Integer.parseInt(fila[6]);
            totalSalarioBruto = Integer.parseInt(fila[7]);
            observaciones = fila[8];



            Funcionario nuevoFuncionarios = new Funcionario(cuil,año,mes,apellido_y_nombre,reaparticion,
                    asignacionPorCargo, aguinaldo, totalSalarioBruto,observaciones);
            funcionariosList.add(nuevoFuncionarios);

        }

        return funcionariosList;
    }

}

