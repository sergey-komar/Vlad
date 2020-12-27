$(function() {

    $('.slider').slick({
        asNavFor:'.thumbs'
    });
    $('.thumbs').slick({
        slidesToShow: 6, 
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 5,
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 4,
              }
            },
    
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
            {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
            }
          },
                
          ]
    });

    $('.work__inner').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 681,
              settings: {
                slidesToShow: 2,
              }
            },
    
            {
              breakpoint: 455,
              settings: {
                slidesToShow: 1,
              }
            },
             
          ]
    })


    $('.header__menu-btn').on('click', function(){
      $('.header__menu ul').slideToggle();
    })

});