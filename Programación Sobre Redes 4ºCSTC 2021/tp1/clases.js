"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Sistema = exports.Usuario = exports.Serie = exports.Contenido = exports.Pelicula = exports.Region = void 0;
var Titulo = /** @class */ (function () {
    function Titulo(titulo) {
        this.titulo = titulo;
        this.region = [];
    }
    Titulo.prototype.getDuracionI = function (cap) {
        throw new Error("Method not implemented.");
    };
    Titulo.prototype.getNumeroCapitulos = function () {
        throw new Error("Method not implemented.");
    };
    Titulo.prototype.setTitulo = function (titulo) {
        this.titulo = titulo;
    };
    Titulo.prototype.getRegion = function (i) {
        return this.region[i];
    };
    Titulo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Titulo.prototype.disponible = function (region) {
        var disponible = false;
        this.region.forEach(function (element) {
            if (element.getRegion() == region.getRegion()) {
                disponible = true;
            }
        });
        return disponible;
    };
    Titulo.prototype.getNumeroDeRegiones = function () {
        return this.region.length;
    };
    Titulo.prototype.agregarRegion = function (region) {
        this.region.push(region);
    };
    Titulo.prototype.quitarRegion = function () {
        this.region.pop;
    };
    return Titulo;
}());
var Contenido = /** @class */ (function () {
    function Contenido(duracion) {
        this.duracion = duracion;
    }
    Contenido.prototype.setDate = function (date) {
        this.date = date;
    };
    Contenido.prototype.getDate = function () {
        return this.date;
    };
    Contenido.prototype.setDuracion = function (duracion) {
        this.duracion = duracion;
    };
    Contenido.prototype.getDuracion = function () {
        return this.duracion;
    };
    return Contenido;
}());
exports.Contenido = Contenido;
var Pelicula = /** @class */ (function (_super) {
    __extends(Pelicula, _super);
    function Pelicula(titulo) {
        return _super.call(this, titulo) || this;
    }
    Pelicula.prototype.getDuracionI = function (cap) {
        return this.contenido.getDuracion();
    };
    Pelicula.prototype.getNumeroCapitulos = function () {
        return 0;
    };
    Pelicula.prototype.getTitulo = function () {
        return (_super.prototype.getTitulo.call(this));
    };
    Pelicula.prototype.setTitulo = function (titulo) {
        _super.prototype.setTitulo.call(this, titulo);
    };
    Pelicula.prototype.disponible = function (region) {
        return (_super.prototype.disponible.call(this, region));
    };
    Pelicula.prototype.agregarRegion = function (region) {
        _super.prototype.agregarRegion.call(this, region);
    };
    Pelicula.prototype.quitarRegion = function () {
        _super.prototype.quitarRegion.call(this);
    };
    Pelicula.prototype.getContenido = function () {
        return this.contenido;
    };
    Pelicula.prototype.setContenido = function (contenido) {
        this.contenido = contenido;
    };
    return Pelicula;
}(Titulo));
exports.Pelicula = Pelicula;
var Region = /** @class */ (function () {
    function Region(region) {
        this.region = region;
    }
    Region.prototype.getRegion = function () {
        return this.region;
    };
    Region.AR = new Region("AR");
    Region.CH = new Region('CH');
    Region.BR = new Region('BR');
    return Region;
}());
exports.Region = Region;
var Serie = /** @class */ (function (_super) {
    __extends(Serie, _super);
    function Serie(titulo) {
        var _this = _super.call(this, titulo) || this;
        _this.contenido = [];
        return _this;
    }
    Serie.prototype.getDuracionCapitulo = function (capitulo) {
        if (this.contenido.length < capitulo) {
            return this.contenido[capitulo].getDuracion();
        }
        return 0;
    };
    Serie.prototype.getDuracionI = function (cap) {
        return (this.contenido[cap].getDuracion());
    };
    Serie.prototype.getNumeroCapitulos = function () {
        return this.contenido.length;
    };
    Serie.prototype.getTitulo = function () {
        return (_super.prototype.getTitulo.call(this));
    };
    Serie.prototype.setTitulo = function (titulo) {
        _super.prototype.setTitulo.call(this, titulo);
    };
    Serie.prototype.disponible = function (region) {
        return (_super.prototype.disponible.call(this, region));
    };
    Serie.prototype.agregarRegion = function (region) {
        _super.prototype.agregarRegion.call(this, region);
    };
    Serie.prototype.quitarRegion = function () {
        _super.prototype.quitarRegion.call(this);
    };
    Serie.prototype.agregarCapitulo = function (capitulo) {
        this.contenido.push(capitulo);
    };
    Serie.prototype.obtenerCapitulo = function (capitulo) {
        return this.contenido[capitulo];
    };
    Serie.prototype.cantidadDeCapitulos = function () {
        return this.contenido.length;
    };
    Serie.prototype.primerCapitulo = function () {
        return this.contenido[0];
    };
    Serie.prototype.getContenido = function () {
        return this.contenido;
    };
    return Serie;
}(Titulo));
exports.Serie = Serie;
var Sistema = /** @class */ (function () {
    function Sistema() {
        this.usuarios = [];
        this.titulos = [];
    }
    Sistema.prototype.agregarUsuario = function (usuario) {
        for (var i = 1; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getUsername() == usuario.getUsername()) {
                return false;
            }
        }
        this.usuarios.push(usuario);
        return true;
    };
    Sistema.prototype.agregarTitulo = function (titulo) {
        this.titulos.push(titulo);
    };
    Sistema.prototype.buscarUsuario = function (nombre) {
        for (var i = 1; i < this.usuarios.length; i++) {
            if (this.usuarios[i].getUsername() == nombre) {
                return this.usuarios[i];
            }
        }
    };
    Sistema.prototype.buscarTitulo = function (nombre) {
        for (var i = 1; i < this.usuarios.length; i++) {
            if (this.titulos[i].getTitulo() == nombre) {
                return this.titulos[i];
            }
        }
    };
    Sistema.prototype.getUsuarios = function () {
        return this.usuarios;
    };
    Sistema.prototype.getTitulos = function () {
        return this.titulos;
    };
    return Sistema;
}());
exports.Sistema = Sistema;
var Historial = /** @class */ (function () {
    function Historial(titulo, tiempo, capitulo, terminada) {
        this.tiempo = tiempo;
        this.titulo = titulo;
        this.capitulo = capitulo;
        this.terminada = terminada;
    }
    Historial.prototype.setTiempo = function (tiempo) {
        this.tiempo = tiempo;
    };
    Historial.prototype.setTerminada = function () {
        this.terminada = true;
    };
    Historial.prototype.getTiempo = function () {
        return this.tiempo;
    };
    Historial.prototype.sumarCapitulo = function () {
        if (this.titulo.getNumeroCapitulos() - 1 > this.capitulo) {
            this.capitulo++;
            return true;
        }
        else {
            return false;
        }
    };
    Historial.prototype.getCapitulo = function () {
        return this.capitulo;
    };
    Historial.prototype.getTituloNombre = function () {
        return this.titulo.getTitulo();
    };
    Historial.prototype.getTerminada = function () {
        return this.terminada;
    };
    return Historial;
}());
var Usuario = /** @class */ (function () {
    function Usuario(username, region) {
        this.username = username;
        this.region = region;
        this.historial = [];
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    Usuario.prototype.getRegion = function () {
        return this.region;
    };
    Usuario.prototype.visto = function (titulo) {
        for (var i = 0; i < this.historial.length; i++) {
            if (this.historial[i].getTituloNombre() == titulo.getTitulo()) {
                if (this.historial[i].getTerminada()) {
                    return true;
                }
            }
        }
        return false;
    };
    Usuario.prototype.viendo = function (titulo) {
        for (var i = 0; i < this.historial.length; i++) {
            if (this.historial[i].getTituloNombre() == titulo.getTitulo()) {
                if (this.historial[i].getCapitulo() > 0 || this.historial[i].getTiempo() > 0) {
                    if (!this.historial[i].getTerminada()) {
                        return true;
                    }
                }
            }
        }
        return false;
    };
    Usuario.prototype.capituloActual = function (serie) {
        var capituloActual = 0;
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == serie.getTitulo()) {
                capituloActual = element.getCapitulo();
            }
        });
        return capituloActual;
    };
    Usuario.prototype.ver = function (titulo, tiempo_visualizado) {
        var DeberiaPoderVerla = false;
        var UltimoCap = 0;
        var tiempo_pre_visualizado;
        if (titulo.disponible(this.region)) {
            DeberiaPoderVerla = true;
        }
        if (!DeberiaPoderVerla) {
            return false;
        }
        if (!this.viendo(titulo)) {
            var a = new Historial(titulo, 0, 0, false);
            this.historial.push(a);
        }
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == titulo.getTitulo()) {
                UltimoCap = element.getCapitulo();
                tiempo_pre_visualizado = element.getTiempo();
            }
        });
        tiempo_visualizado = tiempo_visualizado + tiempo_pre_visualizado;
        while (titulo.getDuracionI(UltimoCap) <= tiempo_visualizado) {
            tiempo_visualizado = tiempo_visualizado - titulo.getDuracionI(UltimoCap);
            this.historial.forEach(function (element) {
                if (element.getTituloNombre() == titulo.getTitulo()) {
                    if (!element.sumarCapitulo()) {
                        element.setTerminada();
                    }
                }
            });
        }
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == titulo.getTitulo()) {
                element.setTiempo(tiempo_visualizado);
            }
        });
        return DeberiaPoderVerla;
    };
    return Usuario;
}());
exports.Usuario = Usuario;
