//Variables menu
var mainHeader = document.querySelector('.main-header');
var navToggle = document.querySelector('.main-navigation__toggle');
var navList = document.querySelector('.main-navigation__list');
var map = document.querySelector('#map');
var introImage = document.querySelector('.main-content__wrapper');

//Variables form
var modal = document.querySelector('.modal');
var modalSuccess = document.querySelector('.modal--success');
var modalFailure = document.querySelector('.modal--failure');
var modalClose = document.querySelector('.modal__button');
var form = document.querySelector('.contest-form');
var buttonForm = document.querySelector('.contest-form__button');
var lastName = document.querySelector('#last-name');
var firstName = document.querySelector('#first-name');
var userMail = document.querySelector('#user-contacts__mail');
var modalSuccess = document.querySelector('.modal--success');
var isStorageSupport = true;
var storageUserName = '';

//===Menu===
mainHeader.classList.remove('main-header--open');
navToggle.classList.remove('main-navigation__toggle--active');
navList.classList.remove('main-navigation__list--open');
navToggle.addEventListener('click', function() {
  if (mainHeader.classList.contains('main-header--open')) {
      mainHeader.classList.remove('main-header--open');        navToggle.classList.remove('main-navigation__toggle--active');
      navList.classList.remove('main-navigation__list--open');
      if (introImage) {
        introImage.classList.remove('main-content__wrapper--open-menu');
      }
    } else {
      mainHeader.classList.add('main-header--open');
      navToggle.classList.add('main-navigation__toggle--active');
      navList.classList.add('main-navigation__list--open');
      if (introImage) {
        introImage.classList.add('main-content__wrapper--open-menu');
      }
    }
  });

//===Map===
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
    iconImageHref: '../img/icon-map-marker.svg',
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
