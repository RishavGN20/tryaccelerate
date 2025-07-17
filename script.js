$(document).ready(function () {
    $('.hero-slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false
    });

    $('.banner__slider').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,

    });

    $('.slider-1').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        rtl: false,
    });

    $('.slider-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 2000,
        cssEase: 'linear',
        infinite: true,
        arrows: false,
        dots: false,
        pauseOnHover: false,

    });

    $('.corousel__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.blogs__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#blog-prev'),
        nextArrow: $('#blog-next'),
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.big-cards__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('#arrow-prev'),
        nextArrow: $('#arrow-next'),
        infinite: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
});

$(document).ready(function () {
    $('.services__toggling').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        infinite: false,

    });

    $('.nav-item').on('click', function () {
        const slideIndex = $(this).data('slide');

        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        $('.services__toggling').slick('slickGoTo', slideIndex);
    });

    $('.services__toggling').on('afterChange', function (event, slick, currentSlide) {
        $('.nav-item').removeClass('active');
        $('.nav-item[data-slide="' + currentSlide + '"]').addClass('active');
    });
});

document.addEventListener("DOMContentLoaded",function(){
    const toggles=document.querySelectorAll(".toggle-icon");
    toggles.forEach((toggle)=>{
        toggle.addEventListener("click",function(){
            const faqContent=toggle.closest(".faq__content");
            const answer=faqContent.querySelector(".faq__answer");

            answer.classList.toggle("visible");

            if(answer.classList.contains("visible")){
                 toggle.src="./images/cross.png";
            }
            else{
               
                toggle.src="./images/plus.png";
            }
        })
    })
})