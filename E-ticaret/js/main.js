
$(document).ready(function () {
    $("#btn_login").click(function () {
        $("#login_Modal").fadeIn();
        $("#login_Modal").animate({
            top:"5%",
            opacity:100
        },200)
        $("#login_ModalBg").fadeIn();
    })
    $("#login_Modal .close").click(function(){
        $("#login_Modal").animate({
            top:"3%",
            opacity:0
        },200)
        $("#login_Modal").fadeOut();
        $("#login_ModalBg").fadeOut();
    })
    $("#login_ModalBg").click(function(){
        $("#login_Modal .modal-dialog").addClass("redborder");
        $("#login_Modal").animate({
            left:"36%",
            top:"6%"
        },100).animate({
            left:"35%",
            top:"5%"
        },100,function(){
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })
    })
})