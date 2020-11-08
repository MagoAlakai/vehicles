let car:Car;

function createCar(plate:string, brand:string, color:string){
    car = new Car(plate, brand, color);
    //car.addWheel(new Wheel(2,"SEAT"));
}

function showCar(car: Car){
    let carProperties: any = document.getElementsByClassName("col");
    let carArr = Array.prototype.slice.call(carProperties);
    carArr[0].innerHTML = "Plate: " + car.plate;
    carArr[1].innerHTML = "Color: " + car.color;
    carArr[2].innerHTML = "Brand: " + car.brand;
}

var myForm = (<HTMLFormElement>document.getElementById('myFormId'));

myForm.onsubmit = () => {
    let plate = (<HTMLInputElement>document.getElementById('plate')).value;
    let brand = (<HTMLInputElement>document.getElementById('brand')).value;
    let color = (<HTMLInputElement>document.getElementById('color')).value;

    createCar(plate, brand, color);

    let show_car = (<HTMLElement>document.getElementById("show_car"));
    show_car.classList.remove('invisible');
    
    showCar(car);
}



    /*let coche: HTMLHeadingElement = (document.getElementById("carInfo") as HTMLHeadingElement);
    coche.innerText = `matricula = ${car.plate}, marca = ${car.brand} y el color: ${car.color}`;*/
    
    /*document.body.innerText="CAR: PLATE: " + car.plate 
    + " BRAND: " + car.brand + " COLOR: " + car.color + " WHEELS: " + JSON.stringify(car.wheels);*/
    


