

ScrollReveal().reveal(".img-fluid, .desc, .sub-content, .form-group, .btn-primary", {
    delay: 500,
    duration: 4000
})

ScrollReveal().reveal(".container-title", {
    delay: 0,
    duration: 4000
})

ScrollReveal().reveal("#title-border", {
    duration: 1000
})

var lineExtend = function(id) {
    $(id).animate({
    width: "50%"
    }, 2000)
}

ScrollReveal().reveal("#title-border", {
    afterReveal: lineExtend
})

