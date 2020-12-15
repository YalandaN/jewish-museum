//faq js sourced from Mindy McAdams jsfiddle//
let answer = document.querySelectorAll('dd');
let question = document.querySelectorAll('dt');


function hideAll() {
  answer.forEach(function(el) {
    el.style.display = 'none';
  });
}

// hide all answers using function
hideAll();

question.forEach(function(el) {
  el.onclick = () => {
    if (el.nextSibling.nextSibling.style.display === 'none') {
      hideAll();
      el.nextSibling.nextSibling.style.display = 'block';
    } else {
      hideAll();
    }
  };
});

//code from jsfiddle: Image swap with pure JS. https://jsfiddle.net/macloo/t7zfxsd8/
const gardendiv = document.querySelector('#gardenimg');

let first = "images/garden.jpg";
let second = "images/garden-view.jpg";

gardendiv.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', second);
};

gardendiv.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', first);
};

const towerdiv = document.querySelector('#towerimg');

let third = "images/tower.jpg";
let fourth = "images/tower-light.jpg";

towerdiv.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', fourth);
};

towerdiv.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', third);
};

const memorydiv = document.querySelector('#memoryimg');

let fifth = "images/steel-faces.jpg";
let sixth = "images/memory-void.jpg";

memorydiv.onmouseenter = (e) => {
	// change image
   e.target.setAttribute('src', sixth);
};

memorydiv.onmouseleave = (e) => {
// change image
   e.target.setAttribute('src', fifth);
};



   let map = L.map('map').setView([52.504305, 13.389955], 15.27);

   L.tileLayer('https://api.mapbox.com/styles/v1/yalandan/ckil3qzxg1jkg17l92dp8v4i1/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoieWFsYW5kYW4iLCJhIjoiY2tpNWFpamgxMDAwMjJybXFkczJvMjEwZiJ9._uQpAVvfoICvw7woiZH8Og', {
       attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
       maxZoom: 18
   }).addTo(map);


   var marker = L.marker([52.507410,13.383820]).addTo(map);
    marker.bindPopup("Berlin Wall, Historical Landmark").openPopup();

    var marker1 = L.marker([52.502980, 13.396150]).addTo(map);
     marker1.bindPopup("Jewish Museum").openPopup();


     var slideIndex = 1;
     showSlides(slideIndex);

     // Next/previous controls
     function plusSlides(n) {
       showSlides(slideIndex += n);
     }

     // Thumbnail image controls
     function currentSlide(n) {
       showSlides(slideIndex = n);
     }

     function showSlides(n) {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       var dots = document.getElementsByClassName("dot");
       if (n > slides.length) {slideIndex = 1}
       if (n < 1) {slideIndex = slides.length}
       for (i = 0; i < slides.length; i++) {
           slides[i].style.display = "none";
       }
       for (i = 0; i < dots.length; i++) {
           dots[i].className = dots[i].className.replace(" active", "");
       }
       slides[slideIndex-1].style.display = "block";
       dots[slideIndex-1].className += " active";
     }
