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