class Contenido{
    private date: Date;
    private duracion: number;
    constructor(duracion: number){
        this.duracion = duracion;
    }

    setDate(date: Date){
        this.date = date;
    }

    getDate(){
        return this.date;
    }

    setDuracion(duracion: number){
        this.duracion = duracion;
    }

    getDuracion(){
        return this.duracion;
    }
}


class Pelicula{
    private titulo: String;
    private region: Array<String>;
    private contenido: Contenido;
    constructor(titulo: String){
        this.titulo = titulo;
    }

    setTitulo(titulo: String){
        this.titulo = titulo;
    }
    getTitulo(){
        return this.titulo;
    }

    disponible(region: String){
        return this.region.find(element => element == region);
    }

    agregarRegion(region: String){
        this.region.push(region);
    }

    getContenido(){
        return this.contenido;
    }

    setContenido(contenido: Contenido){
        this.contenido = contenido;
    }
}

class Serie{
    private titulo: String;
    private region: Array<String>;
    private contenido: Array<Contenido>;

    constructor(titulo: String){
        this.titulo = titulo;
    }

    getTitulo(){
        return this.titulo;
    }

    setTitulo(titulo: String){
        this.titulo = titulo;
    }

    disponible(region: String){
        return this.region.find(element => element == region);
    }

    agregarRegion(region: String){
        this.region.push(region);
    }

    quitarRegion(){

    }
}
