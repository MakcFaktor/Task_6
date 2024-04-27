function calculateAverage(arr) {
  let sum = 0;
  let count = 0;

  arr.forEach((element) => {
    if (typeof element === "number" && !isNaN(element)) {
      sum += element;
      count++;
    }
  });

  if (count > 0) {
    return sum / count;
  } else {
    return 0;
  }
}

let array = [1, 2, "3", "abc", 4, "5"];
let average = calculateAverage(array);
console.log(average);
