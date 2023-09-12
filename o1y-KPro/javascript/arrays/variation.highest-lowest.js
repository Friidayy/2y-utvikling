const tall = [-93, 87];
const difference = (tall = []) => {
   const highest = Math.max(...tall);
   const lowest = Math.min(...tall);
   return highest - lowest;
};
console.log(difference(tall));