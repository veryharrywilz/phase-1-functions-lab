// Code your solution in this file!
const hqBlock = 42
let distanceFromHq = 0
function distanceFromHqInBlocks(pickUpBlock) {
    if (pickUpBlock >= 42) {
        distanceFromHq = pickUpBlock - hqBlock;
    }
    else {
        distanceFromHq = hqBlock - pickUpBlock;
    }
    return distanceFromHq
}
let feetFromHq
function distanceFromHqInFeet(pickUpBlock) {
   distanceFromHqInBlocks(pickUpBlock)
    feetFromHq = distanceFromHq * 264
    return feetFromHq;
}
let blocksTravelled
let blocksTravelledInFeet
function distanceTravelledInFeet(start, destination) {
    if (start >= destination) {
        blocksTravelled = start - destination;
    }
    else {
        blocksTravelled = destination - start;
    }
    blocksTravelledInFeet = blocksTravelled * 264;
    return blocksTravelledInFeet
}
let farePrice
function calculatesFarePrice(start, destination) {
    distanceTravelledInFeet(start, destination)
    if (blocksTravelledInFeet <= 400) {
        let farePrice = 0
        return farePrice
    }
    else if (blocksTravelledInFeet <= 2000) {
        if (blocksTravelledInFeet > 400); {
            let farePrice = ((blocksTravelledInFeet - 400) * .02);
            return farePrice
        }
    }
    else if (blocksTravelledInFeet > 2000) {
        if (blocksTravelledInFeet > 2500) {
            let tooFar = "cannot travel that far"
            return tooFar
        }
        else {
       let farePrice = 25
        return farePrice
        }
}
}