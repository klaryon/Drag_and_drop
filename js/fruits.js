const draggables = document.querySelectorAll('.draggable');

var cartArray = [];

const calcTotal = () =>  {
    let totalAmount = 0;
    
    for (let item in cartArray) {

    }
}

const addItemToShoppingCart = (ev) =>


function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}