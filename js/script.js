document.addEventListener('slide.bs.carousel', function(event){
    var activeSlide = event.to;

    if (activeSlide == 0) { 
        document.getElementById("place").textContent = 'TOKYO';
    }
    if (activeSlide == 1) { 
        document.getElementById("place").textContent = 'KYOTO';
    }
    if (activeSlide == 2) {
        document.getElementById("place").textContent = 'OSAKA';
    }
});
