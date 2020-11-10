let car:Car;
let wheel1:Wheel;
let wheel2:Wheel;
let wheel3:Wheel;
let wheel4:Wheel;

//CAR

//Creación de funciones necesarias para crear, controlar y mostra car

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

function validar_matricula(plate:any) {
	var regex = /^[0-9]{4}[A-Za-z]{3}$/;
	return regex.test(plate) ? true : false;
}

//Recogida de datos del formulario

var myForm = (<HTMLFormElement>document.getElementById('myFormId'));

myForm.onsubmit = (event) => {
    let plate: HTMLInputElement = (document.getElementById('plate') as HTMLInputElement);
    let brand: HTMLInputElement = (document.getElementById('brand') as HTMLInputElement);
    let color: HTMLInputElement = (document.getElementById('color') as HTMLInputElement);

//Control de los datos introducidos

    let acumErrores = 0;

    if(plate.value == "") {
        plate.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorPlate")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!validar_matricula(plate.value)){
		plate.classList.add("is-invalid");
		(<HTMLElement>document.getElementById("errorPlate")).textContent = "Esta matrícula no cumple el formato";
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

//Crear car y mostrar en DOM
    createCar(plate, brand, color);

    if(validar_matricula(plate.value) && brand.value !== '' && color.value !== ''){
        let show_car = (<HTMLElement>document.getElementById("show_car"));
        show_car.classList.remove('invisible');
        showCar(car);
        plate.value = "";
        brand.value = "";
        color.value = "";
    }
    
event.preventDefault()
}


//WHEELS

//Recogida de datos del formulario

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
    
//Control entrada datos ruedas
    if(wheel1_brand.value == "") {
        wheel1_brand.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel1_brand")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }

    if(wheel1_diameter.value == "") {
        wheel1_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel1_diameter")).textContent = "Este campo es obligatorio";
        acumErrores ++;
    }else if(!(parseFloat(wheel1_diameter.value) > 0.4 && parseFloat(wheel1_diameter.value) < 2)){
        wheel1_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel1_diameter")).textContent = 'El diámetro de la rueda 1 no es correcto';
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
    }else if(!(parseFloat(wheel2_diameter.value) > 0.4 && parseFloat(wheel2_diameter.value) < 2)){
        wheel2_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel2_diameter")).textContent = "El diámetro de la rueda 2 no es correcto";
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
    }else if(!(parseFloat(wheel3_diameter.value) > 0.4 && parseFloat(wheel3_diameter.value) < 2)){
        wheel3_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel3_diameter")).textContent = "El diámetro de la rueda 3 no es correcto";
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
    }else if(!(parseFloat(wheel4_diameter.value) > 0.4 && parseFloat(wheel4_diameter.value) < 2)){
        wheel4_diameter.classList.add('is-invalid');
		(<HTMLElement>document.getElementById("errorWheel4_diameter")).textContent = "El diámetro de la rueda 4 no es correcto";
        acumErrores ++;
    }

    if (acumErrores === 0){
        wheel1_brand.classList.remove('is-invalid');
        wheel1_diameter.classList.remove('is-invalid');
        wheel2_brand.classList.remove('is-invalid');
        wheel2_diameter.classList.remove('is-invalid');
        wheel3_brand.classList.remove('is-invalid');
        wheel3_diameter.classList.remove('is-invalid');
        wheel4_brand.classList.remove('is-invalid');
        wheel4_diameter.classList.remove('is-invalid');
	}
    
//Crear objetos ruedas

    wheel1 = new Wheel(wheel1_brand.value, parseFloat(wheel1_diameter.value));
    wheel2 = new Wheel(wheel2_brand.value, parseFloat(wheel2_diameter.value));
    wheel3 = new Wheel(wheel3_brand.value, parseFloat(wheel3_diameter.value));
    wheel4 = new Wheel(wheel4_brand.value, parseFloat(wheel4_diameter.value));

//Mostrar objetos ruedas en DOM

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
    
    if (acumErrores === 0){
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
    }

    event.preventDefault();
}



    


