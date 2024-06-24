/**
 * @author Nathan Cavalli
 * @description Get cell in given direction relative to the direction we're currently facing
 */

/**
 * Directions
 * North: 0
 * East: 1
 * South: 2
 * West: 3
 */
let currDirection = 0;

function getForwardIndex() {
    switch (currDirection) {
        case 0:
            return { y: (currCell.y - 1), x: (currCell.x) };
        case 1:
            return { y: (currCell.y), x: (currCell.x + 1) };
        case 2:
            return { y: (currCell.y + 1), x: (currCell.x) };
        case 3:
            return { y: (currCell.y), x: (currCell.x - 1) };
        default:
            return { y: 0, x: 0 };
    }
}

function getLeftIndex() {
    switch (currDirection) {
        case 0:
            return { y: (currCell.y), x: (currCell.x - 1) };
        case 1:
            return { y: (currCell.y - 1), x: (currCell.x) };
        case 2:
            return { y: (currCell.y), x: (currCell.x + 1) };
        case 3:
            return { y: (currCell.y + 1), x: (currCell.x) };
        default:
            return { y: 0, x: 0 };
    }
}

function getRightIndex() {
    switch (currDirection) {
        case 0:
            return { y: (currCell.y), x: (currCell.x + 1) };
        case 1:
            return { y: (currCell.y + 1), x: (currCell.x) };
        case 2:
            return { y: (currCell.y), x: (currCell.x - 1) };
        case 3:
            return { y: (currCell.y - 1), x: (currCell.x) };
        default:
            return { y: 0, x: 0 };
    }
}