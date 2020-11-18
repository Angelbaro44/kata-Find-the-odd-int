function findOdd(A) {
      for (let i = 0; i < A.length; i++){
        let list=A.sort().filter((x)=>x===A[i]);
        if (list.length%2===1) return list[0]; }
}