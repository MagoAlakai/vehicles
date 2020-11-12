class Car{
    plate:string;
    color:string;
    brand:string;
    wheels:Wheel[]=new Array();
    
    constructor(plate:string, brand:string,color:string){
        this.plate=plate;
        this.brand=brand;
        this.color=color;
    }
    
    addWheel(wheel:Wheel):any{
        this.wheels.push(wheel);
    }
}