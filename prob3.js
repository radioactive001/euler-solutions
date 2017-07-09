function primeFactor(){
 var num =  document.getElementById("inp3").value;


  while( num % 2 === 0)
 {
  num = num / 2;
 }



for(var i = 3; i <= Math.sqrt(num); i+= 2)
{
 while(num % i === 0)
 {
   num = num / i;
 }

}
document.getElementById("out3").value  = num ;
}
