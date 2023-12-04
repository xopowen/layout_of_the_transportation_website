
if(document.querySelector('#map')){

    var myMap;

// Дождёмся загрузки API и готовности DOM.
    ymaps.ready(init);

    function init () {
        // Создание экземпляра карты и его привязка к контейнеру с
        // заданным id ("map").
        myMap = new ymaps.Map('map', {
            // При инициализации карты обязательно нужно указать
            // её центр и коэффициент масштабирования.
            center: [55.568492, 37.447315],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        },   {// Зададим ограниченную область прямоугольником,
            restrictMapArea: [
                [52.838,29.511],
                [60.056,30.829]
            ]
        }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Мы тут',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',

                // Размеры метки.
                iconImageSize: [30, 30],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });

        myMap.behaviors
            // Отключаем часть включенных по умолчанию поведений:
            //  - drag - перемещение карты при нажатой левой кнопки мыши;
            //  - magnifier.rightButton - увеличение области, выделенной правой кнопкой мыши.
            .disable('scrollZoom');

        myMap.geoObjects
            .add(myPlacemark)
    }
}


