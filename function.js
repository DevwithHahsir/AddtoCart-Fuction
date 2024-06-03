let myBuyBtn = document.querySelectorAll(".buyBtn");
// console.log(myBuyBtn.innerHTML);

let basket = JSON.parse(localStorage.getItem("product")) || [];

const AddToCart = (id, img, title, description,price) => {
  //   console.log(id);
  //   console.log(img);
  //   console.log(title);
  //   console.log(description);

  basket.push({
    id: id,
    img: img,
    title: title,
    description: description,
    price:price
  });

  localStorage.setItem("product", JSON.stringify(basket));
  calculatebasketlength();
};

const buyBtns = document.querySelectorAll(".buyBtn"); // Select all buttons

buyBtns.forEach((button) => {
  button.addEventListener("click", () => {
    const currentElementIndex = button.dataset.index; // Assuming you have data-index attribute
    const currentElement = products[currentElementIndex];

    AddToCart(
      currentElement.id,
      currentElement.img,
      currentElement.title,
      currentElement.description,
      currentElement.price
    );
  });
});

let myCountitem = document.querySelector(".countitemCart");

const calculatebasketlength = () => {
  myCountitem.innerHTML = basket.length;
};
calculatebasketlength();
