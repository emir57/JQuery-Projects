/*
$(document).ready(function(){

})
*/
/* Variables */
$(document).ready(function () {
    var btn_login = $("#btn_login")
    var btn_register = $("#btn_register")
    var btn_cart = $("#btn_cart")
    var btn_forgotpassword = $("#btn_forgotpassword")

    var login_Modal = $("#login_Modal")
    var cart_Modal = $("#cart_Modal")
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


})
/*Forgot password Modal*/
$(document).ready(function () {

    $("#btn_forgotpassword").click(function () {
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


})
/*Cart Modal*/
$(document).ready(function () {
    $("#btn_cart").click(function () {
        $("#cart_Modal").fadeIn();
        $("#cart_Modal").animate({
            top: "5%",
            opacity: 100
        }, 200)
        $("#modalBg").fadeIn();
    })
    $("#cart_Modal .close").click(function () {
        $("#cart_Modal").animate({
            top: "3%",
            opacity: 0
        }, 200)
        $("#cart_Modal").fadeOut();
        $("#modalBg").fadeOut();
    })
})

/* Modal Bg Click */
$(document).ready(function () {
    $("#modalBg").click(function () {
        $("#login_Modal .modal-dialog").addClass("redborder");
        $("#register_Modal .modal-dialog").addClass("redborder");
        $("#forgotPassword_Modal .modal-dialog").addClass("redborder");
        $("#cart_Modal .modal-dialog").addClass("redborder");

        $("#login_Modal").animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#login_Modal .modal-dialog").removeClass("redborder");
        })

        $("#register_Modal").animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#register_Modal .modal-dialog").removeClass("redborder");
        })

        $("#forgotPassword_Modal").animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#forgotPassword_Modal .modal-dialog").removeClass("redborder");
        })

        $("#cart_Modal").animate({
            left: "36%",
        }, 100).animate({
            left: "35%",
        }, 100, function () {
            $("#cart_Modal .modal-dialog").removeClass("redborder");
        })
    })
})

/*Scroll To Top*/
$(document).ready(function () {
    $(window).scroll(function () {
        // console.log($(this).scrollTop())
        if ($(this).scrollTop() > 600) {
            $("#backTopButton").fadeIn();
        }
        else {
            $("#backTopButton").fadeOut();
        }
    })
    $("#backTopButton").click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1000)
    })

})

/* Register Modal Validation */
$(document).ready(function () {
    let firstname = $("#register_Modal form #firstname");
    let lastname = $("#register_Modal form #lastname");
    let email = $("#register_Modal form #email");
    let password = $("#register_Modal form #password");

    let firstnameError = $("#register_Modal form #firstnameError");
    let lastnameError = $("#register_Modal form #lastnameError");
    let emailError = $("#register_Modal form #emailError");
    let passwordError = $("#register_Modal form #passwordError");
    $("#register_Modal form").submit(function () {
        firstnameError.html("");
        lastnameError.html("");
        emailError.html("");
        passwordError.html("");
        let isSuccess = true;
        if (firstname.val().trim().length == 0) {
            isSuccess = false;
            firstnameError.html("Ad boş olamaz");
        }
        if (lastname.val().trim().length == 0) {
            isSuccess = false;
            lastnameError.html("Soyad boş olamaz");
        }
        if (email.val().trim().length == 0) {
            isSuccess = false;
            emailError.html("Email boş olamaz");
        }
        if (password.val().trim().length == 0) {
            console.log(password.val());
            isSuccess = false;
            passwordError.html("Şifre boş olamaz");
        }
        if (!ValidateEmail(email.val())) {
            isSuccess = false;
            emailError.html("Geçersiz Email");
        }
        return isSuccess;
    })

    function ValidateEmail(email) {
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email);
    }
    function ValidatePassword(password) {

    }
})

