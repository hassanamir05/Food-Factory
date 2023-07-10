// Wait for the window to load
window.addEventListener("load", function () {
  // Hide the preloader
  var preloader = document.querySelector(".preloader");
  preloader.style.opacity = 0;
  preloader.style.visibility = "hidden";

  // Show the content
  var content = document.querySelector(".content");
  content.style.opacity = 1;
  content.style.visibility = "visible";
});
