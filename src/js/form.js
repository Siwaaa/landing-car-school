import IMask from './imask.min.js';
import { closeModals, openModal } from './modal.js'; // функция для открытия модальных окон

/*
* Обработка ввода номера в поля формы
*/
const maskOptions = {
  mask: '+{7}(000)000-00-00'
};

const elements = document.querySelectorAll('input[type="tel"]');
elements.forEach(e => {
  IMask(e, maskOptions);
})

/*
* Обработка формы и отправка в TELEGRGAM
*/
const forms = document.querySelectorAll('form')
forms.forEach(el => {
  el.addEventListener('submit', async (e) => {
    e.preventDefault();

    const inputName = e.target.elements[0].value.toString();
    const inputPhone = e.target.elements[1].value.toString();
    if(inputName.length < 2 || inputPhone.length != 16) {
      alert('Некорректно заполнена форма')
      return false
    }

    const token = "1809969727:AAFYDPYydN27iAvO-rgZ1Z-CVM4PVd7SXy8";  
    const telegramUrl = "https://api.telegram.org/bot" + token;  
    const id = "-1001792440590";
    const text = "<u> НОВАЯ ЗАЯВКА </u> \n" + 
              "Имя клиента: " + "<b>" + inputName + "</b> \n" + 
              "Телефон: " + "<b>" + inputPhone + "</b> \n";  
    const url = telegramUrl + "/sendMessage?" + new URLSearchParams({
      chat_id: id,
      parse_mode: 'html',
      text: text
    })

    sendForm(url)
      .then((data) => {
        closeModals()
        console.log('goooooood');
        openModal(5)
      })
      .catch(er => alert('Ошибка отправки данных\n' + er))
  })
})

async function sendForm(url) {
  const res = await fetch(url, {
    method: 'GET',
  })
  return await res.json()
}