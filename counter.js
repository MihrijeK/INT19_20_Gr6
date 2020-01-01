function resetCount()
{
  localStorage.clickcount=0;
}
function clickCounter()
{
if(typeof(Storage)!=="undefined")
{
    if (localStorage.clickcount)
    {
    localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
  else
    {
    localStorage.clickcount=1;
    }
  document.getElementById("result").innerHTML="Numri i librave ne shporte: " + localStorage.clickcount;
  }
else
  {
  document.getElementById("result").innerHTML="Sorry, your browser does not support web storage...";
  }
}
function paid()
{
  document.getElementById("pay").innerHTML="PAID!";
}
function teksti(){
  document.getElementById("result").innerHTML="Numri i librave në shporte:"+localStorage.clickcount;
}
