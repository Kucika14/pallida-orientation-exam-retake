'use strict'

function ajax(method, url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
        callback( JSON.parse(xhr.responseText) )
    };
    xhr.send();
}

let displayClothes = (items) => {
    console.log(items)
    let columns = document.querySelector('.type')
    items.data.forEach(function(e){
        let rows = document.createElement('li')
        columns.appendChild(rows)
        rows.innerHTML = e.item_name
        
    })
}

ajax('GET', 'http://localhost:3000/warehouse', displayClothes)