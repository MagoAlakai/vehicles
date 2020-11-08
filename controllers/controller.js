var car;
function createCar(plate, brand, color) {
    car = new Car(plate, brand, color);
    //car.addWheel(new Wheel(2,"SEAT"));
}
function showCar(car) {
    var carProperties = document.getElementsByClassName("col");
    var carArr = Array.prototype.slice.call(carProperties);
    carArr[0].innerHTML = "Plate: " + car.plate;
    carArr[1].innerHTML = "Color: " + car.color;
    carArr[2].innerHTML = "Brand: " + car.brand;
}
var myForm = document.getElementById('myFormId');
myForm.onsubmit = function () {
    var plate = document.getElementById('plate').value;
    var brand = document.getElementById('brand').value;
    var color = document.getElementById('color').value;
    createCar(plate, brand, color);
    var show_car = document.getElementById("show_car");
    show_car.classList.remove('invisible');
    showCar(car);
};
/*let coche: HTMLHeadingElement = (document.getElementById("carInfo") as HTMLHeadingElement);
coche.innerText = `matricula = ${car.plate}, marca = ${car.brand} y el color: ${car.color}`;*/
/*document.body.innerText="CAR: PLATE: " + car.plate
+ " BRAND: " + car.brand + " COLOR: " + car.color + " WHEELS: " + JSON.stringify(car.wheels);*/
