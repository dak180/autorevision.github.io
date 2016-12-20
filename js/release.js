/* 
http://stackoverflow.com/questions/22230007/how-to-detect-when-asynchronously-loaded-jquery-has-finished-loading

http://stackoverflow.com/questions/14811471/load-jquery-asynchronously-before-other-scripts

http://www.carsonshold.com/2014/05/github-metadata-with-jekyll-and-javascript/

http://www.w3schools.com/jquery/ajax_getjson.asp

http://www.w3schools.com/js/js_intro.asp
 */






var uri = 'https://api.github.com/repos/Autorevision/autorevision/releases';

$.getJSON(uri,success(
