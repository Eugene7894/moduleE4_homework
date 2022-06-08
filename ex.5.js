class OnOffDevice {
    constructor() {
        this.workStatus = "Off";
        this.city = 'msk'
    }

    getOffStatus = function (){
        this.workStatus = "Off"
    }
    getOnStatus = function (){
        this.workStatus = "On"
    }

}

 class DeskLamp extends OnOffDevice{
    constructor(lampPowerWt, lampWeightGr) {
        super();
        this.lampPowerWt = lampPowerWt;
        this.lampWeightGr = lampWeightGr;
    }

     consumedPower(hours) {
         console.log(hours * this.lampPowerWt / 100)
     }
}

class Fridge extends OnOffDevice {
    constructor(fridgePowerWt, fridgeWeightKg) {
        super();
        this.fridgePowerWt = fridgePowerWt;
        this.fridgeWeightKg = fridgeWeightKg;
        this.fridgeWarrantyYears = 5;
    }

    consumedPower(hours) {
        console.log(hours * this.fridgePowerWt / 100)
    }
}

const lgFridge = new Fridge(150, 50);
const lampInstance = new DeskLamp(60, 30);

console.log(lgFridge);
console.log(lampInstance);

lgFridge.consumedPower(900);
// lgFridge.getOnStatus();
// console.log(lgFridge);
lampInstance.consumedPower(900);
