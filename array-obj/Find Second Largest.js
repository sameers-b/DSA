let arr =[9,6,3,0,10,0,7,4,7,8];


const findSecondLargest=(arr)=>{
  let firstLargest=-1;
  let secondLargest= -1;
  for(let i of arr){
    if(i>firstLargest){
      secondLargest=firstLargest;
      firstLargest=i;
    }else if(i<firstLargest&&i>secondLargest){
      secondLargest=i;
    }
  }
  return {firstLargest,secondLargest};
}