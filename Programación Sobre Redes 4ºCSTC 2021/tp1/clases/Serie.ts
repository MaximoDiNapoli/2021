class Serie{
    private titulo: String;
    private region: Array<Region>;
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

    disponible(region: Region){
        return this.region.find(element => element == region);
    }

    agregarRegion(region: Region){
        this.region.push(region);
    }

    quitarRegion(){
        this.region.pop
    }

    agregarCapitulo(capitulo: Contenido){
        this.contenido.push(capitulo);
    }

    obtenerCapitulo(capitulo: number){
        return this.contenido[capitulo];
    }

    cantidadDeCapitulos(){
        return this.contenido.length;
    }

    primerCapitulo(){
        return this.contenido[0];
    }
}