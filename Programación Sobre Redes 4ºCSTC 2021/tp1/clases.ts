class Contenido{
    protected date: Date;
    protected duracion: number;
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


class Movie{
    protected titulo: String;
    protected Region: Array<String>;
    protected pelicula: Contenido;
    constructor(titulo: String){
        this.titulo = titulo;
    }

    setTitulo(titulo: String){
        this.titulo = titulo;
    }
    getTitulo(){
        return this.titulo;
    }

    disponible(regionUsuario: String){
        return this.Region.find(element => element == regionUsuario);
    }
}