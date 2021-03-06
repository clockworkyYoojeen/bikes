$(document).ready(function () {
    // class _ibg (динамические фоновые изображения на основе инлайн изображений)
    const ibgImages = document.querySelectorAll('.ibg')
    for (let i = 0; i < ibgImages.length; i++) {
        if (ibgImages[i].querySelector('img')) {
            let src = ibgImages[i].querySelector('img').getAttribute('src')
            ibgImages[i].style.backgroundImage = `url("https://amazingbikes.netlify.app/${src}")`
        }
    }
    // top slider
    const slides = document.querySelectorAll('.mainscreen__bg')
    let current = slides.length - 1
    function customSlider2() {
        let previous = document.querySelector('.active-slide')
        previous.classList.remove('active-slide')
        current === 0 ? current = slides.length - 1 : current--
        slides[current].classList.add('active-slide')
    }
    // function customSlider() {
    //     for (let i = 0; i < slides.length; i++) {
    //         slides[i].classList.add('hide')
    //     }
    //     current === 0 ? current = slides.length - 1 : current--
    //     slides[current].classList.remove('hide')
    // }
    setInterval(customSlider2, 3500)

    // меню бургер
    $('.icon_menu, .menu__link').click(function () {
        $('.icon_menu, .header__menu').toggleClass('active')
    })
    // slick slider 2
    $('.slider__body').slick({
        arrows: false,
        slidesToShow: 1,
        dots: true,
        adaptiveHeight: true,
    })
    // фиксированное меню при скролле
    $(window).scroll(function () {
        if (window.scrollY > 600) {
            $('.header').addClass('scrolled')
        } else {
            $('.header').removeClass('scrolled')
        }
    })
})