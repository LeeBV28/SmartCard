

$(document).ready(function(){
    $('.order').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 380,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
              },
        ],
        prevArrow:"<button type='button' class='slick-prev pull-left slick-arrow'><i class='bx bxs-left-arrow'></i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right slick-arrow'><i class='bx bxs-right-arrow' ></i></button>"
    });
});