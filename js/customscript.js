    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass(' custom-navbar');
        } else {
            $('.navbar').removeClass(' custom-navbar');
        }
    });

    //like button 
    $('.like-btn').on('click', function() {
         $(this).toggleClass('like-active');
    });

    // Date select
    $(document).ready(function() {
        $('.form-select').on('change', function() {
            if ($(this).val() !== "Date") {
                $(this).addClass('background-image');
            } else {
                $(this).removeClass('background-image');
            }
        });
    });

    $(document).ready(function() {
        $(".eventsslider").slick({
          arrows: true,
          dots: false,
          slidesToShow:4,
          autoplay: false,
          speed: 900,
          autoplaySpeed: 700,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      });
      
        $(document).ready(function() {
        $(".speakerslider").slick({
          arrows: true,
          dots: false,
          slidesToShow:4,
          autoplay: false,
          speed: 900,
          autoplaySpeed: 700,
          responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        });
      });
