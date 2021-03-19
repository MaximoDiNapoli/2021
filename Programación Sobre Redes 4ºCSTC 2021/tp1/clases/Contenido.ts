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

class Titulo{
    private titulo: String;
    private region: Array<Region>;

    constructor(titulo: String, region: Array<Region>){
        this.titulo = titulo;
        this.region = region;
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


}