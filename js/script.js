// Show the button when scrolling down
window.onscroll = function () {
  let btn = document.getElementById("scrollBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll back to the top
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}