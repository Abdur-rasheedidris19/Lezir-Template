
$(document).ready(function() {
//Preloader
preloaderFadeOutTime = 200;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}
hidePreloader();
});