function getCommonCharacterCount(s1, s2) {
  let count = 0;
  const arr2 = str2.split("");
  for(char of str1) {
    let indexArr2 = arr2.findIndex(s => s === char);
    if(indexArr2 >= 0) {
      count++;
      console.log(arr2.splice(indexArr2, 1));
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
