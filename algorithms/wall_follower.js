function runAlgo() {
    if (cheeseIsThere()) {
        console.log("CHEIZ");
        // TODO
    }

    if (!isWall("left")) {
        // Then we can turn left
        turnLeft();
    }

    if (!isWall("front")) {
        moveForward();
    }
    else if (isWall("right") && isWall("left") && isWall("front")) {
        // We have reached a dead-end
        turnAround();
    }
    else {
        turnRight();
    }
}

let interval = setInterval(() => {
    try {
        runAlgo();
    } catch (error) {
        // Reload the current page when we get to the end (lazy but it works)
        location.reload();
        // clearInterval(interval);
    }
}, 500);