// Code your solution in this file!

const returnFirstTwoDrivers = function (array){
    let newArray = array.slice(0, 2);
    return newArray;
}

const returnLastTwoDrivers = function (array){
    return array.slice(-2);
    
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


function createFareMultiplier(fare = 10, int){
    return fare * int;
}

const fareDoubler = function(){
    if (createFareMultiplier() === (fare * 2)){
        return createFareMultiplier;
    }
}

const fareTripler = function(){
    if (createFareMultiplier() === (fare * 3)){
        return createFareMultiplier;
    }
}

function selectDifferentDrivers(drivers, (returnFirstTwoDrivers || returnLastTwoDrivers))