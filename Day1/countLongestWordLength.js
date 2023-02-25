{/* 
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/}
function findLongestWordLength(str) {
    let length = 0;
  let max = Number.MIN_SAFE_INTEGER;
  let tempLength = 0
  for(let i=0;i<str.length;i++)
  {
    if(str[i] !== " ")
    {
      tempLength++;
    }else{
        tempLength=0;
    }
      
        if(tempLength > max){
          max = tempLength;
        }
  }
  return max;
  
}
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");