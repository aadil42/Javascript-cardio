const reverseInt = (myInt) => {

if(Number.MAX_SAFE_INTEGER < myInt) return `too big of a number, try smaller number`;

let strInt = myInt.toString();
let container = "";

for(let i = strInt.length; i > 0; i-- ) {
container += strInt[i - 1];
}

return parseInt(container);
}

console.log(reverseInt(1234567891011121));

