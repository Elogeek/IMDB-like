document.getElementById("menu").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "0";
});

document.getElementById("exit").addEventListener("click", ()=>{
    document.getElementById("container").style.top = "-105vh";
});


//splide
new Splide( '.splide' ).mount();
document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '.splide' ).mount();
} );

new Splide( '.splide' ).mount();
let elms = document.getElementsByClassName( 'splide' );
for ( let i = 0, len = elms.length; i < len; i++ ) {
    new Splide( elms[ i ] ).mount();
}