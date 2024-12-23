// We have already wrapped hundreds of presents 🎁… but an elf forgot to check if the present, represented by an asterisk *, is inside the box.
// The box has a present (*) and counts as "inside the box" if:
// It is completely surrounded by # on the box's edges.
// The * is not on the box's edges.
// Keep in mind that the * can be inside, outside, or may not even be there. We must return true if the * is inside the box and false otherwise.
// Examples:
// inBox([
//   "###",
//   "#*#",
//   "###"
// ]) // ➞ true

// inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ]) // ➞ true

// inBox([
//   "#####",
//   "#   #",
//   "#  #*",
//   "#####"
// ]) // ➞ false

// inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) // ➞ false
function inBox(box: string[]): boolean {
  if (!box.join("").includes("*")) return false;
  if (box[0].includes("*") || box[box.length - 1].includes("*")) return false;
  for (const row of box) {
    if (row[0] === "*" || row[row.length - 1] === "*") return false;
  }
  return true;
}

console.log(inBox(["#*#", "###", "###"]));
