(function(){
    'use strict';
    
    
    
    let url = document.location.href;
    if (url[url.length - 1] != "/"){
        url += "/";
    }
    for (let element of document.querySelectorAll('table tbody tr:not(.problemlist-subheader)')){
        let n = element.children[2].children[0].id.replace("limits_", "");
        element.innerHTML += '<td style="text-align: right;"><a href="' + url + '../submit/?select=' + n + '">⇪</a></td>';
    }
    for (let element of document.querySelectorAll('table thead tr')){
        element.innerHTML += '<th></th>';
    }
    for (let element of document.querySelectorAll('table tbody tr td[colspan="4"]')){
        element.setAttribute('colspan', "5");
    }
}());
