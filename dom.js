var remove = document.getElementsByClassName("removeitem");
for (var i = 0; i < remove.length; i++) {
  var button = remove[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
  });
}

var remove = document.getElementsByClassName("removeall");
for (var i = 0; i < remove.length; i++) {
  var button = remove[i];
  button.addEventListener("click", function (event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
  });
}
function updateTotal() {
  var cartContainer = document.getElementsByClassName("shopprice");

  console.log(cartContainer);
  var total = 0;
  for (var i = 0; i < cartContainer.length; i++) {
    var price = cartContainer[i];
    var priceElement = price.innerText;
    var newPrice = priceElement.replace("$", "");
    var quantity = document.getElementById("quantity").valueAsNumber;
    total = total + newPrice * quantity;
    console.log(total);
  }
}
