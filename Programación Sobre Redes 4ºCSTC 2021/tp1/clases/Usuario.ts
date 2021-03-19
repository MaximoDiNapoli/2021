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
}