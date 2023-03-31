// Loading area function
document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#loading").style.visibility = "visible";
  } else {
    var images = document.querySelectorAll('.carousel-item');
    var imagesLoaded = 0;

    // Check if all images are loaded
    var checkImagesLoaded = function() {
      if (imagesLoaded === images.length) {
        document.querySelector("#loading").style.visibility = "hidden";
        document.querySelector("body").style.visibility = "visible";
      }
    };

    // Loop through images and wait for each to load
    for (var i = 0; i < images.length; i++) {
      var image = new Image();
      image.onload = function() {
        imagesLoaded++;
        checkImagesLoaded();
      };
      image.src = images[i].getAttribute('data-bgimage');
    }
  }
};



document.addEventListener('slide.bs.carousel', function(event){
    var activeSlide = event.to;
switch (activeSlide) {
    case 0:
    document.getElementById("place").textContent = 'TOKYO';
    document.getElementById("jpplace").textContent = '東京 (とうきょう)';
    break;
    case 1:
    document.getElementById("place").textContent = 'KYOTO';
    document.getElementById("jpplace").textContent = '京都 (きょうと)';
    break;
    case 2:
    document.getElementById("place").textContent = 'OSAKA';
    document.getElementById("jpplace").textContent = '大阪 (おおさか)';
    break;
  }
});



