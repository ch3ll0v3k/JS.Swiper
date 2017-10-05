#### JS.Swiper IS: Pure JS, Browser swipe detector. (Fill free to test on your device and commit) 

#### Testet on: Samsung S3 Android 4.4 KitKat
* KitKat (Default "Browser")
* KitKat (FireFox)
* KitKat (Chrome)

#### Testet on: Lenovo x220t toushscreen (Debian Jessie 8)
* FireFox 52.4.0 (64-bit)
* Google Chrome	61.0.3163.100 (Official Build) (64-bit)
* 48.0.2685.35 - Update stream:	Stable

##### Include

```html
<script type="text/javascript" src="/js/JSSwiper.v1.0.0.js"></script>
```

##### Usage
```javascript
var mJSSwiper = {};

window.addEventListener('load', function () { 

    mJSSwiper = new JSSwiper({
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
