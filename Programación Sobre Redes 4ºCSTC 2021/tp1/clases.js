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
    Titulo.prototype.getRegion = function () {
        return this.region;
    };
    Titulo.prototype.getTitulo = function () {
        return this.titulo;
    };
    Titulo.prototype.disponible = function (region) {
        return this.region.find(function (element) { return element == region; });
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
    Region.prototype.AR = function () {
        this.region = "AR";
    };
    Region.prototype.BR = function () {
        this.region = "BR";
    };
    Region.prototype.CH = function () {
        this.region = "CH";
    };
    Region.prototype.getRegion = function () {
        return this.region;
    };
    return Region;
}());
exports.Region = Region;
var Serie = /** @class */ (function (_super) {
    __extends(Serie, _super);
    function Serie(titulo) {
        return _super.call(this, titulo) || this;
    }
    Serie.prototype.getDuracionCapitulo = function (capitulo) {
        return this.contenido[capitulo].getDuracion();
    };
    Serie.prototype.getDuracionI = function (cap) {
        return this.contenido[cap].getDuracion();
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
    }
    Sistema.prototype.agregarUsuario = function (usuario) {
        this.usuarios.forEach(function (element) {
            if (element.getUsername() == usuario.getUsername()) {
                return false;
            }
        });
        this.usuarios.push(usuario);
        return true;
    };
    Sistema.prototype.agregarTitulo = function (titulo) {
        this.titulos.push(titulo);
    };
    Sistema.prototype.buscarUsuario = function (nombre) {
        this.usuarios.forEach(function (element) {
            if (element.getUsername() == nombre) {
                return element;
            }
        });
    };
    Sistema.prototype.buscarTitulo = function (nombre) {
        this.titulos.forEach(function (element) {
            if (element.getTitulo() == nombre) {
                return element;
            }
        });
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
var Historial = /** @class */ (function (_super) {
    __extends(Historial, _super);
    function Historial(titulo, tiempo, capitulo, terminada) {
        var _this = _super.call(this) || this;
        _this.tiempo = tiempo;
        _this.titulo = titulo;
        _this.capitulo = capitulo;
        _this.terminada = terminada;
        return _this;
    }
    Historial.prototype.setTiempo = function (a) {
        this.tiempo = a;
    };
    Historial.prototype.getTiempo = function () {
        return this.tiempo;
    };
    Historial.prototype.sumarCapitulo = function () {
        if (this.titulo.getNumeroCapitulos() > this.capitulo) {
            this.capitulo = this.capitulo + 1;
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
}(Sistema));
var Usuario = /** @class */ (function () {
    function Usuario(username, region) {
        this.username = username;
        this.region = region;
    }
    Usuario.prototype.getUsername = function () {
        return this.username;
    };
    Usuario.prototype.getRegion = function () {
        return this.region;
    };
    Usuario.prototype.visto = function (titulo) {
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == titulo.getTitulo()) {
                if (element.getTerminada) {
                    return true;
                }
            }
        });
        return false;
    };
    Usuario.prototype.viendo = function (titulo) {
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == titulo.getTitulo()) {
                if (element.getCapitulo() > 0 || element.getTiempo() > 0) {
                    return true;
                }
            }
        });
        return false;
    };
    Usuario.prototype.capituloActual = function (serie) {
        this.historial.forEach(function (element) {
            if (element.getTituloNombre() == serie.getTitulo()) {
                return element.getCapitulo();
            }
        });
        return 0;
    };
    Usuario.prototype.ver = function (titulo, tiempo_visualizado) {
        if (!titulo.getRegion().includes(this.region)) {
            return false;
        }
        if (this.viendo(titulo)) {
            var a = new Historial(titulo, 0, 0, false);
            this.historial.push(a);
        }
        else if (!this.viendo(titulo)) {
            var numeroi_1;
            var tiempo_pre_visualizado_1;
            this.historial.forEach(function (element) {
                if (element.getTituloNombre() == titulo.getTitulo()) {
                    numeroi_1 = element.getCapitulo();
                    tiempo_pre_visualizado_1 = element.setTiempo;
                }
            });
            var i = true;
            tiempo_visualizado = tiempo_visualizado + tiempo_pre_visualizado_1;
            while (titulo.getDuracionI(numeroi_1) >= tiempo_visualizado && i) {
                tiempo_visualizado = tiempo_visualizado - titulo.getDuracionI(numeroi_1);
                this.historial.forEach(function (element) {
                    if (element.getTituloNombre() == titulo.getTitulo()) {
                        if (!element.sumarCapitulo) {
                            i = false;
                        }
                    }
                });
            }
            this.historial.forEach(function (element) {
                if (element.getTituloNombre() == titulo.getTitulo()) {
                    element.setTiempo(tiempo_visualizado);
                }
            });
        }
    };
    return Usuario;
}());
exports.Usuario = Usuario;
