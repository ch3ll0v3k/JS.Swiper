# JS.Swiper
Pure, Browser swipe detector

##### Include

```html
<script type="text/javascript" src="/js/tmx.swiper.v1.0.0.js"></script>
```

##### Usage
```javascript
var mTSwiper = {};

window.addEventListener('load', function () { 

    mTSwiper = new TSwiper({
        onSwipeLeft  :  function(){
            console.info( 'onSwipeLeft: call' );
        },
        onSwipeRight :  function(){
            console.info( 'onSwipeRight: call' );
        },
        onSwipeUp    :  function(){
            console.info( 'onSwipeUp: call' );
        },
        onSwipeDown  :  function(){
            console.info( 'onSwipeDown: call' );
        },

    });

});

```
