var newsView = '<webview id="content" class="newsView" src="https://library.ucsc.edu/news"></webview>';
var wayfinderView = '<webview id="content" class="wayfinderView" src="https://webspace2.library.ucsc.edu/bryn/kiosk/content/wayfinder.html"></webview>';
var roomsView = '<webview id="content" class="roomsView" src="https://guides.library.ucsc.edu/reserve-a-study-room"></webview>';
var donorsView = '<webview id="content" class="donorsView" src="https://webspace2.library.ucsc.edu/bryn/kiosk/content/donors.html"></webview>';
var mapsView = '<webview id="content" class="mapsView" src="http://maps.ucsc.edu/"></webview>';
var directoryView = '<webview id="content" class="directoryView" src="https://campusdirectory.ucsc.edu/"></webview>';
var feedbackView = '<webview id="content" class="feedbackView" src="https://library.ucsc.edu/kiosk-feedback"></webview>';

var idleTime = 0;
		
function timerIncrement() {
    idleTime = idleTime + 1;
    if (idleTime > 2 && !$( "#content" ).hasClass( "newsView" )) { // 20 seconds
        $( "#content" ).replaceWith( newsView );
    }
}

$(document).ready(function(){
	
    //Increment the idle time counter every minute.
    var idleInterval = setInterval(timerIncrement, 40000); 

    //Zero the idle timer on mouse movement.
    $(this).mousemove(function (e) {
        idleTime = 0;
    });
    $(this).keypress(function (e) {
        idleTime = 0;
    });
	
	$( ".news" ).click(function() {
  		$( "#content" ).replaceWith( newsView );
	});
	$( ".wayfinder" ).click(function() {
  		$( "#content" ).replaceWith( wayfinderView );
	});
	$( ".rooms" ).click(function() {
  		$( "#content" ).replaceWith( roomsView );
	});
	$( ".donors" ).click(function() {
  		$( "#content" ).replaceWith( donorsView );
	});
	$( ".maps" ).click(function() {
  		$( "#content" ).replaceWith( mapsView );
	});
	$( ".directory" ).click(function() {
  		$( "#content" ).replaceWith( directoryView );
	});
	$( ".feedback" ).click(function() {
  		$( "#content" ).replaceWith( feedbackView );
	});
});
