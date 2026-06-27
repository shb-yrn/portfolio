const loading = document.getElementById("loading");

const header = document.getElementById('header');
const menu_icon = document.getElementById("menu_icon");
const close_icon = document.getElementById("close_icon");
const mobile_nav = document.getElementById("mobile_nav_container");

const bgDisabled = document.getElementById("bg_disabled");

window.addEventListener("load" , ()=> {
  loading.style.transform = "translateY(-100vh)";
  setTimeout(() => {
    loading.style.display = "none";
  }, 550);
});

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
  header.classList.toggle('scrolled', window.scrollY > 20);
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
    menu_icon.classList.toggle("invisible_icon");
    close_icon.classList.toggle("visible_icon");
    openMobileNav();
    openBgDisabled();
  }else{
    menu_icon.classList.toggle("invisible_icon");
    close_icon.classList.toggle("visible_icon");
    closeMobileNav();
    closeBgDisabled();
  }
}
menu_icon.addEventListener('click', toggleMenuIcons);
close_icon.addEventListener('click', toggleMenuIcons);


const overlay = document.getElementById('modalOverlay');
const modalPlatform = document.getElementById('modalPlatform');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const credLinks = document.querySelectorAll(".cred_link");
const modalClose = document.getElementById('modalClose');

const cer_infos = [
  {
    title: "React.js: Building an Interface",
    platform: "دانشگاهی",
    year: "ژانویهٔ ۲۰۲۳",
    desc: "آموزش ساخت رابط کاربری با React.js، شامل کامپوننت‌بندی، مدیریت state و الگوهای رایج توسعه فرانت‌اند.",
    url: "https://www.linkedin.com/learning/certificates/81f6d44bdc2a1fa511f4215411fa46ed516bf2fbdd5abf78f3c8cf4f0c3fdac5"
  },
  {
    title: "React.js Essential Training",
    platform: "فنی",
    year: "1405",
    desc: "آشنایی با مفاهیم پایه React.js و اصول طراحی کامپوننت‌محور برای توسعه اپلیکیشن‌های وب.",
    url: "https://www.linkedin.com/learning/certificates/b00ad03571b05eac2cb85d033dbc5f348d44f53f462db1af710bf6b91c519ead"
  },
  {
    title: "ASP.NET Core with Angular 6",
    platform: "بین المللی",
    year: "1405",
    desc: "ترکیب بک‌اند ASP.NET Core با فرانت‌اند Angular 6 برای ساخت اپلیکیشن‌های full-stack مدرن.",
    url: "https://toplearn.com/Certificate/8673__612aa241-bcc5-9f9b-dc00-39ed32a4bc26"
  },
  {
    title: "Django REST Framework",
    platform: "دانشگاهی",
    year: "1405",
    desc: "ساخت API با Django REST Framework، شامل سریالایزرها، ویوست‌ها و احراز هویت.",
    url: "#"
  },
  {
    title: "Django",
    platform: "بین المللی",
    year: "1405",
    desc: "آشنایی با فریم‌ورک Django برای توسعه سریع و امن اپلیکیشن‌های وب با پایتون.",
    url: "#"
  }
];


function openModal(index) {
  const cer = cer_infos[index];
  modalPlatform.textContent = cer.platform;
  modalTitle.textContent = cer.title;
  modalYear.textContent = cer.year;
  modalDesc.textContent = cer.desc;
  modalLink.href = cer.url;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

credLinks.forEach((link) => {
  link.addEventListener('click' , (e)=> {
    openModal(Number(e.target.dataset.index));
  });
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});