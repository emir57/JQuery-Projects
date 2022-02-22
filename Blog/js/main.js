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
    
})