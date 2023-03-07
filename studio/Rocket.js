"use strict";
exports.__esModule = true;
exports.Rocket = void 0;
var Rocket = /** @class */ (function () {
    function Rocket(name, totalCapacityKg) {
        this.cargoItems = [];
        this.astronauts = [];
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }
    Rocket.prototype.sumMass = function (items) {
        var sum = 0;
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            sum += item.massKg;
        }
        return sum;
    };
    //Returns the sum of all items using each item's massKg property
    Rocket.prototype.currentMassKg = function () {
        return this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        //Uses this.sumMass to return the combined mass of this.astronauts and this.cargoItems
    };
    Rocket.prototype.canAdd = function (item) {
        if (this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
        return false;
        //Returns true if this.currentMassKg() + item.massKg <= this.totalCapacityKg
    };
    Rocket.prototype.addCargo = function (cargo) {
        var canAdd = this.canAdd(cargo);
        if (canAdd) {
            this.cargoItems.push(cargo);
            return true;
        }
        if (!canAdd) {
            return false;
        }
    };
    Rocket.prototype.addAstronaut = function (astronaut) {
        var canAdd = this.canAdd(astronaut);
        if (canAdd) {
            this.astronauts.push(astronaut);
            return true;
        }
        if (!canAdd) {
            return false;
        }
        // Uses this.canAdd() to see if another astronaut can be added.
        // If true, adds astronaut to this.astronauts and returns true.
        // If false, returns false.
    };
    return Rocket;
}());
exports.Rocket = Rocket;
