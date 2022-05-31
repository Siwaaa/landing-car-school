const htmlWidget = `
  <div class="header__seti">
    <a href="/" target="_blank" class="contact-btn" style="background-color:#30cb0d; color: white;"><img src="https://paradigma.website/whatsapp.svg" alt="">Получить КП <br>в WhatsApp</a>

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