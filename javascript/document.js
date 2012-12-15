    <!-- http://www.woothemes.com/flexslider/ -->
        $(window).load(function() {
          $('.flexslider').flexslider({
            animation: "slide",
            animationLoop: false,
            slideshow: false,
            touch: true,
            controlNav: false,
            itemWidth: 150,
            itemMargin: 20,
          });
        });
        
    // http://jqueryui.com/accordion/#default
     $(function() {
        var icons = {
            header: "ui-icon-circle-arrow-e",
            activeHeader: "ui-icon-circle-arrow-s"
        };
        $( "#accordion" ).accordion({
            icons: icons,
            collapsible: true,
            heightStyle: "content"
        });
        $( "#toggle" ).button().click(function() {
            if ( $( "#accordion" ).accordion( "option", "icons" ) ) {
                $( "#accordion" ).accordion( "option", "icons", null );
            } else {
                $( "#accordion" ).accordion( "option", "icons", icons );
            }
        });
       
    });
