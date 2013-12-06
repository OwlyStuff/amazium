$(document).ready(function(){
    /* Updated November 2012 by Kris Rybak */
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
    /* Created November 2013 by Shahrukh Omar */
    $('#nysmnyd').on('keyup', 'input,textarea', function() {
        var $this = $(this)
        var $fs   = $this.parents('fieldset')
        if ($fs.length && $this.val().length) {
            $fs.addClass('show-all')
        } else {
            $fs.removeClass('show-all')
        }
    })
});
