(function(){
    'use strict';
    
    let url = new URL(window.location.href);
    let n = url.searchParams.get("select");
    for (let element of document.querySelectorAll('select#id_problem_instance_id')){
        element.value = n;
    }
    
    for (let element of document.querySelectorAll('select#id_problem_instance_id option')){
        element.innerHTML = element.innerHTML.replace(/^(zadanie\s+)*/gi, "");
    }
}());
