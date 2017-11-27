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
    let table = document.querySelector('table');
    table.innerHTML = `<thead>
                        <th>ITEM NAME</th>
                        <th>manufacturer</th> 
                        <th>category</th>
                        <th>size</th>
                        <th>unit price</th>
                        <th>in store</th>
                       </thead>`;
    items.data.forEach(function(e){
        let elements = `<tr>
                         <td>${e.item_name}</td>
                         <td>${e.manufacturer}</td>
                         <td>${e.category}</td>
                         <td>${e.size}</td>
                         <td>${e.unit_price}</td>
                         <td>${e.in_store}</td>
                        </tr>`;
        table.innerHTML += elements;
    })
}

ajax('GET', 'http://localhost:3000/warehouse', displayClothes);


let button = document.querySelector('button');

button.addEventListener('click', function(){
    let item = document.querySelector('#item');
    let size = document.querySelector('#size');
    let quantity = document.querySelector('#quantity');
    ajax('GET', `http://localhost:3000/price-check?item=${item.value}&size=${size.value}&quantity=${quantity.value}`, getOrder);
})

let getOrder = () => {

};

