/*
$(document).ready(function(){

})
*/

$(document).ready(function () {
    var btn_login = $("#btn_login");
    var btn_register = $("#btn_register");
    var login_Modal = $("#login_Modal");
    var register_Modal = $("#register_Modal");
    var modalBg = $("#modalBg");
    btn_login.click(function () {
        login_Modal.fadeIn();
        login_Modal.animate({
            top: "5%",
            opacity: 100
        }, 200)
        modalBg.fadeIn();
    })
    btn_register.click(function () {
        register_Modal.fadeIn();
        register_Modal.animate({
            top: "2%",
            opacity: 100
        }, 200)
        modalBg.fadeIn();
    })
    $("#login_Modal .close").click(function () {
        login_Modal.animate({
            top: "3%",
            opacity: 0
        }, 200)
        login_Modal.fadeOut();
        modalBg.fadeOut();
    })
    $("#register_Modal .close").click(function () {
        register_Modal.animate({
            top: "0%",
            opacity: 0
        }, 200)
        register_Modal.fadeOut();
        modalBg.fadeOut();
    })

    modalBg.click(function () {
        $("#login_Modal .modal-dialog").addClass("redborder");
        let leftp = login_Modal.css("left").split("px")[0];

        login_Modal.animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })

        register_Modal.animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })
    })
})
$(document).ready(function () {
    
})
