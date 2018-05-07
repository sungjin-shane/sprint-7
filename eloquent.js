//1.Minimum Your code here.
function min (x,y) {
    if (x > y) return y;
    else return x;
  }
  
  console.log(min(0, 10));
  // → 0
  console.log(min(0, -10));
  // → -10


//2.Recursion Your code here.
// Your code here.
function isEven(x){
    if (x == 0) return true;
    if (x == 1) return false;
    if (x < 0) return isEven(-x);
    return isEven(x-2);
  }
  console.log(isEven(50));
  // → true
  console.log(isEven(75));
  // → false
  console.log(isEven(-1));
  // → ??

//3.Bean counting
  function countBs (cntStr) {
    var tmpStr = [];
    var cnt = 0;
    tmpStr = cntStr.split('');
    console.log (tmpStr);
    
    for (let i=0; i<cntStr.length; i++){
        if (tmpStr[i] == 'B') cnt++
    }
    
    return cnt;
  }
  
  function countChar(cntStr, cntChar){
    
    var tmpStr = [];
    var cnt = 0;
    tmpStr = cntStr.split('');
    console.log (tmpStr);
    
    for (let i=0; i<cntStr.length; i++){
        if (tmpStr[i] == cntChar) cnt++
    }
    
    return cnt;
  }
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("kakkerlak", "k"));
  // → 4