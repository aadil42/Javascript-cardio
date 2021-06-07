
const reversString = (str) => {
 
  let reversStr = ""; 
  for(let i = str.length; i > 0; i--) {
    reversStr += str[i - 1]; 
  }

  return reversStr
}

console.log(reversString('hello world'));
