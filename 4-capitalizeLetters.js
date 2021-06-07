const capitalizeLetters = (santance) => {

let modifiedSantance = santance.split("");
modifiedSantance[0] = modifiedSantance[0].toUpperCase();

modifiedSantance.forEach((element, index) => {
  if(santance.charCodeAt(index) === 32) modifiedSantance[index + 1] = modifiedSantance[index + 1].toUpperCase();
})

return modifiedSantance.join("");
}

console.log(capitalizeLetters("hello world this is aadil speaking"));
