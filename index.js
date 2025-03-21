function distanceFromHqInBlocks(someBlock) {
    const hqBlock = 42;
    return Math.abs(someBlock - hqBlock);
}

function distanceFromHqInFeet(someBlock) {
    const feetPerBlock = 264;
    return Math.abs(someBlock - 42) * feetPerBlock;
}

function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    return Math.abs(destination - start) * feetPerBlock;
}

function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    let distance = Math.abs(destination - start) * feetPerBlock;

    if (distance <= 400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance - 400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

