// The grinch 👹 has passed through Santa Claus's workshop! And what a mess he has made. He has changed the order of some packages, so shipments cannot be made.
// Luckily, the elf Pheralb has detected the pattern the grinch followed to jumble them. He has written the rules that we must follow to reorder the packages. The instructions are as follows:
// You will receive a string containing letters and parentheses.
// Every time you find a pair of parentheses, you need to reverse the content within them.
// If there are nested parentheses, solve the innermost ones first.
// Return the resulting string with parentheses removed, but with the content correctly reversed.
// He left us some examples:
// fixPackages('a(cb)de')
// // ➞ "abcde"
// // We reverse "cb" inside the parentheses

// fixPackages('a(bc(def)g)h')
// // ➞ "agdefcbh"
// // 1st we reverse "def" → "fed", then we reverse "bcfedg" → "gdefcb"

// fixPackages('abc(def(gh)i)jk')
// // ➞ "abcighfedjk"
// // 1st we reverse "gh" → "hg", then "defhgi" → "ighfed"

// fixPackages('a(b(c))e')
// // ➞ "acbe"
// // 1st we reverse "c" → "c", then "bc" → "cb"

function fixPackages(packages: string): string {
  const stack = [];

  for (let char of packages) {
    if (char === ")") {
      // Build the string inside the current parentheses
      let temp = "";
      console.log("stack", stack);
      console.log("stack[stack.length]", stack.length);
      while (stack.length && stack[stack.length - 1] !== "(") {
        temp = stack.pop() + temp;
      }

      // Remove the opening parenthesis '('
      stack.pop();
      // Reverse the content and push back to stack
      for (let reversedChar of temp.split("").reverse()) {
        stack.push(reversedChar);
      }
    } else {
      // Push current character to stack
      stack.push(char);
    }
  }

  // Return the final result as a string
  return stack.join("");
}

console.log("fixPackages(): ", fixPackages("abc(def(gh)i)jk"));
