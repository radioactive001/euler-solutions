function evenSum(){
var result = 0;
var limit = document.getElementById("inp2").value;
var a=0;var b=1;var c=0;


while(a+b<= limit)
{

  c = a + b;

  a = b;
  b = c;

   if(b % 2 === 0)
  {

    result = result + b;
  }

}
document.getElementById("out2").value = result;
}
