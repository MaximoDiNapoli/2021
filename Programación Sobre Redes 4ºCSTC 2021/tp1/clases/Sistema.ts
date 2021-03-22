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

    agregarTitulos(titulo: Titulo){
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