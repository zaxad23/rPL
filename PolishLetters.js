/*
 * (C) 2015 Adam Skorupski
 * License: MIT License
*/

/*
 * Polskie ogonki: ęółąńśćżź
 * Normalne znaki: eolansczz
 *
*/

String.prototype.replacePolishLetters = function(){
   var result=this; // schowek
   
   // zamiana 
   
   result=result.replace(/ę/g,"e");
   result=result.replace(/ó/g,"o");
   result=result.replace(/ł/g,"l");
   result=result.replace(/ą/g,"a");
   result=result.replace(/ń/g,"n");
   result=result.replace(/ś/g,"s");
   result=result.replace(/ć/g,"c");
   result=result.replace(/ż/g,"z");
   result=result.replace(/ź/g,"z");
   
   return result; //zwrócenie
}
