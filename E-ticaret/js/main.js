/*
$(document).ready(function(){

})
*/
/* Variables */
$(document).ready(function () {
    var btn_login = $("#btn_login")
    var btn_register = $("#btn_register")
    var forgotPasswordBtn = $("#forgotPasswordBtn")
    var login_Modal = $("#login_Modal")
    var register_Modal = $("#register_Modal")
    var forgotPassword_Modal = $("#forgotPassword_Modal")
    var modalBg = $("#modalBg")
})
/*Login Modal*/
$(document).ready(function () {
    $("#btn_login").click(function () {
        $("#login_Modal").fadeIn();
        $("#login_Modal").animate({
            top: "5%",
            opacity: 100
        }, 200)
        $("#modalBg").fadeIn();
    })
    $("#login_Modal .close").click(function () {
        $("#login_Modal").animate({
            top: "3%",
            opacity: 0
        }, 200)
        $("#login_Modal").fadeOut();
        $("#modalBg").fadeOut();
    })
    $("#login_Modal").animate({
        left: "36%",
    }, 100).animate({
        left: "35%",
    }, 100, function () {
        $("#login_Modal .modal-dialog").removeClass("redborder");
    })
})
/*Register Modal*/
$(document).ready(function () {

    $("#btn_register").click(function () {
        $("#register_Modal").fadeIn();
        $("#register_Modal").animate({
            top: "2%",
            opacity: 100
        }, 200)
        $("#modalBg").fadeIn();
    })

    $("#register_Modal .close").click(function () {
        $("#register_Modal").animate({
            top: "1%",
            opacity: 0
        }, 200)
        $("#register_Modal").fadeOut();
        $("#modalBg").fadeOut();
    })

    $("#register_Modal").animate({
        left: "36%",
    }, 100).animate({
        left: "35%",
    }, 100, function () {
        $("#register_Modal .modal-dialog").removeClass("redborder");
    })
})
/*Forgot password Modal*/
$(document).ready(function () {

    $("#forgotPasswordBtn").click(function () {
        $("#login_Modal").animate({
            top: "3%",
            opacity: 0
        }, 200)
        $("#login_Modal").fadeOut();
        $("#forgotPassword_Modal").fadeIn();
        $("#forgotPassword_Modal").animate({
            top: "5%",
            opacity: 100
        }, 200)
        $("#modalBg").fadeIn();
    })

    $("#forgotPassword_Modal .close").click(function () {
        $("#forgotPassword_Modal").animate({
            top: "3%",
            opacity: 0
        }, 200)
        $("#forgotPassword_Modal").fadeOut();
        $("#modalBg").fadeOut();
    })

    $("#forgotPassword_Modal").animate({
        left: "36%",
    }, 100).animate({
        left: "35%",
    }, 100, function () {
        $("#forgotPassword_Modal .modal-dialog").removeClass("redborder");
    })
})
/*Cart Modal*/
$(document).ready(function () {

})

/* Modal Bg Click */
$(document).ready(function () {
    $("#modalBg").click(function () {
        $("#login_Modal .modal-dialog").addClass("redborder");
        $("#register_Modal .modal-dialog").addClass("redborder");
        $("#forgotPassword_Modal .modal-dialog").addClass("redborder");
        
    })
})
