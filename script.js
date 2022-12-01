// to change the header's background color
const header = document.getElementsByTagName('header');

function changeBackgroundColor() {
  if (window.scrollY > 38) {
    header[0].classList.add('header-black');
  } else {
    header[0].classList.remove('header-black');
  }
}

window.addEventListener('scroll', changeBackgroundColor);

// for pop-up map image
const imgClicked = document.getElementsByClassName('img-clicked');
const imgSmall = document.querySelectorAll('.map img');

imgSmall.forEach((image) => {
  image.addEventListener('click', () => {
    imgClicked[0].classList.add('active');
    imgClicked[0].lastElementChild.src = image.src;
  });
});

const closeButton = document.querySelector('span');

function closeFunction() {
  imgClicked[0].classList.remove('active');
}

closeButton.addEventListener('click', closeFunction);

// link for nav bar menu
const menus = document.querySelectorAll('nav a');
menus.forEach((menu) => {
  menu.addEventListener('click', (e) => {
    e.preventDefault();
    const link = document.getElementById(menu.getAttribute('class'));
    link.scrollIntoView({
      behavior: 'smooth'
    });
  });
});
