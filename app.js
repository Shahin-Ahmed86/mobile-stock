var addProductBtn = document.getElementById('addProductBtn')
var modal = document.querySelector('.modal')
var closeIcon = document.querySelector('.close-icon')

addProductBtn.addEventListener('click', () => {
    modal.classList.add('active')
})

closeIcon.addEventListener('click', () => {
    modal.classList.remove('active')
})

// Start all Global variable
var allItem = [];

var id = document.getElementById('id')
var productName = document.getElementById('product-name')
var imeNamer = document.getElementById('ime-namer')
var Quantity = document.getElementById('Quantity')
var Price = document.getElementById('Price')
var totalPrice = document.getElementById('total-Price')
var postBtn = document.getElementById('Post-btn');
var productForm = document.getElementById('product-form');


productForm.onsubmit = function (e) {
    event.preventDefault();
    productItem();
    getItemsFromLocal();
    productForm.reset('');
    closeIcon.click('');
}


if (localStorage.getItem('allItem') != null) {
     allItem = JSON.parse(localStorage.getItem('allItem'));
}

const productItem = () =>{
    allItem.push({
        id : id.value,
        productName : productName.value,
        imeNamer : imeNamer.value,
        Quantity : Quantity.value,
        Price : Price.value,
        /* totalPrice : totalPrice.value, */
    })
    
    var productString = JSON.stringify(allItem)
    localStorage.setItem("allItem", productString)
    console.log( productString)
}


//  Start Returning Data on Page form Localstorage

var tableData = document.getElementById('table-data')
const getItemsFromLocal = () => {
    tableData.innerHTML = '';
    allItem.forEach((data, index) => {
        console.log(data.Quantity * data.Price)
    tableData.innerHTML += `
            <tr index = '${index}'>
                <td>${index +1}</td>
                <td>${data.id}</td>
                <td>${data.productName}</td>
                <td>${data.imeNamer}</td>
                <td>${data.Quantity}</td>
                <td>${data.Price}</td>
                <td>${data.Quantity * data.Price}</td>
                
                <td>
                    <button><i class="fa fa-eye"></i></button>
                    <button id="delete-btn"><i class="fa fa-trash"></i></button>
                </td>
            </tr>
    `
    })
}

getItemsFromLocal();