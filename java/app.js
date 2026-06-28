const isDesktop = () => window.matchMedia("(min-width: 769px)").matches;

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // =========================
  // Helper
  // =========================

  const reveal = (selector, vars) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el, {
        ease: "power3.out",
        ...vars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });
  };

  const revealChildren = (selector, vars) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.from(el.children, {
        ease: "power3.out",
        ...vars,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });
  };

  
  // =========================
  // Counter
  // =========================

  gsap.utils.toArray(".stat-number").forEach((el) => {
    const target = parseInt(el.dataset.count, 10) || 0;
    const counter = { val: 0 };

    gsap.to(counter, {
      val: target,
      duration: 1.6,
      ease: "power2.out",
      snap: { val: 1 },

      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        once: true,
      },

      onUpdate: () => {
        el.textContent = counter.val;
      },
    });
  });

  // =========================
  // Hero
  // =========================

  if (isDesktop()) {
    gsap.timeline({
      defaults: {
        ease: "power2.out",
      },
    })

      .from(".header", {
        y: -100,
        opacity: 0,
        duration: 0.6,
      })

      .from(
        ".nav_logo, .nav_links li, .nav_link_btn",
        {
          y: -20,
          opacity: 0,
          duration: 0.35,
          stagger: 0.08,
          ease: "back.out(1.5)",
        },
        "-=0.3"
      )

      .from(
        ".intro_hero_about_me",
        {
          y: 30,
          opacity: 0,
          duration: 0.45,
        },
        "-=0.1"
      )

      .from(
        ".p_hero_about_me, .bio_hero_about_me, .hero_actions, .hero_quickfacts",
        {
          y: 20,
          opacity: 0,
          duration: 0.35,
          stagger: 0.1,
        },
        "-=0.15"
      )

      .from(
        ".hero_picture",
        {
          x: 80,
          opacity: 0,
          duration: 0.6,
        },
        "<"
      );
  }

  // =========================
  // Reveal
  // =========================

  reveal('[data-reveal="text"]', {
    y: 24,
    opacity: 0,
    duration: 0.7,
  });

  reveal('[data-reveal="img"]', {
    x: -40,
    opacity: 0,
    duration: 0.8,
  });

  reveal('[data-reveal="form"]', {
    x: 30,
    opacity: 0,
    duration: 0.6,
  });

  reveal('[data-reveal="article"]', {
    y: 28,
    opacity: 0,
    duration: 0.7,
  });

  reveal('[data-reveal="card"]', {
    y: 24,
    opacity: 0,
    duration: 0.7,
  });

  // =========================
  // Children Reveal
  // =========================

  revealChildren('[data-reveal="badges"]', {
    y: 12,
    opacity: 0,
    duration: 0.5,
    stagger: 0.06,
    ease: "power2.out",
  });

  revealChildren('[data-reveal="midiaIcons"]', {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "back.out(1.5)",
  });

  revealChildren('[data-reveal="list"]', {
    x: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
    ease: "power2.out",
  });

  revealChildren('[data-reveal="certificate"]', {
    y: 24,
    opacity: 0,
    duration: 0.6,
    stagger: 0.12,
  });

  // =========================
  // Skills
  // =========================

  gsap.utils.toArray('[data-reveal="bars"]').forEach((group) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: group,
          start: "top 85%",
          once: true,
        },
      })

      .from(group, {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      })

      .from(
        group.querySelectorAll(".skills_section_left_skills div"),
        {
          y: 10,
          opacity: 0,
          duration: 0.4,
          stagger: 0.05,
          ease: "power2.out",
        },
        "-=0.3"
      );
  });
});




const loading = document.getElementById("loading");

const header = document.getElementById('header');
const menu_icon = document.getElementById("menu_icon");
const close_icon = document.getElementById("close_icon");
const mobile_nav = document.getElementById("mobile_nav_container");
const mobileNavLinks = document.querySelectorAll('#mobile_nav li a')

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

mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    closeMobileNav();
    closeBgDisabled();
  })
});


