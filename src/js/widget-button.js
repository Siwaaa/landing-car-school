const htmlWidget = `
  <div class="header__seti">
    <a href="https://wa.me/79035656730?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%AF%20%D1%85%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BE%D0%B1%D1%83%D1%87%D0%B5%D0%BD%D0%B8%D0%B5" target="_blank" class="contact-btn" style="background-color:#30cb0d; color: white;"><img src="https://paradigma.website/whatsapp.svg" alt="Whatsapp">Написать <br>в WhatsApp</a>

    <div class="header__phone mobile">
        <a href="tel:+74955502148" class="header__phone-number zphone" style="color: black;"><img src="https://paradigma.website/widget-phone%20(1).png">
      
      Позвонить</a>
      </div>
  </div>`

const cssWidget = `
.widget__contacts {
	display: none;
}

@media (max-width:900px) {
	.widget__contacts {
		position: fixed;
		bottom: 0;
		left: 0;
		top: auto;
		padding: 0;
		background: 0 0;
		height: auto;
		z-index: 102;
		width: 100%;
		display: block;
	}

	.widget__contacts .header__seti {
		width: 100%;
		display: flex;
	}

	.widget__contacts .header__seti a {
		height: 48px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}

	.widget__contacts .header__seti>* {
		flex-grow: 1;
		flex-basis: 35px;
	}

	.header__phone.mobile .header__phone-number {
		height: 48px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
	
	.header__phone.mobile .header__phone-number {
		width: 100%;
		margin-left: auto;
		background-image: linear-gradient(to top, #fdcc43 0, #fce18b 100%);
		color: transparent;
		display: -webkit-box;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: space-evenly;
		-webkit-box-align: center;
		-ms-flex-align: center;
		align-items: center;
  }
}`

// Инициализируем виджет, дождавшись загрузки всех элементов страницы 
window.onload = function () {
  let style = document.createElement('style');
  style.innerHTML = cssWidget
  document.body.append(style)

  let div = document.createElement('div');
  div.className = "widget__contacts";
  div.innerHTML = htmlWidget
  document.body.append(div)
};