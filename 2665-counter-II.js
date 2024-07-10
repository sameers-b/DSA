/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initialVal=init;
    return {
      increment:()=>  init+=1,
      decrement:()=>{
        if(init==0)
        return 0;
      else{
       return init-=1;
      }},
      reset:()=>init=initialVal
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */