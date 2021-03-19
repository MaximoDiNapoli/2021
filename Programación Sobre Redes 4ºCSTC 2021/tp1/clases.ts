class Region{
    private region: String;
    constructor(region: String){
        this.region = region;
    }

    AR(){
        this.region = "AR";
    }

    BR(){
        this.region = "BR";
    }

    CH(){
        this.region = "CH";
    }
}

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


class Visualizado{
    private titulo: String;
    private minuto: number;
    constructor(titulo: String, minuto: number){
        this.titulo = titulo;
        this.minuto = minuto;
    }

    visto(titulo: String){
        if(this.minuto == )
    }
}



class Usuario{
    private username: String;
    private region: Array<String>;
    private historial: Array<Visualizado>;
    constructor(username: String, region: Array<String>){
        this.username = username;
        this.region = region;
    }

    getUsername(){
        return this.username;
    }

    getRegion(){
        return this.region;
    }

    visto(titulo: String){

    }
}