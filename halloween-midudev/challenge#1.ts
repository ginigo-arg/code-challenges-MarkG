// -------- INSTRUCTIONS --------- //

// During Halloween night 🎃, a witch 🧙‍♀️ is preparing a magical brew. She has a list of potions, each with an associated power, and she wants to combine two of them to achieve a specific total power.
// Given a list of integers where each number represents the power of a potion 🧪 and an integer representing the target power, you must find the index of the first two potions that add up to exactly the target power.
// For example:
// const potions = [4, 5, 6, 2]
// const goal = 8

// createMagicPotion(potions, goal) // [2, 3]
// If no combination is found, return undefined
// const potions = [1, 2, 3, 4]
// const goal = 9

// createMagicPotion(potions, goal) // undefined
// In the case that there is more than one possible combination, select the combination whose second potion appears first in the list.
// const potions = [1, 2, 3, 4]
// const goal = 5

// createMagicPotion(potions, goal) // [1, 2]
// // it could also be [0, 3] but there is a combination earlier

// ------- SOLUTION--------- //

function createMagicPotion(potions: number[], target: number) {
  // Defino la variable results donde se iran almacenando las posibles combinaciones
  let results = [];

  // Evaluamos cada valor con los demas restantes
  potions.forEach((potion, indexA) => {
    potions.slice(indexA + 1, potions.length).forEach((nexPotion, indexB) => {
      //comparar el valor tomado con cada uno de los siguientes valores en el array
      if (potion + nexPotion === target) {
        results.push([indexA, indexA + 1 + indexB]);
      }
    });
  });

  let initialValue = [0, 100];
  const minPair = results.reduce((min: number[], pair: number[]) => {
    return pair[1] < min[1] ? pair : min;
  }, initialValue);

  return results.length ? minPair : undefined;
}
