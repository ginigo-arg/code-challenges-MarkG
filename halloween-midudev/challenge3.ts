// -------- INSTRUCTIONS --------- //

// You are trapped in a nightmare where Freddy Krueger is chasing you 😭. The dream is represented by a maze of cells, where each cell has a numeric value indicating the danger level of that part of the dream.
// You must find the safest path (i.e., the one with the lowest total danger value) from the top-left corner to the bottom-right corner of the matrix.
// In this challenge, you can only move right or down (you cannot move back or diagonally), and you must calculate the total danger level of the safest path.
// The nightmare is represented by an n x m matrix called dream where each cell is a positive number representing the danger level of that cell in the dream.
// And you have to return the total danger value of the safest path from the top-left corner (position [0][0]) to the bottom-right corner (position [n-1][m-1]).
// let dream1: number[][] = [
//   [1, 3, 1],
//   [2, 5, 1],
//   [4, 2, 10],
// ];
//   const bestPath = findSafestPath(dream) // Returns 7
//   // The safest path is:
//   // [0, 0] -> 1
//   // [0, 1] -> 3
//   // [0, 2] -> 1
//   // [1, 2] -> 1
//   // [2, 2] -> 1

//   // 1 -> 3 -> 1 -> 1 -> 1 = 7
let dream1: number[][] = [
  [1, 3, 1],
  [2, 5, 1],
  [4, 2, 10],
];
let dream2: number[][] = [
  [5, 9],
  [4, 2],
];

// ------- SOLUTION--------- //
function findSafestPath(dream) {
  const n = dream.length;
  const m = dream[0].length;

  // Crear una matriz dp del mismo tamaño que dream
  const dp = Array.from({ length: n }, () => Array(m).fill(Infinity));
  //   dp[0][0] = dream[0][0]; // Inicializamos el punto de partida

  // Llenar la primera fila
  for (let j = 1; j < m; j++) {
    dp[0][j] = dp[0][j - 1] + dream[0][j];
  }

  // Llenar la primera columna
  for (let i = 1; i < n; i++) {
    dp[i][0] = dp[i - 1][0] + dream[i][0];
  }

  // Llenar el resto de la matriz dp
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      dp[i][j] = dream[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
      console.log("dp[i][j]==", dp[i][j]);
    }
  }

  // El resultado está en la esquina inferior derecha
  return dp[n - 1][m - 1];
}

console.log(findSafestPath(dream2)); // Devuelve 7
