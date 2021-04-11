function getCommonCharacterCount(s1, s2) {
  const count = 0;
  const arr2 = s2.split("");
  for(char of s1) {
    const indexArr2 = arr2.findIndex(s => s === char);
    if(indexArr2 >= 0) {
      count++;
      arr2.splice(indexArr2, 1);
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
