/* 'use strict' */


function BinarioADecimal(num) {
  // tu codigo aca 
  /* 
    1 0 1 num
    2 1 0 key
    //condicion solo elevar a la potencias los key con elemento 1
    2 2 2 base
    4 n 1 resultado de base**key
   */
 
  let nuevo = num.split("").reverse().reduce((ele,act,index)=>{
  return ele+=2**index*act
 },0)
 return nuevo
 
 
 
   /* let decimal = 0;
  let j=0;
  num = num.split("")
  for (i = num.length-1; i >= 0; i--) {
    if (num[i] == 1) {
      decimal += Math.pow(2,j)
    }
    j++
  }
  return decimal */
 /* 
    let decimal = 0
    num = num.split("").reverse()
    for(i = 0;i<num.length;i++){
      decimal+=2**i*num[i]
    }   
    return decimal  */
  //1101101=109 1011011=91 
  // reduce 3.514ms 
  // for con if 0.491ms  
}

console.log(BinarioADecimal("1011011"))


let binario = []

function DecimalABinario(num) {
  /* for (let i = num; num != 0; i = num) {
    binario.unshift(i % 2)
    num = Math.floor(num / 2)
  }
  console.log(binario.join("")) */
  // tu codigo aca 
  if (num != 0) {
    binario.unshift(num % 2)
    return DecimalABinario(Math.floor(num / 2))
  }
  return binario.join("")

//1101101=109 1011011=91
}
console.log(DecimalABinario(91))

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}
//23 / 2=11  23%2=1
//11/2 =5     11&2



/* var binario = [];
  for (let i = num; num != 0; i = num) {
    binario.unshift(i % 2)
    num = Math.floor(num / 2)
  }
  console.log(binario.join("")) */


/* let binario = [];
for(let i = num;num!=0;Math.floor(num/2)){

} */
/* {
  let binario = []
  while (num!= 0) {
    let cociente = num
    binario.unshift(cociente % 2)
    num = Math.floor(num / 2)
  }
  return binario.join("")
}  */
{
  let num = 012;

}