
/***NavBar***/
  window.onscroll = function() {scrollFunction()};
function scrollFunction() {

      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
      $("#navbar").fadeIn(200);
      document.getElementById("navbar").style.top = "0";
      }else{
      document.getElementById("navbar").style.top = "-188px";
      }

  
}

/***Top Carousel***/
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("wwaCarrPicture");
  var dots = document.getElementsByClassName("dotpag");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedotpag", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " activedotpag";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}