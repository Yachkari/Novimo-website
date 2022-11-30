let navLinks = document.getElementById('navLinks');

function showMenu() {
    navLinks.style.right = '0'
}
function hideMenu() {
    navLinks.style.right = '-200px'
}




document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click',function(e ){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView( {
            behavior : 'smooth'
        })
    })
        
    
})





let popup = document.getElementById('popup');


function openPopupOne() {
    popup.classList.add('open-popupOne')
}
function closePopup() {
    popup.classList.remove('open-popupOne')
}


function toggle(){
    let blur = document.getElementById('blur');
    blur.classList.toggle('active')
}



/*function openPopupOne(){
    dark.classList.add('dark')
}
function openPopupOne(){
    dark.classList.remove('dark')
}*/















  window.onload = (event) => {

      const imageContainerEl = document.querySelector('.image-container');

      const prevEl = document.getElementById("prev");
      const nextEl = document.getElementById("next");
      
      
      let x = 0;
      
      prevEl.addEventListener('click', ()=>{
          x = x + 45;
          updateGallery(imageContainerEl,x)
      });

      nextEl.addEventListener('click', ()=>{
          x = x - 45;
          updateGallery(imageContainerEl,x)
      });

    










    const buttons = document.querySelectorAll("[data-carousel-button]")

    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]")
    
        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0
    
        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
      })
    })































    
  };





function updateGallery(img,x){
    img.style.transform = `perspective(1000px) rotateY(${x}deg)`
}




var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length ) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}






















































const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

























/*var zlideIndex = 1;
showZlides(zlideIndex);

function pluszlides(n) {
  showZlides(zlideIndex += n);
}

function currentZlide(n) {
  showZlides(zlideIndex = n);
}

function showZlides(n) {
  var i;
  var zlides = document.getElementsByClassName("myZlides");
  var dots = document.getElementsByClassName("dot");
  if (n > zlides.length ) {zlideIndex = 1}
    if (n < 1) {zlideIndex = zlides.length }
    for (i = 0; i < zlides.length; i++) {
      zlides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  zlides[zlideIndex-1].style.display = "block";
  dots[zlideIndex-1].className += " active";
}*/