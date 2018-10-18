$(document).ready( function() {
    $(".thankYou").fadeOut(0)
})

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

//This is the firebase section

 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyDcxBNuS4YiXb8oTasQO5SbTGaNNzahGj8",
    authDomain: "kr-portfolio-4775e.firebaseapp.com",
    databaseURL: "https://kr-portfolio-4775e.firebaseio.com",
    projectId: "kr-portfolio-4775e",
    storageBucket: "kr-portfolio-4775e.appspot.com",
    messagingSenderId: "410469895355"
};

firebase.initializeApp(config);

var database = firebase.database()

$("#contactSubmit").click( function() {

    event.preventDefault()

    var name = $("#inputName").val().trim(),
        email = $("#inputEmail").val().trim(),
        message= $("#textArea").val().trim()

    database.ref("users/" + name).set({
        name: name,
        email: email,
        message: message
    })

    $(".contactForm").fadeOut(2000)
    $(".thankYou").delay(2000).fadeIn(2000)
})




