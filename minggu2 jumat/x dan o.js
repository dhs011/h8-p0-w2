  function xo(str) {
   if (str.split('o').length-1 !== str.split('x').length-1) {
    return false;
    } else {
    return true;
    }
  }
  
  // TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true