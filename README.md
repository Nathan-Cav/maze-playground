# Maze Playground

Webpage application for testing maze algorithms. Maze algorithms are defined in `./algorithms`.

## Config

Configuration for defining the maze is located in `./maze_configs`. The numbers for the maze are:

``` javascript
0: Wall
1: EmptyCell
2: StartCell
3: CheizCell
```

Walls are defined by every even row and column in the maze.

### Direction

The current cell moves in a particular direction which can change when `turnLeft()` and `turnRight()` are called. This direction is defined using the `currDirection` variable which is between 0-3. The directions are defined as

``` javascript
0: North
1: East
2: South
3: West
```

The starting direction of the cell must be defined with the `currDirection` variable in `./maze_configs`.

## Movement Functions

The functions for movement and wall detection are the following.

### moveForward()

Move forward relative to the direction we're facing.

### turnLeft()/turnRight()/turnAround()

Change the direction we're facing.

## Sight Functions

### isWall(direction)

Whether we have reached a wall in a particular direction relative to the direction we're facing.

### cheeseIsThere()

Whether we're currently on a cheese cell.