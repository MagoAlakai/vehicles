let car: Car;
let wheel: Wheel;

//CAR

//Creación de funciones necesarias para crear, controlar y mostra car

function validar_matricula(plate:any) {
	var regex = /^[0-9]{4}[A-Za-z]{3}$/;
	return regex.test(plate) ? true : false;
}

function createCar(plate:any, brand:any, color:any){
    car = new Car(plate.value, brand.value, color.value);
    console.log(car);
    return car;
}

function showCar(car: Car){
    let carProperties: any = document.getElementsByClassName("col");
    let carArr = Array.prototype.slice.call(carProperties);
    for(let element in car){
        for(let i = 0; i < carArr.length; i++){
            if(element === 'plate' && i === 0){
                carArr[i].innerHTML += car[element];
            }else if(element === 'brand' && i === 1){
                carArr[i].innerHTML += car[element];
            }else if(element === 'color' && i === 2){
                carArr[i].innerHTML += car[element];
            }
        }
    } 
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

//Declaración de funciones

let showWheel = (text: string)=>{
    let wheelProperties: any = document.getElementById("col");
    wheelProperties.appendChild(createLi(text));
}

let createLi = (text:string)=> {
    let li = document.createElement('li');
    li.textContent = text;
    return li;
}

//Recogida de datos del formulario

var myFormWheel = (<HTMLFormElement>document.getElementById('myFormIdWheel'));
let wheels: Array<any> = new Array();
var acumErrores = 0;
myFormWheel.onsubmit = (event) => {

    for(let i = 1; i <= 4; i++){
        let wheel_brand: HTMLInputElement = (document.getElementById('wheel' + i +'_brand') as HTMLInputElement);
        let wheel_diameter: HTMLInputElement = (document.getElementById('wheel' + i + '_diameter') as HTMLInputElement);

    //Control entrada datos ruedas

        if(wheel_brand.value == "") {
            wheel_brand.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_brand")).textContent = "Este campo es obligatorio";
            acumErrores ++;
        }
    
        if(wheel_diameter.value == "") {
            wheel_diameter.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = "Este campo es obligatorio";
            acumErrores ++;
        }else if(!(parseFloat(wheel_diameter.value) > 0.4 && parseFloat(wheel_diameter.value) < 2)){
            wheel_diameter.classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = 'El diámetro de la rueda' + i +' no es correcto';
            acumErrores ++;
        }

        if(acumErrores === 0){
            let wheel = new Wheel(wheel_brand.value, parseFloat(wheel_diameter.value));
            //car.addWheel(wheel);
            wheels.push(wheel),
            wheel_brand.classList.remove('is-invalid');
            wheel_diameter.classList.remove('is-invalid');
        }
        

    //Limpiar Inputs
        /*wheel_brand.value = "";
        wheel_diameter.value = "";*/
    }

    if(acumErrores === 0){
        let show_wheels = (<HTMLDivElement>document.getElementById("show_wheels"));
        show_wheels.classList.remove('invisible');
        for(let i = 0; i < wheels.length; i++){
            let text = `Wheel ${i + 1} = Brand: ${wheels[i].brand} & Diameter: ${wheels[i].diameter} `;
            showWheel(text);
        }
    }
    //Mostrar objetos ruedas en DOM
    /*if(boleano === true){
        let show_wheels = (<HTMLDivElement>document.getElementById("show_wheels"));
        show_wheels.classList.remove('invisible');
        for(let i = 0; i < wheels.length; i++){
            let text = `Wheel ${i + 1} = Brand: ${wheels[i].brand} & Diameter: ${wheels[i].diameter} `;
            showWheel(text);
        }
   }*/

    /*for(let i = 0; i < wheels.length; i++){
        let text = `Wheel ${i + 1} = Brand: ${car.wheels[i].brand} & Diameter: ${car.wheels[i].diameter} `;
        showWheel(text);
    }*/
    
    event.preventDefault();
}

/*myFormWheel.addEventListener('blur', (event) => {
    for(let i = 1; i <= 4; i++){
        let wheel_brand: HTMLInputElement = (document.getElementById('wheel' + i +'_brand') as HTMLInputElement);
        let wheel_diameter: HTMLInputElement = (document.getElementById('wheel' + i + '_diameter') as HTMLInputElement);

        if((<HTMLInputElement>event.target).value ==='') {
            (<HTMLElement>event.target).classList.add('is-invalid');
            if(wheel_brand.value == (<HTMLInputElement>event.target).value) {
                (<HTMLElement>event.target).classList.add('is-invalid');
                (<HTMLElement>document.getElementById("errorWheel" + i +"_brand")).textContent = "Este campo es obligatorio";
            }
            if(wheel_diameter.value == (<HTMLInputElement>event.target).value) {
                (<HTMLElement>event.target).classList.add('is-invalid');
                (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = "Este campo es obligatorio";
            }
        }else if((wheel_diameter.value == (<HTMLInputElement>event.target).value && !(parseFloat((<HTMLInputElement>event.target).value) > 0.4 && parseFloat((<HTMLInputElement>event.target).value) < 2))){
            (<HTMLElement>event.target).classList.add('is-invalid');
            (<HTMLElement>document.getElementById("errorWheel" + i +"_diameter")).textContent = 'El diámetro de la rueda' + i +' no es correcto';
        }else{
            (<HTMLElement>event.target).classList.remove('is-invalid');
        }
    }
}*/




