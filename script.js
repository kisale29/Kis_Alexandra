var slideIndex = 0;

  function startSlideShow() {
    var slideshowTitle = document.getElementById('slideshow-title');
    var slideshowContainer = document.getElementById('slideshow-container');
    slideshowTitle.removeEventListener('dblclick', startSlideShow); 
    slideshowTitle.innerHTML = "Monitorizare resurse";
    showSlides(); 
  }

  function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1;
    }    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 3000); 
  }
document.getElementById('slideshow-title').addEventListener('dblclick', startSlideShow);
