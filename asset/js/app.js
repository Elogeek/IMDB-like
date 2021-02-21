document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "0";
});

document.getElementById("exit").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "-105vh";
});


// Splide
new Splide( '.splide', {
    cover  : true,
    height : '8rem',
    perPage: 3,
} ).mount();