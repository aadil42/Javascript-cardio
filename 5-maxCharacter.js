const maxCharacter = (santance) => {

  const allCharArry = [];
  for (let i = 0; i < santance.length; i++) {

    for (let j = -1; j < allCharArry.length; j = j + 2) {
      if (allCharArry[j] === santance[i]) {
        allCharArry[j - 1]++;
        break;
      } else if (allCharArry.length === j + 1) {
        allCharArry.push(1);
        allCharArry.push(santance[i]);
        break;
      }
    }
  }

  let maxOccurance = 0;
  let maxOccuredChar;
  for (let i = 0; i < allCharArry.length; i = i + 2) {
    if (allCharArry[i] > maxOccurance) {
      maxOccurance = allCharArry[i];
      maxOccuredChar = allCharArry[i + 1];
    }
  }

  return maxOccuredChar;
}

// I admit it's complicated

// algo explained###############################

// first get a char from string and see if its exists in allCharArry if it doesn't push it, if it dose increment the 
// previous index value by 1 

// at last check if the most occured character from the allCharArry

console.log(maxCharacter('oooooefjdofjsdfjjo'));
