
const longAssWord = (santance) => {

  let longestWord;
  let longestWordLen = 0;
  santance.split(' ').forEach((word, index) => {

    if (word.length > longestWordLen) {
      longestWord = word;
      longestWordLen = word.length;
    }
  })

  return longestWord;
}

console.log(longAssWord('hey my name is aadil and my sername is unfortunatly kelawala'));

