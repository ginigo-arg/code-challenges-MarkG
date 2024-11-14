// -------- INSTRUCTIONS --------- //
// Una persona ha sido asesinada en la noche de Halloween 🔪. Usando un hechizo 🧙‍♀️, hemos conseguido escuchar su último susurro pero es muy debíl y no nos permite identificar quién pudo ser el asesino.
// La información que nos proporciona:
// whisper: cadena de texto que representa lo que la víctima intentó decir antes de morir
// suspects: lista de cadenas que representa los nombres de todos los sospechosos.

// Hay que tener que el susurro whisper tiene algunas reglas:
// _Cada ~ representa una letra incierta en el susurro.
// _Cada posición del susurro es una posición del nombre del asesino.
// _La longitud del whisper no siempre representa la longitud completa del nombre, ya que la víctima pudo haber muerto antes de terminar de decirlo.
// _Pero si el último carácter del susurro es una $, entonces el nombre del asesino terminaba ahí.

// ¡Tu objetivo es descubrir quién pudo ser el asesino! Debes devolver:
// _Si solo un nombre encaja con el patrón del susurro, retorna ese nombre.
// _Si hay varios nombres que encajan, retorna todos los nombres separados por comas.
// _Si ningún nombre encaja, retorna una cadena vacía ("").
// _Las mayúsculas y minúsculas de las letras no importan.

//==== examples =====
// const whisper = 'd~~~~~a';
// const suspects = ['Dracula', 'Freddy Krueger', 'Jason Voorhees', 'Michael Myers'];

// findTheKiller(whisper, suspects); // -> 'Dracula'

// const whisper2 = '~r~dd~';
// const suspects2 = ['Freddy', 'Freddier', 'Fredderic']

// findTheKiller(whisper2, suspects2); // -> 'Freddy,Freddier,Fredderic'

// const whisper3 = '~r~dd$';
// const suspects3 = ['Freddy', 'Freddier', 'Fredderic']

// findTheKiller(whisper3, suspects3); // -> ''

// const whisper4 = 'mi~~def';
// const suspects4 = ['Midudev', 'Midu', 'Madeval']

// findTheKiller(whisper4, suspects4); // -> ''

// ------- SOLUTION--------- //
function findTheKiller(whisper: string, suspects: string[]) {
  // Reemplaza '~' con '.' (cualquier carácter) y remueve '$' si está presente al final
  const pattern = whisper.replace(/~/g, ".").replace(/\$$/, "");

  // Si '$' estaba presente, limitamos la longitud del nombre usando el símbolo de fin de línea '$'
  const regex = new RegExp(
    `^${pattern}${whisper.endsWith("$") ? "$" : ""}`,
    "i"
  );
  const suspectsFounded = suspects.filter((name) => regex.test(name));
  // Filtra los nombres de sospechosos que coinciden con el patrón
  return !!suspectsFounded.length ? suspectsFounded.join(",") : "";
}
const whisper = "d~~~~~a";
const suspects = [
  "Dracula",
  "Freddy Krueger",
  "Jason Voorhees",
  "Michael Myers",
];
const whisper2 = "~r~dd~";
const suspects2 = ["Freddy", "Freddier", "Fredderic"];
const whisper3 = "~r~dd$";
const suspects3 = ["Freddy", "Freddier", "Fredderic"];
console.log(findTheKiller(whisper2, suspects2));
