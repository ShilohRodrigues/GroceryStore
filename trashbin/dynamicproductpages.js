onLoad();

var quantity;
var addToCart = document.querySelector('.addCart');
var inCart = []


addToCart.addEventListener('click',function(){
    
    if (localStorage.getItem('quantity') == undefined){
        localStorage.setItem('quantity',0);
    }
    quantity = parseInt(document.querySelector('.Quantity').value);
    localStorage.setItem('quantity', parseInt(localStorage.getItem('quantity'))+quantity)
    let product = JSON.parse(localStorage.getItem('currentModal'));
        product.quantity = localStorage.getItem('quantity');
    localStorage.removeItem('quantity');
    
    
    if (localStorage.getItem('insideCart')!= null){
        inCart = JSON.parse(localStorage.getItem('insideCart'));
    }
    var counter = 0;
    for ( let i =0;i<inCart.length;i++){
        if (product.name == inCart[i].name){
            inCart[i].quantity = parseInt(inCart[i].quantity)+ parseInt(product.quantity);
            counter = counter +1;
        }
    }
    if (counter == 0 ){
        inCart.push(product);
    }
    if (inCart[0] == undefined){
        inCart.push(product);
    }
    localStorage.setItem('insideCart', JSON.stringify(inCart));
 });

function onLoad(){
    let presentedProduct = localStorage.getItem('currentModal');
    presentedProduct = JSON.parse(presentedProduct);
    document.querySelector('.productName').innerHTML = presentedProduct.name;
    document.querySelector('.productPrice').innerHTML = presentedProduct.price;
    document.querySelector('.productImgProp').src = presentedProduct.image;
    document.querySelector('.itemDescription').innerHTML = presentedProduct.description;
}


