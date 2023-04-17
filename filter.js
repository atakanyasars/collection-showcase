const data = [
    {
      id: 1,
      name: " Brooch Shining Rhinestone",
      img: "https://m.media-amazon.com/images/I/61uut7Eia0L._AC_SX679_.jpg",
      price: 74,
      cat: "",
    },
    {
      id: 11,
      name: "Emibele Spinner Rings",
      img: "https://m.media-amazon.com/images/I/61l8moCgdCL._AC_SL1500_.jpg",
      price: 74,
      cat: "Daily",
    },
    {
      id: 2,
      name: "Madam&Matmazel Silver Ring",
      img: "https://m.media-amazon.com/images/I/51plepI-7ZL._AC_SL1500_.jpg",
      price: 40,
      cat: "Sport",
    },
    {
      id: 3,
      name: "Ipek Silver Ring",
      img: "https://m.media-amazon.com/images/I/51xJ7urvzcL._AC_SL1200_.jpg",
      price: 200,
      cat: "Luxury",
    },
    {
      id: 4,
      name: "Classic Couple Ring",
      img: "https://m.media-amazon.com/images/I/414G17QQ5HL._AC_SL1500_.jpg",
      price: 16,
      cat: "Sport",
    },
    {
      id: 5,
      name: "Darth Vader Ring",
      img: "https://m.media-amazon.com/images/I/81IxyXiJ8BL._AC_SL1500_.jpg",
      price: 74,
      cat: "Unique",
    },
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices();

  