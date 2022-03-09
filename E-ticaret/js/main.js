
$(document).ready(function () {
    let btn_login = $("#btn_login");
    let btn_register = $("#btn_register");
    let login_Modal = $("#login_Modal");
    let register_Modal = $("#register_Modal");
    let modalBg = $("#modalBg");
    btn_login.click(function () {
        login_Modal.fadeIn();
        login_Modal.animate({
            top:"5%",
            opacity:100
        },200)
        modalBg.fadeIn();
    })
    btn_register.click(function () {
        register_Modal.fadeIn();
        register_Modal.animate({
            top:"5%",
            opacity:100
        },200)
        modalBg.fadeIn();
    })
    $("#login_Modal .close").click(function(){
        login_Modal.animate({
            top:"3%",
            opacity:0
        },200)
        login_Modal.fadeOut();
        modalBg.fadeOut();
    })
    $("#register_Modal .close").click(function(){
        register_Modal.animate({
            top:"3%",
            opacity:0
        },200)
        register_Modal.fadeOut();
        modalBg.fadeOut();
    })
    modalBg.click(function(){
        $("#login_Modal .modal-dialog").addClass("redborder");
        let leftp = login_Modal.css("left").split("px")[0];
        login_Modal.animate({
            left:"36%",
        },100).animate({
            left:"35%",
        },100,function(){
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })
        register_Modal.animate({
            left:"36%",
        },100).animate({
            left:"35%",
        },100,function(){
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })
    })
})