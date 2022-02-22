// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();

//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });
$(document).ready(function(){
    var autoComplete=[
        "ActionScript",
        "AppleScript",
        "Asp",
        "Ajax",
        "BASIC",
        "Bootstrap",
        "C",
        "C++",
        "Clojure",
        "Cobol",
        "ColdFusion",
        "Css3",
        "Html5",
        "Java",
        "JavaScript",
        "Jquery",
        "PHP",
        "Python"
    ]
    $("#tags").autocomplete({
        source:autoComplete
    });
})
$(document).ready(function(){
    var btn_login = $("#btn_login");
    btn_login.click(function(){
        $("#myUye").modal();
    })
})
// Form validation
//#email
//#phone
//#password
$(document).ready(function(){
    var phone_msg,email_msg,password_msg;
    phone_msg = $("#phone_message");
    email_msg = $("#email_message");
    password_msg = $("#password_message");
    $("#btn_submit").click(function(){
        phone_msg.empty();
        email_msg.empty();
        password_msg.empty();
        var email,phone,password;
        email = $("#email").val();
        phone = $("#phone").val();
        password = $("#password").val();
        if(email==""){
            email_msg.html("Email boş olamaz");
        }
        if(phone == ""){
            phone_msg.html("Telefon numarası boş olamaz");
        }
        if(password==""){
            password_msg.html("Şifre boş olamaz");
        }
    })
})