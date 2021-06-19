const lettersChanges = (str) => {

  strArr = str.split('');
  strArr.forEach((letter, index) => {

    let postLetter = String.fromCharCode(str.charCodeAt(index) + 1);

    switch (postLetter) {
      case 'a':
        strArr[index] = 'A';
        break;
      case 'e':
        strArr[index] = 'E';
        break;
      case 'i':
        strArr[index] = 'I';
        break;
      case 'o':
        strArr[index] = 'O';
        break;
      case 'u':
        strArr[index] = 'U';
        break;
      case 'Z':
        strArr[index] = 'A';
      default:
        if (strArr[index] !== ' ') {
          strArr[index] = postLetter;
        }
    }
  })

  return strArr.join('');
}

console.log(lettersChanges('hello there'))