var current = 0;
var total = 4;

function next(){
    //Increment the current varaible by one
    //current = current + 1;
    //current += 1;
    current++;
    //if the current variable is greater than the number of slides, reset to zero
    if (current >= total) {
        current = 0;
    }
    // create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // display the selected slide
    slides[current].style.display = "block";

    console.log("next");
    console.log(current);
}
function previous(){
    //Increment the current varaible by one
    //current = current + 1;
    //current += 1;
    current--;
    //if the current variable is greater than the number of slides, reset to zero
    if (current < 0) {
        current = total - 1;
    }
    // create a reference to all the slide divs
    var slides = document.getElementsByClassName("slide");
    //loop through slides
    for (var i = 0; i < slides.length; i++) {
        slides[i].display = "none";
    }
    // display the selected slide
    slides[current].display = "block";

    console.log("next");
    console.log(current);
}