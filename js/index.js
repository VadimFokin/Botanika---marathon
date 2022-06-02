ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.938597379966005, 30.32320333068842],
    zoom: 18,
    controls: ['geolocationControl', 'zoomControl']
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition: { top: "350px", right: "10px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "270px", right: "10px" }
  });

  myMap.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

};


const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,

  navigation: {
    nextEl: '.swiper-button-prev',
    prevEl: '.swiper-button-next',
  },

});