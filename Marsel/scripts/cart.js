
var checkoutTable = document.querySelector('.productTable');
onLoad();
var inCart = JSON.parse(localStorage.getItem('insideCart'));

removeItems();
updateSummary();


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
        quantity.innerHTML = '<button type="button" class="decrease">-</button> <input type="text" placeholder="" min="1" value ='+inCart[i].quantity+' class="quantity_tb"> <button type="button" class="increase">+</button>';
        totalPrice.innerHTML = (inCart[i].quantity * itemPrice).toFixed(2) + "$";
        remove.innerHTML ='<input type="image" class="remove_btn" src="trashicon.png">'; 
        
 }
}
var increaseButtons = document.querySelectorAll('.increase');
var decreaseButtons = document.querySelectorAll('.decrease');
for ( let i = 0; i<increaseButtons.length;i++){
    increaseButtons[i].addEventListener('click', function(){
            var td = increaseButtons[i].parentNode;
            var tr = td.parentNode;
            var name = tr.cells[0].innerHTML;
            var itemPrice = parseFloat(tr.cells[1].innerHTML.substring(0,tr.cells[1].innerHTML.length));
        for (let i = 0; i <inCart.length;i++){
            if (inCart[i].name == name){
                inCart[i].quantity++;
                tr.cells[2].querySelector('.quantity_tb').value = inCart[i].quantity;
                tr.cells[3].innerHTML = (inCart[i].quantity * itemPrice).toFixed(2) + "$";
                localStorage.setItem('insideCart', JSON.stringify(inCart));
                updateSummary();
            }
        }
        
    });
     decreaseButtons[i].addEventListener('click',function(){
            var td = increaseButtons[i].parentNode;
            var tr = td.parentNode;
            var name = tr.cells[0].innerHTML;
            var itemPrice = parseFloat(tr.cells[1].innerHTML.substring(0,tr.cells[1].innerHTML.length));
        for (let i = 0; i <inCart.length;i++){
            if (inCart[i].name == name){
                if (inCart[i].quantity>1){
                inCart[i].quantity--;
                tr.cells[2].querySelector('.quantity_tb').value = inCart[i].quantity;
                tr.cells[3].innerHTML = (inCart[i].quantity * itemPrice).toFixed(2) + "$";
                localStorage.setItem('insideCart', JSON.stringify(inCart));}
                updateSummary();
            }
        }
        
    });
    
}

function removeItems(){
checkoutTable = document.querySelector('.productTable');
var removeButtons = document.querySelectorAll('.remove_btn');
for ( let i = 0; i<removeButtons.length;i++){
    removeButtons[i].addEventListener('click', function(){
        var td = removeButtons[i].parentNode;
        var tr = td.parentNode;
        var name = tr.cells[0].innerHTML;
        tr.parentNode.removeChild(tr);
        for (let j = inCart.length-1;j>=0;j--){
            if ( inCart[j].name == name){
                inCart.splice(j,1);
                localStorage.setItem('insideCart', JSON.stringify(inCart));
                updateSummary();
            }
        }
       
    });  
}
}

function updateSummary(){
var cartSummary = document.querySelector('#rightDiv');
var content = cartSummary.querySelectorAll('p');
var totalprice = 0;
if (inCart[0] == undefined){
    content[0].innerHTML = "Total before tax: $";
    content[1].innerHTML = "QST: $";
    content[2].innerHTML = "GST: $";
    content[3].innerHTML = "Total: $";
}
else{
    for ( let i = 0; i<inCart.length;i++){
        var quant = inCart[i].quantity;
        var price = parseFloat(inCart[i].price.substring(1));
        totalprice = totalprice + quant*price;
    }
    content[0].innerHTML = "Total before tax: " + totalprice.toFixed(2) + "$";
    content[1].innerHTML = "QST: "+ (0.1*totalprice).toFixed(2)+ "$";
    content[2].innerHTML = "GST: " + (0.05*totalprice).toFixed(2) + "$";
    content[3].innerHTML = "Total: " + (0.1*totalprice+0.05*totalprice+totalprice).toFixed(2) + "$";
}}

