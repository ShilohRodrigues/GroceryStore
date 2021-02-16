/*eslint-env browser*/

var product = document.querySelectorAll('.item');
var modalbg = document.querySelector('.modalBackground');
var closebtn = document.querySelector('.modalCloseButton');
for (var i=0;i<product.length;i++){
product[i].addEventListener('click', function () {
    modalbg.classList.add('modalActive');
});
}
closebtn.addEventListener('click', function () {
    modalbg.classList.remove('modalActive');
})
