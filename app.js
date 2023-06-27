const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products=[
{
id: 1,
title: "Core i5,4 gig Ram,500 SSD",
price: 100,
colors:[
{
code: "black",
img: "images/hp laptop.png",
},
{
code: "blue",
img: "images/hpblue.png",
},
],
},
{
id: 2,
title: "Cre i5,4 gig Ram,320 HDD",
price: 80,
colors:[
{
code: "black",
img: "images/lenovo laptop.png",
},
{
code: "green",
img: "images/lenovogreen.png",
},
],
},
{
id: 3,
title: "Dual Core,2 gig Ram,320HDD",
price: 70,
colors:[
{
code: "blue",
img: "images/acer laptop.png",
},
{
code: "blue",
img: "images/acer laptop.png",
},
],
},
{
id: 4,
title: "Dual Core,2 gig Ram,200HDD",
price: 40,
colors:[
{
code: "black",
img: "images/samsung laptop.png",
},
{
code: "blue",
img: "images/samsungblue.png",
},
],
},
{
id: 5,
title: "Core i7,8 gig Ram, 1TB",
price: 150,
colors:[
{
code: "white",
img: "images/hp2.png",
},
{
code: "black",
img: "images/hpblack.png",
},
],
},
];
let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
menuItems.forEach((item, index) => {
item.addEventListener("click", () => {
//change the current slide
wrapper.style.transform = `translatex(${-100 * index}vw)`;
//change the choosen product
choosenProduct = products[index]
//change text of currentProduct
currentProductTitle.textContent = choosenProduct.title;
currentProductPrice.textContent = "$" + choosenProduct.price;
currentProductImg.src = choosenProduct.colors[0].img;
//assing new colors
currentProductColors.forEach((color, index) => {
color.style.backgroundColor = choosenProduct.colors[index].code;
});
});
});
currentProductColors.forEach((color,index)=>{
color.addEventListener("click", ()=>{
currentProductImg.src = choosenProduct.colors[index].img
});
});
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click",()=>{
payment.style.display="flex"
})
close.addEventListener("click",()=>{
payment.style.display="none"
})

