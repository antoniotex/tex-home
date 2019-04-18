var divLogo = document.getElementsByClassName('imageSelect');
var logo = document.getElementsByClassName('logo-select');

console.log(logo)

divLogo[0].addEventListener('click', function (){
    console.log('entrei');
    logo[0].classList.add("hide-logo");
    logo[0].classList.remove("logo");
    console.log(logo[0].classList)
})

divLogo[1].addEventListener('click', function (){
    console.log('entrei');
    logo[1].classList.add("hide-logo");
    logo[1].classList.remove("logo");
    console.log(logo[1].classList)
})

divLogo[2].addEventListener('click', function (){
    console.log('entrei');
    logo[2].classList.add("hide-logo");
    logo[2].classList.remove("logo");
    console.log(logo[2].classList)
})