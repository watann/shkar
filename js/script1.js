
const initSlider=()=> {
    const imageList = document.querySelector(".slider-wrapper1 .image-list1");
     const slideButtons = document.querySelectorAll(".slider-wrapper1 .slide-button1");
      const sliderScrollbar = document.querySelector(".container1 .slider-scrollbar1");
      const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thump1");
     const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

scrollbarThumb.addEventListener("mousedown", (e) => {
  const startX =   e.clientX;
  const thumbPosition = scrollbarThumb.offsetLeft;

  const handleMouseMove = (e) => {
    const deltaX = e.clientX - startX;
    const newThumbPosition = thumbPosition + deltaX;
    const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

const boundedPosition = Math.max(0,Math.min(maxThumbPosition , newThumbPosition ));
const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

    scrollbarThumb.style.left = `${boundedPosition}px`;
    imageList.scrollLeft = scrollPosition;
  }

  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
  document.removeEventListener("mouseup", handleMouseUp)
  }

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseup", handleMouseUp);

});


    slideButtons.forEach(button => {
        button.addEventListener("click",()=> {
           const direction = button.id === "prev-slide"? -1 : 1 ;
           const scrollAmount = imageList.clientWidth * direction;
           imageList.scrollBy({ left: scrollAmount, behavior: "smooth"});
        })
    })
const handleSlideButtons = () => {
    slideButtons[0].style.display = imageList.scrollLeft <= 0? "none" : "block";
    slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
}

const updateScrollThumbPosition = () => {
    const scrollPosition = imageList.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
    scrollbarThumb.style.left = `${thumbPosition}px`;
}
imageList.addEventListener("scroll", () => {
    handleSlideButtons();
    updateScrollThumbPosition();
});

};




window.addEventListener("load",initSlider);
