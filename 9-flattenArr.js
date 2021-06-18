const flattenArr = (arr) => {

  let mainArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      mainArr.push(arr[i][j]);
    }
  }

  return mainArr;
}

console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8]]));