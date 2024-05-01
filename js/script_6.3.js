function removeElement(num, item) {
  const index = num.indexOf(item);

  if (index !== -1) {
    num.splice(index, 1);
  }
}

const num = [1, 3, 4, 6, 2, 5, 7];
removeElement(num, 4);
console.log(num);
