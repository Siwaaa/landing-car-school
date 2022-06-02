import { initSlider } from "./swiper"
// lazy loading

// document.addEventListener("DOMContentLoaded", function () {
//   const lazyloadImages = document.querySelectorAll("img[data-src]");
//   let lazyloadThrottleTimeout;

//   function lazyload() {
//     if (lazyloadThrottleTimeout) {
//       clearTimeout(lazyloadThrottleTimeout);
//     }

//     lazyloadThrottleTimeout = setTimeout(function () {
//       lazyloadImages.forEach(function (img) {
//         if ((img.getBoundingClientRect().top - 200 <= window.innerHeight
//           && img.getBoundingClientRect().bottom >= 0)
//           && getComputedStyle(img).display !== "none"
//         ) {
//           const reg = img.nextSibling.firstChild.textContent.split(/"([^"]*)"/g);
//           img.src = reg[1];
//           if(reg[3]) img.srcset = reg[3]
//           img.removeAttribute('data-src')
//         }
//       });
//       if (lazyloadImages.length == 0) {
//         document.removeEventListener("scroll", lazyload);
//         window.removeEventListener("resize", lazyload);
//         window.removeEventListener("orientationChange", lazyload);
//       }
//     }, 200);
//   }

//   document.addEventListener("scroll", lazyload);
//   window.addEventListener("resize", lazyload);
//   window.addEventListener("orientationChange", lazyload);
// });

// Scroll to #

const anchors = document.querySelectorAll('a[href^="/#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(2)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
    })
  })
}


// Animation

const e = document.querySelectorAll("[data-animate-on-scroll]")
const t = new IntersectionObserver((e => {
  e.forEach((e => {
    e.isIntersecting && e.target.setAttribute("data-animate-on-scroll", "animated")
  }
  ))
}), {
  threshold: 0.25
});

e.forEach((e => {
  t.observe(e)
}
))

// cookie 
const cookieModal = document.querySelector('.cookie')
const closeBtn = document.querySelector('.cookie-close')

document.addEventListener('DOMContentLoaded', () => {
  // проверяем после загрузки страницы localStorage на наличие согласия cookie
  console.log(localStorage.getItem('consent_cookies'));
  if (localStorage.getItem('consent_cookies')) {
    cookieModal.style.display = "none";
  } else {
    cookieModal.style.display = "block";
  }
})
closeBtn.addEventListener('click', () => {
  localStorage.setItem('consent_cookies', true);
  cookieModal.style.display = "none";
})

// uslugi change
const radiosOpportunities = document.querySelectorAll('input[type=radio][name="uslugi_desktop"]');
const selectOpportunities = document.getElementById("uslugi-select");

function changeHandlerUslugiDesktop(event) {
  if (this.value) {
    document.querySelectorAll('.case').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#case_' + this.value).classList.add('active')
    selectOpportunities.value = this.value
  }
}
function changeHandlerOpportunitiesMob(event) {
  if (event.target.value) {
    document.querySelectorAll('.case').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#case_' + event.target.value).classList.add('active')
    document.querySelector('#uslugi_desktop_' + event.target.value).checked = true
  }
}

Array.prototype.forEach.call(radiosOpportunities, function (radio) {
  radio.addEventListener('change', changeHandlerUslugiDesktop);
});
selectOpportunities.addEventListener('change', changeHandlerOpportunitiesMob);

// photos change
const radiosPhotos = document.querySelectorAll('input[type=radio][name="photos_desktop"]');
const selectPhotos = document.getElementById("photos-select");

function changeHandlerPhotosDesktop(event) {
  if (this.value) {
    document.querySelectorAll('.photos__swiper').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#photos_' + this.value).classList.add('active')
    selectPhotos.value = this.value
    initSlider()
  }
}
function changeHandlerPhotosMob(event) {
  if (event.target.value) {
    document.querySelectorAll('.photos__swiper').forEach((t) => {
      t.classList.remove('active')
    })
    document.querySelector('#photos_' + event.target.value).classList.add('active')
    document.querySelector('#photos_desktop_' + event.target.value).checked = true
    initSlider()
  }
}

Array.prototype.forEach.call(radiosPhotos, function (radio) {
  radio.addEventListener('change', changeHandlerPhotosDesktop);
});
selectPhotos.addEventListener('change', changeHandlerPhotosMob);

// Accrdions
const accordionTrigger = document.querySelectorAll(".questions__item"),
  accordionBody = document.querySelectorAll(".questions__answer");

const accordionsToggle = (triggers, bodyElements) => {
  triggers.forEach((el) => {
    el.addEventListener("click", () => {
      //Находим контентную часть у ближайшего родителя
      const elBody = el.closest(".questions__item").querySelector(".questions__answer");
      // el.classList.toggle('accordion__trigger--active');
      elBody.style.height = `${elBody.scrollHeight}px`;
      elBody.style.marginTop = "20px";
      if (elBody.style.height === "0px" || window.getComputedStyle(elBody).height === "0px") {
        el.setAttribute("aria-expanded", "true");
        elBody.setAttribute("aria-hidden", "false");
      } else {
        elBody.style.height = "0";
        el.setAttribute("aria-expanded", "false");
        elBody.setAttribute("aria-hidden", "true");
        elBody.style.marginTop = "0";
      }
    });
  });
  bodyElements.forEach((el) => {
    el.addEventListener("transitionend", () => {
      if (el.style.height !== "0px") {
        el.style.height = "auto";
      }
    });
  });
};
accordionsToggle(accordionTrigger, accordionBody);