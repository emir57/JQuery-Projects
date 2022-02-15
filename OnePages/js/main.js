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
    $("#dialog").dialog({
        autoOpen:false
    });
    $("#dialogButton").click(function(){
        $("#dialog").dialog("open");
    });
})
