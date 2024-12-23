// The elves are playing with a magical train 🚂 that carries gifts. This train moves on a board represented by an array of strings.
// The train consists of an engine (@), followed by its carriages (o), and must collect magical fruits (*) which serve as fuel. The movement of the train follows these rules:
// You will receive two parameters board and mov.
// board is an array of strings that represents the board:
// @ is the train's engine.
// o are the train's carriages.
// * is a magical fruit.
// · are empty spaces.
// mov is a string that indicates the next movement of the train from the train's head @:
// 'L': left
// 'R': right
// 'U': up
// 'D': down.
// With this information, you must return a string:
// 'crash': If the train crashes into the edges of the board or itself.
// 'eat': If the train collects a magical fruit (*).
// 'none': If it moves without crashing or collecting any magical fruit.
// Example:
// const board = [
//   '·····',
//   '*····',
//   '@····',
//   'o····',
//   'o····'
// ]

// [1][0] = "*";   // magical fruit
// [2][0] = "@";
// [3][0] = "o";
// [4][0] = "o";

// console.log(moveTrain(board, 'U'))
// // ➞ 'eat'
// // Because the train moves up and finds a magical fruit
// UP Movement => [row-1][currentColumn] = "@";

// console.log(moveTrain(board, 'D'))
// // ➞ 'crash'
// // The train moves down and the head crashes into itself
// DOWN Movement => [row+1][currentColumn] = "@";

// console.log(moveTrain(board, 'L'))
// // ➞ 'crash'
// // The train moves to the left and crashes into the wall
// LEFT Movement => [currentRow][column-1] = "@";

// console.log(moveTrain(board, 'R'))
// // ➞ 'none'
// // The train moves to the right and there is empty space on the right
// RIGHT Movement => [currentRow][column+1] = "@";

type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  if (!board.join("").includes("@")) return "crash";
  const findHeadTrain = board.findIndex((row) => row.includes("@"));
  const HeadPosition = [findHeadTrain, board[findHeadTrain].indexOf("@")];

  let nextRow = HeadPosition[0];
  let nextCol = HeadPosition[1];

  if (mov === "U") nextRow--;
  if (mov === "D") nextRow++;
  if (mov === "L") nextCol--;
  if (mov === "R") nextCol++;

  if (
    nextRow < 0 ||
    nextRow >= board.length ||
    nextCol < 0 ||
    nextCol >= board[0].length
  ) {
    return "crash";
  }

  const nextPosition = board[nextRow][nextCol];

  return nextPosition === "o" ? "crash" : nextPosition === "*" ? "eat" : "none";
}

const board = ["·····", "*····", "·····", "@····", "o····"];
console.log(moveTrain(board, "R")); // ➞ 'none'
console.log(moveTrain(board, "U")); // ➞ 'eat'
console.log(moveTrain(board, "D")); // ➞ 'crash'
console.log(moveTrain(board, "L")); // ➞ 'crash'
