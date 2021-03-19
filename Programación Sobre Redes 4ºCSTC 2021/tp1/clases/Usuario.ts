class Usuario{
    private username: String;
    private region: Array<String>;
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