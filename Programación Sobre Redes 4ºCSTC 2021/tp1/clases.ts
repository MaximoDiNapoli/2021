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

    getRegion(){
        return this.region;
    }

    getTitulo(): String{
        return this.titulo;
    }

    disponible(region: Region){
        this.region.forEach(element => {
            if(element.getRegion() == region.getRegion()){
                return true;
            }
        });
        return false;
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

    length(a: Array<Contenido>){
        var i: number = a.length
        return i;
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
    private region: String;
    static AR: Region;
    static CH: Region;
    static BR: Region;
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

    getRegion(){
        return this.region;
    }

}

class Serie extends Titulo{

    private contenido: Array<Contenido>;

    constructor(titulo: String){
        super(titulo);
    }

    getDuracionCapitulo(capitulo: number){
        return this.contenido[capitulo].getDuracion();
    }

    getDuracionI(cap: number){
        return this.contenido[cap].getDuracion();
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


    setTiempo(a: number){
        this.tiempo = a;
    }

    getTiempo(){
        return this.tiempo;

    }

    sumarCapitulo(): boolean{
        if(this.titulo.getNumeroCapitulos() > this.capitulo){
            this.capitulo = this.capitulo + 1;
            return true
        }
        else{
            return false
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
    }

    getUsername(){
        return this.username;
    }

    getRegion(){
        return this.region;
    }


    visto(titulo: Titulo){
        for(var i: number = 1; i < this.historial.length;i++){
            if(this.historial[i].getTitulo() == titulo.getTitulo()){
                if(this.historial[i].getTerminada){
                    return true;
                }
            }
        }
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
        for(var i: number = 1; i < this.historial.length;i++){
            var b: Titulo = this.historial[i].getTitulo()
            if(b.getRegion() == titulo.getRegion()){
                break;
            }
            return false;
        }
        if(this.viendo(titulo)){
            var a: Historial = new Historial(titulo,0,0,false);
            this.historial.push(a);

        }
        else if(!this.viendo(titulo)){
            let numeroi;
            let tiempo_pre_visualizado;
            this.historial.forEach(element => {
                if(element.getTituloNombre() == titulo.getTitulo()){
                    numeroi = element.getCapitulo();
                    tiempo_pre_visualizado = element.setTiempo;
                }
            });
            var c: boolean = true
            tiempo_visualizado = tiempo_visualizado + tiempo_pre_visualizado;
            while(titulo.getDuracionI(numeroi) >= tiempo_visualizado && i){
                tiempo_visualizado = tiempo_visualizado - titulo.getDuracionI(numeroi);
                this.historial.forEach(element => {
                    if(element.getTituloNombre() == titulo.getTitulo()){
                        if(!element.sumarCapitulo){
                            c = false;
                        }
                    }
                });
            }
            this.historial.forEach(element => {
                if(element.getTituloNombre() == titulo.getTitulo()){
                    element.setTiempo(tiempo_visualizado);
            }
            
        });
    }
}
}
