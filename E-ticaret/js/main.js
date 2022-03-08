
$(document).ready(function () {
    $("#btn_login").click(function () {
        console.log("a")
        $("#login_Modal").fadeIn();
        $("#login_ModalBg").fadeIn();
    })
    $("#login_Modal .close").click(function(){
        $("#login_Modal").fadeOut();
        $("#login_ModalBg").fadeOut();
    })
    $("#login_ModalBg").click(function(){
        $("#login_Modal").animate({
            left:"36%",
            top:"6%"
        },100).animate({
            left:"35%",
            top:"5%"
        },100)
    })
})