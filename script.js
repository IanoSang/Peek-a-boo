// var globalString = "This is a global variable";
//
// function sampleFunction() {
//     alert(globalString);
//     globalString = "This is a global variable update!!";
//     alert(globalString);
// }
//
// alert(globalString);
// sampleFunction();
// alert(globalString);
$(document).ready(function() {

    $("div#click-one").click(function(event) {
        alert(whatToSay);
         whatToSay = "Hello!";
    });

    $("div#click-two").click(function(event) {
        alert(whatToSay);
    });
    $(".clickable").click(function() {
        $("#walrus-showing").toggle();
        $("#walrus-hidden").toggle();
    });
    $("#dark").click(function() {
        $("body").removeClass();
        $("body").addClass("dark-mode");
    });
    $("#light").click(function() {
        $("body").removeClass();
        $("body").addClass("light-mode");
        // $(".dark-mode").hidden();
    });
    $("#yellow").click(function(){
        $("body").removeClass();
        $("body").addClass("yellow");
        // $("body").hidden("yellow");
        alert(whatToSay);
    });
});
