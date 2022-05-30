var htmlWidget='\n  <div class="messenger">\n    <div title="Чат с менеджером" class="messenger-btn">\n      <svg width="30" height="23" viewBox="0 0 30 23" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path fill-rule="evenodd" clip-rule="evenodd" d="M3 0C1.34315 0 0 1.34315 0 3V15C0 16.6569 1.34315 18 3 18H17.3049L20.2076 21.7707C20.6079 22.2907 21.3921 22.2907 21.7924 21.7707L24.6951 18H27C28.6569 18 30 16.6569 30 15V3C30 1.34315 28.6569 0 27 0H3Z" fill="white"/>\n        <circle cx="5.10117" cy="9.9" r="0.9" fill="#F49A12"/>\n        <circle cx="9.9" cy="9.9" r="0.9" fill="#F49A12"/>\n        <circle cx="14.7008" cy="9.9" r="0.9" fill="#F49A12"/>\n        <circle cx="19.4996" cy="9.9" r="0.9" fill="#F49A12"/>\n        <circle cx="24.2994" cy="9.9" r="0.9" fill="#F49A12"/>\n      </svg>\n    </div>\n    <div id="messenger-links" class="messenger-links">\n      <a title="Whatsapp" href="https://wa.me/79206502116" target="_blank"><img src="https://volgo-prime.ru/img/icons/whatsapp-icon.svg" alt="Whatsapp" /></a>\n      <a title="Viber" href="https://viber.click/79026681880" target="_blank"><img src="https://volgo-prime.ru/img/icons/viber-icon.svg" alt="Viber" /></a>\n      <a title="Telegram" href="https://t.me/fastlem" target="_blank"><img src="https://volgo-prime.ru/img/icons/telegram-icon.svg" alt="Telegram" /></a>\n    </div>\n  </div>',cssWidget="\n.messenger {\n  display: block;\n  position: fixed;\n  right: 3%;\n  bottom: 3%;\n  width: 60px;\n  height: 202px;\n  z-index: 9999;\n}\n.messenger-btn {\n  padding: 14px;\n  display: block;\n  width: 60px;\n  height: 60px;\n  border-radius: 60px;\n  background-color: var(--color-orange);\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  cursor: pointer;\n  z-index: 999;\n  animation: pulse 2s infinite;\n}\n.messenger-btn:hover {\n  animation: none;\n}\n\n@-webkit-keyframes pulse {\n  0% {\n    -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);\n  }\n  70% {\n      -webkit-box-shadow: 0 0 0 25px rgba(204,169,44, 0);\n  }\n  100% {\n      -webkit-box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n  }\n}\n@keyframes pulse {\n  0% {\n    -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);\n    box-shadow: 0 0 0 0 rgba(204,169,44, 0.4);\n  }\n  70% {\n      -moz-box-shadow: 0 0 0 25px rgba(204,169,44, 0);\n      box-shadow: 0 0 0 25px rgba(204,169,44, 0);\n  }\n  100% {\n      -moz-box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n      box-shadow: 0 0 0 0 rgba(204,169,44, 0);\n  }\n}\n.messenger-btn svg {\n  width: 32px;\n  height: 32px;\n}\n.messenger-links {\n  position: absolute;\n  width: 100%;\n  transform: scale(0);\n  transform-origin: bottom;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  z-index: 0;\n}\n.messenger-links.show {\n  transform: scale(1);\n  z-index: 999;\n}\n.messenger-links a {\n  width: 40px;\n  margin-left: 10px;\n}\n.messenger-links img {\n  max-width: 40px;\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.messenger-links a:hover img {\n  transform: scale(1.1);\n  text-decoration: none;\n}";function initListener(){var n=document.querySelector(".messenger-btn"),e=document.querySelector(".messenger-links");document.querySelector(".messenger");n.addEventListener("click",(function(){e.classList.toggle("show")}))}
//# sourceMappingURL=index.f0a3dd2c.js.map
