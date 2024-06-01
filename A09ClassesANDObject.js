/**
 * A JS object is an entity having state and behavior (properties and method)
 * Js objects have a special property clled prototype
 * 
 * We can set prototype using __proto__
 */

const student = {
    fullName: "Anuj Jha",
    marks: 79.9,

    printMarks1() {
        console.log("Marks: ", this.marks);
    },

    printMarks2: function () {
        console.log("Marks: ", this.marks);
    }
}

//---------------------------------------------------------------

// creating prototype..

const employee = {
    calcTax() {
        console.log("tax is 10%");
    }
};

const karanArjun = {
    salary: 5000,

    calcTax() {
        console.log("tax is 20%")  // this will execute under karanAr.
    }
};

karanArjun.__proto__ = employee;

//-----------------------------------------------------------------

/* 
    Class in JS: 
    Class is a program-code template for creating objects.
    Those objects will have some sate(variable) & some behaviour (functions) inside it

*/

class ToyotaCar {
    start(){
        console.log("start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");

let lexus = new ToyotaCar();
lexus.setBrand("lexus")

//----------------------------------------------------------------------

/**
 * Constructor() method is : 
 *  Automatically invoked by new 
 *  Use to initialize objects
 */

class Car{
    constructor(brand, speed){
        console.log("This is constructor");
        this.brand = brand;
        this.speed = speed;
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }
}

let Toyota = new Car("Fortuner", 123);
console.log(Toyota);
let MG = new Car();  // Parameters will be set as undefined 
console.log(MG);

//-----------------------------------------------------------------------

/**
 * Inheritance in JS
 *  Inheritance is passing down properties & Methods from parent class to child class
 */

class Parent {
    hello(){
        console.log("Hello From Parent");
    }
}
class Child extends Parent{}
let objet1 = new Child();


class Person{
    constructor(){
        this.species = "homo sapiens";  
    }

    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }

    work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Person{
    work(){
        console.log("Solve Problems and Build Somthing");
    }
}

class Doctor extends Person{
    work(){
        console.log("Treat Patients");
    }
}


//----------------------------------------------------------------------

/**
 * Super keyword 
 *  The super keyword is used to call the constructor of its parent class to acess thee parents's properties and methods.
 */

class Person2{
    constructor(name){
        console.log("Enter Parent Class Constructor");
        this.species = "homo sapiens";  
        this.name = name;
    }

    eat(){
        console.log("eat");
    }
}

class Engineer2 extends Person2{
    constructor(branch, name){
        console.log("Enter Child Class Constructor");
        super(name); // invoke parent class constructor (either it will give error)
        this.branch = branch;
        console.log("Exit Child Class Constructor");
    }

    work(){
        super.eat();
        console.log("Solve Problems and Build Somthing");
    }
}


let engObj  = new Engineer2("Computer Engineer", "Anuj")