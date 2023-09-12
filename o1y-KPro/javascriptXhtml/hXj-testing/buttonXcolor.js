$("button").keydown(function(e) {
    // Sets the color when the key is down...
    if(e.which === 13) {
    	$(this).css("background-color", "red");
    }
});
$("button").keyup(function() {
    // Removes the color when any key is lifted...
    $(this).css("background-color", "");
});