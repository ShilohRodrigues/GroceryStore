
var checkoutTable = document.querySelector('.productTable');
onLoad();

function onLoad(){
   var inCart = JSON.parse(localStorage.getItem('insideCart'));
    for (let i = 0; i<inCart.length;i++){
        var itemPrice = parseFloat(inCart[i].price.substring(1));
        var row = checkoutTable.insertRow();
        var name = row.insertCell(0);
        var price = row.insertCell(1);
        var quantity = row.insertCell(2);
        var totalPrice = row.insertCell(3); 
        var remove = row.insertCell(4);
        name.innerHTML = inCart[i].name;
        price.innerHTML = itemPrice + '$';
        quantity.innerHTML = '<input type="number" placeholder="" min="1" value ='+inCart[i].quantity+' class="quantity_tb">'
        totalPrice.innerHTML = (inCart[i].quantity * itemPrice) + "$";
        remove.innerHTML ='<input type="image" class="remove_btn" src="trashicon.png">';
        
 }
}
    
var removeButtons = document.querySelectorAll('.remove_btn');
console.log(removeButtons);
var inCart = JSON.parse(localStorage.getItem('insideCart'));
var inCartCopy = [].concat(inCart);
for ( let i = 0; i<removeButtons.length;i++){
    removeButtons[i].addEventListener('click', function(){
       var name = checkoutTable.rows[i+2].cells[0].innerHTML;
        for (let j = 0;j<inCart.length;j++){
            if ( inCart[j].name == name){
                inCartCopy.splice[j,1];
            }
        }
        console.log(inCartCopy);
        localStorage.setItem('insideCart',JSON.stringify(inCart));
        checkoutTable.deleteRow[i+2];
    });
}