const overlay = document.getElementById('modalOverlay');
const modalPlatform = document.getElementById('modalPlatform');
const modalTitle = document.getElementById('modalTitle');
const modalYear = document.getElementById('modalYear');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const credLinks = document.querySelectorAll(".cred_link");
const modalClose = document.getElementById('modalClose');
const modalText = document.getElementById('modalText');
const modalImg = document.getElementById('modalImg');

const cer_infos = [
  {
    title: "React.js: Building an Interface",
    platform: "دانشگاهی",
    year: "ژانویهٔ ۲۰۲۳",
    desc: "آموزش ساخت رابط کاربری با React.js، شامل کامپوننت‌بندی، مدیریت state و الگوهای رایج توسعه فرانت‌اند.",
    url: "https://www.linkedin.com/learning/certificates/81f6d44bdc2a1fa511f4215411fa46ed516bf2fbdd5abf78f3c8cf4f0c3fdac5",
    imgUrl: "images/React_js_Building_an_Interface.png"
  },
  {
    title: "React.js Essential Training",
    platform: "فنی",
    year: "دسامبر ۲۰۲۲",
    desc: "آشنایی با مفاهیم پایه React.js و اصول طراحی کامپوننت‌محور برای توسعه اپلیکیشن‌های وب.",
    url: "https://www.linkedin.com/learning/certificates/b00ad03571b05eac2cb85d033dbc5f348d44f53f462db1af710bf6b91c519ead",
    imgUrl: "images/React_js_Essential_Training.png"
  },
  {
    title: "ASP.NET Core with Angular 6",
    platform: "بین المللی",
    year: "نوامبر ۲۰۲۱",
    desc: "ترکیب بک‌اند ASP.NET Core با فرانت‌اند Angular 6 برای ساخت اپلیکیشن‌های full-stack مدرن.",
    url: "https://toplearn.com/Certificate/8673__612aa241-bcc5-9f9b-dc00-39ed32a4bc26",
    imgUrl: "images/ASPNET_Core_with_Angular_6.jpg"
  },
  {
    title: "Django REST Framework",
    platform: "دانشگاهی",
    year: "ژانویهٔ ۲۰۲۲",
    desc: "ساخت API با Django REST Framework، شامل سریالایزرها، ویوست‌ها و احراز هویت.",
    url: "https://www.linkedin.com/in/misaq-yarian-600847a2/details/certifications/",
    imgUrl: false
  },
  {
    title: "Django",
    platform: "بین المللی",
    year: "ژانویهٔ ۲۰۲۲",
    desc: "آشنایی با فریم‌ورک Django برای توسعه سریع و امن اپلیکیشن‌های وب با پایتون.",
    url: "https://www.linkedin.com/in/misaq-yarian-600847a2/details/certifications/",
    imgUrl: false
  }
];

function openModal(index) {
  const cer = cer_infos[index];
  modalPlatform.textContent = cer.platform;
  modalTitle.textContent = cer.title;
  modalYear.textContent = cer.year;
  modalDesc.textContent = cer.desc;
  modalLink.href = cer.url;
  if (cer.imgUrl) {
    modalText.innerHTML = "";
    var cerImg = document.createElement("img");
    cerImg.src = cer.imgUrl;
    modalText.appendChild(cerImg);
  }else{
    modalText.innerHTML = "عکس مدرک وجود ندارد";
  }
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


const navLinks = document.querySelectorAll('.nav_links li a');
const sections = document.querySelectorAll('main > section');

function moveActiveNav(targetId) {
  navLinks.forEach((link) => {
    link.classList.toggle('nav_link_active', link.dataset.target === targetId);
  });
}


const observerNav = new IntersectionObserver((entries) => {
  entries.forEach((enter) => {
    if (enter.isIntersecting) {
      moveActiveNav(enter.target.id);
    }
  });
}, {
  root: null,
  rootMargin: '-50% 0px -50% 0px',
  threshold: 0
});

sections.forEach((section) => observerNav.observe(section));


