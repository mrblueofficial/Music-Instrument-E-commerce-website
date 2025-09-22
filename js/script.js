const products = [
  {
    name: "Guitar",
    price: 70.00,
    currency: "R",
    image: "img/t shirts/roock.webp",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Saxophone",
    price: 80.00,
    currency: "R",
    image: "img/t shirts/saxo.jpg.webp",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["S", "M", "XL"],
  },
  {
    name: "Djembe",
    price: 80.00,
    currency: "R",
    image: "img/t shirts/jembe.jpg.webp",
    type: "sale",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S"],
  },
  {
    name: "Mini Piano",
    price: 55.00,
    currency: "R",
    image: "img/t shirts/piano.jpg",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["M", "L"],
  },
  {
    name: "Jembe",
    price: 92.9,
    currency: "R",
    image: "img/t shirts/jembe.jpg.webp",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "S", "M"],
  },
  {
    name: "Guitar",
    price: 92.9,
    currency: "R",
    image: "img/t shirts/guitarr.jpeg",
    type: "best",
    category: "tshirts",
    availability: "outOfStock",
    size: ["L", "XL"],
  },
  {
    name: "Ochestra",
    price: 78.9,
    currency: "R",
    image: "img/t shirts/ochestra.gif",
    type: "new",
    category: "tshirts",
    availability: "inStock",
    size: ["M"],
  },
  {
    name: "Vintage Piano",
    price: 78.9,
    currency: "R",
    image: "img/t shirts/pianoo.jpg.webp",
    type: "sale",
    category: "tshirts",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "Mic",
    price: 78.9,
    currency: "R",
    image: "img/t shirts/mic.webp",
    type: "best",
    category: "tshirts",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "Saxophone",
    price: 78.9,
    currency: "R",
    image: "img/t shirts/saxo.jpg.webp",
    type: "new",
    category: "shorts",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Electric Drums",
    price: 133,
    currency: "R",
    image: "img/t shirts/edrums.jpg",
    type: "sale",
    category: "hoodies",
    availability: "outOfStock",
    size: ["S", "M", "L"],
  },
  {
    name: "CDJ 3000",
    price: 133,
    currency: "R",
    image: "img/t shirts/cdj.png.webp",
    type: "best",
    category: "hoodies",
    availability: "inStock",
    size: ["L", "XL"],
  },
  {
    name: "Drums",
    price: 133,
    currency: "R",
    image: "img/t shirts/drums.png",
    type: "new",
    category: "hoodies",
    availability: "inStock",
    size: ["M", "L"],
  },
  {
    name: "Headsets",
    price: 133,
    currency: "R",
    image: "img/t shirts/headsets.jpg.avif",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Cables",
    price: 133,
    currency: "R",
    image: "img/t shirts/cables.jpg",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Vocal Booth",
    price: 100,
    currency: "R",
    image: "img/t shirts/vocalbooth.jpg",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["S", "M"],
  },
  {
    name: "Speakers",
    price: 100,
    currency: "R",
    image: "img/t shirts/speaker.jpg",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["M"],
  },
  {
    name: "Piano Stand",
    price: 100,
    currency: "R",
    image: "img/t shirts/pianostand.jpg.webp",
    type: "new",
    category: "pants",
    availability: "inStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Merch",
    price: 100,
    currency: "R",
    image: "img/t shirts/merch.jpg",
    type: "sale",
    category: "pants",
    availability: "outOfStock",
    size: ["S", "L"],
  },
  {
    name: "Evidence Pants Cyan",
    price: 100,
    currency: "R",
    image: "img/t shirts/pants-cyan.png",
    type: "best",
    category: "pants",
    availability: "inStock",
    size: ["XS", "M"],
  },
  {
    name: "Soundproof sponges",
    price: 123,
    currency: "R",
    image: "img/t shirts/soundproof.jpg",
    type: "new",
    category: "hoodies",
    availability: "outOfStock",
    size: ["M", "L", "XL"],
  },
  {
    name: "Xylophone",
    price: 123,
    currency: "R",
    image: "img/t shirts/xylo.jpg.webp",
    type: "sale",
    category: "hoodies",
    availability: "inStock",
    size: ["XS", "S", "M"],
  },
];

if (document.body.id === "index-page") {
  // Function to render products
  function renderProducts(products) {
    const productContainer = document.querySelector(".row");
    productContainer.innerHTML = "";

    // Limit the number of products to 4
    const limitedProducts = products.slice(0, 4);

    limitedProducts.forEach((product) => {
      const productHTML = `
            <a style="text-decoration: none; color: inherit" href="./Shop.html">
                <div class="col card-home" data-type="${product.type}">
        <div class="card no-border">
          <span class="badge bg-secondary position-absolute top-0 start-0 m-2">${
            product.type === "new"
              ? "New"
              : product.type === "sale"
              ? "Sale"
              : "Best"
          }</span>
          <img src="${product.image}" class="card-img-top img-bg" alt="${
        product.name
      }" />
          <div class="card-body text-center">
            <h5 class="card-title">${product.name}</h5>
           <p>${product.currency}${product.price}</p>
          </div>
        </div>
      </div>
            </a>

  
    `;
      productContainer.innerHTML += productHTML;
    });
  }

  // Filter products by type
  function filterProducts(type) {
    const filteredProducts = type
      ? products.filter((product) => product.type === type)
      : products;
    renderProducts(filteredProducts);
  }

  // Event listeners for filter buttons
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const type = e.target.dataset.type;
      filterProducts(type);
    });
  });

  // Render all products initially
  renderProducts(products);

  document.addEventListener("DOMContentLoaded", function () {
    const newsletterForm = document.querySelector(".newsletter form");

    newsletterForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const email = emailInput.value;

      if (email) {
        alert(`Thank you for subscribing with ${email}!`);
        emailInput.value = "";
      } else {
        alert("Please enter a valid email address.");
      }
    });
  });
}

if (document.body.id === "about-page") {
  //ABOUT US INSTA PICS SELECTION //
  document.querySelectorAll(".overlay").forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
      const urls = [
        "https://www.instagram.com/p/C1kDgudsUAk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C1hA7Kdo93c/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C1ZU8JSM6sk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/CqOBxgMo4Wk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/C60-1Aws5YI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        "https://www.instagram.com/p/CkSsgd2o6i6/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      ];
      window.open(urls[index], "_blank");
    });
  });
}
if (document.body.id === "contact-page") {
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.querySelector("form");

    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const nameInput = contactForm.querySelector("#name");
      const emailInput = contactForm.querySelector("#email");
      const phoneInput = contactForm.querySelector("#phone");
      const messageInput = contactForm.querySelector("#message");

      const name = nameInput.value;
      const email = emailInput.value;
      const phone = phoneInput.value;
      const message = messageInput.value;

      if (name && email && phone && message) {
        alert(
          `Thank you for contacting us, ${name}! We will respond to your message soon.`
        );
        nameInput.value = "";
        emailInput.value = "";
        phoneInput.value = "";
        messageInput.value = "";
      } else {
        alert("Please fill out all fields.");
      }
      window.location.href = "./index.html";
    });
  });
}
