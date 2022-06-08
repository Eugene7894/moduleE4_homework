function OnOffDevice() {
    this.workStatus = "Off";
    this.getOffStatus = function (){
        this.workStatus = "Off"
    };
    this.getOnStatus = function (){
        this.workStatus = "On"
    };

}

function DeskLamp(lampPowerWt, lampWeightGr) {
    this.lampPowerWt = lampPowerWt;
    this.lampWeightGr = lampWeightGr;
}

DeskLamp.prototype = new OnOffDevice();

DeskLamp.prototype.consumedPower = function (hours) {
    console.log(hours * this.lampPowerWt / 100);
};

function Fridge(fridgePowerWt, fridgeWeightKg) {
    this.fridgePowerWt = fridgePowerWt;
    this.fridgeWeightKg = fridgeWeightKg;
    this.fridgeWarrantyYears = 5;
}

Fridge.prototype = new OnOffDevice();

Fridge.prototype.consumedPower = function(hours) {
    console.log(hours * this.fridgePowerWt / 100);
};

const lgFridge = new Fridge(150, 50);
const lampInstance = new DeskLamp(60, 30);

console.log(lgFridge);
console.log(lampInstance);

lgFridge.consumedPower(900);
lgFridge.getOnStatus();
console.log(lgFridge);
lampInstance.consumedPower(900);