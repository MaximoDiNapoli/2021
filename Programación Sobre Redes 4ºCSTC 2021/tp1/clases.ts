export { Region, Pelicula, Contenido, Serie, Usuario, Sistema};


class Titulo implements Duracion{
    private titulo: String;
    private region: Array<Region>;

    constructor(titulo: String){
        this.titulo = titulo;
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

    getDuracionI(){
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
        return this.contenido[capitulo].getDuracion;
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
        this.usuarios.forEach(element => {
            if(element.getUsername() == usuario.getUsername()){
                return false;
            }
        });
        this.usuarios.push(usuario);
        return true;
    }

    agregarTitulo(titulo: Titulo){
        this.titulos.push(titulo);
    }

    buscarUsuario(nombre: String){
        this.usuarios.forEach(element => {
            if(element.getUsername() == nombre){
                return element;
            }
        });
    }

    buscarTitulo(nombre: String){
        this.titulos.forEach(element => {
            if(element.getTitulo() == nombre){
                return element;
            }
        });
    }

    getUsuarios(){
        return this.usuarios;
    }

    getTitulos(){
        return this.titulos;
    }
}

interface Duracion {
 
    getDuracionI(): number;
    
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
    }
}

