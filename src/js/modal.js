/**
 * 
 * Для добавления тригера открытия модального окна на кнопку 
 * следует добавить data-атрибут к html элементу с номером модального окна. 
 * Например: data-open-modal_1
 *
 *  */ 
const modals = [
  document.getElementById('modal1'), // Быстро оставь номер
  document.getElementById('modal2'), // Запись на пробное
  document.getElementById('modal3'), // Подробнее о скидке
  document.getElementById('modal4'), // Не уходи, старт скоро
  document.getElementById('modal5') // Заявка принята
]

const triggersForModal_1 = document.querySelectorAll("[data-open-modal_1]")
triggersForModal_1.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[0].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_2 = document.querySelectorAll("[data-open-modal_2]")
triggersForModal_2.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[1].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_3 = document.querySelectorAll("[data-open-modal_3]")
triggersForModal_3.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[2].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_4 = document.querySelectorAll("[data-open-modal_4]")
triggersForModal_4.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[3].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

const triggersForModal_5 = document.querySelectorAll("[data-open-modal_5]")
triggersForModal_5.forEach((e) => {
  e.addEventListener('click', (event) => {
    event.preventDefault();
    modals[3].style.display = "block";
    document.body.style.overflow = 'hidden';
  })
})

// функция открытия попапа 
export function openModal(numberModal) {
  modals[numberModal - 1].style.display = "block";
  document.body.style.overflow = 'hidden';
}
// попап выхода с сайта
const byebye = (event) => {
  if (!event.toElement && !event.relatedTarget && event.offsetY < 1) {
    setTimeout(() => {
      openModal(4);
      document.removeEventListener("mouseleave", byebye);
    }, 500);
  }
}
document.addEventListener("mouseleave", byebye);



// Закрываем окна, когда нажатие происходит вне их области
window.onclick = function(event) {
  switch (event.target) {
    case modals[0]:
      modals[0].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[1]:
      modals[1].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[2]:
      modals[2].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[3]:
      modals[3].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    case modals[4]:
      modals[4].style.display = "none";
      document.body.style.overflow = "visible"
      break;
    default:
      break;
  }
}