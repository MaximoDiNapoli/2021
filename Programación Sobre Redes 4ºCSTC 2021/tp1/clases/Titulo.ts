interface Duracion {
 
    getDuracionI(): number;
    
}


class Titulo implements Duracion{
    private titulo: String;
    private region: Array<Region>;

    constructor(titulo: String, region: Array<Region>){
        this.titulo = titulo;
        this.region = region;
    }
    getDuracionI(): number {
        throw new Error("Method not implemented.");
    }

    setTitulo(titulo: String){
        this.titulo = titulo;
    }

    getRegion(){
        return this.region;
    }

    getTitulo(): String{
        return this.titulo;
    }

    disponible(region: Region){
        return this.region.find(element => element == region);
    }

    agregarRegion(region: Region){
        this.region.push(region);
    }

    quitarRegion(){
        this.region.pop;
    }
}