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

    /* Updated February 2014 by Shahrukh Omar */
    var allT=document.getElementsByTagName('*'), i=0, a;
    while(a=allT[i++]) {
        if (a.className=='nysmnyd-labels') {
            var inputs = a.getElementsByTagName("*")
            for (var j=inputs.length; j--;) {
                var tag = inputs[j].tagName.toLowerCase();
                if (tag == 'input' || tag == 'textarea') {
                    inputs[j].onkeyup = function() {
                        var fs = this.parentNode
                        if (fs.type == 'fieldset' && this.value.length) {
                            fs.className.indexOf('show-all') == -1 && (fs.className = fs.className + ' show-all');
                        } else {
                            fs.className = fs.className.replace( /(?:^|\s)show-all(?!\S)/, '' );
                        }
                    }
                }
            }
        }
    }
});
