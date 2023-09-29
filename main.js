/* Picture Carousel========================================================================================================================================================= */
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}
/* Responsive Navbar======================================================================================================================================================== */
/* The code below returns an array. we want the first element as there is only one*/
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

/* the code below, whenever the toggleButton is clicked, we run a function => that toggles the 'active' class for navbarLinks */
toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
