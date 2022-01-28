/* NAV FUNCTION Open when someone clicks ont the span elemenet */
function openNav () {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav () {
    document.getElementById("myNav").style.width = "0%";
}

/* WORKS SECTION TAB FUNCTION */

function openGD() {
    document.getElementById("graphicDesign").style.display = "block";
    document.getElementById("brandingDesign").style.display = "none";
}

function openBD() {
    document.getElementById("graphicDesign").style.display = "none";
    document.getElementById("brandingDesign").style.display = "grid";
}

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = 
    document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500);
}
