const header = document.getElementById('header');
const menu_icon = document.getElementById("menu_icon");
const close_icon = document.getElementById("close_icon");
const mobile_nav = document.getElementById("mobile_nav");

const bgDisabled = document.getElementById("bg_disabled");

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});

function openMobileNav(){
  mobile_nav.style.transform = "translateY(0)";
  mobile_nav.style.opacity = 1;
  header.classList.add("scrolled");
}
function closeMobileNav(){
  mobile_nav.style.transform = "translateY(-100vh)";
  mobile_nav.style.opacity = 0;
  header.classList.remove("scrolled");
}

function openBgDisabled(){
  bgDisabled.style.display = "block";
  bgDisabled.style.opacity = "1";
  document.body.style.overflow = "hidden";
}
function closeBgDisabled(){
  bgDisabled.style.display = "none";
  bgDisabled.style.opacity = "0";
  document.body.style.overflow = "auto";
}

bgDisabled.addEventListener('click' , ()=> {
  closeBgDisabled();
  closeMobileNav();
  toggleMenuIcons();
});


function toggleMenuIcons() {
  if (getComputedStyle(menu_icon).display == "block") {
    menu_icon.style.display = "none";
    close_icon.style.display = "block";
    openMobileNav();
    openBgDisabled();
  }else{
    menu_icon.style.display = "block";
    close_icon.style.display = "none";
    closeMobileNav();
    closeBgDisabled();
  }
}
menu_icon.addEventListener('click', toggleMenuIcons);
close_icon.addEventListener('click', toggleMenuIcons);