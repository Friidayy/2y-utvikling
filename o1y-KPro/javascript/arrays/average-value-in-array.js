const tall =[]

function init() {
for (let i=-10; i<=10; i++) {
    let etTall = Math.floor(Math.random()*100)
    if (Math.random() < 0.5) {
        etTall = etTall*(-1)
    }
    tall.push(etTall)
}
}

init()
console.log(tall)

const arr = [-15,  92, -7,  22, -59, 66,  44,
    85,  55, 42,  42, -87, 90, -41,
   -46, -64, 43, -95,  58, 28,  63];
const specialAverage = (arr = []) => {
   const { length } = arr;
   if(length <= 2){
      return 0;
   };
   const { sum, min, max } = arr.reduce((acc, val) => {
      let { min, max, sum } = acc;
      sum += val;
      if(val > max){
         max = val;
      };
      if(val < min){
         min = val;
      };
      return { min, max, sum };
   }, {
      min: Number.MAX_VALUE,
      max: Number.MIN_VALUE,
      sum: 0
   });
   return (sum - min - max) / (length - 2);
};
console.log(specialAverage(arr));
