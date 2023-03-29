document.addEventListener('slide.bs.carousel', function(event){
    var activeSlide = event.to;
switch (activeSlide) {
    case 0:
    document.getElementById("place").textContent = 'TOKYO';
    break;
    case 1:
    document.getElementById("place").textContent = 'KYOTO';
    break;
    case 2:
    document.getElementById("place").textContent = 'OSAKA';
    break;
  }
});

