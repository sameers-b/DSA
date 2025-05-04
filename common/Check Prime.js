const checkPrimeOrNot=(num)=>{
  if (num < 2) return false;
  for(let i=2;i<=num/2;i++){
    if(num%i===0) return false;  
  }
  return true;
}

const findAllPrimeNumber=(start,end)=>{
  let list=[]
  for(let i=start;i<=end;i++){
    if(checkPrimeOrNot(i))list.push(i)
  }
  return list
}