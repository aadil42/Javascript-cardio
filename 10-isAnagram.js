const isAnagram = (str1, str2) => {

  str1 = str1.replace(/\!|\@|\#|\$|\%|\^|\&|\*|\(|\)| /g, '');
  str2 = str2.replace(/\!|\@|\#|\$|\%|\^|\&|\*|\(|\)| /g, '');

  let tempStr = '';
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        tempStr += str2[j];
        break;
      }
    }
  }

  if (str1 === tempStr && str1.length === str2.length) {
    return true;
  } else {
    return false
  }
}


const siplerIsAnagram = (str1, str2) => {
  return formateStr(str1) === formateStr(str2);
}

const formateStr = (str) => {

  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

// console.log(siplerIsAnagram('aadil', 'diala'));
// console.log(isAnagram('below', 'below'));


// below below