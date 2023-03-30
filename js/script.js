// Loading area function

document.onreadystatechange = function() {
  if (document.readyState !== "complete") {
      document.querySelector(
        "body").style.visibility = "hidden";
      document.querySelector(
        "#loading").style.visibility = "visible";
  } else {
      document.querySelector(
        "#loading").style.display = "none";
      document.querySelector(
        "body").style.visibility = "visible";
  }
};


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



