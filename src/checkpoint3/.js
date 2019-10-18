var x=0;
var lv=1;
function oncl(){
   x+=lv;
   textUpdate();
    
}
function textUpdate(){
    document.getElementById("p").innerHTML=x+" points";
    
};
function upgrade(){
   switch (lv) {
      case 1:
      if (x>=100){
         lv++;
         x-=100;   document.getElementById("u").innerHTML= "Upgrade for 200";
      }
      break;
      case 2:
      if (x>=200){
         lv=4;
         x-=200;   document.getElementById("u").innerHTML= "Upgrade for 500";
       
   }
   break;
   case 4:
   
if (x>=100){
         lv=8;
         x-=500;   document.getElementById("u").innerHTML= "Fully Upgraded";
}
break;
}
}

