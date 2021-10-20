const addAll = (...args) => {

  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

console.log(addAll(3, 35, 6, 24, 6));


