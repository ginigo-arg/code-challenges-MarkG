// You are in a very special market where Christmas trees 🎄 are sold. Each one comes decorated with a series of very peculiar ornaments, and the price of the tree is determined by the ornaments it has.
// *: Snowflake - Value: 1
// o: Christmas Ball - Value: 5
// ^: Decorative Tree - Value: 10
// #: Shiny Garland - Value: 50
// @: Polar Star - Value: 100
// Normally, you would sum up all the values of the ornaments and that's it…
// But, watch out! If an ornament is immediately to the left of another of greater value, instead of adding, its value is subtracted.
// calculatePrice('***')  // 3   (1 + 1 + 1)
// calculatePrice('*o')   // 4   (5 - 1)
// calculatePrice('o*')   // 6   (5 + 1)
// calculatePrice('*o*')  // 5  (-1 + 5 + 1)
// calculatePrice('**o*') // 6  (1 - 1 + 5 + 1)
// calculatePrice('o***') // 8   (5 + 3)
// calculatePrice('*o@')  // 94  (-5 - 1 + 100)
// calculatePrice('*#')   // 49  (-1 + 50)
// calculatePrice('@@@')  // 300 (100 + 100 + 100)
// calculatePrice('#@')   // 50  (-50 + 100)
// calculatePrice('#@Z')  // undefined (Z is unknown)

const Prices = {
  "*": 1,
  o: 5,
  "^": 10,
  "#": 50,
  "@": 100,
};

function calculatePrice(ornaments: string): number {
  const finalPrice = ornaments
    .split("")
    .reduce((acc, ornament, i, ornamentsArr) => {
      const value = Prices[ornament];
      if (!value) return undefined;
      if (ornamentsArr[i + 1] && Prices[ornamentsArr[i + 1]] > value) {
        return acc - value;
      }
      return acc + value;
    }, 0);
  return finalPrice;
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)