/**
 * @author: Pradeep CR
 *
 * This class is used to get all the details about the device and/or browser in which the script is running.
 */

/**
 * @class
 * @returns {DeviceManager}
 */
function DeviceManager(){}

/**
 * Use this to get the UserAgent of the device
 * @returns {String}
 */
DeviceManager.prototype.getUserAgent = function(){
    return window.navigator.userAgent.toLowerCase();
};

/**
 * Use this to get the type of device (mobile/tablet/desktop/etc.)
 * @returns {String}
 */
DeviceManager.prototype.getDeviceType = function(){
    var userAgent = this.getUserAgent();
    var deviceOs = userAgent.match(/iphone|ipad|ipod|android|windows/);
    var tabletMatch = userAgent.match(/ipad|android/);
    var mobileMatch = userAgent.match(/mobile|windows/);
    var windowsMob = userAgent.match(/msie/);

    if (tabletMatch !== null) {
        if(tabletMatch[0] === 'ipad' || (tabletMatch[0] === 'android' && mobileMatch === null)){
            return 'tablet';   //satisfies for android tablet/ipad.
        }
        return 'mobile';   //satisfies for android mobile.
    }else if(mobileMatch === 'mobile' || (mobileMatch === 'windows' && windowsMob === 'msie')){
        return 'mobile';
    }
    return 'desktop';
};

/**
 * Use this to get the device OS (Android/iOS/etc.)
 * @returns {String}
 */
DeviceManager.prototype.getDeviceOs = function(){
    var userAgent = this.getUserAgent();
    var deviceOs = userAgent.match(/iphone|ipad|ipod|android|blackberry|bb10|windows/);
    if(deviceOs !== null){
        if(deviceOs[0] === 'ipad' || deviceOs[0] === 'iphone' || deviceOs[0] === 'ipod'){
            return 'ios';
        } else if (deviceOs[0] === 'android') {
            return 'android';
        }else if(deviceOs[0] === 'blackberry' || deviceOs[0] === 'bb10'){
            return 'blackberry';
        }else if(deviceOs[0] === 'windows'){
            return 'windows';
        }
    }
    return 'some non-Android and non-iOS OS';
};

/**
 * Use this to get the type of browser (chrome/safari/firefox/ie/etc.)
 * @returns {String}
 */
DeviceManager.prototype.getBrowserType = function(){
    var userAgent = this.getUserAgent();

    if (userAgent.indexOf('chrome') > -1) {
        return 'chrome';
    }else if (userAgent.indexOf('safari') > -1){
        return 'safari';
    }else if (userAgent.indexOf('firefox') > -1){
        return 'firefox';
    }else if ((userAgent.indexOf('msie') > -1) || (userAgent.indexOf('trident') > -1)) {
        return 'ie';
    }
    return 'unknown';
};

/**
 * Use this to check if the display has higher pixel density
 * @returns {Boolean}
 */
DeviceManager.prototype.isRetinaDisplay = function(){
    return window.devicePixelRatio > 1.5;
};

/**
 * Use this to get the current orientation of the device
 * Call this method as callback to orientationchange event, (window.addEventListener('orientationchange', getOrientation);)
 * Also call this in "ready" to do something based on orientation while page loading.
 * @returns {String}
 */
DeviceManager.prototype.getOrientation = function(){
    var orientation = window.styleMedia.matchMedium("(orientation: landscape)") ? "landscape" : "portrait";
    /*switch(window.orientation)
    {
        case -90:
        case 90:
            orientation = 'landscape';
            break;
        default:
            orientation = 'portrait';
            break;
    }*/
    return orientation;
};

/**
 * Use this to check if the browser is webkit supported or not
 * @returns {Boolean}
 */
DeviceManager.prototype.isWebkitBrowser = function(){
    return /AppleWebKit/i.test(this.getUserAgent());
};
