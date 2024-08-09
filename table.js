// function table(num,multiplyBy=1){
//   console.log(num*multiplyBy);
//   if(multiplyBy!=10)
//     table(num,(multiplyBy+1))
//   return;
// }

// function table(num){
//   let multiplyBy=1
//   const innerFun=(num=num)=>{
//     console.log(num*multiplyBy);
//   if(multiplyBy!=10){
//     multiplyBy+=1
//     innerFun(num)
//     return;
//   }
//   }
//   innerFun(num)
// }

// table(2)

function table(rep){
    if(rep!=0){
      table(rep-1)
      console.log(2*rep);
    }
    return;
  }
  
  table(10)
  
  