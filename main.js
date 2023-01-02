var btn = document.getElementsByClassName('product-removal')
for (var i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', function(e) {
    // e.currentTarget.parentNode.removeproduct();
    e.currentTarget.parentNode.remove();
    //this.closest('.single').remove() // in modern browsers in complex dom structure
    //this.parentNode.remove(); //this refers to the current target element 
    //e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  }, false);
}
var btnvar1=document.getElementById('btnh1');
function  Toggle1(){
  if (btnvar1.style.color=="red"){
    btnvar1.style.color="grey"
  }
  else {
    btnvar1.style.color="red"
  }
}
var btnvar2=document.getElementById('btnh2');
function  Toggle2(){
  if (btnvar2.style.color=="red"){
    btnvar2.style.color="grey"
  }
  else {
    btnvar2.style.color="red"
  }}
  function update(){
    addevents()
    updatetotal()
  }
function addevents(){
  let cartquantity_input=document.querySelectorAll('.cart-quantity');
  cartquantity_input.forEach(input=>{
    input.addEventListener("change",handle_changeItemQuantity);
  })
}
//=============HANDLE EVENTS FUNCTIONS==========
 function handle_changeItemQuantity(){
  if (isNaN(this.value)||this.value< 1){
    this.value=1;
  }
 this.value=math.floor(this.value); 
 update();
 }
//============ my work=====
function updatetotal (e){
  var total=0;
  var  chopcar=document.getElementsByClassName("shopping-cart");
  var prdct=chopcar.getElementsByClassName("product");
  var prodprice=prdct.getElementsByClassName("product-price");
  var price=parseFloat(prodprice.innerText.replace('$',''));
  var quantityelement=document.getElementsByClassName("cart-quantity");
  var val=quantityelement.value;
  total+=price*val;
document.getElementsByClassName("product-line-price").innerText=total
}
console.log(e);
