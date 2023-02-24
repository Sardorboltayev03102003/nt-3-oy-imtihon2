let wrapper=document.querySelector(".wrapper");
let images=[
    "./burger-layers/bottom-bread.png",
    "./burger-layers/bottom-bread.png",
]

const cheese=document.getElementById("cheese");
const  meat=document.getElementById("meat");
const  onion=document.getElementById("onion");
const  salad=document.getElementById("salad");
const  tomato=document.getElementById("tomato");
const  pickle=document.getElementById("pickle");
const  bread=document.getElementById("bread");
const  total=document.getElementById("total");
const  clear=document.getElementById("clear");
const  buy=document.getElementById("buy");


 clear.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=2;
 });
 cheese.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+2;

 });
 meat.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+5;
 });
 onion.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+1;
let img1=document.createElement("div");
img1.classList.add("img1");
 });
 salad.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+1;
 });
 tomato.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+2;
 });
 pickle.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+3;
 });
 bread.addEventListener( "click",(e)=>{
e.preventDefault();
total.textContent=+total.textContent+2;
 img = document.createElement("img");

img.setAttribute('src','');

document.getElementById("surprise").appendChild(img);
});
 buy.addEventListener( "click",(e)=>{
e.preventDefault();
 alert(`buyutrtmangiz qabul qilindi.Sizni navbatingiz ${Math.floor(Math.random()*(35-10+1)+10)}`);
 });
