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
    let table = document.querySelector('.rows')
    items.data.forEach(function(e){
        let elements = `<td>${e.item_name}</td>
                        <td>${e.manufacturer}</td>
                        <td>${e.category}</td>
                        <td>${e.size}</td>
                        <td>${e.unit_price}</td>
                        <td>${e.in_store}</td>`
        table.innerHTML += elements
    })
}

ajax('GET', 'http://localhost:3000/warehouse', displayClothes)