function removeChars(str, charsToRemove) {
  let arr = str.split("");

  let filteredArr = arr.filter((char) => !charsToRemove.includes(char));

  return filteredArr.join("");
}

let str = prompt("Введіть рядок:");
let charsToRemove = prompt("Введіть символи для видалення через кому:").split(
  ",",
);

let result = removeChars(str, charsToRemove);
console.log(result);
