// RESPONSIVE SLIDESHOW SCRIPT


var rotate_delay = 3000; // delay in milliseconds (5000 = 5 secs)
current = 0;

function next() {
if (document.slideforma.slide[current+1]) {
document.images.show.src = document.slideforma.slide[current+1].value;
document.slideforma.slide.selectedIndex = ++current;
   }
else first();
}
function previous() {
if (current-1 >= 0) {
document.images.show.src = document.slideforma.slide[current-1].value;
document.slideforma.slide.selectedIndex = --current;
   }
else last();
}
function first() {
current = 0;
document.images.show.src = document.slideforma.slide[0].value;
document.slideforma.slide.selectedIndex = 0;
}
function last() {
current = document.slideforma.slide.length-1;
document.images.show.src = document.slideforma.slide[current].value;
document.slideforma.slide.selectedIndex = current;
}
function ap(text) {
document.slideforma.slidebutton.value = (text == "Stop") ? "AutoPlay" : "Stop";
rotate();
}
function change() {
current = document.slideforma.slide.selectedIndex;
document.images.show.src = document.slideforma.slide[current].value;
}
function rotate() {
if (document.slideforma.slidebutton.value == "Stop") {
current = (current == document.slideforma.slide.length-1) ? 0 : current+1;
document.images.show.src = document.slideforma.slide[current].value;
document.slideforma.slide.selectedIndex = current;
window.setTimeout("rotate()", rotate_delay);
   }
}
