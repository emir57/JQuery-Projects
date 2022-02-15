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
        autoOpen: false
    });
    $("#dialogButton").click(function () {
        $("#dialog").dialog("open");
    });
})
$(function () {
    var autoComplete = [
        "Angular",
        "Ajax",
        "Css3",
        "C#",
        "Electron",
        "Html5",
        "Ionic",
        "Javascript",
        "JQuery",
        "Java",
        "React",
    ]
    $("#tags").autocomplete({
        source: autoComplete
    });
})