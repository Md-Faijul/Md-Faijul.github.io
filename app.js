const manu = [
  {
    id: 1,
    title: "Apple",
    cetagory: "fruit",
    price: "180 taka",
    kg: "1kg",
    img: "./image/apple.jpg",
  },
  {
    id: 2,
    title: "Banana",
    cetagory: "fruit",
    price: "40 taka",
    kg: "4 pice",
    img: "./image/Banana.jpg",
  },
  {
    id: 3,
    title: "Jackfruit",
    cetagory: "fruit",
    price: "250 taka",
    kg: "1 pice",
    img: "./image/Jackfruit.jpeg",
  },
  {
    id: 4,
    title: "Mango",
    cetagory: "fruit",
    price: "90 taka",
    kg: "1kg",
    img: "./image/Mango.jpg",
  },
  {
    id: 5,
    title: "Litchi",
    cetagory: "fruit",
    price: "250 taka",
    kg: "100 pice",
    img: "./image/Litchi.jpg",
  },
  {
    id: 6,
    title: "Hog Plum",
    cetagory: "fruit",
    price: "60 taka",
    kg: "1kg",
    img: "./image/HogPlum.png",
  },
  {
    id: 7,
    title: "Papaya",
    cetagory: "fruit",
    price: "100 taka",
    kg: "1 pice",
    img: "./image/Papaya.jpg",
  },
  {
    id: 8,
    title: "Coconut",
    cetagory: "fruit",
    price: "100 taka",
    kg: "1 pice",
    img: "./image/Coconut.jpg",
  },
  {
    id: 9,
    title: "Custard Apple",
    cetagory: "fruit",
    price: "120 taka",
    kg: "1kg",
    img: "./image/CustardApple.jpg",
  },
  {
    id: 10,
    title: "Guava",
    cetagory: "fruit",
    price: "70 taka",
    kg: "1kg",
    img: "./image/Guava1.jpg",
  },
  {
    id: 11,
    title: "Star Apple",
    cetagory: "fruit",
    price: "130 taka",
    kg: "1kg",
    img: "./image/StarApple.jpg",
  },
  {
    id: 12,
    title: "Black Berry",
    cetagory: "fruit",
    price: "500 taka",
    kg: "500g",
    img: "./image/BlackBerry.jpg",
  },
  {
    id: 13,
    title: "Orange",
    cetagory: "fruit",
    price: "160 taka",
    kg: "1kg",
    img: "./image/Orange.jpg",
  },
  {
    id: 14,
    title: "Grape Fruit",
    cetagory: "fruit",
    price: "50 taka",
    kg: "1 pice",
    img: "./image/GrapeFruit.jpg",
  },
  {
    id: 15,
    title: "Indian Apple",
    cetagory: "fruit",
    price: "180 taka",
    kg: "1kg",
    img: "./image/IndianApple.jpg",
  },
  {
    id: 16,
    title: "Wood Apple",
    cetagory: "fruit",
    price: "25 taka",
    kg: "1 pice",
    img: "./image/WoodApple.jpeg",
  },
];
const landing = [
  {
    id: "s1",
    title: "Eat vagitable for health",
    text: "you can get all category from your home just order",
    discri:
      "Vegetables are a rich source of f olate, a B vitamin that helps your body make new red blood cells.",
    img: "./image/vegetables.jpg",
  },
  {
    id: "s2",
    title: "Eat fruit for health",
    text: "you can get all category from your home just order",
    discri:
      "Fruits are an excellent source of essential vitamins and minerals, and they are high in fiber. ",
    img: "./image/fruit.jpg",
  },
  {
    id: "s3",
    title: "Eat Dry-fruit for health",
    text: "you can get all category from your home just order",
    discri:
      "Nuts are great source of protein and iron especially if you are a vegetarian. Dry Fruits are ",
    img: "./image/dry-fruit.jpg",
  },
];

// landing page auto skiping
// selector
const title = document.querySelector(".title");
const text = document.querySelector(".text");
const healthy = document.querySelector(".healthy");
const image = document.querySelector(".image");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = landing[currentItem];
  image.src = item.img;
  title.textContent = item.title;
  text.textContent = item.text;
  healthy.textContent = item.discri;
});

function showbg() {
  const item = landing[currentItem];
  image.src = item.img;
  title.textContent = item.title;
  text.textContent = item.text;
  healthy.textContent = item.discri;
}
let full = setInterval(function () {
  const skip = document.querySelector(".shap");
  currentItem++;

  if (currentItem > landing.length - 1) {
    currentItem = 0;
  }
  function pass() {
    skip.classList.toggle("active");
  }

  showbg(currentItem);
}, 3000);
const skip = document.querySelector(".shap");
window.addEventListener("DOMContentLoaded", function () {
  let skiping = landing.map(function (item) {
    return `
    <span class="${item.id}"></span>`;
  });
  skiping = skiping.join("");
  skip.innerHTML = skiping;
});

// product page
const itemn = document.querySelector(".produc-page");
window.addEventListener("DOMContentLoaded", function () {
  let displayn = manu.map(function (item) {
    // console.log(item);
    return `
    

      <div class="item">
        <div class="item-img">
          <img src=${item.img} alt="menu item" class="photo" />
        </div>
        <div class="item-title">
          <h1 class="title-item">Fresh ${item.title} for healthy</h1>
        </div>
        <div class="item-kg">
          <h4 class="kg">${item.kg}</h4>
        </div>
        <div class="item-money">
          <h5 class="price">${item.price}</h5>
        </div>
        <div class="btn">Add to card</div>
      </div>
    `;
  });
  displayn = displayn.join("");

  itemn.innerHTML = displayn;
});
let count = 0;
let teke = setInterval(function () {
  let item = landing;

  count++;
  if (count > landing.length) {
    count = 0;
  }
}, 1000);

// const s1 = document.querySelector(".s1");

// s1.addEventListener("click", function () {
//   s1.style.backgroung = "red";
// });

// sign in btn working there ===============

const openbtn = document.querySelector(".longin-box");
const closebtn = document.querySelector(".btn");
const modalshow = document.querySelector(".email");

openbtn.addEventListener("click", function () {
  modalshow.classList.add("showemail");
});

closebtn.addEventListener("click", function () {
  modalshow.classList.remove("showemail");
});
