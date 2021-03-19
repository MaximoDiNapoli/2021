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
    private contenido: Array<Contenido>;
}