// Santa Claus's elves 🧝🧝‍♂️ have found a bunch of mismatched magic boots in the workshop. Each boot is described by two values:
// type indicates if it's a left boot (I) or a right boot (R).
// size indicates the size of the boot.
// Your task is to help the elves pair all the boots of the same size having a left and a right one. To do this, you should return a list of the available boots after pairing them.
// Note: You can have more than one pair of boots of the same size!
// const shoes = [
//   { type: 'I', size: 38 },
//   { type: 'R', size: 38 },
//   { type: 'R', size: 42 },
//   { type: 'I', size: 41 },
//   { type: 'I', size: 42 }
// ]

// organizeShoes(shoes)
// // [38, 42]

const shoes2: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

const shoes3: Shoe[] = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

// organizeShoes(shoes3)
// // []

type Shoe = {
  type: "I" | "R";
  size: number;
};

function organizeShoes(shoes: Shoe[]): number[] {
  const sizeCounts = shoes.reduce((acc, shoe) => {
    if (!acc[shoe.size]) {
      acc[shoe.size] = { I: 0, R: 0 };
    }
    acc[shoe.size][shoe.type]++;
    return acc;
  }, {} as Record<number, { I: number; R: number }>);

  const pairedSizes: number[] = [];
  for (const [size, counts] of Object.entries(sizeCounts)) {
    const pairs = Math.min(counts.I, counts.R);
    for (let i = 0; i < pairs; i++) {
      //disable-next-line
      pairedSizes.push(Number(size));
    }
  }

  return pairedSizes;
}

console.log(organizeShoes(shoes2)); // [38, 38]
console.log(organizeShoes(shoes3)); // []

const pairs = {
  34: [1, 2],
  44: [2, 2],
};
