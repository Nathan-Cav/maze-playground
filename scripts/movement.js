/**
 * @author Nathan Cavalli
 * @description File to define movement primitives for algorithm
 */

// Create tracker variables
let currCell = {
    x: 0,
    y: 0
};

// Primitives for movement/sight

/**
 * Check whether the adjacent cell is a wall
 * @param {string} Direction to check wall
 * @returns {void}
 */
function isWall(direction) {
    let newCell = currCell;
    switch (direction) {
        case "forward":
            newCell = getForwardIndex();
            break;
        case "left":
            newCell = getLeftIndex();
            break;
        case "right":
            newCell = getRightIndex();
            break;
        default:
            return true;
    }
    return (objectMaze[newCell.y][newCell.x].isWall());
}

/**
 * Check whether we're currently on a cheese cell
 * @returns {boolean}
 */
function cheeseIsThere() {
    return objectMaze[currCell.y][currCell.x].isCheese();
}

/**
 * Move forward by 1 cell (accounting for wall)
 * @returns {void}
 */
function moveForward() {
    // Don't move if there is a wall
    if (objectMaze[getForwardIndex().y][getForwardIndex().x].isWall()) {
        return;
    }
    // Move forward twice so we're not in a wall
    currCell = getForwardIndex();
    currCell = getForwardIndex();
}

function turnLeft() {
    currDirection = mod((currDirection - 1), 4);
}

function turnRight() {
    currDirection = mod((currDirection + 1), 4);
}

function turnAround() {
    currDirection = mod((currDirection + 2), 4);
}