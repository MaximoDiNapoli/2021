class Pelicula{
    private titulo: String;
    private region: Array<Region>;
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

    disponible(region: Region){
        return this.region.find(element => element == region);
    }

    agregarRegion(region: Region){
        this.region.push(region);
    }

    quitarRegion(){
        this.region.pop
    }

    getContenido(){
        return this.contenido;
    }

    setContenido(contenido: Contenido){
        this.contenido = contenido;
    }
}
