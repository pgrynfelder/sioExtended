(function(){
    'use strict';
    
    for (let element of document.querySelectorAll('table tbody tr td a')){
        element.innerHTML = element.innerHTML.replace(/^zadanie\s+/gi, "");
    }
    for (let element of document.querySelectorAll('select#id_problem_instance_id option')){
        element.innerHTML = element.innerHTML.replace(/^zadanie\s+/gi, "");
    }
}());

