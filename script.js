const orderButton = document.getElementById("orderButton");
const orderBurger = document.getElementById("burger");
const orderFries = document.getElementById("fries");
const orderDrinks = document.getElementById("drinks");
let orderId=document.getElementById("orderId");
const orderNum = document.getElementById("orderNumber");
let foodImage = document.getElementById("foodImage");
let reset=document.getElementById("reset");

const burgerSrc =
  "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60";

const friesSrc="https://images.unsplash.com/photo-1576107232684-1279f390859f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnJpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";
const drinksSrc="https://images.unsplash.com/photo-1437418747212-8d9709afab22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHJpbmt8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60";





async function orderFood() {
  orderButton.disabled = true;

  if (orderBurger.checked) {
    orderFries.disabled=true;
    orderDrinks.disabled=true;
    orderBurger.disabled=true;
    await promise(burgerSrc);
  }else if(orderDrinks.checked){
    orderFries.disabled=true;
    orderDrinks.disabled=true;
    orderBurger.disabled=true;
    await promise(drinksSrc);
  }else if(orderFries.checked){
    orderFries.disabled=true;
    orderDrinks.disabled=true;
    orderBurger.disabled=true;
    await promise(friesSrc);
  }else if(!orderBurger.checked || !orderDrinks.checked || !orderFries.checked){
    orderButton.disabled=false;
    orderId.style.display="block";
    orderNum.innerText="Please select any food items."
  }
}

async function promise(imageSrc) {
  const orderPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 10);
  });

  orderPromise.then(() => {
    console.log(imageSrc);
    foodImage.style.display = "block";
    foodImage.src = imageSrc;
    const orderNumber = Math.floor(Math.random() * 1000) + 1;
    orderId.style.display="block";
    orderNum.textContent = orderNumber;
  });
}


orderButton.addEventListener("click", orderFood);
reset.addEventListener("click",()=>{
    orderButton.disabled=false;
    orderFries.disabled=false;
    orderDrinks.disabled=false;
    orderBurger.disabled=false;
    orderFries.checked=false;
    orderDrinks.checked=false;
    orderBurger.checked=false;
    orderId.style.display="none";
    foodImage.style.display="none";
});
