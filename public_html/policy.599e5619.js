document.addEventListener("DOMContentLoaded",(function(){var e,n,t;n=document.querySelector(".header__nav"),t=window.pageYOffset,window.addEventListener("scroll",(function(){var a=function(){return n.classList.contains("header__nav-fixed")};(e=window.pageYOffset)>100&&e>t&&!a()&&n.classList.add("header__nav-fixed"),e<t&&a()&&n.classList.remove("header__nav-fixed"),t=e}))}));var burgerBtn=document.querySelector("#burger"),navbarMenu=document.querySelector(".navpanel__menu");burgerBtn.addEventListener("change",(function(){this.checked?navbarMenu.style.height="400px":navbarMenu.style.height="0"}));var linksNavMobile=document.querySelectorAll(".navpanel-link");linksNavMobile.forEach((function(e){e.addEventListener("click",(function(){burgerBtn.checked=!1,navbarMenu.style.height="0"}))}));
//# sourceMappingURL=policy.599e5619.js.map
