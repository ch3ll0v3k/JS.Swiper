// --------------------------------------------------------------------
// TSwiper v1.0.0

var once = true;

var TSwiper = function( objParams ){

    document.swiper = {
        start_X: 0, start_Y: 0, end_X: 0, end_Y: 0,

        treshold_X : 50, treshold_Y : 50, 

        onSwipeLeft     :  objParams.onSwipeLeft || function(){},
        onSwipeRight    :  objParams.onSwipeRight || function(){},
        onSwipeUp       :  objParams.onSwipeUp || function(){},
        onSwipeDown     :  objParams.onSwipeDown || function(){},

        detect : function(){

            var s_X = document.swiper.start_X;
            var s_Y = document.swiper.start_Y;
            var e_X = document.swiper.end_X;
            var e_Y = document.swiper.end_Y;

            var hold_X = document.swiper.treshold_X;
            var hold_Y = document.swiper.treshold_Y; 

            if( (s_X - hold_X) > e_X ){
                document.swiper.onSwipeLeft();

            }else if( (s_X + hold_X) < e_X  ){
                document.swiper.onSwipeRight();

            }

        }

    }

    // --------------------------------------------------------
    document.addEventListener('touchstart', function(e) {

        // e.preventDefault();

        if( typeof e.changedTouches[0].pageX !== "undefined" ){
            document.swiper.start_X = e.changedTouches[0].pageX;
            document.swiper.start_Y = e.changedTouches[0].pageY;
            
        }

    }, false);

    document.addEventListener('touchend', function(e) {

        if( typeof e.changedTouches[0].pageX !== "undefined" ){
            document.swiper.end_X   = e.changedTouches[0].pageX;
            document.swiper.end_Y   = e.changedTouches[0].pageY;
            document.swiper.detect();
        }

    }, false); 

    // --------------------------------------------------------
    document.addEventListener('mousedown', function(e) {
        if( typeof e.screenX !== "undefined" ){
            document.swiper.start_X = e.screenX;
            document.swiper.start_Y = e.screenY;
        }

    }, false);

    document.addEventListener('mouseup', function(e) {
        if( typeof e.screenX !== "undefined" ){
            document.swiper.end_X   = e.screenX;
            document.swiper.end_Y   = e.screenY;
            document.swiper.detect();
        }

    }, false); 

    // --------------------------------------------------------

}

// --------------------------------------------------------------------
