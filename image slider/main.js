slides = document.querySelectorAll(".slide")
var counter = 0;
// console.log(slides)
slides.forEach((slide, index) => {
    slide.style.top = `${
        index * 100
    }%`
})

goPrev = () => {
    counter--
    slideImage()
}

goNext = () => {
    counter++
    slideImage()
}

slideImage = () => {
    slides.forEach((slide) => {
        slide.style.transform = `translateY(-${
            counter * 100
        }%)`
    })
}
