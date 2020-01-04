function bgchange(){
    var d=new Date();
    var ora=d.getHours();
    var x=Math.floor(Math.random()*256);
    var y=Math.floor(Math.random()*256);
    var z=Math.floor(Math.random()*256);
    var bgcol="rgba("+x+","+y+","+z+")";
    console.log(bgcol);
    console.log(ora);

    if(ora>=0 && ora<=8){
        document.body.style.background=bgcol;
    }
    else if(ora>8 && ora<=16){
        document.body.style.background="linear-gradient(120deg,#f76c6c,#8e44ad)";
    }
    else if(ora>16 && ora<=23){
        document.body.style.background="linear-gradient(120deg,#2F3357,#000000)";
    }
}

