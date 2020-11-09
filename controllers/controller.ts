let car:Car;
let wheel1:Wheel;
let wheel2:Wheel;
let wheel3:Wheel;
let wheel4:Wheel;

//Todo lo relacionado con car.
function createCar(plate:any, brand:any, color:any){
    car = new Car(plate.value, brand.value, color.value);
    return car;
}

function showCar(car: Car){
    let carProperties: any = document.getElementsByClassName("col");
    let carArr = Array.prototype.slice.call(carProperties);
    carArr[0].innerHTML = "Plate: " + car.plate;
    carArr[1].innerHTML = "Color: " + car.color;
    carArr[2].innerHTML = "Brand: " + car.brand;
}

var myForm = (<HTMLFormElement>document.getElementById('myFormId'));

myForm.onsubmit = (event) => {
    let plate: HTMLInputElement = (document.getElementById('plate') as HTMLInputElement);
    let brand: HTMLInputElement = (document.getElementById('brand') as HTMLInputElement);
    let color: HTMLInputElement = (document.getElementById('color') as HTMLInputElement);

    let acumErrores = 0;

    if(plate.value == "") {
        plate.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorPlate")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(brand.value == "") {
        brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorBrand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(color.value == "") {
        color.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorColor")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if (acumErrores === 0){
        plate.classList.remove('is-invalid');
        brand.classList.remove('is-invalid');
        color.classList.remove('is-invalid');
	}

    createCar(plate, brand, color);

    let show_car = (<HTMLElement>document.getElementById("show_car"));
    show_car.classList.remove('invisible');
    
    showCar(car);
    plate.value = "";
    brand.value = "";
    color.value = "";
    event.preventDefault()
}

//Todo lo relacionado con wheels.

var myFormWheel = (<HTMLFormElement>document.getElementById('myFormIdWheel'));

myFormWheel.onsubmit = (event) => {
    let wheel1_brand: HTMLInputElement = (document.getElementById('wheel1_brand') as HTMLInputElement);
    let wheel1_diameter: HTMLInputElement = (document.getElementById('wheel1_diameter') as HTMLInputElement);
    let wheel2_brand: HTMLInputElement = (document.getElementById('wheel2_brand') as HTMLInputElement);
    let wheel2_diameter: HTMLInputElement = (document.getElementById('wheel2_diameter') as HTMLInputElement);
    let wheel3_brand: HTMLInputElement = (document.getElementById('wheel3_brand') as HTMLInputElement);
    let wheel3_diameter: HTMLInputElement = (document.getElementById('wheel3_diameter') as HTMLInputElement);
    let wheel4_brand: HTMLInputElement = (document.getElementById('wheel4_brand') as HTMLInputElement);
    let wheel4_diameter: HTMLInputElement = (document.getElementById('wheel4_diameter') as HTMLInputElement);

    let acumErrores = 0;
    
    if(wheel1_brand.value == "") {
        wheel1_brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel1_brand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel1_diameter.value == "") {
        wheel1_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel1_diameter")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel2_brand.value == "") {
        wheel2_brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel2_brand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel2_diameter.value == "") {
        wheel2_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel2_diameter")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel3_brand.value == "") {
        wheel3_brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel3_brand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel3_diameter.value == "") {
        wheel3_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel3_diameter")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel4_brand.value == "") {
        wheel4_brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel4_brand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel4_diameter.value == "") {
        wheel4_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel4_diameter")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    function showWheel(){
        let wheelsArray =[];
        wheelsArray.push(wheel1, wheel2, wheel3, wheel4);
        let wheelProperties: any = document.getElementById("col");
        for(let i = 0; i < wheelsArray.length; i++){
            let text = `Wheel ${i +1 } = Brand: ${wheelsArray[i].brand} & Diameter: ${wheelsArray[i].diameter} `;
            wheelProperties.appendChild(createLi(text));
        }
    }

    var createLi = (text:string)=> {
        let li = document.createElement('li');
        li.textContent = text;
        return li;
    }
    
    wheel1 = new Wheel(wheel1_brand.value, parseInt(wheel1_diameter.value));
    wheel2 = new Wheel(wheel2_brand.value, parseInt(wheel2_diameter.value));
    wheel3 = new Wheel(wheel3_brand.value, parseInt(wheel3_diameter.value));
    wheel4 = new Wheel(wheel4_brand.value, parseInt(wheel4_diameter.value));

    let show_wheel = (<HTMLElement>document.getElementById("show_wheels"));
    show_wheel.classList.remove('invisible');
    showWheel();
    
    wheel1_brand.value = "";
    wheel1_diameter.value = "";
    wheel2_brand.value = "";
    wheel2_diameter.value = "";
    wheel3_brand.value = "";
    wheel3_diameter.value = "";
    wheel4_brand.value = "";
    wheel4_diameter.value = "";

    event.preventDefault()
}



    


