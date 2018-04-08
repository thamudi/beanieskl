var i = 0;
var count = 0;
var body = document.querySelector('body');
var secret = [83, 75, 85, 76,76 ,76 , 65,78 ,84 ,69 ,82 ,78]
var audio = new Audio('ostara/sound/DethTone.mp3');

body.onkeydown = secret_keyword

function secret_keyword(e){
	if(secret[i]==e.which){
		i++;
	    if(i==12){

			body.onkeydown =function(e){

				if ( e.keyCode == 54 ) {

					if(count == 3){

						document.getElementById("overlay").style.display = "block";
						audio.play();
					}else{

						count +=1;	

					}
				}
			}
		}
	}else{

			i=0;
		
		}		
	}
audio.addEventListener('ended', function() {
    document.getElementById("overlay").style.display = "none";
    count = 0;
    i = 0;
}, false);