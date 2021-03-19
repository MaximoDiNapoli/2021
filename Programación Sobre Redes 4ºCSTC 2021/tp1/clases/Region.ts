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