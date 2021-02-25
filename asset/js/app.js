document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "0";
});

document.getElementById("exit").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "-105vh";
});


// Splide
const splides = document.getElementsByClassName('splide');
for (let spl of splides) {
    new Splide( spl, {
        cover  : true,
        height : '20%',
        perPage: 3,
    } ).mount();
}
