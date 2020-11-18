function findOdd(A) {
      for (let i = 0; i < A.length; i++){
        let list=A.sort().filter((x)=>x===A[i]);
        if (list.length%2===1) return list[0]; }
}


// Test Cases
console.log(
findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]),  //Expected Results 5
findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]),  //Expected Results -1
findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]),  //Expected Results 5
findOdd([1,1,1,1,1,1,10,1,1,1,1]),  //Expected Results 10
findOdd([5,4,3,2,1,5,4,3,2,10,10]),  //Expected Results 1
findOdd([10])  //Expected Results 10
)