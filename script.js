const header = document.getElementsByTagName("header");

function changeBackgroundColor() {
  if (window.scrollY > 38) {
    header[0].classList.add("header-black");
  } else {
    header[0].classList.remove("header-black");
  }
}

window.addEventListener("scroll", changeBackgroundColor);
