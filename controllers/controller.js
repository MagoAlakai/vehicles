var car;
var wheel1;
var wheel2;
var wheel3;
var wheel4;
//CAR
//Creación de funciones necesarias para crear, controlar y mostra car
function createCar(plate, brand, color) {
    car = new Car(plate.value, brand.value, color.value);
    return car;
}
function showCar(car) {
    var carProperties = document.getElementsByClassName("col");
    var carArr = Array.prototype.slice.call(carProperties);
    carArr[0].innerHTML = "Plate: " + car.plate;
    carArr[1].innerHTML = "Color: " + car.color;
    carArr[2].innerHTML = "Brand: " + car.brand;
}
function validar_matricula(plate) {
    var regex = /^[0-9]{4}[A-Za-z]{3}$/;
    return regex.test(plate) ? true : false;
}
//Recogida de datos del formulario
var myForm = document.getElementById('myFormId');
myForm.onsubmit = function (event) {
    var plate = document.getElementById('plate');
    var brand = document.getElementById('brand');
    var color = document.getElementById('color');
    //Control de los datos introducidos
    var acumErrores = 0;
    if (plate.value == "") {
        plate.classList.add('is-invalid');
        document.getElementById("errorPlate").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!validar_matricula(plate.value)) {
        plate.classList.add("is-invalid");
        document.getElementById("errorPlate").textContent = "Esta matrícula no cumple el formato";
        acumErrores++;
    }
    if (brand.value == "") {
        brand.classList.add('is-invalid');
        document.getElementById("errorBrand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (color.value == "") {
        color.classList.add('is-invalid');
        document.getElementById("errorColor").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (acumErrores === 0) {
        plate.classList.remove('is-invalid');
        brand.classList.remove('is-invalid');
        color.classList.remove('is-invalid');
    }
    //Crear car y mostrar en DOM
    createCar(plate, brand, color);
    if (validar_matricula(plate.value) && brand.value !== '' && color.value !== '') {
        var show_car = document.getElementById("show_car");
        show_car.classList.remove('invisible');
        showCar(car);
        plate.value = "";
        brand.value = "";
        color.value = "";
    }
    event.preventDefault();
};
//WHEELS
//Recogida de datos del formulario
var myFormWheel = document.getElementById('myFormIdWheel');
myFormWheel.onsubmit = function (event) {
    var wheel1_brand = document.getElementById('wheel1_brand');
    var wheel1_diameter = document.getElementById('wheel1_diameter');
    var wheel2_brand = document.getElementById('wheel2_brand');
    var wheel2_diameter = document.getElementById('wheel2_diameter');
    var wheel3_brand = document.getElementById('wheel3_brand');
    var wheel3_diameter = document.getElementById('wheel3_diameter');
    var wheel4_brand = document.getElementById('wheel4_brand');
    var wheel4_diameter = document.getElementById('wheel4_diameter');
    var acumErrores = 0;
    //Control entrada datos ruedas
    if (wheel1_brand.value == "") {
        wheel1_brand.classList.add('is-invalid');
        document.getElementById("errorWheel1_brand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (wheel1_diameter.value == "") {
        wheel1_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel1_diameter").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(wheel1_diameter.value) > 0.4 && parseFloat(wheel1_diameter.value) < 2)) {
        wheel1_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel1_diameter").textContent = 'El diámetro de la rueda 1 no es correcto';
        acumErrores++;
    }
    if (wheel2_brand.value == "") {
        wheel2_brand.classList.add('is-invalid');
        document.getElementById("errorWheel2_brand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (wheel2_diameter.value == "") {
        wheel2_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel2_diameter").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(wheel2_diameter.value) > 0.4 && parseFloat(wheel2_diameter.value) < 2)) {
        wheel2_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel2_diameter").textContent = "El diámetro de la rueda 2 no es correcto";
        acumErrores++;
    }
    if (wheel3_brand.value == "") {
        wheel3_brand.classList.add('is-invalid');
        document.getElementById("errorWheel3_brand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (wheel3_diameter.value == "") {
        wheel3_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel3_diameter").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(wheel3_diameter.value) > 0.4 && parseFloat(wheel3_diameter.value) < 2)) {
        wheel3_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel3_diameter").textContent = "El diámetro de la rueda 3 no es correcto";
        acumErrores++;
    }
    if (wheel4_brand.value == "") {
        wheel4_brand.classList.add('is-invalid');
        document.getElementById("errorWheel4_brand").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    if (wheel4_diameter.value == "") {
        wheel4_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel4_diameter").textContent = "Este campo es obligatorio";
        acumErrores++;
    }
    else if (!(parseFloat(wheel4_diameter.value) > 0.4 && parseFloat(wheel4_diameter.value) < 2)) {
        wheel4_diameter.classList.add('is-invalid');
        document.getElementById("errorWheel4_diameter").textContent = "El diámetro de la rueda 4 no es correcto";
        acumErrores++;
    }
    if (acumErrores === 0) {
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
    function showWheel() {
        var wheelsArray = [];
        wheelsArray.push(wheel1, wheel2, wheel3, wheel4);
        var wheelProperties = document.getElementById("col");
        for (var i = 0; i < wheelsArray.length; i++) {
            var text = "Wheel " + (i + 1) + " = Brand: " + wheelsArray[i].brand + " & Diameter: " + wheelsArray[i].diameter + " ";
            wheelProperties.appendChild(createLi(text));
        }
    }
    var createLi = function (text) {
        var li = document.createElement('li');
        li.textContent = text;
        return li;
    };
    if (acumErrores === 0) {
        var show_wheel = document.getElementById("show_wheels");
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
};
