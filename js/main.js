$(document).ready(function(){
    $('.courses-sliders').slick({
        arrows:true,
        slidesToShow: 3,
        centerMode:false,
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 1270,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 990,
              settings: {
                slidesToShow: 1,
              }
            },
        /*    {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }*/
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });
});
const hamb = document.querySelector('#hamb-wrap');
const popup = document.querySelector('#popup');
const popupWrap = document.querySelector('#popupWrap');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;

hamb.addEventListener("click", hambHandler);
function hambHandler(e) {
  e.preventDefault();//сброс стандартного поведения кнопки
  popup.classList.toggle("open");
  popupWrap.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}
menu.addEventListener("click", removePopup);
function renderPopup() {// вставить в попап меню и что угодно
  popup.appendChild(menu);
}

function removePopup() {//закрывается при выборе пункта меню
  popup.classList.toggle("open");
  popupWrap.classList.toggle("open");
  body.classList.toggle("noscroll");
  hamb.classList.toggle("active");
}