// BURGER OM-NOM-NOM
const burgerBtn = document.querySelector('#burger')
const navbarMenu = document.querySelector('.navpanel__menu')

burgerBtn.addEventListener('change', function () {
  if (this.checked) {
    navbarMenu.style.height = '360px'
  } else {
    navbarMenu.style.height = '0'
  }
})

// скрываем menu при клике на ссылку-навигацию-якорь
const linksNavMobile = document.querySelectorAll('.navpanel-link')

linksNavMobile.forEach((el) => {
  el.addEventListener('click', () => {
    burgerBtn.checked = false
    navbarMenu.style.height = '0'
  })
})