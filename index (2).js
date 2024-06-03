const products = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1716635312355-e727dfde0705?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8",
      title: "Wall Paper",
      description: "beautifull WallPaper in Pink Color",
      price: 10,
    },
    {
      id: 2,
      img: "https://plus.unsplash.com/premium_photo-1708336795870-2dc53f5926aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
      title: "Denim Jacket",
      description: "Available in all Sizes",
      price: 20,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1716681864605-e3ac39e9aea4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D",
  
      title: "macBook Pro",
      description: "M3 2020",
      price: 15,
    },
  ];
  
  // Accessing elements within the card
  
  const myContainer = document.querySelector(".container");
  const card = document.querySelector(".card");
  const productImage = card.querySelectorAll("img");
  const productTitle = card.querySelector("h3");
  const productDescription = card.querySelector("p");
  
  string = "";
  
  products.forEach((element, index) => {
      string = string + `
      <div class="container">
        <div class="card">
          <img src="${element.img}" alt="Product Image">
          <h3>${element.title}</h3>
          <p>${element.description}</p>
          <button class="buyBtn" data-index="${index}">Price: $${element.price}</button>
        </div>
      </div>
      `;
    });
    
  myContainer.innerHTML = string;