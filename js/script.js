window.addEventListener("scroll", function () {
  const header = this.document.getElementById("header");

  if (this.window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
