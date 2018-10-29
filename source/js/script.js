var navList = document.querySelector('.main-navigation__list');
var mainHeader = document.querySelector('.main-header');
var map = document.querySelector('#map');
var introImage = document.querySelector('.main-content__wrapper');

(function() {
  var toggles = document.querySelectorAll('.main-navigation__toggle');
  var mainHeader = document.querySelector('.main-header');

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };
  function toggleHandler(toggle) {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      (this.classList.contains('main-navigation__toggle--active') === true) ? this.classList.remove('main-navigation__toggle--active') : this.classList.add('main-navigation__toggle--active');

      if (mainHeader.classList.contains('main-header--open')) {
          mainHeader.classList.remove('main-header--open');
      } else {
          mainHeader.classList.add('main-header--open');
      }
      if (navList.classList.contains('main-navigation__list--open')) {
        navList.classList.remove('main-navigation__list--open');
      } else {
          navList.classList.add('main-navigation__list--open');
      }
      if (introImage.classList.contains('main-content__wrapper--open-menu')) {
        introImage.classList.remove('main-content__wrapper--open-menu');
      } else {
          introImage.classList.add('main-content__wrapper--open-menu');
      }
    });
  }
})();

if (map) {
  ymaps.ready(function () {
      var myMap = new ymaps.Map('map', {
      center: [59.9365,30.32104],
      zoom: 16,
      controls: []
    },{
      suppressMapOpenBlock: true
    },{
      searchControlProvider: 'yandex#search'
    }),
    // Создаём макет содержимого.
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div>$[properties.iconContent]</div>'
    ),
    myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
    hintContent: '',
    balloonContent: ''
  }, {
    iconLayout: 'default#image',
    iconImageHref: '../img//icon-map-marker.svg',
    // Размеры метки.
    iconImageSize: [36, 36],
    iconImageOffset: [-18, -9]
  });
  myMap.geoObjects
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeEditor');
  myMap.behaviors.disable('scrollZoom');
  });
}
