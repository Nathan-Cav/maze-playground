/**
 * 0: Wall
 * 1: EmptyCell
 * 2: StartCell
 * 3: CheizCell
 */
class MazeCell {
    cellType
    isRowWall
    isColWall

    constructor(cellType, isRowWall, isColWall) {
        this.cellType = cellType;
        this.isRowWall = isRowWall;
        this.isColWall = isColWall;

        // Only allow walls to be placed on wall rows/columns (else make them empty cells)
        if (this.cellType === 0) {
            this.cellType = (isColWall || isRowWall) ? 0 : 1
        }
        // All corner walls should be walls
        if (this.isColWall && this.isRowWall) {
            this.cellType = 0;
        }
    }

    isWall() {
        return this.cellType == 0;
    }

    isStart() {
        return this.cellType == 2;
    }

    isCheese() {
        return this.cellType == 3;
    }
}