document.addEventListener("DOMContentLoaded", () => {
  // Menu Button and Navigation Toggle
  const menuBtn = document.querySelector(".menu-btn");
  const navigation = document.querySelector(".navigation");
  
  menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
  });
  
const btns=document.querySelectorAll(".nav-btn");
const slides=document.querySelectorAll(".video-slide");
const contents=document.querySelectorAll(".content");


var sliderNav=function(manual){
    btns.forEach((btn)=>{
       btn.classList.remove("active");
    });
    slides.forEach((slide)=>{
        slide.classList.remove("active");
     });
     contents.forEach((content)=>{
        content.classList.remove("active");
     });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

}
btns.forEach((btn,i)=>{
    btn.addEventListener("click",()=>{
       sliderNav(i);
    });
});

  // Dropdown Toggle
  const selectBtn = document.getElementById('select-btn');
  const text = document.getElementById('text');
  const options = document.getElementsByClassName('option');
  
  selectBtn.addEventListener('click', function() {
      selectBtn.classList.toggle('active');
  });
  
  for (let option of options) {
      option.onclick = function() {
          text.innerHTML = this.textContent;
          selectBtn.classList.remove('active');
      };
  }

  dropdownButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      const url = event.target.getAttribute('data-url');
      if (url) {
        window.location.href = "Sign-up_page.html";  // Navigate to the URL specified in the data-url attribute
      }
    });
  });
  
  // Initialize Slick Carousel

});
$(document).ready(function(){
  $('.parent').slick({
    slidesToShow:3,
    slidesToScroll:1,
    dots:false,
    infinite:true,
    autoplay: true,
  autoplaySpeed: 500,
    responsive:[
        {
            breakpoint:1024,
            settings:{
                slidesToShow:1,
                dots:false,
            }
        },
        {
            breakpoint:768,
            settings:{
                slidesToShow:1,
                dots:false,
            }
        },
        
    ]
    
})

});
document.addEventListener("DOMContentLoaded", () => {
  const wheel = document.getElementById("wheel");
  const spinBtn = document.getElementById("spinBtn");
  const segments = document.querySelectorAll('.wheel .number');

  let currentRotation = 0;

  spinBtn.onclick = function() {
      const randomRotation = Math.ceil(Math.random() * 3600);
      currentRotation += randomRotation+1000;
      wheel.style.transform = `rotate(${currentRotation}deg)`;
  }

  segments.forEach(segment => {
      segment.addEventListener('click', () => {
          const url = segment.getAttribute('data-url');
          if (url) {
              window.location.href = url;
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide_page8");
  const indicatorImages = document.querySelectorAll(".slider-indicator img");

  indicatorImages.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
          indicatorImages.forEach(ind => ind.classList.remove("active"));
          indicator.classList.add("active");

          slides.forEach(slide => slide.classList.remove("active"));
          slides[index].classList.add("active");
      });
  });
});
// alert(window.innerWidth);