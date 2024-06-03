let myCartitemMainContainer = document.querySelector(".main-container");

let myCardContainer = document.querySelector(".card-container");
let myCountitem = document.querySelector(".countitemCart");


let basket = JSON.parse(localStorage.getItem("product"));

const calculatebasketlength = () => {
  myCountitem.innerHTML = basket.length;
};
calculatebasketlength();

const cartItemsOnCartPage = () => {
  if (basket.length !== 0) {
    let cartItemsString = ""; // Initialize an empty string to hold the HTML

    basket.forEach((element) => {
      cartItemsString += `
          <div class="main-container">
            <div class="card-container">
              <img src="${element.img}" alt="">
              <p class="title">${element.title}</p>
              <p class="description">${element.description}</p>
              <p class="price">Price:$${element.price}</p>
              <button class="remove"  data-id="${element.id}">Remove Item</button>
            </div>
          </div>
        `;
    });

    myCartitemMainContainer.innerHTML = cartItemsString; // Set the built string as innerHTML
  }
};

cartItemsOnCartPage();

let myRemoveBtn = document.querySelectorAll(".remove");
// console.log(myRemoveBtn.innerHTML);

let RemoveFromCart = (id) => {
    basket = basket.filter((x) => x.id != id);
    localStorage.setItem("product", JSON.stringify(basket));
    cartItemsOnCartPage();
    calculatebasketlength();
    window.location.reload();
  };
  
  
  myRemoveBtn.forEach((button) => {
    
    button.addEventListener("click", () => {
      console.log('removed');
      const id = button.dataset.id;
      RemoveFromCart(id);
      
  
  });
});
let myBill = document.querySelector(".bill");

let CalculateBill = () => {
  let totalAmount = 0;
  basket.forEach((item) => {
    totalAmount += item.price; // Use quantity instead of item
  });

  // Update the bill display element (assuming myBill is the element)
  myBill.innerHTML = `Total Bill: $${totalAmount.toFixed(2)}  `; 
};

CalculateBill();
