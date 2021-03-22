class Historial extends Sistema{
    private titulo: Titulo;
    private tiempo: number;
    private capitulo: number;
    private terminada: boolean;
    constructor(titulo: Titulo, tiempo: number, capitulo: number, terminada: boolean){
        super();
        this.tiempo = tiempo;
        this.titulo = titulo;
        this.capitulo = capitulo;
        this.terminada = terminada;
    }

    getTiempo(){
        return this.tiempo;

    }

    getCapitulo(): number{
        return this.capitulo;

    }

    getTituloNombre(): String{
        return this.titulo.getTitulo();
    }

    getTerminada(){
        return this.terminada;
    }

}

class Usuario{
    private username: String;
    private region: Region;
    private historial: Array<Historial>;
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

    visto(titulo: Titulo){
        this.historial.forEach(element => {
            if(element.getTituloNombre() == titulo.getTitulo()){
                if(element.getTerminada){
                    return true;
                }
            }
        });
        return false;
    }

    viendo(titulo:Titulo){
        this.historial.forEach(element => {
            if(element.getTituloNombre() == titulo.getTitulo()){
                if(element.getCapitulo() > 0 || element.getTiempo() > 0){
                    return true;
                }
            }
        });
        return false;
    }
    capituloActual(serie: Titulo){
        this.historial.forEach(element => {
            if(element.getTituloNombre() == serie.getTitulo()){
                return element.getCapitulo()
            }
        });
        return 0;
    }

    ver(titulo: Titulo, tiempo_visualizado: number){
        if(!titulo.getRegion().includes(this.region)){
            return false;
        }
        if(!this.viendo(titulo)){
            for(var i: number; i < titulo.)
        }
        
        

    }
}