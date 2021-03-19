class Pelicula extends Titulo{
    private contenido: Contenido;
    constructor(titulo: String, region: Array<Region>, contenido: Contenido){
        super(titulo, region);
        this.contenido = contenido;
    }

    getTitulo(){
        return (super.getTitulo());
    }
    setTitulo(titulo: String){
        super.setTitulo(titulo);
    }

    disponible(region: Region){
        return (super.disponible(region));
    }

    agregarRegion(region: Region){
        super.agregarRegion(region);
    }

    quitarRegion(){
        super.quitarRegion();
    }

    getContenido(){
        return this.contenido;
    }

    setContenido(contenido: Contenido){
        this.contenido = contenido;
    }
    
}
