function detectBrowser(){
    var isIE = navigator.userAgent.search("MSIE") > -1;
    var isIE7 = navigator.userAgent.search("MSIE 7") > -1;
    var isFirefox = navigator.userAgent.search("Firefox") > -1;
    var isOpera = navigator.userAgent.search("Opera") > -1;
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    
   
    if (isIE7) {
        browser = '您正在使用 IE7 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    if (isIE) {
        browser = '您正在使用 IE 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    if (isFirefox) {
        browser = '您正在使用 Firefox 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    if (isOpera) {
        browser = '您正在使用 Opera 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    if (isSafari) {
        browser = '您正在使用 Safari 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    if (isChrome) {
        browser = '您正在使用 Chrome 瀏覽器, 請使用 iOS Safari 瀏覽器以播放影片';
    }
    return browser;
}

var browser = detectBrowser();
alert(browser);
