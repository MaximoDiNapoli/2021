class Historial{
    private titulo: Titulo;
    private tiempo: number;
    constructor(titulo: Titulo, tiempo: number){
        this.tiempo = tiempo;
        this.titulo = titulo;
    }


}

class Usuario{
    private username: String;
    private region: Region;
    private Historial: Array<Historial>;
    constructor(username: String, region: Region){
        this.username = username;
        this.region = region;
    }

    getUsername(){
        return this.username;
    }

    getRegion(){
        return this.region;
    }

    visto()
}