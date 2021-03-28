export { Region, Pelicula, Contenido, Serie, Usuario, Sistema};
//a

interface Duracion {
 
    getDuracionI(cap: number): number;
    
}

class Titulo implements Duracion{
    private titulo: String;
    private region: Array<Region>;

    constructor(titulo: String){
        this.titulo = titulo;
        this.region = [];
    }
    getDuracionI(cap: number): number {
        throw new Error("Method not implemented.");
    }

    getNumeroCapitulos(): number {
        throw new Error("Method not implemented.");
    }

    setTitulo(titulo: String){
        this.titulo = titulo;
    }

    getRegion(i: number){
        return this.region[i];
    }

    getTitulo(): String{
        return this.titulo;
    }

    disponible(region: Region){
        var disponible: boolean = false;
        this.region.forEach(element => {
            if(element.getRegion() == region.getRegion()){
                disponible = true;
            }
        });
        return disponible;
    }

    getNumeroDeRegiones(){
        return this.region.length;
    }
    agregarRegion(region: Region){
        this.region.push(region);
    }

    quitarRegion(){
        this.region.pop;
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

class Pelicula extends Titulo{
    private contenido: Contenido;
    constructor(titulo: String){
        super(titulo);
    }

    getDuracionI(cap: number){
        return this.contenido.getDuracion();
    }

    getNumeroCapitulos(){
        return 0;
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

    getContenido(){
        return this.contenido;
    }

    setContenido(contenido: Contenido){
        this.contenido = contenido;
    }
}
class Region{
    private region:String;
    static AR = new Region("AR");
    static CH = new Region('CH');
    static BR = new Region('BR');
    constructor(region: String){
        this.region = region;
    }
    getRegion(){
        return this.region;
    }
}

class Serie extends Titulo{

    private contenido: Array<Contenido>;

    constructor(titulo: String){
        super(titulo);
        this.contenido = [];
    }

    getDuracionCapitulo(capitulo: number){
        if(this.contenido.length < capitulo){
            return this.contenido[capitulo].getDuracion();
        }
        return 0;
    }

    getDuracionI(cap: number){
        return (this.contenido[cap].getDuracion());
    }

    getNumeroCapitulos(): number {
        return this.contenido.length; 
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

class Sistema{
    usuarios: Array<Usuario>;
    titulos: Array<Titulo>;
    getTitulo: any;

    constructor(){
        this.usuarios = [];
        this.titulos = [];
    }

    
    agregarUsuario(usuario:Usuario){
        for(var i: number = 1; i < this.usuarios.length;i++){
            if(this.usuarios[i].getUsername() == usuario.getUsername()){
                return false;
            }
        }
        this.usuarios.push(usuario);
        return true;
    }

    agregarTitulo(titulo: Titulo){
        this.titulos.push(titulo);
    }

    buscarUsuario(nombre: String){
        for(var i: number = 1; i < this.usuarios.length;i++){
            if(this.usuarios[i].getUsername() == nombre){
                return this.usuarios[i];
            }
        }
    }

    buscarTitulo(nombre: String){
        for(var i: number = 1; i < this.usuarios.length;i++){
            if(this.titulos[i].getTitulo() == nombre){
                return this.titulos[i];
            }
        }
    }

    getUsuarios(){
        return this.usuarios;
    }

    getTitulos(){
        return this.titulos;
    }
}

class Historial{
    private titulo: Titulo;
    private tiempo: number;
    private capitulo: number;
    private terminada: boolean;
    constructor(titulo: Titulo, tiempo: number, capitulo: number, terminada: boolean){
        this.tiempo = tiempo;
        this.titulo = titulo;
        this.capitulo = capitulo;
        this.terminada = terminada;
    }


    setTiempo(tiempo: number){
        this.tiempo = tiempo;
    }

    setTerminada(){
            this.terminada = true;
    }


    getTiempo(){
        return this.tiempo;
    }

    sumarCapitulo(): boolean{
        if(this.titulo.getNumeroCapitulos()-1 > this.capitulo){
            this.capitulo++;
            return true;
        }
        else{
            return false;
        }
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
        this.historial = [];
    }

    getUsername(){
        return this.username;
    }

    getRegion(){
        return this.region;
    }


    visto(titulo: Titulo){
        for(var i: number = 0; i < this.historial.length;i++){
            if(this.historial[i].getTituloNombre() == titulo.getTitulo()){
                if(this.historial[i].getTerminada()){
                    return true;
                }
            }
        }
        return false;
    }

    viendo(titulo:Titulo): boolean{
        for(var i: number = 0; i<this.historial.length; i++){
            if(this.historial[i].getTituloNombre() == titulo.getTitulo()){
                if(this.historial[i].getCapitulo() > 0 || this.historial[i].getTiempo() > 0){
                    if(!this.historial[i].getTerminada()){
                        return true;
                    }
                }
            }
        }
        return false;
    }
    capituloActual(serie: Titulo){
        let capituloActual: number = 0;
        this.historial.forEach(element => {
            if(element.getTituloNombre() == serie.getTitulo()){
                capituloActual = element.getCapitulo()
            }
        });
        return capituloActual;
    }

    ver(titulo: Titulo, tiempo_visualizado: number){
        var DeberiaPoderVerla: boolean = false;       
        let UltimoCap:number = 0;
        let tiempo_pre_visualizado:number;
        

        if(titulo.disponible(this.region)){
            DeberiaPoderVerla = true;
        }

        if(!DeberiaPoderVerla){
            return false;
        }
        
        if(!this.viendo(titulo)){
            var a: Historial = new Historial(titulo,0,0,false);
            this.historial.push(a);
        }

        this.historial.forEach(element => {
            if(element.getTituloNombre() == titulo.getTitulo()){
                UltimoCap = element.getCapitulo();
                tiempo_pre_visualizado = element.getTiempo();
            }
        });
        
        tiempo_visualizado = tiempo_visualizado + tiempo_pre_visualizado;

        while(titulo.getDuracionI(UltimoCap) <= tiempo_visualizado){
            tiempo_visualizado =  tiempo_visualizado - titulo.getDuracionI(UltimoCap);
            this.historial.forEach(element => {
                if(element.getTituloNombre() == titulo.getTitulo()){
                    if(!element.sumarCapitulo()){
                        element.setTerminada();
                    }
                }
            });
        }
        
        this.historial.forEach(element => {
            if(element.getTituloNombre() == titulo.getTitulo()){
                element.setTiempo(tiempo_visualizado);
        }
            
        });
        return DeberiaPoderVerla;
    }
}
