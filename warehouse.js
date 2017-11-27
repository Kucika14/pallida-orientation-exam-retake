'use strict'

function ajax(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
        callback( JSON.parse(xhr.responseText) )
    };
    xhr.send();
}

let displayClothes = (clothes) => {
    console.log(clothes)
    // let columns = document.querySelector('.pipe')
    // animals.data.forEach(function(e){
    //     let checkBox = `<>`
    //     let rows = document.createElement('li')
    //     columns.appendChild(rows)
    //     rows.innerHTML = checkBox + e.pet_name
        
    // })
}

ajax('GET', 'http://localhost:3000/warehouse', displayClothes)