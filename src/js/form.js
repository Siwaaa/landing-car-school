import IMask from './imask.min.js';
import { openModal } from './modal.js'; // функция для открытия модальных окон

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
* Обработка формы и отправка в Битрикс24
*/
const bitrix_api = 'https://avirent.bitrix24.ru/rest/3213/3sf6le9xeq3c8mu2/'
const bitrix_method = 'crm.lead.add.json'

const forms = document.querySelectorAll('form')