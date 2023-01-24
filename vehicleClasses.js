class Vehicle {
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk(){
        console.log("HONK!");
        return true;
    }
    toString(){
        const {make, model, year} = this;
        return `The Vehicle is a ${make}, ${model}, from ${year}`;
        
    }
}

class  Car extends Vehicle {
    constructor(make,model,year){

        super(make,model,year);
        this.numWheels = 4;
    }
    
}

class Motorcycle extends Vehicle {
    constructor(make,model,year){
        super(make,model,year);
        this.numWheels = 2;
        
    }

    revEngine(){
        return "VROOM!";
    }
}

class Garage {
    constructor(capacity){
        this.vehicles = [];
        this.capacity = capacity;
        
    }

    add(v){
        let {vehicles, capacity} = this;

        if(!(v instanceof Vehicle)){
            return "Only vehicles allowed"
        }
        else{

       
        if(vehicles.length < capacity){
            vehicles.push(v);
            return vehicles;
        }
        else{
            return "Garage is at capacity";
             }
            }
        
    }
}