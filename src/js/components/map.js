//заружает скрыпты карты и init карту после загрузки страницы если на странице есть id = "map"


async function loadMapScript(){
    var elem = document.createElement('script');
    elem.type = 'text/javascript';
    elem.src="https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;apikey=aae3f3e4-374f-420f-a948-677e1a58f577";
    elem.type="text/javascript";
    elem.onload = ev => mapInit()
    document.body.appendChild(elem);
}

if(document.querySelector('#map')){
    if(window.IntersectionObserver){
        var options = {
            threshold:  0.1,
        };
        /**
         *
         * @param {  Array<IntersectionObserverEntry>} entries
         * @param observer
         */
        let callBack = function (entries, observer){
            console.log('callBack is called')
            entries.forEach(entrie=>{
                if(entrie.isIntersecting){
                    if(!entrie.target.dataset.scriptStart){
                        entrie.target.dataset.scriptStart = true+''
                        setTimeout(()=>loadMapScript(),0)
                    }

                }
            })
        }

        let obser = new IntersectionObserver(callBack,options )
        obser.observe(document.querySelector('#map'))

    }else{
        setTimeout( loadMapScript, 2000);
    }


}

async function mapInit(){


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



