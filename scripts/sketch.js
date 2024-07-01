/**
 * @author Nathan Cavalli
 * @description File to create the maze and show it on screen
 */


// Convert maze layout from config into objects
const objectMaze = maze.map((row, i) => {
	const rowWall = (i % 2 == 0);
	return row.map((cell, j) => {
		const colWall = (j % 2 == 0);
		if (cell === 2) {
			currCell.y = i
			currCell.x = j;
		}
		return new MazeCell(cell, rowWall, colWall);
	});
});

/**
 * RENDER MAZE ITSELF
 */

function setup() {
	width = window.innerWidth;
	height = window.innerHeight;
	size = (width < height) ? width : height
	createCanvas(size, size);
	background(0);
}

function draw() {
	stroke(color(255));
	strokeWeight(1);

	const density = size / objectMaze.length;
	const wallThickness = density / 8;
	const cellThickness = density * 2;

	let yOffset = 0;
	for (let y = 0; y < objectMaze.length; y++) {
		let xOffset = 0;
		let rowWall = objectMaze[y][0].isRowWall;

		for (let x = 0; x < objectMaze[y].length; x++) {
			let colWall = objectMaze[y][x].isColWall;
			let color = "";
			switch (objectMaze[y][x].cellType) {
				case 0:
					// Wall
					color = "black"
					break;
				case 1:
					// EmptyCell
					color = "white"
					break;
				case 2:
					// Start
					color = "white"
					break;
				case 3:
					// Cheiz
					color = "yellow"
					break;
				default:
					color = "black";
					break;
			}
			if (y == currCell.y && x == currCell.x) {
				color = "red";
			}
			fill(color);
			rect(
				xOffset,
				yOffset,
				(colWall) ? wallThickness : cellThickness,
				(rowWall) ? wallThickness : cellThickness
			);
			if (y == currCell.y && x == currCell.x) {
				// Display the current direction
				fill(255);
				translate(xOffset, yOffset);
				switch (currDirection) {
					// North
					case 0:
						triangle(
							cellThickness * 0.25,
							cellThickness * 0.75,
							cellThickness * 0.5,
							cellThickness * 0.25,
							cellThickness * 0.75,
							cellThickness * 0.75
						);
						break;
					// East
					case 1:
						triangle(
							cellThickness * 0.75,
							cellThickness * 0.5,
							cellThickness * 0.25,
							cellThickness * 0.25,
							cellThickness * 0.25,
							cellThickness * 0.75
						);
						break;
					// South
					case 2:
						triangle(
							cellThickness * 0.25,
							cellThickness * 0.25,
							cellThickness * 0.75,
							cellThickness * 0.25,
							cellThickness * 0.5,
							cellThickness * 0.75
						);
						break;
					// West
					case 3:
						triangle(
							cellThickness * 0.25,
							cellThickness * 0.5,
							cellThickness * 0.75,
							cellThickness * 0.25,
							cellThickness * 0.75,
							cellThickness * 0.75
						);
						break;
				}
				translate(-xOffset, -yOffset);
			}
			xOffset += (colWall) ? wallThickness : cellThickness;
		}
		yOffset += (rowWall) ? wallThickness : cellThickness;
	}
}