const arrayChunks = (arr, chunks) => {

  const mainArr = [];

  let start = 0;
  let end = chunks;
  for (let i = 0; i < arr.length / chunks; i++) {

    let subArr = arr.slice(start, end);
    mainArr.push(subArr);
    start += chunks;
    end += chunks;
  }

  return mainArr;
}

console.log(arrayChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 5));
