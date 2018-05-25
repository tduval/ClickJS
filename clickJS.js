var totalClick = 0;
var resEnergy = 0;
var resCellB = 0;
var resCellT = 0;
var resXXX = 0;
var resYYY = 0;

var resCellBEnergyCost = 10;
var resCellTEnergyCost = 50;
var resXXXEnergyCost = 250;
var resYYYEnergyCost = 1000;

var resEnergySteps = [
    { id : 0, name : "CellB", energyRequired : 10},
    { id : 1, name : "CellT", energyRequired : 50},
    { id : 2, name : "XXX", energyRequired : 250},
    { id : 3, name : "YYY", energyRequired : 1000},
];

function getTotalClick(){
    return totalClick;
}
function incrementResEnergy(){
    totalClick++;
    resEnergy++;
    return resEnergy;
}
function buyResCellB(){
    totalClick++;
    resCellB++;
    resEnergy-=resCellBEnergyCost;
    return resCellB;
}
function buyResCellT(){
    totalClick++;
    resCellT++;
    resEnergy-=resCellTEnergyCost;
    return resCellT;
}
function buyResXXX(){
    totalClick++;
    resXXX++;
    resEnergy-=resXXXEnergyCost;
    return resXXX;
}
function buyResYYY(){
    totalClick++;
    resYYY++;
    resEnergy-=resYYYEnergyCost;
    return resYYY;
}
