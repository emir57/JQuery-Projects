
$(document).ready(function () {
    $("#btn_login").click(function () {
        $("#login_Modal").fadeIn();
        $("#login_Modal").animate({
            top:"5%",
            opacity:100
        },200)
        $("#modalBg").fadeIn();
    })
    $("#login_Modal .close").click(function(){
        $("#login_Modal").animate({
            top:"3%",
            opacity:0
        },200)
        $("#login_Modal").fadeOut();
        $("#modalBg").fadeOut();
    })
    $("#modalBg").click(function(){
        $("#login_Modal .modal-dialog").addClass("redborder");
        let leftp = $("#login_Modal").css("left").split("px")[0];
        $("#login_Modal").animate({
            left:"36%",
        },100).animate({
            left:"35%",
        },100,function(){
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })
    })
})