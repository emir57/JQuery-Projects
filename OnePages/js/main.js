$(document).ready(function () {
    $("#accordion").accordion();
})
$(function () {
    $("#tabs").tabs();
})
$(function () {
    $("#resizable").resizable();
})
$(function () {
    $("#dialog").hide();
    $("#dialogButton").click(function(){
        $("#dialog").dialog();
    });
})
