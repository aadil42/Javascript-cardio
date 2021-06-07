const isPalindrome = (str) => {

  let reversStr = "";
  for(let i = str.length; i > 0; i--) {
    reversStr += str[i - 1];
  }

  if(reversStr === str) return true;
  return false;
}

console.log(isPalindrome("dogeeseseegod"));

