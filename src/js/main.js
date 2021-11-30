let headerBtn = $('.header__button');
let overlay = $('.overlay');
let popupclose = $('.popup__close');
let popupFormBtn = $('.popup__form-btn');

headerBtn.on( 'click', function () {
   overlay.fadeIn('slow')
});

popupclose.on('click',function () {
    overlay.fadeOut('slow')

});
popupFormBtn.on('click',function (e) {
    e.preventDefault();
    overlay.fadeOut('slow')

});

overlay.on('click',function (e) {
    if(e.target.className === 'overlay'){
        overlay.fadeOut('slow')
    }

});

let ul = $('.review__list');

ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('div.review__tabs').find('div.review__tabs-content').removeClass('review__tabs-content_active').eq($(this).index()).addClass('review__tabs-content_active');
});





let carousel = $('.owl-carousel');
carousel.owlCarousel(
    {

        items:3,
        margin:30,
        dotsContainer: '#dots',

        loop:true
    }
);

let next = $('.owl-next');

next.click(function() {
    next.trigger('next.owl.carousel');
});

let prev = $('.owl-prev');

prev.click(function() {
    prev.trigger('prev.owl.carousel', [300]);
});

 let dot =$('.owl-dot');
 dot.click(function () {
    dot.trigger('to.owl.carousel', [$(this).index(), 300]);
});



DG.then(function () {
    map = DG.map('map', {
        center: [42.878982, 74.595075],
        zoom: 18
    });
    let myIcon = DG.icon({
        iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Ikea-logo.png',
        iconSize: [100, 60],
    });

    DG.marker([42.878982, 74.595075], {icon: myIcon}).addTo(map).bindPopup('IKEA').bindLabel('Я статическая подсказка!', { static: false });
});




