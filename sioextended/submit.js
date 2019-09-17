(function(){
    'use strict';
    
    let url = document.location.href;
    if (url[url.length - 1] != "/"){
        url += "/";
    }
    for (let element of document.querySelectorAll('table tbody tr:not(.problemlist-subheader)')){
        let n = element.children[2].children[0].id.replace("limits_", "");
        element.children[3].innerHTML += 
        '<a role="button" target="_blank" class="sioextended-button btn btn-sm btn-default" href="' 
        + url 
        + '../submit/?select=' 
        + n 
        + '"><span class="glyphicon glyphicon-upload"></span></a>';
    }
    for (let element of document.querySelectorAll('table tbody tr:not(.problemlist-subheader) a')){
        element.setAttribute("target", "_blank");
    }
}());
