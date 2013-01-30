/* Updated November 2012 by Kris Rybak */
    $(document).ready(function(){
        $('.navigation-btn').click(function(){
            $('.navigation').slideToggle('slow');
        });
        $(window).resize(function(){
            var currentWidth = $(window).width();
            if (currentWidth >= 768) {
                $('.navigation').show();
                $('.navigation').css("display","");
            } else {
                if( $('.navigation').css("display") == 'none' ){
                    $('.navigation').hide();
                }
            }
        });
    });