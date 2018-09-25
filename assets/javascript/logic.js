

ScrollReveal().reveal(".img-fluid, .desc, .sub-content, .form-group, .btn-primary", {
    delay: 500,
    duration: 2000
})

ScrollReveal().reveal(".container-title", {
    delay: 0,
    duration: 2000
})

ScrollReveal().reveal("#title-border", {
    duration: 1000
})

var lineExtend = function(id) {
    $(id).animate({
    width: "50%"
    }, 2800)
}

var lineExtendmob = function(id) {
    $(id).animate({
    width: "100%"
    }, 2800)
}

if ( window.innerHeight > window.innerWidth ) {

    ScrollReveal().reveal("#title-border", {
        afterReveal: lineExtendmob
    })

} else {

    ScrollReveal().reveal("#title-border", {
        afterReveal: lineExtend
    })
}



