//to search based on the letters taken from the input.

const searchInput = document.getElementById("search-input");
const products = document.querySelectorAll(".product-item");
const buttons = document.querySelectorAll(".filter");
// console.log(products);
// console.log(buttons);

const searchHandler = (event) => {
  const searchValue = event.target.value.toLowerCase().trim();
  //   console.log(searchValue);
  products.forEach((product) => {
    const productName = product.children[1].innerText.toLowerCase();
    // console.log(productName);
    if (productName.includes(searchValue)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
searchInput.addEventListener("keyup", searchHandler);

///////////////////////////////////////////////////////////////////////////////////////
const changeClass = (filter) => {
  buttons.forEach((button) => {
    if (button.dataset.filter === filter) {
      button.classList.add("selected");
    } else {
      button.classList.remove("selected");
    }
  });
};

const filterHandler = (event) => {
  const filter = event.target.dataset.filter;
  console.log(filter);
  changeClass(filter);

  products.forEach((product) => {
    let category = product.dataset.category;
    // console.log(category);
    if (filter === "all") {
      product.style.display = "block";
    } else if (category === filter) {
      product.style.display = "block";

      //   console.log(product.children[1].innerText);
    } else {
      product.style.display = "none";
    }
  });
};
buttons.forEach((button) => {
  button.addEventListener("click", filterHandler);
});

//////////////////////////////////////////////////////////////////////////////

const searchPriceButton = document.querySelector(".search-price-button");
// const itemPrices = document.querySelectorAll("span");

const searchPriceHandler = (event) => {
  const searchPriceInput = +event.target.parentElement.children[0].value;
  //   console.log(searchPriceInput);

  products.forEach((product) => {
    const productprice = +product.children[2].innerText.replace("$", "");
    // console.log(productprice);
    if (!searchPriceInput) {
      product.style.display = "block";
    } else if (searchPriceInput >= productprice) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
};
searchPriceButton.addEventListener("click", searchPriceHandler);

///////////////////////////////////////////////////////////////////////////////
