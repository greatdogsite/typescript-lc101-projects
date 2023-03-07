import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';

export class Rocket {
    name: string;
    totalCapacityKg: number;
    cargoItems: {massKg: number, material: string}[] = [];
    astronauts: {massKg: number, name: string}[] = [];
    constructor(name: string, totalCapacityKg: number,) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    sumMass(items: Payload[]): number {
        let sum: number = 0;
        for (let item of items) {
            sum += item.massKg;
        }
        return sum;
    }
    //Returns the sum of all items using each item's massKg property
    currentMassKg(): number {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);

        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    }
    canAdd(item: Payload): boolean {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg

    }
    addCargo(cargo: Cargo): boolean {
        let canAdd: boolean = this.canAdd(cargo);
        if (canAdd){
            this.cargoItems.push(cargo)
            return true;
        }
        if (!canAdd){
            return false;
        }
    }
    addAstronaut(astronaut: Astronaut): boolean {
        let canAdd: boolean = this.canAdd(astronaut);

        if (canAdd){
            this.astronauts.push(astronaut)
            return true;
        }
        if (!canAdd){
            return false;
        }

        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.
    }

}