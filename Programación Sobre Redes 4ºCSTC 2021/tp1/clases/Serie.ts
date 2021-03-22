class Serie extends Titulo{

    private contenido: Array<Contenido>;

    constructor(titulo: String, region: Array<Region>, contenido: Array<Contenido>){
        super(titulo, region);
        this.contenido = contenido;
    }

    getDuracionCapitulo(capitulo: number){
        return this.contenido[capitulo].getDuracion;
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

    getContenido(): Array<Contenido>{
        return this.contenido;
        }
}