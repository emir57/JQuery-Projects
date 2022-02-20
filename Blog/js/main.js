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